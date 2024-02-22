import React, { useEffect, useState } from "react";

const Home = () => {
  const nickname = JSON.parse(localStorage.getItem("nickname"));

  // const [name, setName] = useState("로그인을 해주세요.");

  // useEffect(() => {
  //   const helloUser = () => {
  //     if (nickname) {
  //       setName(`안녕하세요, ${nickname}님!`);
  //     } else {
  //       setName("로그인을 해주세요.");
  //     }
  //   };
  //   helloUser();
  // }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>

      {/* 로그인 여부에 따라 조건부 렌더링 */}
      {nickname ? <p>안녕하세요, {nickname}님!</p> : <p>로그인을 해주세요.</p>}
    </div>
  );
};

export default Home;
