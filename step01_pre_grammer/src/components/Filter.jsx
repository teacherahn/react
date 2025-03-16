import React from 'react';
/*

    ✅ 필터 함수(filter)

    - 배열의 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값이 true인 요소들로만 새로운 배열을 반환
    - filter 함수는 배열의 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값이 true인 요소들로만 새로운 배열을 반환합니다.
    - filter 내부의 콜백 함수는 배열의 각 요소에 대해 실행되며, true를 반환하면 해당 요소를 새로운 배열에 추가합니다.
    - filter 함수는 원본 배열을 변경하지 않고, 새로운 배열을 반환합니다.

*/

const arr = [1,2,3,4,5,6,7];
const object = [
    { orderId : "order1" , orderQty : 100 },
    { orderId : "order2" , orderQty : 200 },
    { orderId : "order3" , orderQty : 300 }
];

const result1 = arr.filter(
    (item) => item % 2 === 1
);


let result2 = object.filter(
    (order) => order.orderId === "order1"
);

console.group("===  filter ===");
console.log(result1);
console.log(result2);
console.groupEnd();



function Filter() {
    return (
        <div>
        <h1>Filter</h1>
        </div>
    );
}

export default Filter;