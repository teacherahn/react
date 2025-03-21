
/*

    ✅ React Basic Hook (useEffect)

    - useEffect는 부수 효과(side effects)를 처리할 수 있게 해주는 Hook이다.
    - useEffect는 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있다.
    - useEffect는 클래스형 컴포넌트의 componentDidMount, componentDidUpdate, componentWillUnmount 메서드를 합친 형태로 볼 수 있다.
    - useEffect는 두 개의 인자를 받는다.
    - 첫 번째 인자는 함수이며, 부수 효과를 설정한다.
    - 두 번째 인자는 의존성 배열(dependency array)이다.
    - 의존성 배열에는 useEffect를 실행할 조건이 들어간다.
    - 의존성 배열이 빈 배열이면 컴포넌트가 처음 렌더링될 때만 useEffect가 실행된다.
    - 의존성 배열이 비어있지 않으면 배열 안의 값이 변경될 때마다 useEffect가 실행된다.
    - useEffect는 부수 효과 함수를 반환할 수 있다.
    - 반환된 함수는 컴포넌트가 사라질 때 정리(clean-up)할 때 사용한다.
    - useEffect는 여러 개 사용할 수 있으며, 순서대로 실행된다.

*/


import { useState, useEffect } from 'react';


const UseEffectEx01 = () => {
  
  // console.log("컴포넌트가 렌더링될 때마다 실행");

  // componentDidMount
  useEffect(() => {
    console.log("(처음 한번)컴포넌트가 처음 렌더링될 때만 실행");  
  }, []); // 빈 의존성 배열 > 컴포넌트가 처음 렌더링될 때만 실행

  
  const [count, setCount] = useState(0);
  
   // componentDidMount + componentDidUpdate
  // useEffect(() => {
    
  //   console.log("execute useEffect");  

  //   // componentWillUnmount //컴포넌트가 사라질 때 정리(clean-up)할 때 사용
  //   return () => {
  //     console.log("return : cleanup");
  //   };

  // }, [count]); // 최초 한번 + 의존성 배열이 변경될 때마다 실행

  return (
    <div>
      <h3>✅useEffect</h3>
      <p>Count: {count} <button onClick={() => setCount(count + 1)}>Increment</button></p>
    </div>
  );
}

export default UseEffectEx01;