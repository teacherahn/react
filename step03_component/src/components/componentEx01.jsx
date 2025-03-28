/*

    
    ✅ 컴포넌트란 무엇인가?

    - React에서 컴포넌트는 UI를 구성하는 최소 단위이며, 재사용 가능한 구조로 이해할 수 있다. 
    - 컴포넌트를 활용하면 코드가 모듈화되어 관리가 쉬워지고, 특정 기능을 여러 곳에서 쉽게 재사용할 수 있다.
    - 컴포넌트는 HTML, CSS, JavaScript를 한 곳에 모아 UI의 일부분을 독립적으로 관리한다.
    - React에서 컴포넌트는 주로 함수형 컴포넌트와 클래스형 컴포넌트로 구분된다.

*/

const Button = (props) => {
  {/*return <button>Click me!</button>;*/}
  return <button>{props.label}</button>;
}

export default Button;