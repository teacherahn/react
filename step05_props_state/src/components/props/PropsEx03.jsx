
/*

  ✅ 다차원 컴포넌트 간 데이터 전달

  - 다차원 컴포넌트 간 데이터 전달은 상태를 부모 컴포넌트에서 관리하고, 자식 컴포넌트에게 props로 전달하여 데이터를 전달할 수 있다.
  - 상태를 부모 컴포넌트에서 관리하고, 자식 컴포넌트에게 props로 전달하여 데이터를 전달할 수 있다.
  - 상태를 변경하는 함수를 부모 컴포넌트에서 정의하고, 자식 컴포넌트에서 호출하여 상태를 변경할 수 있다.
  
*/

import React, { useState } from 'react';



const ChildComponent1 = ({ inputData }) => {
  return (
    <p>ChildComponent1 : {inputData}</p> // 단순 표시
  );
}

const ChildComponent2 = ({ inputData }) => {
  return (
    <p>ChildComponent2 : {inputData}</p> // 단순 표시
  );
}

const ChildComponent3 = ({ inputData  , updateData}) => {
  return (
    <div>
      <p>ChildComponent3 : {inputData}</p>
    </div>    
  );
}


const PropsEx03 = () => {
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    setMessage(e.target.value);
  }

  return (
    <>
      <div>
        <h3>✅ 다차원 컴포넌트 간 데이터 전달</h3>
        Text : <input type="text" value={message} onChange={handleClick} />
       <ChildComponent1 inputData={message} />
        <ChildComponent2 inputData={message} />
        <ChildComponent3 inputData={message} />
      </div>
    </>
  );

}

export default PropsEx03;
