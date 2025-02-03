/*

  [ onChange 이벤트로 입력 값 실시간으로 반영하기 ]
  
    - onChange 이벤트를 통해 입력 필드에서 입력된 값이 실시간으로 상태에 반영되도록 한다.

*/
import React, { useState } from 'react';

function TextInput() {
  const [text, setText] = useState("");

  //handleChange 함수가 onChange 이벤트로 연결되어, 입력된 값이 text 상태에 실시간으로 업데이트된다.
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Current Input: {text}</p>
    </div>
  );
}

export default TextInput;
