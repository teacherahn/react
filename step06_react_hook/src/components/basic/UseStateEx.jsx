/*

  ✅ React Basic Hook (useState)

  - useState는 함수 컴포넌트에서 상태를 관리할 수 있게 해주는 Hook이다.
  - useState는 상태 값과 상태를 업데이트하는 함수를 반환한다.
  - useState는 상태의 초기값을 인자로 받는다.
  - useState는 배열 비구조화 할당을 통해 상태 값과 상태를 업데이트하는 함수를 사용할 수 있다.
  - 상태 값은 상태를 변경할 때만 사용하고, 직접 수정하면 안된다.
  - 상태 값은 읽기 전용이므로, 직접 수정하면 안된다.
  - 상태 값을 변경할 때는 상태 변경 함수를 호출하고, 새로운 상태 값을 전달한다.
  - 상태 변경 함수를 호출하면 컴포넌트가 다시 렌더링되고, 변경된 상태가 화면에 반영된다.
 
*/

import { useState } from "react";


const UseStateEx = () => {

  const [count, setCount] = useState(0); // count 상태를 관리하며, setCount를 사용해 상태를 업데이트한다.

  return (
    <div>
      <h3>✅useState</h3>
      <p>Count: {count} <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button></p>
    </div>
  );

}

export default UseStateEx;