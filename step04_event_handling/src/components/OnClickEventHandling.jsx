import { useState } from "react";
/*
 
    ✅ OnClick Event Handling

  - React에서 이벤트를 처리할 때는 이벤트 이름을 camelCase로 작성한다.
  - 이벤트 핸들러를 등록할 때는 중괄호 {}를 사용하여 자바스크립트 함수를 전달한다.
  - 이벤트 핸들러 함수 내에서 상태를 변경할 때는 setState() 함수를 사용한다.
  
*/

const OnClickEventHandling = () => {
  
  // const [데이터 변수, 데이터 변수를 변경할 수 있는 함수] = useState(초기값);
  const [count, setCount] = useState(0); // useState Hook을 사용하여 count 상태를 생성하고 초기값을 0으로 설정

  //handleClick 함수가 onClick 이벤트로 연결되어, 버튼을 클릭할 때마다 count 상태가 증가한다.
  const handleClick = () => {
    setCount(count + 1);
    console.log("click event is triggered " + count);
  };

  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>Click Me</button>
      {/*<button onClick={handleClick}>Click Me</button>*/}
      <p> count : {count}</p>
    </div>
  );

}

export default OnClickEventHandling;