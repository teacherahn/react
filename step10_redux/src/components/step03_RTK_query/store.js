import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './userApi'; 

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer, // userApi: API 요청 관련 로직이 담긴 객체예요 (다른 파일에서 가져옴).
  }, // userApi에서 정의한 이름('userApi')으로 상태를 저장해요.
  middleware: (getDefaultMiddleware) =>
    // 기본 도구들(예: 상태 검사)을 가져오고,  : RTK Query의 도구를 추가해요. 이건 API 요청을 처리하고 캐싱(저장)을 도와줘요.
    getDefaultMiddleware().concat(userApi.middleware),
});

