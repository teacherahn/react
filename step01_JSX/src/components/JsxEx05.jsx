/*

  [ JSX 조건부 렌더링 ]

  - JSX 안에서는 JavaScript 조건문을 활용해 특정 조건에 따라 UI 요소를 렌더링할 수 있다.


*/

function Test1() {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}
// isLoggedIn이 true일 때 "Welcome back!" 메시지가 표시되고, 그렇지 않으면 "Please sign in." 메시지가 나타납니다.


function Test2() {
  const name = '리액트';
  return (
      <div>
          {name === '리액트' ? (
              <h1>리액트입니다.</h1>
          ) : (
              <h2>리액트가 아닙니다.</h2>
          )}
      </div>
  );
}
