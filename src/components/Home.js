import React from "react";

function Home(param) {
  console.log(param);
  return (
    <div>
      <div>
        홈화면
        <p>데이터 : {param.data}</p>
      </div>
    </div>
  );
}

export default Home;
