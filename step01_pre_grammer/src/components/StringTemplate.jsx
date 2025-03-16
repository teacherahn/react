import React from "react";

/*

  ✅ 문자열 템플릿
  
  - 문자열 템플릿은 문자열을 조립할 때 사용하는 문법
  - 문자열 템플릿은 백틱(`)을 사용하여 문자열을 표현
  - ${}를 사용하여 변수나 표현식을 문자열에 삽입 가능
  - 문자열 템플릿을 사용하면 문자열을 조립할 때 가독성이 높아짐
  - 문자열 템플릿을 사용하면 문자열을 조립할 때 코드를 간결하게 작성 가능
  
*/

const price = 100000;
const deliveryPrice = 2500;

const totalPrice1 = "최종 결제 금액은 " + (price + deliveryPrice) + "원 입니다.";
const totalPrice2 = `최종 결제 금액은 ${price + deliveryPrice}원 입니다.`;


console.group("=== 문자열 템플릿 ===");
console.log("totalPrice1 = " + totalPrice1);
console.log("totalPrice2 = " + totalPrice2);
console.groupEnd();

function SpringTemplate() {
  return (
    <div>
      <h1>SpringTemplate</h1>
    </div>
  );
}

export default SpringTemplate;