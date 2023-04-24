import useFormContext from "../../hooks/useFormContext";
import "./question.css";

const Billing = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="content">
      <h1>What kind of diet do you follow?</h1>
      {/* <input
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Jane"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.billFirstName}
                        onChange={handleChange}
                    /> */}
      <ul>
        <li>
          <button
            className="Button"
            id="DietChoice"
            name="DietChoice"
            value="All"
            onClick={handleChange}
          >
            All
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="DietChoice"
            name="DietChoice"
            value="Gluten-Free"
            onClick={handleChange}
          >
            Gluten-Free
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="DietChoice"
            name="DietChoice"
            value="Vegan"
            onClick={handleChange}
          >
            Vegan
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="DietChoice"
            name="DietChoice"
            value="Vegetarian"
            onClick={handleChange}
          >
            Vegetarian
          </button>
        </li>
        <li>
          <button
            className="Button"
            id="DietChoice"
            name="DietChoice"
            value="Dairy-Free"
            onClick={handleChange}
          >
            Dairy-Free
          </button>
        </li>
      </ul>
    </div>
  );

  return content;
};
export default Billing;
