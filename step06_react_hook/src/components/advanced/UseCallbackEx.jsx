// 예제 9: useCallback을 사용한 함수 메모이제이션 ,  useCallback은 함수의 의존성을 캐싱하여 동일한 함수가 매번 새로 생성되는 것을 방지한다.
import React, { useState, useCallback } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);

  //useCallback으로 increment 함수를 메모이제이션하여 count가 변하지 않으면 동일한 함수를 계속 사용합니다.
  //useCallback은 함수가 자식 컴포넌트에 props로 전달될 때 유용하며, 리렌더링을 줄이는 데 도움을 줍니다.
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;