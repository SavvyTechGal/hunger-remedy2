import boto3


def get_user_preferences(email):
    
    # Retrieve user preferences from the DynamoDB table
    table = boto3.resource('dynamodb').Table('my_users_table')
    response = table.get_item(Key={'email': email})
    user_preferences = response.get('Item', {}).get('preferences', {})
    
    return user_preferences
