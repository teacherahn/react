
/*

  [ 상태(State)와 속성(Props) 관리 예시 ]
  예제 1: 기본 상태와 Props 사용하기
  - React에서는 state를 통해 컴포넌트 내부의 데이터 변화를 관리하고 
    props를 통해 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달한다.
  - useState를 사용하여 상태를 관리하고, props로 데이터를 전달받는다.
  - useState는 배열을 반환하며, 첫 번째 요소는 상태 값, 두 번째 요소는 상태를 변경하는 함수이다.
  - 상태를 변경할 때는 상태 변경 함수를 호출하여 변경한다.

  [ 참고 ]
  - useState: 상태를 관리하는 함수
  - useState(초기값): 상태를 초기화하고 상태 변경 함수를 반환한다.
  - 상태 변경 함수: 상태를 변경하는 함수
  - 상태 변경 함수(변경할 상태): 상태를 변경한다.

  [ 예시 ]
  - 상태 값: count
  - 상태 변경 함수: setCount
  - 초기값: 0
  - 상태 변경 함수 호출: setCount(count + 1)

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