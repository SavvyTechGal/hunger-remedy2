import useFormContext from "../../hooks/useFormContext";

const Name = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <>
      <h3>First things first, whose diet are we talking about</h3>
        
      <input
        type="text"
        id="name"
        name="name"
        placeholder="First Name"
        value={data.name}
        onChange={handleChange}
      />
    </>
  );

  return content;
};
export default Name;
