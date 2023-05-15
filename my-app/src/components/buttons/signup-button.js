import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './page.css'

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/get_recipe",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <button className="buttonP" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};