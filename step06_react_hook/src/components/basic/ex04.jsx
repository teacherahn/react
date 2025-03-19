// 고급 훅(Hooks) 활용 예제 4: useRef를 사용한 DOM 접근 및 상태 유지

// 저장공간, 돔을 선택
import React, { useRef } from 'react';

function FocusInput() {
  // useRef는 컴포넌트가 재렌더링돼도 값이 변하지 않는 변수를 유지하거나, DOM 요소에 접근할 때 사용됩니다.
  const inputRef = useRef(null);

  // inputRef를 사용해 <input> 요소에 접근하고, 버튼 클릭 시 focus() 메서드를 호출하여 입력 필드에 포커스를 맞춥니다.
  // useRef는 current 속성을 통해 DOM 요소에 접근할 수 있습니다.
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Click the button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
    
  );
}

export default FocusInput;


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

