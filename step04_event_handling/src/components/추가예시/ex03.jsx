/*

  [ 다중 onClick 버튼으로 상태값 조작하기 ]
  
    - 여러 개의 버튼을 사용하여 상태를 다르게 업데이트할 수 있다.

  */
import React, { useState } from 'react';

function MultipleButtons() {
  const [count, setCount] = useState(0);

  return (
    /* 각 버튼에 onClick 이벤트가 연결되어 있으며, 클릭할 때마다 count 상태를 증가, 감소 또는 초기화할 수 있다. */
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );

}

export default MultipleButtons;
