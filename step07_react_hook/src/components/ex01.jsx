/*

  [ React Hook ]

  React Hooks는 함수형 컴포넌트에서도 상태와 생명주기 기능을 쉽게 사용할 수 있게 해주는 기능이다.
  useState, useEffect를 사용한 상태 및 생명주기 관리부터, 
  고급 Hooks인 useRef, useContext 등을 활용하는 예제들을 소개합니다.

  useState와 useEffect는 기본적인 상태와 생명주기 관리에 사용되고, 
  useRef, useContext, useReducer, useMemo, useCallback 등의 고급 훅을 사용해 더 효율적이고 복잡한 상태 관리를 할 수 있습니다.

*/

// 기본 훅(Hooks) 활용 예제 예제 1: useState를 사용한 기본 상태 관리
import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0); // count 상태를 관리하며, setCount를 사용해 상태를 업데이트한다.

  // 버튼 클릭 시 count가 증가하는 간단한 카운터입니다.
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );

}

export default Counter;