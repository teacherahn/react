/*

  예제 7: useReducer를 사용한 복잡한 상태 관리
  useReducer는 복잡한 상태를 관리할 때 유용한 훅으로, 상태와 상태 변경 로직을 하나의 함수로 관리할 수 있습니다.

*/


import React, { useReducer } from 'react';

const initialState = { count: 0 };

// reducer 함수는 상태 업데이트 로직을 관리하며, dispatch를 통해 액션을 발생시켜 상태를 변경합니다.
// useReducer는 useState보다 복잡한 상태 관리에 적합하며, 특히 상태가 여러 단계로 변화하는 경우 유용합니다.
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default CounterWithReducer;