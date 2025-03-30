import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';


const store = configureStore({ // configureStore는 Redux 스토어를 생성하는 함수입니다.
  reducer: { 
    counter: counterReducer, // "counter"라는 이름으로 카운터 상태를 관리한다.
  },
});

export default store;
