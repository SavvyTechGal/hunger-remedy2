import json
import final_functions as ff

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
        response = ff.post_profile(json_obj)
        return {
            'statusCode': 200,
            'headers': {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
            },
            'body': json.dumps(response)
        }

    if json_obj["headers"]['endpoint'] == 'get/recipe':
        response = ff.get_recipe(json_obj)
        
        return {
            'statusCode': 200,
            'headers': {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
            },
            'body': json.dumps(response)
        }
        
    if json_obj["headers"]['endpoint'] == 'post/recipe':
        response = ff.post_recipe(json_obj)
        
        return {
            'statusCode': 200,
            'headers': {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
            },
            'body': json.dumps({'message': 'Recipe saved successfully'})
        }

    if json_obj["headers"]['endpoint'] == 'get/profile':
        preferences, saved_recipe_details = ff.post_profile(json_obj)

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
        
                        
 
