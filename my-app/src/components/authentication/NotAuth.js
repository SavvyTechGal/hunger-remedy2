import Form from "../questionForm/Form";
import { FormProvider } from "../../context/FormContext";
import { useAuth0 } from "@auth0/auth0-react";
function say (){
  console.log("test submit")
}
// () => loginWithRedirect()
const NotAuth = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <>
       <FormProvider>
        <Form />
        </FormProvider>
        <button
          type="submit"
          onClick={() => loginWithRedirect()}
        >
          Submit
        </button>
      
      </>
       
        
    )
  );
};

export default NotAuth;
