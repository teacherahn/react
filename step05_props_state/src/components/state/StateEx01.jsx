/*

    ✅ 상태(State)

    - 상태(state)는 컴포넌트에서 유동적인 데이터를 다룰 때 사용한다.
    - 상태는 컴포넌트 내부에서 선언하며, 컴포넌트 내부에서 값을 변경할 수 있다.
    - 상태는 변경 가능한 데이터이므로, 상태가 변경되면 컴포넌트는 다시 렌더링된다.
    - 상태를 사용할 때는 useState Hook을 사용한다.
    - useState Hook은 상태 값과 상태를 변경하는 함수를 반환한다.
    - 상태를 변경할 때는 상태 변경 함수를 호출하고, 새로운 상태 값을 전달한다.
    - 상태 변경 함수를 호출하면 컴포넌트가 다시 렌더링되고, 변경된 상태가 화면에 반영된다.
    - 상태 값은 상태 변경 함수를 통해서만 변경할 수 있다.
    - 상태 값은 읽기 전용이므로 직접 수정하면 안된다.

*/

import React, { useState } from 'react';

const StateEx01 = () => {
  
    // const [데이터 변수, 데이터 변수를 변경할 수 있는 함수] = useState(초기값);
    const [변수, 세터] = useState(0);  // 화면 렌더링이 자동으로 된다. useState는 자주 변경되는 것을 저장할 때 사용
     //let [a,b] = [1,2]; //a=1, b=2


    const handleClick = () => {
        //변수 = 변수 + 1; // 리액트가 감지하지 못한다. 렌더링 x
        세터(변수 + 1); // setter 함수를 사용하여 state를 변경한다. > 리액트가 감지하여 렌더링 o
    }
    
    return (
        <div>
            <h3>✅useState</h3>
            <p>
                Count (state): {변수} 
                <button onClick={handleClick}>useState Increment</button>
            </p>
        </div>
    );
}
export default StateEx01;