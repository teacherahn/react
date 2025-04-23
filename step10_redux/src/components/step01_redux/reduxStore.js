import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';


// configureStore :  Redux 스토어를 생성하는 함수
const reduxStore = configureStore({ 
  reducer: { 
    counter: counterReducer
  },
});

export default reduxStore;
