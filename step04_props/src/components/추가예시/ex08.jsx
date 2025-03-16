/*
예제 8: 복잡한 상태를 여러 컴포넌트에 전달하기
상태를 여러 계층의 자식 컴포넌트로 전달해 데이터를 공유할 수 있습니다.
*/
import React, { useState } from 'react';

function GrandchildComponent({ message }) {
  return <p>Message from Parent: {message}</p>;
}

function ChildComponent({ message }) {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandchildComponent message={message} />
    </div>
  );
}

function ParentComponent() {
  const [message, setMessage] = useState("Hello from Parent!");

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} />
      <button onClick={() => setMessage("Updated Message!")}>Update Message</button>
    </div>
  );
}

export default ParentComponent;
/*
ParentComponent는 message 상태를 관리하며, 이를 ChildComponent에 전달합니다.
ChildComponent는 다시 message를 GrandchildComponent로 전달하여 여러 계층의 컴포넌트가 동일한 상태를 참조할 수 있게 합니다.
이렇게 다양한 예제를 통해 상태와 Props의 차이와 부모-자식 컴포넌트 간의 데이터 전달 방법을 실습하면, React 컴포넌트 간 데이터 관리를 쉽게 이해하고 활용할 수 있습니다.
*/