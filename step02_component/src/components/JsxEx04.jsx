/*

3. JSX를 활용한 컴포넌트 작성
React에서는 UI의 일부분을 구성하는 재사용 가능한 컴포넌트를 작성할 수 있습니다. 
이 컴포넌트들은 JSX를 활용하여 HTML처럼 구조를 잡을 수 있습니다.

*/

/*
1. 함수형 컴포넌트 작성하기

React에서는 주로 함수형 컴포넌트를 사용하여 화면을 구성합니다.
// Greeting 컴포넌트: 사용자 이름을 받아서 인사말을 표시하는 컴포넌트
*/

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}



/*
  Greeting 컴포넌트는 props 객체를 받아와 {props.name}을 통해 이름을 표시합니다.
  컴포넌트는 HTML처럼 보이지만, 실제로는 JavaScript 함수로 JSX를 반환하는 형태입니다.
  2. 컴포넌트 사용하기

  Greeting 컴포넌트를 다른 컴포넌트에서 불러와 사용할 수 있습니다.
  
  function App() {
    return (
      <div>
        <Greeting name="React" />
        <Greeting name="World" />
      </div>
    );
  }
  export default App;

*/


/*
<Greeting name="React" />로 컴포넌트를 호출하고, props.name에 "React"가 전달됩니다.
결과적으로 화면에는 "Hello, React!"와 "Hello, World!"가 순서대로 표시됩니다
*/
