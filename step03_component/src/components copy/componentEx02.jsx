
/*

    ✅ 함수형 컴포넌트와 클래스형 컴포넌트의 차이

    - React 컴포넌트는 두 가지 방식으로 정의할 수 있으며, 두 방식은 몇 가지 중요한 차이점이 있다.

     1) 함수형 컴포넌트
     
      - 함수형 컴포넌트는 함수를 사용하여 컴포넌트를 정의하며, 최근에는 React의 Hooks가 도입되면서 가장 널리 사용되는 방식이다.
      - 간단한 함수 형태로 정의되며, props를 받아서 JSX를 반환한다.
      - 상태 관리와 생명주기 메서드(useState, useEffect)를 사용하기 위해 React Hooks가 필요하다.
      - 코드가 간결하고 성능이 효율적이다.

*/



/*

   2) 클래스형 컴포넌트

    - 클래스형 컴포넌트는 ES6 클래스를 사용하여 컴포넌트를 정의하며, this 키워드를 사용하여 상태와 생명주기 메서드를 관리한다.
    - React 컴포넌트를 class로 정의하며 extends React.Component를 상속받아야 한다.
    - render() 메서드를 사용하여 JSX를 반환한다.
    - this.state와 this.props를 사용하여 상태와 props를 관리한다.
    - componentDidMount, componentDidUpdate 등의 생명주기 메서드가 제공된다.
    - 최신 React 버전에서는 함수형 컴포넌트와 Hooks를 주로 사용한다.

*/





