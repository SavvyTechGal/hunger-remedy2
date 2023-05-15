import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain = "dev-uumhqwlzvaul0i3g.us.auth0.com";
  const clientId = "trEaALDCAeOx9SViLoyN8xb4u10fvLh6";
  const redirectUri = "process.env.REACT_APP_AUTH0_CALLBACK_URL";

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

//   if (!(domain && clientId && redirectUri)) {
//     return null;
//   }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
     
      onRedirectCallback={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};
