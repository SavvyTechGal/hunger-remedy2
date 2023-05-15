def label_nutrition(nutrition_values):
    labels = ['calories', 'fat(pdv)', 'sugar(pdv)', 'sodium(pdv)', 'protein(pdv)', 'saturated fat(pdv)', 'carbohydrates(pdv)']
    nutrition_dict = {}

    for label, value in zip(labels, nutrition_values):
        nutrition_dict[label] = value

    return nutrition_dict
