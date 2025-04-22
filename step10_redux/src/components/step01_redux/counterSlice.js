import { createSlice } from '@reduxjs/toolkit'; // Redux Toolkit의 createSlice 함수 import


/*

  ✅ counterSlice는 숫자 상태(value)를 관리하는 Slice입니다.
  - Redux에서 상태와 상태 변경함수(리듀서)를 한 번에 정의할 수 있게 도와줍니다.

 */



// createSlice({}) : Slice를 생성하는 함수
// - name: slice의 이름을 정의 (액션 type의 prefix로 사용됨: ex. "counter/increment")
// - initialState: 상태관리 값의 초깃값을 정의
// - reducers: 상태를 변경하는 리듀서 함수를 정의 (액션 : 상태 변경 , 액션 생성자 : 액션을 만드는 함수)
// - export default: 리듀서 함수는 Redux store에 등록할 때 사용
// - export const { increment, decrement, reset } = counterSlice.actions: 액션 생성자들을 export (컴포넌트에서 dispatch할 때 사용됨)
// - export const selectCount = (state) => state.counter.value: 상태를 가져오는 selector 함수를 export (컴포넌트에서 useSelector 훅을 사용하여 상태를 가져올 때 사용됨)
// - export const selectCount = (state) => state.counter.value: 상태를 가져오는 selector 함수를 export (컴포넌트에서 useSelector 훅을 사용하여 상태를 가져올 때 사용됨)

const counterSlice = createSlice({

  // 1. slice의 이름을 정의 (액션 type의 prefix로 사용됨: ex. "counter/increment")
  name: 'counter', 

  // 2. 상태관리 값의 초깃값을 정의
  initialState: { 
    value: 0  // (컴포넌트에서 useSelector 훅을 사용하여 상태를 가져올 때 사용됨)
  },
  // 3. 상태를 변경하는 리듀서 함수를 정의  (액션 : 상태 변경 , 액션 생성자 : 액션을 만드는 함수)
  reducers: {

    // 이 액션이 실행되면 Redux가 state를 리듀서에 넘겨주고 리듀서가 state를 변경
    increment: (state) => {
      console.log("state" , state);
      console.log("state.value" , state.value);
      state.value++;
    },
    // payload(전달받은 값)를 사용해서 state를 변경할 수 있음
    decrement: (state , action) => {
      console.log("action" , action);
      console.log("action.payload" , action.payload);
      state.value = action.payload.now;
    },
    reset: (a) => {
      a.value = 0;
    },
  }

});


// 리듀서 함수(export default)는 Redux store에 등록할 때 사용
export default counterSlice.reducer; 

// 액션 생성자들을 export (컴포넌트에서 dispatch할 때 사용됨)
export const { increment, decrement, reset } = counterSlice.actions; 
