import React,{  useState }  from "react";
import Select, { ActionMeta, OnChangeValue, StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import useFormContext from "../../hooks/useFormContext.js";

import "./question.css";

const animatedComponents = makeAnimated();

const option_diet = [
  { value: "Diet:", label: "Diet", color: "#FFC400",isDisabled: true },
  { value: "All", label: "All", color: "#0052CC" },
  { value: "Gluten-Free", label: "Gluten-Free", color: "#5243AA" },
  { value: "Vegan", label: "Vegan", color: "#FF5630" },
  { value: "Vegetarian", label: "Vegetarian", color: "#FF8B00" },
  { value: "Dairy-Free", label: "Dairy-Free", color: "#36B37E" },
];



const option_cuisine = [
  { value: "Cuisine", label: "Cuisine", color: "#00B8D9",isDisabled: true },
  { value: "American", label: "American", color: "#00B8D9" },
  { value: "Chinese", label: "Chinese", color: "#00B8D9" },
  { value: "Caribbean", label: "Caribbean", color: "#00B8D9" },
  { value: "European", label: "European", color: "#00B8D9" },
  { value: "French", label: "French", color: "#00B8D9" },
  { value: "German", label: "German", color: "#00B8D9" },
  { value: "Gujarati", label: "Gujarati", color: "#00B8D9" },
  { value: "Italian", label: "Italian", color: "#00B8D9" },
  { value: "Indian", label: "Indian", color: "#00B8D9" },
  { value: "Japanese", label: "Japanese", color: "#00B8D9" },
  { value: "Korean", label: "Korean", color: "#00B8D9" },
  { value: "Mexican", label: "Mexican", color: "#00B8D9" },
  { value: "Mediterranean", label: "Mediterranean", color: "#00B8D9" },
  { value: "Russian", label: "Russian", color: "#00B8D9" },
  { value: "Spanish", label: "Spanish", color: "#00B8D9" },
  { value: "Thai", label: "Thai", color: "#00B8D9" },
  { value: "Vietnamese", label: "Vietnamese", color: "#00B8D9" },
];






const Question = () => {
  const { data, handleChange} = useFormContext();

  const [selectedDiet, setSelectedDiet] = useState(null);
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  const handleDietChange = (selectedOption) => {
    setSelectedDiet(selectedOption);
    data.DietChoice = selectedDiet;
    console.log(JSON.stringify(data));
  };

  const handleCuisineChange = (selectedOption) => {
    setSelectedCuisine(selectedOption);
    data.CuisineChoice = selectedCuisine;
    console.log(JSON.stringify(data));
  };

  const colorStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = data.color;
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? color
          : isFocused
          ? `${color}80`
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? 'white'
          : color,
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    singleValue: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
  };

  const content = (
    <>

      <div className="question">
      <h3>What kind of diet do you follow?</h3>
        <Select
          options={option_diet}
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
          value={selectedDiet}
          styles={colorStyles}
          name=""
          onChange={handleDietChange}
        />
      </div>

      <div className="question">
      <h3>What types of cuisine do you enjoy eating the most?</h3>
        <Select
          options={option_cuisine}
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
          value={selectedCuisine}
          styles={colorStyles}
          onChange={handleCuisineChange}
        />
      </div>

      <div className="question">
        <h3>Enter ingredients you don't like(Separated By Commas)</h3>

        <input
          type="text"
          id="Ingredients"
          name="Ingredients"
          placeholder="chicken, pepper"
          // pattern="([A-Z])[\w+.]{1,}"
          value={data.Ingredients}
          onChange={handleChange}
        />
      </div>
    </>
  );

  return content;
};
export default Question;
