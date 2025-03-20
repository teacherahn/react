
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
      </div>
    </>
  );

}

export default PropsEx04;
