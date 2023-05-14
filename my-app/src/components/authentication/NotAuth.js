import Form from "../questionForm/Form";
import { FormProvider } from "../../context/FormContext";
import { useAuth0 } from "@auth0/auth0-react";

// () => loginWithRedirect()
const NotAuth = () => {
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <>
       <FormProvider>
        <Form />
        </FormProvider>
        
      </>
       
        
    )
  );
};

export default NotAuth;
