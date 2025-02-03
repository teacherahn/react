
/*
  [ 비제어 컴포넌트 (Uncontrolled Component) ]
    - 비제어 컴포넌트는 상태가 아닌 ref를 사용하여 DOM 요소에 접근하는 방식이다. 
    - 제어가 React의 상태에 의해 제한되지 않으며, 기본 HTML 폼과 비슷한 방식이다.
*/

import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  // 비제어 컴포넌트는 ref를 사용하여 입력값에 접근하며, React의 상태 관리 없이 폼을 처리한다.
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted name: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}