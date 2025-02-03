/*


  [ 입력 필드의 onFocus 및 onBlur 이벤트 처리 ]

  - 입력 필드가 포커스를 얻거나 잃었을 때 이벤트를 처리할 수 있다.

*/
import React, { useState } from 'react';

function FocusExample() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Click to focus"
      />
      <p>{isFocused ? "Input is focused" : "Input is not focused"}</p>
    </div>
  );
}

export default FocusExample;