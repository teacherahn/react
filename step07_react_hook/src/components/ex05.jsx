// 예제 5: useRef를 사용한 이전 상태 추적 , useRef를 활용해 이전 상태를 기억하여 상태 변화에 따라 이전 상태와 현재 상태를 비교할 수 있습니다.
import React, { useState, useEffect, useRef } from 'react';

function PreviousCountTracker() {

  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count);

  useEffect(() => {
    prevCountRef.current = count; // useRef를 이용해 이전 count 값을 추적하고, 현재 count 값과 비교합니다.
  }, [count]); // useEffect가 실행될 때마다 prevCountRef.current에 최신 count 값이 저장됩니다.

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousCountTracker;