/*

  ✅ React Advanced Hook (useReducer)

  - useReducer는 상태를 관리할 때 사용하는 Hook이다.
  - useReducer는 상태 값과 상태를 변경하는 함수를 반환한다.
  - useReducer는 상태의 초기값과 상태를 변경하는 함수를 인자로 받는다.
  - useReducer는 상태 값과 상태를 변경하는 함수를 반환한다.
  - useReducer는 상태를 변경하는 함수를 호출하고, 새로운 상태 값을 전달한다.
  - useReducer는 상태 변경 함수를 호출하면 컴포넌트가 다시 렌더링되고, 변경된 상태가 화면에 반영된다.
  - useReducer는 상태 값이 여러 개일 때, 상태를 하나로 관리할 수 있다.
  - useReducer는 상태 값이 여러 개일 때, 상태 변경 함수를 여러 개 만들 필요가 없다.
  - dispatch 함수를 사용하여 상태를 변경할 때는 action 객체를 전달한다.

*/


import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  console.log("state : ", state);
  console.log("action : ", action);
  console.log("state.count : ", state.count);
  console.log("action.type : ", action.type);
  console.log("");
  
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const UseReducerEx = () => {
  // useReducer(reducer, initialState) : reducer 함수와 초기 상태를 인자로 받아 상태 값과 상태를 변경하는 함수를 반환한다.
  const [state, dispatch] = useReducer(reducer, initialState);

  // before 보여주면 되겠다.

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducerEx;