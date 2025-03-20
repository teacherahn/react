
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';


/*

   ✅ React Advanced Hook (useRef)

    [ 변수 vs useState vs useRef ]

  - 변수: 랜더링되지 않지만 값이 초기화된다.
  - useState: 렌더링을 한다.
  - useRef: 값을 유지해준다. useState처럼 렌더링은 하지 않는다.
  
*/

function UseRefEx02() {

  let nomalVar = 0; 
  const [state, setState] = useState(0);
  const ref = useRef(0);
  
  
  const handleNormalVarClick = () => {
    nomalVar++;
    console.log("nomalVar = " + nomalVar);
  }

  const handleStateClick = () => {
    setState(state + 1);
    console.log("state = " + state);
  }

  const handleRefClick = () => {
    ref.current++;
    console.log("ref = " + ref.current);
  }

  return (
    <>
    <div>
      <h3>✅var / state / ref</h3>
      <p>
        nomalVar: {nomalVar} <button onClick={handleNormalVarClick}>nomalVar Up!</button>
      </p>

      <p>
        state: {state} <button onClick={handleStateClick}>useState Up!</button>
      </p>

      <p>
        ref: {ref.current} <button onClick={handleRefClick}>useRef Up!</button>
      </p>
    </div>
    </>
  );

}

export default UseRefEx02;