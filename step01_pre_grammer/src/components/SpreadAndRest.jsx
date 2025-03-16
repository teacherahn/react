/*

     ✅ Spread(흩뿌리다 , 펼치다) 연산자와 Rest 매개변수

    - Spread 연산자는 배열이나 객체를 펼쳐서 개별 요소로 분리하는 역할
    - Spread 연산자는 ...을 사용하여 정의합니다.
    - Spread 연산자는 배열이나 객체를 복사하거나, 합치거나, 분해할 때 사용합니다.
    - Spread 연산자는 배열이나 객체를 복사할 때 얕은 복사를 수행합니다.
    - Spread 연산자는 배열이나 객체를 합칠 때, 기존 배열이나 객체를 변경하지 않고 새로운 배열이나 객체를 생성합니다.
    - Spread 연산자는 배열이나 객체를 분해할 때, 배열이나 객체의 요소를 개별적으로 추출합니다.
    - Spread 연산자는 배열이나 객체를 복사할 때, 참조형 데이터를 복사하기 때문에 깊은 복사를 수행하지 않습니다.

*/


console.group("=== Spread 연산자 ===");
const arr1 = [1,2,3,4,5,6,7];
const arr2 = [...arr1 , 2, 3]
console.log(arr1);
console.log(arr2);
console.log("");

const user = {name:"익명유저" , age : 30};
const user2 = {...user , hp : "010-1234-5678"}; // 객체 복사
const user3 = {...user , name : 31}; // 객체 수정
console.log(user);
console.log(user2);
console.log(user3);
console.groupEnd();

/*

    ✅ Rest(나머지) 매개변수

    - Rest 매개변수는 함수의 매개변수 앞에 ...을 붙여서 정의한 매개변수입니다.
    - Rest 매개변수는 함수에 전달된 인수들을 배열로 전달받습니다.
    - Rest 매개변수는 함수의 매개변수로 전달된 인수들 중에서 몇 개를 받을지 모르는 경우에 사용합니다.

 */

const restParam = (p1, p2 , ...orthers) => {
    console.log("p1 = " + p1);
    console.log("p2 = " + p2);
    console.log("orthers = " + orthers);
    console.log("");
  }
  
console.group("=== Rest 매개변수 ===");
restParam(1,2,3,4,5,6,7,8,9);
restParam(1,2,3,4,5,6,7);
restParam(1,2,3,4,5);
console.groupEnd();

function SpreadAndRest() {
    return (
        <div>
        <h1>SpreadAndRest</h1>
        </div>
    );
}

export default SpreadAndRest;