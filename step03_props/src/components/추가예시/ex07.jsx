/*

  [ 자식 컴포넌트에서 부모 컴포넌트로 상태 전달하기 ]
  - 자식 컴포넌트에서 입력된 데이터를 부모 컴포넌트로 전달하여 부모의 상태로 업데이트할 수 있다.

*/
import React, { useState } from 'react';

function InputComponent({ onTextChange }) {
  return (
    <input type="text" onChange={(e) => onTextChange(e.target.value)} />
  );
}

function ParentComponent() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Input: {text}</h1>
      <InputComponent onTextChange={setText} />
    </div>
  );
}

export default ParentComponent;
// ParentComponent는 text 상태를 관리하며, InputComponent에 onTextChange라는 함수형 props를 전달합니다.
// InputComponent에서 입력된 텍스트는 onTextChange를 통해 부모의 text 상태로 전달됩니다.