import { useAuth0 } from "@auth0/auth0-react";
import useFormContext from "../../hooks/useFormContext.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";

function displayOutput(response) {
  console.log(response);
}

const Profile = () => {
  const { user } = useAuth0();
  const { data } = useFormContext();
  const [inputText, setInputText] = useState("");
  const [apiResponse, setResponse] = useState([]);
  const [flag, setFlag] = useState(1);
  const [recipes, setRecipes] = useState([]);

  const userProfile = { email: user.email };

  useEffect(() => {
    postProfile();
  }, []);

  const getProfile = () => {
    axios
      .post(
        "https://wngaesr097.execute-api.us-east-1.amazonaws.com/prod/profile",
        {
          profile: {
            email: user.email,
          },

          headers: {
            "Content-Type": "application/json",
            endpoint: "get/profile",
          },
        }
      )
      .then((response) => {
        setResponse(response);
        displayOutput(response);
      })
      .catch((err) => console.log(err));
  };

  const saveRecipe = (name) => {
    axios
      .post(
        "https://wngaesr097.execute-api.us-east-1.amazonaws.com/prod/recipe",
        {
          profile: {
            email: user.email,
          },
          params: {
            name: name,
          },
          headers: {
            "Content-Type": "application/json",
            endpoint: "post/recipe",
          },
        }
      )
      .then((response) => {
        window.alert("Saved Recipe Successfully");
      })
      .catch((err) => console.log(err));
    console.log(name);
  };

  const postProfile = () => {
    const storedValue = localStorage.getItem("myKey");
    const retrievedObject = JSON.parse(storedValue);
    // console.log(retrievedObject);
    const dietValue = retrievedObject.DietChoice.map((choice) => choice.value);
    axios
      .post(
        "https://wngaesr097.execute-api.us-east-1.amazonaws.com/prod/profile",
        {
          profile: {
            email: user.email,
          },
          params: {
            diet: dietValue,
            dislikedIngredient: retrievedObject.DislikeIngredients,
          },
          headers: {
            "Content-Type": "application/json",
            endpoint: "post/profile",
          },
        }
      )
      .then((response) => {
        setResponse(response);
        displayOutput(response);
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const getRecipe = () => {
    var input = inputText.split(",");
    input = input.map((item) => item.trim());

    axios
      .post(
        "https://wngaesr097.execute-api.us-east-1.amazonaws.com/prod/recipe",
        {
          profile: {
            email: user.email,
          },
          params: {
            likeIngredient: input,
          },
          headers: {
            "Content-Type": "application/json",
            endpoint: "get/recipe",
          },
        }
      )
      .then((response) => {
        setRecipes(response.data);
        displayOutput(JSON.parse(response));
      })
      .catch((err) => console.log(err));
    console.log(flag);
    setFlag(flag + 1);
  };

  const DisplayData = recipes.map((info) => {
    const ingredientsString = info.ingredients.replace(/'/g, '"');
    console.log(ingredientsString);
    const decodedIngredients = JSON.parse(ingredientsString);
    

    const stepsString = info.steps.replace(/'/g, '"');
    const decodedSteps = JSON.parse(stepsString);
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.n_ingredients}</td>
        <td>{info.food_type}</td>
        <td>{info.minutes}</td>

        {/* <td>{info.tag}</td> */}
        <td>
          {/* {info.nutrition && (
            <ul>
              {(info.nutrition).map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
          )} */}
          <p>Calories: {info.nutrition.calories}</p>
          <p>Fat(pdv): {info.nutrition["fat(pdv)"]}</p>
          <p>Sugar(pdv): {info.nutrition["sugar(pdv)"]}</p>
          <p>Sodium(pdv): {info.nutrition["sodium(pdv)"]}</p>
          <p>Protein(pdv): {info.nutrition["protein(pdv)"]}</p>
          <p>Saturated fat(pdv): {info.nutrition["saturated fat(pdv)"]}</p>
          <p>Carbohydrates(pdv): {info.nutrition["carbohydrates(pdv)"]}</p>
        </td>
        <td>
          <ul>
            {decodedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </td>
        <td>
          <ol>
            {decodedSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </td>
        <td>
          <button className="saveButton" onClick={() => saveRecipe(info.name)}>
            save Recipe
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="content">
      {user?.picture && <img src={user.picture} className="picture" />}
      <h2>{user?.name}</h2>
      <h4>{user?.email}</h4>

      {/* <ul>
        {Object.keys(user).map((objKey, i) => (
          <li key={i}>
            {objKey}:{user[objKey]}
          </li>
        ))}
      </ul> */}
      {/* console.log({data.CuisineChoice}) */}

      <div className="container">
        <p>Enter your favorite ingredients(Separated by Commas):</p>
        <input
          className="ingredient_input"
          type="text"
          placeholder="at least one ingredient"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>

      <button className="postButton" onClick={() => getRecipe()}>
        Generate Recipe
      </button>

      {flag != 1 && (
        <button className="postButton" onClick={() => postProfile()}>
          post profile
        </button>
      )}

      <button className="postButton" onClick={() => getProfile()}>
        get Profile
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>n_ingredients</th>
            <th>Food Type</th>
            <th>Minutes</th>
            <th>Nutrition</th>
            <th>Ingredients</th>
            <th>Steps</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData}
          {/* {recipes.map((recipe, index) => (
          <tr key={index}>
            <td>{recipe.name}</td>
            <td>{recipe.food_type}</td>
            <td>{recipe.minutes}</td>
            <td>{recipe.nutrition}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.steps}</td>
          </tr>
        ))} */}
        </tbody>
      </table>

      {/* <ul>
        {Object.keys(apiResponse).map((objKey, i) => (
          <li key={i}>
            {objKey}:{apiResponse[objKey]}
          </li>
        ))}
      </ul>  */}
    </div>
  );
};

export default Profile;
