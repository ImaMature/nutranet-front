import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

function Header() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
        <Link to="/Login">로그인</Link>
      </div>
    </div>
  );
}

export default Header;
