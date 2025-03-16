import React from "react";

/*

  ✅ 화살표 함수(arrow function)

  - 화살표 함수는 ES6에서 추가된 함수 표현식
  - 함수를 간결하게 작성할 수 있고, this를 바인딩 하지 않는 특징
  - 화살표 함수는 function 키워드 대신 => 기호를 사용하여 함수를 선언
  - 화살표 함수는 익명 함수로만 사용 가능
  - 화살표 함수는 함수를 간결하게 작성할 수 있음

*/


// 기본 함수 선언
function func1() {
    console.log("call func1");
}

// 익명 함수 선언
const func2 = function() {
    console.log("call func2");
}

// 화살표 함수 선언
const func3 = () => {
    console.log("call func3");
}

// 화살표 함수 선언 (매개변수)
const func4 = (name) => {
    console.log(`call ${name} func4`);
}

// 화살표 함수 선언 (매개변수 + 객체 구조 분해 할당)
let order = {
  id : 1,
  orderer : "주문유저",
  productNm : "주문상품"
}

function func5_1(order) {
  console.group("call func5_1");
  console.log("id = " + order.id);
  console.log("orderer = " + order.orderer);
  console.log("productNm = " + order.productNm);
  console.groupEnd();
}
function func5_2({id , orderer , productNm }) {
  console.group("call func5_2");
  console.log("id = " + order.id);
  console.log("orderer = " + order.orderer);
  console.log("productNm = " + order.productNm);
  console.groupEnd();
}

// 화살표 함수 선언 (매개변수 + 리턴)
const func6 = (x , y) => {
    return x + y;
}

// this 바인딩 테스트
const obj = {

    name : "유저",

    printName1 : function() {
        console.log(this.name); // 유저1 , 일반함수는 호출한 객체(obj)의 this가 바인딩됨
    },

    printName2 : () => {
      console.log(this.name); // undefined , 화살표 함수는 상위 스코프의 this가 바인딩됨
    }

}



console.group("=== 화살표 함수 ===");
func1();
func2();
func3();
func4("테스트유저");
func5_1(order);
func5_2(order);
console.log("result = " + func6(100,200));
obj.printName1();
obj.printName2();
console.groupEnd();



function ArrowFunction() {
  return (
    <div>
      <h1>ArrowFunction</h1>
    </div>
  );
}

export default ArrowFunction;