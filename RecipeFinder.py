import numpy as np 
import pandas as pd 

df = pd.read_csv('testdataset.csv')

user_allergies = ['peanuts']
user_ingredients = ['cinnamon', 'water', 'pepper']
user_disliked_ingredients = ['milk']

# Clearing up nutrition info
df[['calories','total fat (PDV)','sugar (PDV)','sodium (PDV)','protein (PDV)','saturated fat (PDV)','carbohydrates (PDV)']] = df.nutrition.str.split(",", expand=True) 
df['calories'] =  df['calories'].apply(lambda x: x.replace('[','')) 
df['carbohydrates (PDV)'] =  df['carbohydrates (PDV)'].apply(lambda x: x.replace(']',''))
df[['calories','total fat (PDV)','sugar (PDV)','sodium (PDV)','protein (PDV)','saturated fat (PDV)','carbohydrates (PDV)']] = df[['calories','total fat (PDV)','sugar (PDV)','sodium (PDV)','protein (PDV)','saturated fat (PDV)','carbohydrates (PDV)']].astype('float')

# Creating a new column with food types (vegetarian or non-vegetarian)
df['food types'] = np.nan
df['food types'] = df['food types'].astype('str')
for i in df.index:
    if('chicken' in df['ingredients'][i] or 'beef' in df['ingredients'][i] or 'pork' in df['ingredients'][i] or 'turkey' in df['ingredients'][i] or 'fish' in df['ingredients'][i] or 'seafood' in df['ingredients'][i] or 'bacon' in df['ingredients'][i] or 'ham' in df['ingredients'][i] or 'lamb' in df['ingredients'][i] or 'sausage' in df['ingredients'][i] or 'venison' in df['ingredients'][i]):
        df.loc[i, 'food types'] = 'Non-veg'
    else:
        df.loc[i, 'food types'] = 'Veg'

# Encoding food types as dummy variables
types = pd.get_dummies(df['food types'])
df1 = pd.concat([df,types], axis=1)

# Filtering out ingredients based on user's allergies, preferred ingredients and disliked ingredients
for allergy in user_allergies:
    df1 = df1[~df1['ingredients'].str.contains(allergy, case=False)]

for ingredient in user_ingredients:
    df1 = df1[df1['ingredients'].str.contains(ingredient, case=False)]

for ingredient in user_disliked_ingredients:
    df1 = df1[~df1['ingredients'].str.contains(ingredient, case=False)]

# Finding similar recipes based on common ingredients
similar = df1.ingredients.apply(lambda x: len(set(x.split()) & set(user_ingredients)) / len(set(x.split())))
df1['similarity'] = similar

# Sorting recipes by similarity and displaying top 10 matches
recipes = df1.sort_values(by='similarity', ascending=False)[:10].reset_index(drop=True)
print(recipes)



#hard to do cuisine, not much info in the dataset  
#veg and non-veg done
#dislikes taken into account
#allergies done 

