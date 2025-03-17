/*

   ✅ JSX 조건부 렌더링 (Conditional Rendering) 

  - JSX 안에서는 JavaScript 조건문을 활용해 특정 조건에 따라 UI 요소를 렌더링할 수 있다.
  - JSX에서 조건부 렌더링을 할 때는 보통 삼항 연산자를 사용한다.
  - 삼항 연산자 외에도 AND 연산자(&&)를 사용한 조건부 렌더링도 가능하다.
  - AND 연산자를 사용한 조건부 렌더링은 조건이 true일 때만 렌더링하고, false일 때는 렌더링하지 않는다.
  - AND 연산자를 사용한 조건부 렌더링은 조건이 false일 때 null을 반환하므로, 아무것도 렌더링하지 않는다.

*/


const ConditionalRendering1 = () => {
  const name = '리액트';
  return (
      <>
          {name === '리액트' ? (
            <div>
              <h1>리액트입니다.</h1>
              <p>리액트로 조건부 렌더링을 구현했습니다.</p>
              <p><a href="https://reactjs.org">리액트 공식 사이트</a></p>
            </div>
          ) : (
            <div>
              <h2>리액트가 아닙니다.</h2>
            </div>  
          )}
      </>
  );
}

const ConditionalRendering2 = () => {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>} {/* 1줄일때는 () 생략 가능 */}
    </div>
  );
}
// isLoggedIn이 true일 때 "Welcome back!" 메시지가 표시되고, 그렇지 않으면 "Please sign in." 메시지가 나타납니다.


export { ConditionalRendering1, ConditionalRendering2 }; 
