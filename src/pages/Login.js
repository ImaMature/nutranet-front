import React from "react";
function Login() {
  return (
    <div>
      <h1>로그인 페이지</h1>
      <div>
        <labe>아이디</labe>
        <input type="text" name="mid"></input>
      </div>
      <div>
        <labe>비밀번호</labe>
        <input type="password" name="mpw"></input>
      </div>
    </div>
  );
}

export default Login;
