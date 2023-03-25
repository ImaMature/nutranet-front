import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

export default function SignUp() {
  const [inputs, setInputs] = useState([]);

  const inputBoxes = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const loginSubmit = () => {
    setInputs({ ...inputs });
    console.log(inputs);
    Axios.post("http://localhost:8088/Auth/SignUp", inputs)
      .then((response) => {
        console.log(response.data.result);
        if (response.data.result === true) {
          alert(response.data.msg);
          window.location.href = "/";
        } else {
          alert(response.data.msg);
        }
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <div className="hero is-fullheight" style={{ backgroundColor: "#485fc7" }}>
      <div className="hero-body is-justify-content-center is-align-items-center">
        <div
          className="columns is-flex is-flex-direction-column box"
          style={{ minWidth: 391 + "px" }}
        >
          <div className="column" style={{ textAlign: "center" }}>
            <Link to="/">
              <img
                src={logo}
                style={{
                  marginBottom: 0.2 + "px",
                }}
                width="200"
                height="50"
                alt=""
              ></img>
            </Link>
          </div>
          <div className="column">
            <input
              className="input is-link"
              type="text"
              name="mid"
              placeholder="아이디"
              required
              onChange={inputBoxes}
            ></input>
          </div>
          <div className="column">
            <input
              className="input is-link"
              type="password"
              name="mpw"
              placeholder="비밀번호"
              required
              onChange={inputBoxes}
            ></input>
          </div>
          <div className="column">
            <input
              className="input is-link"
              type="email"
              name="memail"
              placeholder="이메일"
              required
              onChange={inputBoxes}
            ></input>
          </div>
          <div className="column">
            <input
              className="input is-link"
              type="text"
              name="maddress"
              placeholder="주소"
              required
              onChange={inputBoxes}
            ></input>
          </div>
          <div className="column">
            <button
              className="button is-link is-fullwidth"
              onClick={loginSubmit}
            >
              가입하기
            </button>
          </div>
          <div className="has-text-centered">
            <p className="is-size-7">
              {" "}
              이미 가입하신 계정이 있으신가요?{" "}
              <Link to="/Login" className="has-text-link">
                로그인하기
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
