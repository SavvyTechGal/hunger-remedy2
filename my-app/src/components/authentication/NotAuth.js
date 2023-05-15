import Form from "../questionForm/Form";
import { FormProvider } from "../../context/FormContext";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../buttons/login-button";
import { SignupButton } from "../buttons/signup-button";

// () => loginWithRedirect()
const NotAuth = () => {
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <>
       <FormProvider>
        <Form />
        </FormProvider>
        {/* <LoginButton />
        <SignupButton /> */}

        
      </>
       
        
    )
  );
};

export default NotAuth;
