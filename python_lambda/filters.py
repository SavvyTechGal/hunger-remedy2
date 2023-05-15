def apply_filters(df, user_preferences, preferred_ingredients):
    # Apply filters based on user preferences and preferred ingredients
    user_allergies = user_preferences.get('allergies', [])
    user_disliked_ingredients = user_preferences.get('disliked_ingredients', [])
    user_ingredients = preferred_ingredients

    df1 = df.copy()

    for allergy in user_allergies:
        df1 = df1[~df1['ingredients'].str.contains(allergy, case=False)]

    for ingredient in user_ingredients:
        df1 = df1[df1['ingredients'].str.contains(ingredient, case=False)]

    for ingredient in user_disliked_ingredients:
        df1 = df1[~df1['ingredients'].str.contains(ingredient, case=False)]

    return df1
