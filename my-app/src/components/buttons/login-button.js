import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './page.css'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
  
    localStorage.setItem("myFlag", "false");
    await loginWithRedirect({
      appState: {
        returnTo: "/get_recipe",
      },
    });
  };

  return (
    <button className="button" onClick={handleLogin}>
      Log In
    </button>
  );
};