import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

function Login() {
  return (
    <div class="hero is-fullheight" style={{ backgroundColor: "#485fc7" }}>
      <div class="hero-body is-justify-content-center is-align-items-center">
        <div class="columns is-flex is-flex-direction-column box">
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
          <div class="column">
            <input
              class="input is-link"
              type="text"
              placeholder="아이디"
            ></input>
          </div>
          <div class="column">
            <input
              class="input is-link"
              type="password"
              placeholder="비밀번호"
            ></input>
            <Link to="#" class="is-size-7 has-text-link">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <div class="column">
            <button class="button is-link is-fullwidth" type="submit">
              로그인
            </button>
          </div>
          <div class="has-text-centered">
            <p class="is-size-7">
              {" "}
              계정이 없으신가요?{" "}
              <Link to="/SignUp" class="has-text-link">
                가입하기
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
