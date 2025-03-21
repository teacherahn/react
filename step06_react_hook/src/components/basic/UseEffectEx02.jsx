import { useEffect, useState } from "react";

const UseEffectEx02 = () => {
  const [user, setUser] = useState(null);
  const [reload, setReload] = useState(false); // 강제로 다시 불러오기 위한 상태

  // (잘못된 방식) useEffect 없이 API 호출 : 무한호출
  
  // console.log("컴포넌트가 렌더링될 때마다 호출");
  // fetch("https://jsonplaceholder.typicode.com/users/1")
  //   .then((response) => response.json())
  //   .then((data) => setUser(data));
  //주석 처리된 코드: 실제로 실행하면 무한 호출로 브라우저 멈춤

 
  // useEffect(() => {
  //   console.log("1번만 호출후 의존성 배열이 변경될 때마다 호출");
  //   fetch("https://jsonplaceholder.typicode.com/users/1")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUser(data)
  //   });

  //   return () => {
  //     console.log("return : cleanup");
  //     setUser(null);
  //   };
  // }, [reload]);  // reload 값이 변경될 때마다 호출

  return (
    <div>
      <h3>🌐 useEffect로 API 호출 관리</h3>
      {user && 
        <div>
          <p>이름: {user.name}</p>
          <p>이메일: {user.email}</p>
          <p>연락처 : {user.phone}</p>
        </div>
      }
      <button onClick={() => setReload(!reload)}>다시 불러오기</button>
    </div>
  );
};

export default UseEffectEx02;