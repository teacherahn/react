
/*

  2. 함수형 컴포넌트와 클래스형 컴포넌트의 차이
  React 컴포넌트는 두 가지 방식으로 정의할 수 있으며, 두 방식은 몇 가지 중요한 차이점이 있습니다.

  2.1 함수형 컴포넌트
  함수형 컴포넌트는 함수를 사용하여 컴포넌트를 정의하며, 최근에는 React의 Hooks가 도입되면서 가장 널리 사용되는 방식입니다.

  특징
  간단한 함수 형태로 정의되며, props를 받아서 JSX를 반환합니다.
  상태 관리와 생명주기 메서드(useState, useEffect)를 사용하기 위해 React Hooks가 필요합니다.
  코드가 간결하고 성능이 효율적입니다.

*/

// 함수형 컴포넌트
export function Greeting1() {
  return <h1>Hello!</h1>;
}
//export default Greeting1;
/*
  2.2 클래스형 컴포넌트
  클래스형 컴포넌트는 ES6 클래스를 사용하여 컴포넌트를 정의하며, 
  this 키워드를 사용하여 상태와 생명주기 메서드를 관리합니다.

  특징
  React 컴포넌트를 class로 정의하며 extends React.Component를 상속받아야 합니다.
  this.state와 this.props를 사용하여 상태와 props를 관리합니다.
  componentDidMount, componentDidUpdate 등의 생명주기 메서드가 제공됩니다.
  최신 React 버전에서는 함수형 컴포넌트와 Hooks를 주로 사용하지만, 
  기존의 레거시 코드에서는 클래스형 컴포넌트가 많이 사용됩니다.

*/

import React, { Component } from 'react';
export class Greeting2 extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
export default Greeting2;

/*
2.3 함수형과 클래스형 컴포넌트 비교
특징	       함수형 컴포넌트	              클래스형 컴포넌트
선언 방식	       함수	                            클래스
상태 관리	  useState와 같은 Hooks 사용	      this.state 사용
생명주기   메서드	useEffect로 대체 가능	   componentDidMount 등 사용
코드의      간결성	간결하고 보기 쉬움	    상대적으로 코드가 복잡함
성능	          효율적이고 빠름	                 비교적 무거움

고로께 함수형쓰셈

*/