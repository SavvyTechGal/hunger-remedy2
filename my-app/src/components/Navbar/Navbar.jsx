import React from "react";
// import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useAuth0 } from "@auth0/auth0-react";

function removeKey(){
  window.localStorage.removeItem('myKey');
}

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name-first">Hunger</div>
        <div className="n-name-last">Remedy</div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                <div className="n-name-home">Home</div>
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                onClick={() => {removeKey();logout()}}
              >
                <div className="n-name-list">Logout</div>
              </Link>
            </li>

            <li>
              <Link to="contact" spy={true} smooth={true}>
                <div className="n-name-list">Contact Us</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
