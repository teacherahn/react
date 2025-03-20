/*

    ✅ 상태(State) 심화     

    - 상태 업데이트는 비동기적으로 처리되므로, 연속적인 업데이트 시 최신 값을 보장하지 않는다.
      즉 즉시 실행되는 것이 아니라, 리액트가 다음 렌더링 때 한꺼번에 처리 
      '변경하는 것'이 아닌 , '변경을 요청'하는 것
    - 리액트는 성능을 최적화하기 위해 여러 개의 상태 업데이트를 한 번에 처리(batch processing) 한다.
    - 상태 업데이트는 단순한 변경시 사용한다.

    - 함수형 업데이트를 사용하면 연속적인 업데이트에서도 최신 값을 보장할 수 있다.
    - 함수형 업데이트는 여러 번 상태를 변경하거나, 최신 상태를 반드시 보장해야 할 때 사용한다.
    - prevState를 사용하여 이전 상태를 가져와서 업데이트를 진행한다.
    - setState(이전상태값 => 수정값) 형태로 사용한다.
    - 이전 상태를 가져오는 콜백 함수의 매개변수로 prev(previous)라는 접두사를 붙이는 것이 관례이다.
    
*/

import React, { useState } from 'react';

const StateEx02 = () => {
  
    // 변수 및 state 모두 데이터를 저장하는 역할을 한다.
    
    let index = 1; // 화면 렌더링이 되지 않는다. (변수)
    const [count, setCount] = useState(1);  // 화면 렌더링이 자동으로 된다. (useState는 자주 변경되는 데이터를 저장할 때 사용)
    
    // 단순한 변경시 사용
    const handleNormalUpdate = () => {
        setCount(count + 1); // 현재 count 기준
        setCount(count + 1); // 또 현재 count 기준 > 최신 값 반영 안 됨
        setCount(count + 1); // 또 현재 count 기준 > 최신 값 반영 안 됨
        console.log("state  = " + count);  // 이전값이 출력됨

        // 렌더링 후에 count가 1만 증가가 반영됨
    }
    
   
    const handleFunctionUpdate = () => {
        setCount(prevCount => prevCount + 1);  // 최신 count 기준
        setCount(before => before + 1);  // 또 최신 count 기준
        setCount(prevCount => prevCount + 1);  // 또 최신 count 기준
        
        console.log("state  = " + count); // 이전값이 출력됨
         // 렌더링 후에 count가 3 증가가 반영됨
    }


    // 일반 변수 업데이트: 화면에 반영되지 않음
    const handleVariableClick = () => {
        index++;
        console.log("variable = " + index);
    }

    return (

        <div>
            <h3>✅ State 심화 vs 일반 변수</h3>
            <p>
                일반 상태 업데이트: {count} <button onClick={handleNormalUpdate}>Increment</button>
            </p>
            <p> 
                함수형 상태 업데이트: {count} <button onClick={handleFunctionUpdate}>Increment</button>
            </p>
            <p>
                인라인 상태 업데이트: {count} <button onClick={() => setCount(count + 1)}>Increment</button>     
            </p>
            <p>
                변수 : {index} <button onClick={handleVariableClick}>Increment</button>
            </p>
        </div>

    );
}
export default StateEx02;