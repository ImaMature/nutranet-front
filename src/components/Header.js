import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

const Header = () => {
  const [isActive, setisActive] = React.useState(false);
  return (
    <nav
      className="navbar is-link has-centered-logo-alt"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand is-hidden-desktop">
        <Link className="navbar-item" to="/">
          <img src={logo} width="130" height="28" alt=""></img>
        </Link>
        <Link
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
        style={{ marginRight: 0 + "em" }}
      >
        <div className="navbar-start">
          <Link className="navbar-item" to="/Login">
            {" "}
            로그인{" "}
          </Link>
          <Link className="navbar-item" to="/SignUp">
            {" "}
            회원가입{" "}
          </Link>
        </div>
        <div className="navbar-brand is-hidden-touch">
          <Link className="navbar-item" to="/">
            <img src={logo} width="130" height="28" alt=""></img>
          </Link>
        </div>
        <div className="navbar-end">
          <Link className="navbar-item"> 검색 </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
