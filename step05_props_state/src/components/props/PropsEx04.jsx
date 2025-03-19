
/*

  ✅ 다차원 컴포넌트 간 데이터 전달 심화

  [ 구조 ]
  - ParentComponent: inputData 상태를 관리하고, 자식 컴포넌트에게 데이터를 전달한다.
  - ChildComponent1: inputData를 표시한다.
  - ChildComponent2: inputData를 표시한다.
  - ChildComponent3: inputData를 표시하고, 상태 변경 함수를 호출할 수 있다.
  - GrandchildComponent: inputData를 표시한다.
  
*/

import React, { useState } from 'react';


const ParentComponent = ({ inputData , updateData }) => {
  return (
    <div style={{border: "1px solid #333 ", padding: "10px", margin: "10px"}}>
      <p>ParentComponent : {inputData}</p>
      <ChildComponent1 inputData={inputData} />
      <ChildComponent2 inputData={inputData} />
      <ChildComponent3 inputData={inputData} updateData={updateData}/>
    </div>
  );
}


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
      <GrandchildComponent testValue={inputData} />
      {/* 자식에서 상태 변경 가능 */}
      <button onClick={() => updateData("Child3에서 변경!")}>내용 변경</button>
    </div>
    
  );
}

const GrandchildComponent = ({ testValue }) =>{
  return <p>GrandchildComponent : {testValue}</p>; // 계층 전달된 데이터 표시
}


const PropsEx04 = () => {
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    setMessage(e.target.value);
  }

  return (
    <>
      <div>
        <h3>✅ 다차원 컴포넌트 간 데이터 전달</h3>
        Text : <input type="text" value={message} onChange={handleClick} />
        <ParentComponent inputData={message} updateData={setMessage}/>
      </div>
    </>
  );

}

export default PropsEx04;
