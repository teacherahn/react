// String 표현식

let price = 10000;
let deliveryPrice = 2500;

let totalPrice = `최종 결제 금액은 ${price + deliveryPrice} 원 입니다.`;
console.log(totalPrice);

function func1() {
    console.log("call func1");
}

const func2 = function() {
    console.log("call func2");
}

const func3 = () => {
    console.log("call func3");
}

const func4 = (name) => {
    console.log(`call ${name}`);
}

func1();
func2();
func3();
func4("func4");
console.log("");

let order = {
    orderId : 1,
    orderer : "주문유저명",
    productNm : "주문상품명",
    orderQty : 1
}

function func5_1(order) {
    console.log(order);
}
// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
function func5_2({orderId , orderer , productNm , orderQty}) {
    console.log(orderId);
    console.log(orderer);
    console.log(productNm);
    console.log(orderQty);
}

func5_1(order);
func5_2(order);

console.log("");

// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
let arr1 = [1,2,3,4,5,6,7];
let arr2 = [...arr1 , 2, 3]
console.log(arr1);
console.log(arr2);

// 2. Rest 매개변수
// -> Rest는 나머지 , 나머지 매개변수
const func6 = (p1, p2 , ...orthers) => {
    console.log(p1);
    console.log(p2);
    console.log(orthers);
}

func6(...arr1);
console.log("");

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr3 = [1,2,3,4,5,6,7];
let arr4 = [
    { orderId : "order1" , orderQty : 1 },
    { orderId : "order2" , orderQty : 1 },
    { orderId : "order3" , orderQty : 3 }
];
const findArr3 = arr3.filter(
    (item) => item === 3
);

let findArr4 = arr4.filter(
    (n) => n.orderQty === 1
);


console.log(findArr3);
console.log(findArr4);
console.log("");

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
// map 함수는 배열의 각 요소를 변환하여 새로운 배열을 만드는 함수입니다.
// map 내부의 콜백 함수는 배열의 각 요소에 대해 실행되며, 변환된 값을 return 하면 해당 값들이 새로운 배열을 구성합니다.

let arr8 = [1,2,3,4,5,6,7];
const arr8ResultMap = arr8.map( (item, idx , arr) => {
   return ` item : ${item} / idx : ${idx} :  / arr : ${arr}`;
});

console.log(arr8ResultMap);

const func7 = () => {
    setTimeout(()=>{
        console.log("ok");
    } , 1000);
}

func7();


function add10(num) {
    const promise = new Promise((resolve, reject) => {
      // 비동기 작업 실행하는 함수
      // executor
  
      setTimeout(() => {
        if (typeof num === "number") {
          resolve(num + 10);
        } else {
          reject("num이 숫자가 아닙니다");
        }
      }, 2000);
    });
  
    return promise;
  }
  
  add10(0)
    .then((result) => {
      console.log(result);
      return add10(result);
    })
    .then((result) => {
      console.log(result);
      return add10(undefined);
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: "이정환",
          id: "winterlood",
        });
      }, 1500);
    });
  }
  
  // await
  // async 함수 내부에서만 사용이 가능 한 키워드
  // 비동기 함수가 다 처리되기를 기다리는 역할
  
  async function printData() {
    const data = await getData();
    console.log(data);
  }
  
  printData();





