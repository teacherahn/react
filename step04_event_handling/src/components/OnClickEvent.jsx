import { useState } from "react";
/*
 
  4,5fmf 

  [ onClick 이벤트로 버튼 클릭 처리하기 ]
   
  - 가장 기본적인 예제로, onClick 이벤트를 통해 버튼이 클릭되었을 때의 동작을 정의한다.

*/

const OnClickEvent = () => {
  
  const [count, setCount] = useState(0);
  //handleClick 함수가 onClick 이벤트로 연결되어, 버튼을 클릭할 때마다 count 상태가 증가한다.
  const handleClick = () => {
    setCount(count + 1);
    console.log("click event is triggered " + count);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p> count : {count}</p>
    </div>
  );

}

export default OnClickEvent;