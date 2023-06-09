import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

const Access_Token = "Access_Token";
const Member_Info = "Member_Info";

function Login() {
  const [inputs, setInputs] = useState([]);

  //각각의 input 창에 값 입력 시
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //로그인 버튼 클릭 시
  const onClickLogin = () => {
    setInputs({ ...inputs });
    Axios.post("http://localhost:8088/Auth/Login", inputs)
      .then((result) => {
        if (!result.data.result) {
          alert("로그인에 실패했습니다.");
          return;
        }
        if (result.data.data.token != null) {
          localStorage.setItem("Access_Token", result.data.data.token);
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero is-fullheight" style={{ backgroundColor: "#485fc7" }}>
      <div className="hero-body is-justify-content-center is-align-items-center">
        <div className="columns is-flex is-flex-direction-column box">
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
              onChange={handleChange}
              placeholder="아이디"
            ></input>
          </div>
          <div className="column">
            <input
              className="input is-link"
              type="password"
              name="mpw"
              placeholder="비밀번호"
              onChange={handleChange}
            ></input>
            <Link to="#" className="is-size-7 has-text-link">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <div className="column">
            <button
              className="button is-link is-fullwidth"
              onClick={onClickLogin}
            >
              로그인
            </button>
          </div>
          <div className="has-text-centered">
            <p className="is-size-7">
              {" "}
              계정이 없으신가요?{" "}
              <Link to="/SignUp" className="has-text-link">
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
