
import React, { useState, useContext, createContext } from 'react';

/*

  ✅ React Advanced Hook (useContext)

  - useContext는 Context 객체를 사용하여 전역 값에 접근하는 Hook이다.
  - useContext는 Context 객체를 받아 그 값을 반환한다.
  - useContext는 Context.Provider로 감싼 컴포넌트에서만 값을 읽을 수 있다.
  - useContext는 Context 객체를 사용하여 값을 전역으로 사용할 수 있다.
  - createContext() : Context 객체를 생성한다.
  - createContext()로 생성한 Context 객체의 Provider 컴포넌트로 값을 감싼다.
  - createContext()로 생성한 Context 객체의 Consumer 컴포넌트로 값을 읽는다.
  - useContext() : Context 객체를 사용하여 값을 읽는다.
  - useContext()로 Context 객체를 사용할 때는 Context 객체의 값을 변경할 수 없고 읽기만 할 수 있다.
  
*/

const UserInfoContext = createContext(); // createContext() : Context 객체를 생성한다. , ~~ Context 네이밍

function Parent() {
  const user = useContext(UserInfoContext);  // useContext() : Context 객체를 사용하여 값을 읽는다.
  return (
    <>
      <p>Parent : {user.id} , {user.isLogin ? "isLogin" : "isLogout"}</p>
    </>
  );
}

function Child() {
  const child = useContext(UserInfoContext);
  return (
    <>
      <p>Child : {child.id} , {user.isLogin ? "isLogin" : "isLogout"}</p>
    </>
  );
}

function GrandChild() {
  const user = useContext(UserInfoContext);
  return <p>GrandChild : {user.id} , {user.isLogin ? "isLogin" : "isLogout"}</p>
}


function Invalid() {
  const user = useContext(UserInfoContext);
  return <p>Invalid : {user.id} , {user.isLogin ? "isLogin" : "isLogout"}</p>
}


const UseContextEx = () => {
  const user = { id: "1" , isLogin: true }; // 전역으로 사용할 값
  return (
     <>
      <h3>✅useContext basic</h3>
      {/* 아래의 컴포넌트에서 모두 같은 값을 사용한다. */}
      <UserInfoContext.Provider value={user}>
        <p>UseContextEx : {user.id} , {user.isLogin ? "isLogin" : "isLogout"}</p>
        <Parent />
        <Child />
        <GrandChild />
      </UserInfoContext.Provider>
      {/*<Invalid />*/}
      </>
  );
}

export default UseContextEx;