/*

    ✅ React Advanced Hook (useCallback)

    - useCallback은 메모이제이션된 콜백 함수를 반환하는 Hook이다.
    - useCallback은 렌더링 성능을 최적화할 때 사용한다.
    - useCallback은 렌더링 중에 함수가 새로 생성되는 것을 방지한다.
    - useCallback은 두 번째 인자로 의존성 배열을 받아 의존성이 변경될 때만 함수를 생성한다.
    - useCallback(() => 함수, [의존성 배열]) : 메모이제이션된 함수를 반환한다.
    - useCallback은 자식 컴포넌트에 props로 함수를 전달할 때 사용한다.
    - useCallback은 자식 컴포넌트가 렌더링될 때마다 함수가 새로 생성되는 것을 방지한다.

    - React.memo는 렌더링 성능을 최적화할 때 사용한다.
    - React.memo는 컴포넌트의 props가 변경되지 않으면 리렌더링을 방지한다.
    - React.memo(Component) : 메모이제이션된 컴포넌트를 반환한다.
    - React.memo는 함수 컴포넌트에만 사용할 수 있다.
  
*/


import React, { useState, useCallback, useMemo } from 'react';

// React.memo(Component) : props가 바뀌지 않으면 리렌더링 막음
const Child = React.memo(({ onClick, label }) => {
  console.log(`🔁 Child ${label} 렌더링됨`);
  return (
    <button onClick={onClick}>
      자식 버튼 - {label}
    </button>
  );
});


function UseCallbackEx() {
  const [count, setCount] = useState(0);
 
  // ❌ 함수와 계산된 값이 매번 새로 만들어짐 (최적화 전)
  const handleClick1 = () => {
    console.log("❌ handleClick1 실행");
  }
  

  // ✅ useCallback으로 함수 메모이제이션
  // useCallback : 함수가 매번 새로 생성되는 걸 방지
  const handleClick2 = useCallback(() => {
    console.log("✅ handleClick2 실행");
  }, []); //[count]


  return (
    <div style={{ padding: 20 }}>
      <h2>🔍 React 최적화 실습</h2>

      <p>카운트: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+ 증가</button>

      <hr />

      <Child onClick={handleClick1} label="버튼" />
      <Child onClick={handleClick2} label="최적화된 버튼" />
    </div>
  );
}

export default UseCallbackEx;