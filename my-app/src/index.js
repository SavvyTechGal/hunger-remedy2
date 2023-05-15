import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import { createRoot } from "react-dom/client";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
// const domain = "dev-uumhqwlzvaul0i3g.us.auth0.com";
// const clientId = "trEaALDCAeOx9SViLoyN8xb4u10fvLh6";



// import reportWebVitals from './reportWebVitals';
// Use a custom history module to access history outside of a component

// const onRedirectCallback = (appState) => {
//   // Use the router's history module to replace the url
//   history.replace(appState?.returnTo || window.location.pathname);
// // };
// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Auth0ProviderWithNavigate>
//         <App />
//       </Auth0ProviderWithNavigate>
//     </BrowserRouter>
//   </React.StrictMode>
//   // document.getElementById('root')
// );

// for local host
// const domain = "dev-uumhqwlzvaul0i3g.us.auth0.com"
// const clientId = "trEaALDCAeOx9SViLoyN8xb4u10fvLh6"

// for AWS
const domain = "dev-uumhqwlzvaul0i3g.us.auth0.com"
const clientId = "X6OnhUbcm5gT4Sc2uBrNlr0MXXrlbFuk"



// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
