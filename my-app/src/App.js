// import "./App.css";
// import Slider from './components/slider/Slider';
// import styled from "styled-components";
// import { AccountBox } from "./components/accountBox";
// import Navbar from './components/Navbar/Navbar'
// import card from './components/card/card'
// import background_img from './images/background1.jpg'
// import Auth from './components/authentication/auth.jsx'
// import Map from './components/map/map'

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// function App() {
//   return (

//     <div >
//       <div className="navbar">
//         <Navbar />
//       </div>
//       <Slider />

//       {/* <img src= {background_img} className="background_img"></img>
//       <div className="formContainer">
//         <AccountBox />
//       </div> */}

//       <Auth />
//       <div>
//         <Map />
//       </div>

//     </div>

//     // <AppContainer>

//     // </AppContainer>
//   );
// }

// export default App;
import React from "react";
import Auth from "./components/authentication/Auth";
import NotAuth from "./components/authentication/NotAuth";
// question form
import Form from "./components/questionForm/Form";
import { FormProvider } from "./context/FormContext";
import HomePage  from "./components/authentication/HomePage";
import Login from "./components/authentication/login"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    {/* <HomePage /> */}
      <Auth />
      {/* <Login /> */}
      <NotAuth />
    </>
  );
}

export default App;


// export const App =() => {
//   return (
//     <HomePage />
//     // <Routes>
//     //   <Route path="/" element={<HomePage />} />
//     //   <Route path="/login" element={<Login />} />
//     //   ≈
//     //   {/* <Route path="/get_recipes" element={<ProtectedPage />} /> */}
//     //   <Route path="/signup" element={<NotAuth />} />
//     //   {/* <Route path="/callback" element={<CallbackPage />} />
//     //   <Route path="*" element={<NotFoundPage />} /> */}
//     // </Routes>
//   );
// };

// export default App;
