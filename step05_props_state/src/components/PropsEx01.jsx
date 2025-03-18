
/*

  [ 속성(Props) ]

  - Props는 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방법이다.
  - props는 변경할 수 없는 읽기 전용 데이터로서, 자식 컴포넌트는 부모 컴포넌트에서 전달된 props를 변경할 수 없다.

*/

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {

  return (
    <>
      <Greeting name="React" />;
      <Greeting name="React" />;
      <Greeting name="React" />;
      <Greeting name="React" />;
    </>
  );
}

