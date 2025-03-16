
/*

    ✅ 비구조화 할당(Destructuring)

    - 비구조화 할당은 배열이나 객체의 속성을 분해해서 변수에 담는 문법
    - 비구조화 할당은 배열이나 객체의 속성을 추출하여 변수에 할당하는 문법
    - 비구조화 할당은 배열이나 객체의 속성을 추출하여 변수에 할당할 때, 변수명과 속성명이 일치해야 합니다.
    - 비구조화 할당은 배열이나 객체의 속성을 추출하여 변수에 할당할 때, 기본값을 설정할 수 있습니다.
    - 비구조화 할당은 배열이나 객체의 속성을 추출하여 변수에 할당할 때, 새로운 변수명을 설정할 수 있습니다.

*/

console.group("=== 비구조화 할당 ===");

// 객체 비구조화 할당
const product = {
    id : 1,
    name : "냉장고",
    price : 500000
}
const {id , name , price} = product;
console.group("객체 비구조화 할당");
console.log(product);
console.log("id = " + id);
console.log("name = " + name);
console.log("price = " + price);
console.log("");
console.groupEnd();


// 배열 비구조화 할당
const arr = [1,2,3,4,5];
console.group("배열 비구조화 할당");
let [a ,b , c , d , e ] = arr;
console.log(arr);
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
console.log("d = " + d);
console.log("e = " + e);
console.groupEnd();
console.groupEnd();

function Destructuring() {
    return (
        <div>
        <h1>Destructuring</h1>
        </div>
    );
}   

export default Destructuring;