import useFormContext from "../../hooks/useFormContext";
import "./question.css";

const Cuisine = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="content">
      {/* <label htmlFor="cuisine">Cuisine</label> */}
      {/* {data.CuisineChoice} */}
      
      <h1>What types of cuisine do you enjoy eating the most?</h1>
      
      <ul>
        <li>
          <button
            className="Button"
            id="CuisineChoice"
            name="CuisineChoice"
            value="All"
            onClick={handleChange}
          >
            All
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="CuisineChoice"
            name="CuisineChoice"
            value="African"
            onClick={handleChange}
          >
            African
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="CuisineChoice"
            name="CuisineChoice"
            value="Asian"
            onClick={handleChange}
          >
            Asian
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="CuisineChoice"
            name="CuisineChoice"
            value="Caribbean"
            onClick={handleChange}
          >
            Caribbean
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="CuisineChoice"
            name="CuisineChoice"
            value="Central American"
            onClick={handleChange}
          >
            Central American
          </button>
        </li>
        
        <li>
          <button
            className="Button"
            id="CuisineChoice"
            name="CuisineChoice"
            value="Europe"
            onClick={handleChange}
          >
            Europe
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="CuisineChoice"
            name="CuisineChoice"
            value="Middle Eastern"
            onClick={handleChange}
          >
            Middle Eastern
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="CuisineChoice"
            name="CuisineChoice"
            value="North American"
            onClick={handleChange}
          >
            North American
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="CuisineChoice"
            name="CuisineChoice"
            value="Oceanic"
            onClick={handleChange}
          >
            Oceanic
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="CuisineChoice"
            name="CuisineChoice"
            value="South American"
            onClick={handleChange}
          >
            South American
          </button>
        </li>
      </ul>
    </div>
  );

  return content;
};
export default Cuisine;
