/*

    [ 상태(State)와 속성(Props) 관리 ]

    상태(State)와 속성(Props)의 차이점 및 사용법
    - React에서 **상태(State)**와 **속성(Props)**은 컴포넌트의 데이터를 관리하는 중요한 요소입니다. 
    이 둘의 차이점을 명확히 이해하는 것이 중요합니다.

    [ 상태(State) ]
    State는 컴포넌트 내부에서 관리되는 데이터입니다. 
    컴포넌트의 현재 상태를 나타내며, 
    사용자 상호작용이나 외부 이벤트에 따라 변할 수 있습니다.

    useState Hook을 사용하여 함수형 컴포넌트에서 상태를 설정하고 관리할 수 있습니다.

*/

import React, { useState } from 'react';

function Counter() {
  
    let idx = 0;

    const handleOnclick = () => {
        idx++;
    }

    // const [데이터 변수, 데이터 변수를 변경할 수 있는 함수] = useState(초기값);
    const [count, setCount] = useState(0); // useState Hook을 사용하여 count 상태를 생성하고 초기값을 0으로 설정

    return (

        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>useState Increment</button>
            
            <p>Idx: {idx}</p>
            <button onClick={handleOnclick}>variable Increment</button>
        </div>

    );
}
export default Counter;