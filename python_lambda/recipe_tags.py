def find_similar_recipes(df, user_ingredients):
    # Find similar recipes and apply tags
    similar = df.ingredients.apply(lambda x: len(set(x.split()) & set(user_ingredients)))
    df['similarity'] = similar

    df['tags'] = ''

    # Replace 'nutrition' with the actual column name in your DynamoDB table
    df['tags'] += df['nutrition'].apply(lambda x: ' low calorie ' if int(eval(x)[0]) <= 250 else '')
    df['tags'] += df['nutrition'].apply(lambda x: ' high fat ' if int(eval(x)[1]) >= 30 else '')
    df['tags'] += df['nutrition'].apply(lambda x: ' diabetic friendly ' if int(eval(x)[2]) <= 5 else '')
    df['tags'] += df['nutrition'].apply(lambda x: ' heart friendly ' if int(eval(x)[5]) <= 5 else '')
    df['tags'] += df['nutrition'].apply(lambda x: ' low sodium ' if int(eval(x)[3]) <= 5 else '')
    df['tags'] += df['nutrition'].apply(lambda x: ' high protein ' if int(eval(x)[4]) >= 30 else '')
    df['tags'] += df['nutrition'].apply(lambda x: ' keto ' if int(eval(x)[1]) >= 5 and int(eval(x)[6]) <= 3 else '')
    df['tags'] += df['nutrition'].apply(lambda x: ' low carb ' if int(eval(x)[6]) <= 5  else '')

    df['tags'] = df['tags'].str.rstrip(', ')

    return df
