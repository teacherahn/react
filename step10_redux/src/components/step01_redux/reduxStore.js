import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';


// 
const reduxStore = configureStore({ 
  reducer: { 
    counter: counterReducer
  },
});

export default reduxStore;
