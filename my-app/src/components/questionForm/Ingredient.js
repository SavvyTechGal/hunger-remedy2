import useFormContext from "../../hooks/useFormContext";

const Ingredient = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <>
      <h1>Enter ingredients(Separated By Commas)</h1>
        
      <input
        type="text"
        id="Ingredients"
        name="Ingredients"
        placeholder="chicken, pepper"
        // pattern="([A-Z])[\w+.]{1,}"
        value={data.Ingredients}
        onChange={handleChange}
      />
    </>
  );

  return content;
};
export default Ingredient;
