/*

  [ 상태를 Props로 전달하기 ]

  -  부모 컴포넌트의 상태를 자식 컴포넌트에 props로 전달하여 데이터를 공유할 수 있습니다.
  아래 예시에서 상태는 CounterApp에서 관리하고, props는 자식 컴포넌트에 전달되어 값을 변경할 수 없음을 확인할 수 있습니다.
*/

import React, { useState } from 'react';

function Display(props) { // Display는 부모 컴포넌트의 count 값을 받아 화면에 표시합니다.
  //Display 컴포넌트는 props로 전달된 value를 읽을 수만 있으며, 직접 수정할 수 없습니다.
  return <h1>Current Count: {props.count}</h1>;
}

function CounterApp() {
  
  const [count, setCount] = useState(0); // CounterApp 컴포넌트는 count 상태를 가지고 있으며, Display 컴포넌트에 count 값을 전달합니다.

  /*
    const increment = () => {
      setCount(count + 1);
    };
  */

  return (
    <div>
      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );

}

export default CounterApp;


/*
부모-자식 컴포넌트 간 데이터 전달 실습 예시
예제 4: 부모에서 자식으로 이벤트 함수 전달하기
부모 컴포넌트가 자식 컴포넌트에 이벤트 함수도 함께 전달하여 자식 컴포넌트에서 부모 컴포넌트의 상태를 업데이트하도록 할 수 있습니다.
*/
import React, { useState } from 'react';

function ChildComponent(props) {
  return (
    <button onClick={props.onIncrement}>Increment from Child</button>
  );
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onIncrement={incrementCount} />
    </div>
  );
}

export default ParentComponent;
//ParentComponent는 count 상태와 incrementCount 함수를 정의합니다.
//incrementCount 함수를 ChildComponent에 props로 전달하여, 자식 컴포넌트에서 버튼을 클릭하면 부모 컴포넌트의 상태가 업데이트됩니다.


/*

4-5번 하나로!


예제 5: 다중 자식 컴포넌트에 상태 전달하기
부모 컴포넌트가 여러 자식 컴포넌트에 동일한 상태를 props로 전달하여 각기 다른 방식으로 데이터를 표시하도록 할 수 있습니다.
*/
import React, { useState } from 'react';

function DisplayCounter(props) {
  return <p>Counter: {props.count}</p>;
}

function DisplayMessage(props) {
  return <p>{props.count > 5 ? "High count!" : "Keep going!"}</p>;
}

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <DisplayCounter count={count} />
      <DisplayMessage count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterApp;
//DisplayCounter와 DisplayMessage 컴포넌트는 동일한 count 값을 props로 전달받아 다른 방식으로 렌더링합니다.
//DisplayMessage는 count가 5보다 큰지 여부에 따라 조건에 맞는 메시지를 표시합니다.
