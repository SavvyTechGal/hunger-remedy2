// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route ,useNavigate} from "react-router-dom";
// import React from 'react';
// import "./login.css";
// import Login from './login'
// import Signup from './NotAuth'
// import { useAuth0 } from "@auth0/auth0-react";
// import Auth from "./Auth";


// const HomePage = () => {
//   const navigate = useNavigate();
//   const { isAuthenticated ,logout} = useAuth0();
  

//   const navigateToLogin = () => {
//     // 👇️ navigate to /contacts
//     navigate('/login');
//   };

//   const navigateSignup = () => {
//     // 👇️ navigate to /
//     navigate('/signup');
//   };

  
//     return (
//       !isAuthenticated && (
//         <div className="container">
        

//         <Routes>
//           <Route index element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/profile" element={<Auth />} />
//         </Routes>
        

//         <button onClick={navigateToLogin} className="button">
//             Login
//         </button>
//         <button onClick={navigateSignup} className="button">
//             SignUp
//         </button>
//       </div>
//       )
//     );
//   };
  
//   export default HomePage;

import Form from "../questionForm/Form";
import { FormProvider } from "../../context/FormContext";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../buttons/login-button";
import { SignupButton } from "../buttons/signup-button";
import SignUpPage from "../buttons/signup-page"
import './profile.css'

// () => loginWithRedirect()
const NotAuth = () => {
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="container_page">
       {/* <FormProvider>
        <Form />
        </FormProvider> */}
        <LoginButton />
        <SignUpPage />

        {/* <SignupButton /> */}

        
      </div>
       
        
    )
  );
};

export default NotAuth;