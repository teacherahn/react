
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';



/*

  ✅ React Advanced Hook (useRef)

  - useRef는 함수 컴포넌트에서 DOM 요소에 직접 접근할 수 있게 해주는 Hook이다.
  - useRef는 컴포넌트가 리렌더링될 때마다 초기화되지 않는 변수를 관리할 수 있다.
  - useRef는 useRef(current) 를 사용하여 생성한 객체를 반환한다.
  - useRef는 useRef.current를 통해 객체에 접근할 수 있다.
  - useRef는 useRef.current를 통해 객체의 값을 변경할 수 있다.
  - useRef는 useRef.current를 통해 객체의 값을 변경해도 컴포넌트가 리렌더링되지 않는다.
  
*/

function UseRefEx01() {

  const ref = useRef(100); // useRef를 사용하여 생성한 객체를 반환한다. 
  
  const increment = () => {
    ref.current++;
    console.log(ref.current);
  }

  return (
    <>
      <div>
        <h3>✅useRef basic</h3>
        <p>ref: {ref.current} <button onClick={increment}>Increment</button></p>
      </div>
    </>
  );

}

export default UseRefEx01;