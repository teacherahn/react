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

/*
setTimeout(() => {
    console.log("2초 뒤에 실행됩니다.");
    setTimeout(() => {
        console.log("4초 뒤에 실행됩니다.");
    }, 2000);
}, 2000);
*/

function promiseEx() {
    // Promise 객체를 생성해 비동기 작업을 정의
    return new Promise((resolve, reject) => {
        console.log("데이터 요청중......");
        // 데이터를 가져온다고 가정
        setTimeout(() => {
            const isSuccess = true;
            if (isSuccess) {
                resolve({name : "testuser", age : 20});
            } 
            else {
                reject({});
            }
        }, 2000);
    });

}

console.group("=== Promise / Async / Await ===");

// promiseEx()
//     .then((result) => { 
//         console.log("데이터가 성공적으로 로드 되었습니다.");
//         console.log(result); 
//         //return result;
//     })
//     // .then((result) => { 
//     //     console.log("데이터가 성공적으로 로드 되었습니다.");
//     //     console.log(result); 
//     // })
//     .catch((error) => { 
//         console.log("데이터요청에 실패했습니다.");
//         console.log(error); 
//     });


/*

    ✅ async / await

    - async / await는 ES8에서 추가된 비동기 처리 패턴
    - async / await는 Promise를 기반으로 동작합니다.
    - async / await는 비동기 함수를 동기적으로 작성할 수 있습니다.
    - async / await는 비동기 함수가 처리되기를 기다릴 때 사용합니다.
    - async / await는 try / catch 문을 사용하여 예외 처리를 합니다.
    - async / await는 async 함수 내부에서만 사용할 수 있습니다.
    - await 키워드는 Promise가 처리되면 그 결과를 반환합니다.

    
    [ async / await 동작 방식 ]

     > async 함수는 함수 선언부에 async 키워드를 붙여 정의합니다.
     > async 함수 내부에서 await 키워드를 사용하여 비동기 작업을 처리합니다.
     > await 키워드는 Promise가 처리될 때까지 기다립니다.
     > await 키워드는 Promise가 처리되면 결과를 반환합니다.
    

*/

async function asyncEx() {

    try {

        const result1 = await promiseEx();
        console.log("async / await 테스트1");
        console.log(result1); 
        
        const result2 = await promiseEx();
        console.log("async / await 테스트2");
        console.log(result2);    

        const result3 = await promiseEx();
        console.log("async / await 테스트3");
        console.log(result3);   
        
    }
    catch (error) {
        console.log("데이터요청에 실패했습니다.");
        console.log(error);
    }  

}

asyncEx();
console.groupEnd();


function Async() {
   return (
   <div>    
         <h1>Promise / Async / Await</h1>
   </div>);
}

export default Async;
