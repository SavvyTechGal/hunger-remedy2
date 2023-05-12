import useFormContext from "../../hooks/useFormContext";

const Name = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <>
      <h3>First things first, whose diet are we talking about</h3>
        
      <input
        type="text"
        id="Name"
        name="Name"
        placeholder="First Name"
        value={data.Name}
        onChange={handleChange}
      />
    </>
  );

  return content;
};
export default Name;
