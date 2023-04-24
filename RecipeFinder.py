import csv

# Load the dataset from CSV file
def load_dataset(filename):
    recipes = []
    with open(filename, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            recipes.append(row)
    return recipes

# Get user input for ingredients
user_ingredients = input("Enter ingredients separated by commas: ").split(',')

# Load the dataset
recipes = load_dataset('testdataset.csv')

# Find recipe matches based on ingredient match
recipe_matches = []
for recipe in recipes:
    ingredient_matches = [ingredient for ingredient in user_ingredients if ingredient.lower() in recipe['ingredients'].lower()]
    if len(ingredient_matches) > 0:
        recipe_matches.append(recipe['name'])

# Print out recipe names with ingredient matches
if len(recipe_matches) > 0:
    print("Recipe matches:")
    for i, recipe_name in enumerate(recipe_matches):
        print(f"{i+1}. {recipe_name}")
else:
    print("No recipe matches found.")

#so far the code I've written prompts the user to enter ingredients and it prints out the recipes in the 
# dataset according to the rank match. to test try salt,parsley
