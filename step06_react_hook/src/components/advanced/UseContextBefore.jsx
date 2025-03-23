
import React, { useState, useContext, createContext } from 'react';


/*

  - props drilling은 컴포넌트 간에 데이터를 전달할 때, 중간 단계의 컴포넌트를 거쳐서 데이터를 전달하는 것을 말합니다.
  - 유지보수 및 확장성이 떨어지며, 컴포넌트 간의 의존성이 높아지는 문제가 있습니다.
  - Context API를 사용하면 중간 단계의 컴포넌트를 거치지 않고 데이터를 전달할 수 있습니다.
  - Context API는 전역적으로 데이터를 관리할 수 있으며, 중첩된 컴포넌트 간에 데이터를 전달할 수 있습니다.

*/

// UseContextBefore > Parent > Child > GrandChild (Props Drilling)
function Parent({ id , isLogin }) {
  return (
    <>
      <p>Parent : {user.id} , {user.isLogin ? "isLogin" : "isLogout"}</p>
      <Child id={id}  isLogin={isLogin} /> 
    </>
  );
}

// Parent > Child > GrandChild (Props Drilling)
function Child({ id , isLogin }) {
  return (
    <>
      <p>Child : {user.id} , {user.isLogin ? "isLogin" : "isLogout"}</p>
      <GrandChild id={id}  isLogin={isLogin} />
    </>
  );
}

// Child > GrandChild (Props Drilling)
function GrandChild({ id , isLogin }) { 
  return <p>GrandChild : {user.id} , {user.isLogin ? "isLogin" : "isLogout"}</p>
}


function UseContextBefore() {

  const user = { id: 1 , isLogin: true };
  return (
    <>
      <p>UseContextBefore : {user.id} , {user.isLogin ? "isLogin" : "isLogout"}</p>
      <Parent id={user.id}  isLogin={user.isLogin}/> 
    </>
  );
  
}

export default UseContextBefore;