import pandas as pd


def create_or_update_user_entry(table, user_email):
    # Check if the user exists and create a new entry if not
    response = table.get_item(Key={'email': user_email})
    if 'Item' not in response:
        table.put_item(Item={'email': user_email, 'preferences': []})

def read_recipes_table(recipes_table):
    # Read the dataset from DynamoDB
    response = recipes_table.scan()
    items = response['Items']
    df = pd.DataFrame(items)
    return df
