import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './userApi'; 

export const store = configureStore({

   // 📦 상태를 관리할 공간을 등록
  reducer: {
    [userApi.reducerPath]: userApi.reducer, 
  }, // 'userApi'라는 이름으로 API 데이터를 저장하는 공간 생성
  // 🛠 요청/응답 처리 로직을 미들웨어로 추가 (RTK Query 자동 처리 도구)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),

});


export default store; // 스토어를 내보냄