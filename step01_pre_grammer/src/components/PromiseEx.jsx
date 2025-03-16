
/*

    ✅ Promise

    - Promise는 비동기 작업을 수행할 때 사용하는 객체
    - Promise는 비동기 작업이 성공했을 때와 실패했을 때의 결과를 처리할 수 있습니다.
    - Promise는 비동기 작업이 완료되기 전까지 기다릴 수 있습니다.
    - Promise는 비동기 작업이 성공했을 때는 resolve 함수를 호출하고, 실패했을 때는 reject 함수를 호출합니다.
    - Promise는 then 메서드를 사용하여 성공했을 때의 결과를 처리하고, catch 메서드를 사용하여 실패했을 때의 결과를 처리합니다.


    [ Promise 동작 방식 ]

     > Promise는 new Promise() 생성자를 사용하여 생성합니다.
     > Promise 생성자는 executor 함수를 인자로 받습니다.
     > executor 함수는 resolve와 reject 함수를 인자로 받습니다.
     > executor 함수는 비동기 작업을 수행합니다.
     > resolve 함수는 비동기 작업이 성공했을 때 호출합니다.
     > reject 함수는 비동기 작업이 실패했을 때 호출합니다.

*/



function getDatas() {
  // Promise 객체를 생성해 비동기 작업을 정의
  return new Promise((resolve, reject) => {
      console.log("데이터 요청중......");
      const isSuccess = true;
      // 데이터를 가져온다고 가정
      setTimeout(() => {
          if (isSuccess) {
              resolve("결과 데이터");
          } 
          else {
              reject("데이터 요청에 실패했습니다.");
          }
      }, 2000);
  });

}

console.group("=== Promise ===");
getDatas()
  .then((result) => { console.log(result); })
  .catch((error) => { console.log(error); });
console.groupEnd();



function PromiseEx() {
    return (
        <div>
            <h2>Promise</h2>
        </div>
    )
}

export default PromiseEx;