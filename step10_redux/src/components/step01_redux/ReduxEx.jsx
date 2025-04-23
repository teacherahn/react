import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

/*

    ✅ Redux

    - react-redux는 Redux와 React를 연결해주는 라이브러리이며 Redux의 상태를 React 컴포넌트에서 사용할 수 있게 해줍니다.
    - Redux는 애플리케이션의 상태를 중앙에서 관리하는 라이브러리입니다.
    - Redux는 애플리케이션의 상태를 중앙에서 관리하기 때문에 상태를 쉽게 공유할 수 있습니다.
     
    - Redux는 상태를 변경하기 위한 액션과 리듀서를 사용합니다.
    - Redux는 상태를 변경하기 위한 액션을 디스패치(dispatch)합니다.
    
    - npm install react-redux @reduxjs/toolkit 로 설치후 사용합니다.
    

*/

const ReduxEx = () => {
  
  const count = useSelector((state) => state.counter.value); // useSelector 훅을 사용하여 Redux에서 현재 상태(카운터) 값을 가져온다.
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 상태를 수정할수있는 dispatch 함수를 가져온다.

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🧮 Redux 카운터 예제</h2>
      <h3>카운트: {count}</h3>
      <button onClick={() => dispatch(increment())}>➕ 증가</button>
      <button onClick={() => dispatch(decrement({now : count - 1}))}>➖ 감소</button>
      <button onClick={() => dispatch(reset())}>🔁 초기화</button>
    </div>
  );

};

export default ReduxEx;
