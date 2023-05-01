import { useAuth0 } from "@auth0/auth0-react";
import "../../App.css";
import Slider from "../slider/Slider";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Profile from "./Profile"
import Map from "../map/map";

const Auth = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <div className="navbar">
          <Navbar />
        </div>
        <Slider />
        <Profile />

        <Map />
      </>
    )
  );
};

export default Auth;
