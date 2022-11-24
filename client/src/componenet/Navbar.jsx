import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
// import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar nav-list">
      <div className="container">
        <div className="logo">
         <h1 className="blogh"> BLOG ONE</h1>
         <p className="blogp">Create own world</p>
        </div>
        <div className="links">
          <Link className="link nav-items " to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link nav-items" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link nav-items" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link nav-items" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link nav-items" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link nav-items" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span className="username">{currentUser?.username}</span>
          {currentUser ? (
            <span className="login" onClick={logout}>Logout</span>
          ) : (
            <Link  className="link login" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
