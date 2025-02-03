
/*

  [ 상태(State)와 속성(Props) 관리 예시 ]
  예제 1: 기본 상태와 Props 사용하기
  - React에서는 state를 통해 컴포넌트 내부의 데이터 변화를 관리하고 
    props를 통해 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달한다.

*/

import React, { useState } from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Greeting name="여기서 인사말을 받습니다." />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
//Greeting 컴포넌트는 name이라는 props를 받아 화면에 인사말을 표시한다.
//Counter 컴포넌트는 상태 count를 가지고 있으며, 버튼을 클릭할 때마다 count가 증가한다.