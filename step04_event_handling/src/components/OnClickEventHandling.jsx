import { useState } from "react";
/*
 
    ✅ OnClick Event Handling

    - React에서 이벤트를 처리할 때는 이벤트 이름을 camelCase로 작성한다.
    - 이벤트 핸들러를 등록할 때는 중괄호 {}를 사용하여 자바스크립트 함수를 전달한다.
    - onclick={handleClick} : 클릭 이벤트를 처리하는 함수를 등록한다.
    - 함수 이름만 작성한다. 괄호를 사용하면 안된다.
    - 이벤트 핸들러 함수는 이벤트 객체를 인자로 받아서 사용 가능
    - 이벤트 객체를 통해 이벤트가 발생한 요소에 대한 정보를 확인 가능
    - 이벤트 객체의 target 속성을 통해 이벤트가 발생한 요소에 접근 가능

*/

const OnClickEventHandling = () => {
  
  // const [데이터 변수, 데이터 변수를 변경할 수 있는 함수] = useState(초기값);
  const [count, setCount] = useState(0); // useState Hook을 사용하여 count 상태를 생성하고 초기값을 0으로 설정

  // handleClick 함수가 onClick 이벤트로 연결되어, 버튼을 클릭할 때마다 count 상태가 증가한다.
  
  // function before() {
  //   setCount(count + 1);
  //   console.log("click event  " + count);
  // }
  
  const handleClick1 = (event) => {
    console.log(event);             // SyntheticBaseEvent (합성 이벤트 객체)
    console.log(event.target);      // 이벤트가 발생한 dom 요소
    console.log(event.target.value); // 이벤트가 발생한 dom 요소의 값
    setCount(count + 1);    // update state
    console.log("click event " + count);
  };


  const handleClick2 = (event , addParam) => { 
      console.log(event);
      setCount(count + addParam);
      console.log("click event " + count);
  }


  const isActive = false;
  return (
    <div>
      <h3>✅ OnClick Event Handling</h3>
      <button onClick={() => setCount(count + 1)}>👍</button>
      <button onClick={handleClick1}>👍</button> {/* 함수를 전달하며 사용(일반적인 형태)> event객체가 첫번째 파라메타로 자동으로 전달됨 */}
      
      <button onClick={(e) => isActive && handleClick2(e)}>👍</button> {/* 조건부 실행 시 필요 */}
      <button onClick={(e) =>  handleClick2(e , 100)}>👍</button>  {/* 추가 인자를 전달할 경우 필요 */}
      <p>count : {count}</p>
    </div>
  );

}

export default OnClickEventHandling;