/*

 [ 상태(State)와 속성(Props) 관리 ]

 상태(State)와 속성(Props)의 차이점 및 사용법
- React에서 **상태(State)**와 **속성(Props)**은 컴포넌트의 데이터를 관리하는 중요한 요소입니다. 
이 둘의 차이점을 명확히 이해하는 것이 중요합니다.

[ 상태(State) ]
State는 컴포넌트 내부에서 관리되는 데이터입니다. 
컴포넌트의 현재 상태를 나타내며, 
사용자 상호작용이나 외부 이벤트에 따라 변할 수 있습니다.

useState Hook을 사용하여 함수형 컴포넌트에서 상태를 설정하고 관리할 수 있습니다.

*/

import React, { useState } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
/*
  [ 속성(Props) ]

  - Props는 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방법이다.
  - props는 변경할 수 없는 읽기 전용 데이터로서, 자식 컴포넌트는 부모 컴포넌트에서 전달된 props를 변경할 수 없다.

*/

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="React" />;
}

/*
상태(State)와 Props의 차이점
특징	              State	                              Props
데이터 관리 주체	컴포넌트 내부에서 관리됨	                부모 컴포넌트가 자식 컴포넌트에 전달
변경 가능 여부	컴포넌트 내에서 변경 가능	                  읽기 전용으로 전달된 후 변경 불가
용도	           사용자 입력, 이벤트, 상태 관리 등	        컴포넌트 간 데이터 전달
*/