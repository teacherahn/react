// 고급 훅(Hooks) 활용 예제 4: useRef를 사용한 DOM 접근 및 상태 유지
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