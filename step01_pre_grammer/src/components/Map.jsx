/*

    ✅ map 함수

    - 배열의 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값으로 새로운 배열을 반환
    - map 함수는 배열의 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값으로 새로운 배열을 반환합니다.
    - map 내부의 콜백 함수는 배열의 각 요소에 대해 실행되며, 새로운 배열에 추가됩니다.
    - map 함수는 원본 배열을 변경하지 않고, 새로운 배열을 반환합니다.
    - map((item, index, array) => { return item; }) 형태로 사용합니다.
    - item : 배열의 요소
    - index : 배열의 인덱스
    - array : map 함수를 호출한 배열

 */


let arr = [1,2,3,4,5,6,7];
const result1 = arr.map( (item) => {
   return ` item : ${item}`;
});
const result2 = arr.map( (item, idx) => {
    return ` item : ${item} / idx : ${idx}`;
 });
 const result3 = arr.map( (item, idx , arr) => {
    return ` item : ${item} / idx : ${idx} :  / arr : ${arr}`;
 });

console.group("===  map 함수 ===");
console.log(result1);
console.log(result2);
console.log(result3);
console.log("");


let jsonObject = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
    }
]

jsonObject.map((item , index) => {
    console.log(`<ul>`);
    console.log(`<li key=${index}> id = ${item.id}</li>`);
    console.log(`<li> name = ${item.name}</li>`);
    console.log(`<li> username = ${item.username}</li>`);
    console.log(`<li> email = ${item.email}</li>`);
    console.log(`<li> phone = ${item.phone}</li>`);
    console.log(`<li> website = ${item.website}</li>`);
    console.log(`</ul>`);   
} );


console.groupEnd();

function Map() {
    return (
        <div>
            <h1>Map</h1>
        </div>
    );
}   

export default Map;