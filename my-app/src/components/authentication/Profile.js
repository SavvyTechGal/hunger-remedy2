import { useAuth0 } from "@auth0/auth0-react";
import useFormContext from "../../hooks/useFormContext.js";
import React, { useState , useEffect} from "react";
import axios from "axios";
import "./profile.css";

function displayOutput(response) {
    console.log(response)
}

const Profile = () => {
  const { user } = useAuth0();
  const { data } = useFormContext();
  const [inputText, setInputText] = useState("");
  const [apiResponse, setResponse] = useState([]);

  const userProfile = {email: user.email }

  useEffect(() => {
    
    postProfile();
  }, []);



  
  const postProfile = () =>{
    const headers = { 'Content-Type': 'application/json', 'endpoint': 'post/profile' }
    axios
    .post('https://wngaesr097.execute-api.us-east-1.amazonaws.com/prod/profile', userProfile , {headers: headers})
    .then((response) => {setResponse(response);displayOutput(response)} )
    .catch((err) => console.log(err));
  }
  

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const getRecipe = () => {
    const storedValue = localStorage.getItem("myKey");
    const retrievedObject = JSON.parse(storedValue);
    // console.log(JSON.stringify(retrievedObject));
    // console.log(inputText);
    // console.log(retrievedObject)

    const dietValue = retrievedObject.DietChoice.map(choice => choice.value);
    

//     fetch('https://wngaesr097.execute-api.us-east-1.amazonaws.com/prod/recipe', {headers})
//   .then(function(response) {
//     return response.text();
//   })
//   .then(function(text) {
//     console.log('Request successful', text);
//   })
//   .catch(function(error) {
//     console.log('Request failed', error)
//   });

    // axios({   ,{mode: 'cors'}
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //     method: 'get',
    //     url: 'https://wngaesr097.execute-api.us-east-1.amazonaws.com/prod/recipe',
    //     // data: newProduct,
    //     // headers: {'Authorization': 'XXXXXX'}
    //   }).then(apiResponse=>{
    //     //  const products = apiResponse.data
    //     //  response.json(products)

    //     console.log(JSON.stringify(apiResponse))
    //   }).catch((err) => console.log(err));
    //   https://jsonplaceholder.typicode.com/todos

    
    axios
    .get('https://wngaesr097.execute-api.us-east-1.amazonaws.com/prod/recipe', {
        params: {
                diet: JSON.stringify(dietValue),
                dislikedIngredient: JSON.stringify(retrievedObject.DislikeIngredients),
                likeIngredient: JSON.stringify(inputText),
            }
    })
    .then((response) => {setResponse(response);displayOutput(response)} )
    .catch((err) => console.log(err));
  };

  return (
    <div className="content">
      {user?.picture && (
        <img src={user.picture}  className="picture" />
      )}
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
      
      <div className="container" >
        <p>Enter your favorite ingredients(Separated by Commas):</p>
        <input className="ingredient_input" type="text" placeholder="at least one ingredient" value={inputText} onChange={handleInputChange} />
      </div>
      
      <button className="postButton" onClick={() => getRecipe()}>
        Generate Recipe
      </button>

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
