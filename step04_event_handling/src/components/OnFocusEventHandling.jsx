/*

  ✅ 입력 필드의 onFocus 및 onBlur 이벤트 처리 

  - onFocus 이벤트는 입력 필드가 포커스를 받을 때 발생
  - onBlur 이벤트는 입력 필드가 포커스를 잃을 때 발생
  - 이벤트 핸들러 함수는 이벤트 객체를 인자로 받아서 사용 가능
  - 이벤트 객체를 통해 이벤트가 발생한 요소에 대한 정보를 확인 가능
  - 이벤트 객체의 target 속성을 통해 이벤트가 발생한 요소에 접근 가능
  - 이벤트 객체의 target.value 속성을 통해 입력 필드의 값을 확인 가능

*/

import { useState } from "react";

const OnFocusEventHandling = () => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    console.log("Input is focused");
    console.log("");
    setIsFocus(true);
  };

  const handleBlur = (e) => {
    console.log("Input is blurred");
    console.log(e);             // SyntheticBaseEvent (합성 이벤트 객체)
    console.log(e.target);      // 이벤트가 발생한 dom 요소
    console.log(e.target.value); // 이벤트가 발생한 dom 요소의 값
    setIsFocus(false);
  };

  return (
    <div>
      <h3>✅ OnFocus Event Handling</h3>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Click to focus"
      />
      <p>isFocus : {isFocus ? "✅" : "❌"}</p>
    </div>
  );
}

export default OnFocusEventHandling;