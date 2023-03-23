import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

export default function SignUp() {
  return (
    <div class="hero is-fullheight" style={{ backgroundColor: "#485fc7" }}>
      <div class="hero-body is-justify-content-center is-align-items-center">
        <div
          class="columns is-flex is-flex-direction-column box"
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
          </div>
          <div class="column">
            <input
              class="input is-link"
              type="password"
              placeholder="이메일"
            ></input>
          </div>
          <div class="column">
            <input
              class="input is-link"
              type="password"
              placeholder="주소"
            ></input>
          </div>
          <div class="column">
            <button class="button is-link is-fullwidth" type="submit">
              가입하기
            </button>
          </div>
          <div class="has-text-centered">
            <p class="is-size-7">
              {" "}
              이미 가입하신 계정이 있으신가요?{" "}
              <Link to="/Login" class="has-text-link">
                로그인하기
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
