import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
function Router() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
}

export default Router;
