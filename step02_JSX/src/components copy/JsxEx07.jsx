/*

   ✅ JSX 조건부 렌더링 (Conditional Rendering) 

  - JSX 안에서는 JavaScript 조건문을 활용해 특정 조건에 따라 UI 요소를 렌더링할 수 있다.
  - JSX에서 조건부 렌더링을 할 때는 보통 삼항 연산자를 사용한다.
  - 삼항 연산자 외에도 AND 연산자(&&)를 사용한 조건부 렌더링도 가능하다.
  - AND 연산자를 사용한 조건부 렌더링은 조건이 true일 때만 렌더링하고, false일 때는 렌더링하지 않는다.
  - AND 연산자를 사용한 조건부 렌더링은 조건이 false일 때 null을 반환하므로, 아무것도 렌더링하지 않는다.

*/


// isLoggedIn이 true일 때 "Welcome back!" 메시지가 표시되고, 그렇지 않으면 "Please sign in." 메시지가 나타난다.

// main이면 메인화면을, 그렇지 않으면 메인화면이 아닙니다. 메시지를 표시한다.
