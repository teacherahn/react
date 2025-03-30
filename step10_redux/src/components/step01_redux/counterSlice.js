import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({  // createSlice는 Redux의 상태를 관리하기 위한 리듀서를 생성하는 함수입니다.
  name: 'counter', // slice의 이름을 지정합니다.
  initialState: { // 초기 상태를 지정합니다.
    // 초기 상태는 객체 형태로 지정합니다.
    value: 0,
  },
  reducers: { // 리듀서를 지정합니다.
    // 리듀서는 상태를 변경하는 함수를 지정합니다.
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

/*
  
  액션 생성자를 export합니다.
  액션 생성자는 slice.actions 객체에서 가져옵니다.
  버튼을 눌렀을때 실행할 명령들을 내보낸다.

*/
export const { increment, decrement, reset } = counterSlice.actions; // 버튼을 눌렀을 때 실행할 명령들을 내보낸다.
export default counterSlice.reducer; // 상태를 바꾸는 방법을 내보낸다.
