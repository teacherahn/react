
/*

    ✅ 속성(Props)

    - props는 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방법이다.
    - props는 컴포넌트의 속성을 나타내는 객체이며, 컴포넌트를 사용할 때 속성을 설정할 수 있다.
    - props는 컴포넌트의 함수 인자로 전달되며, 객체 형태로 전달된다.
    - props는 변경할 수 없는 읽기 전용 데이터로서, 자식 컴포넌트는 부모 컴포넌트에서 전달된 props를 변경할 수 없다.
    - 단방향 데이터 흐름(unidirectional data flow)을 유지하여 컴포넌트 간 데이터 전달을 보다 안전하게 관리할 수 있다.

*/

import { useState } from "react";


// 일반 props 사용
const PrintData1 = (props) => {
  //console.log(props);  // 함수, 객체, 배열 등 복잡한 데이터도 전달 가능
  //props.nickname = "testUser"; // props로 전달된 값을 직접 수정하려고 하면 에러가 발생한다.
  return <p>nickname = {props.nickname} , email = {props.email}</p>;
}

// 구조 분해 할당 사용
const PrintData2 = ({nickname , email}) => { 
  //nickname = "testUser"; // 구조 분해 할당으로 전달된 값은 수정할 수는 있다. (단, props 자체는 수정 불가)
  return <p>nickname = {nickname} , email = {email}</p>;
}


const PropsEx01 = () => {

  return (
    <>
      <h3>✅ Props 기본 예시</h3>
      <PrintData1 nickname="mockUser1" email="user1@gmail.com"/>
      <PrintData1 nickname="mockUser2" email="user2@gmail.com"/>

      <PrintData2 nickname="mockUser3" email="user3@gmail.com"/>
      <PrintData2 nickname="mockUser4" email="user4@gmail.com"/>
    </>
  );
}

export default PropsEx01;

