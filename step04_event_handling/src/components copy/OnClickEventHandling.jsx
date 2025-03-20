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
  

  return (
    <div>
      <h3>✅ OnClick Event Handling</h3>
      <button>👍</button>
      <button>👍</button> 
      <button>👍</button> 
      <button>👍</button>  
      <p>count : </p>
    </div>
  );

}

export default OnClickEventHandling;