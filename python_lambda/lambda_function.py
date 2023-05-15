import boto3
import pandas as pd
import json
import ast
from user_preferences import get_user_preferences
from dynamodb_operations import create_or_update_user_entry, read_recipes_table
from filters import apply_filters
from recipe_tags import find_similar_recipes
from response_builder import build_response
from label_nutrition import label_nutrition


def lambda_handler(event, context):
    json_obj = json.loads(event['body'])

    # json_obj = event
    # return {
    #     'statusCode': 200,
    #     'headers': {
    #         "Access-Control-Allow-Headers": "*",
    #         "Access-Control-Allow-Origin": "*",
    #     },
    #     'body': json.dumps(json_obj)
    # }
    
    if json_obj["headers"]['endpoint'] == 'post/profile':
        # Handle signup/login endpoint
        profile = json_obj['profile']
        email = profile['email']
        preferences = json_obj['params']
        
        # Create or update user entry in DynamoDB
        table = boto3.resource('dynamodb').Table('my_users_table')
        create_or_update_user_entry(table, email)
        
        # # Update user preferences in DynamoDB
        table.update_item(
            Key={'email': email},
            UpdateExpression='SET preferences = :data',
            ExpressionAttributeValues={':data': preferences}
        )

        return {
            'statusCode': 200,
            'headers': {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
            },
            'body': json.dumps(json_obj)
        }

    elif json_obj["headers"]['endpoint'] == 'get/recipe':
        # Handle profile page endpoint
        
        user_ingredients = json_obj["params"]['likeIngredient']
        user_email = json_obj["profile"]['email']
        user_preferences = get_user_preferences(user_email)
        
        # # Read the dataset from DynamoDB
        recipes_table = boto3.resource('dynamodb').Table('recipe_hunger')
        df = read_recipes_table(recipes_table)
        
        # # Apply filters based on user preferences
        df1 = apply_filters(df, user_preferences, user_ingredients)
        
         # Find similar recipes and apply tags
        df1 = find_similar_recipes(df1, user_ingredients)
        
         # Convert the nutrition values from string to list
        df1['nutrition'] = df1['nutrition'].apply(lambda x: ast.literal_eval(x))
        
        # Label the nutrition values
        df1['nutrition'] = df1['nutrition'].apply(label_nutrition)
        
        
        # # Build the response
        response_body = build_response(df1)
        # print(response_body[0]['steps'])
        # print(response_body['ingredients'])
        
        return {
            'statusCode': 200,
            'headers': {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
            },
            'body': json.dumps(response_body)
            #'body': json.dumps(json.loads(response_body))
            #'body': json.loads(response_body)
        }
        
    elif json_obj["headers"]['endpoint'] == 'post/recipe':
        # Handle save recipe endpoint
        user_email = json_obj["profile"]['email']
        recipe_name = json_obj['params']['name']
        
        # Update user entry in DynamoDB to add the saved recipe
        table = boto3.resource('dynamodb').Table('my_users_table')
        response = table.update_item(
            Key={'email': user_email},
            UpdateExpression='ADD saved_recipes :recipe',
            ExpressionAttributeValues={':recipe': {recipe_name}}
        )
        
        return {
            'statusCode': 200,
            'headers': {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
            },
            'body': json.dumps({'message': 'Recipe saved successfully'})
        }

    elif json_obj["headers"]['endpoint'] == 'get/profile':
        # Handle get profile endpoint
       
        email = json_obj["profile"]['email']

        # Read user entry from DynamoDB
        table = boto3.resource('dynamodb').Table('my_users_table')
        response = table.get_item(Key={'email': email})

        if 'Item' in response:
            item = response['Item']
            preferences = item.get('preferences', {})
            saved_recipes = item.get('saved_recipes', [])

            # Retrieve the details of the saved recipes from recipe_hunger table
            recipes_table = boto3.resource('dynamodb').Table('recipe_hunger')
            saved_recipe_details = []
            for recipe_name in saved_recipes:
                response = recipes_table.get_item(Key={'name': recipe_name})
                if 'Item' in response:
                    saved_recipe_details.append(response['Item'])

            return {
                'statusCode': 200,
                'headers': {
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Origin": "*",
                },
                'body': json.dumps({'preferences': preferences, 'saved_recipes': saved_recipe_details})
                # 'body': json.dumps({'message': 'get profile'})
            }
        else:
            return {
                'statusCode': 404,
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': json.dumps({'message': 'User not found'})
            }
        
                        
 
