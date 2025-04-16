import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage 사용
import { combineReducers } from 'redux';
import authReducer from './auth'; // authSlice에서 만든 리듀서 가져오기

const persistConfig = {
  key: 'root', //저장할 때 사용할 이름
  storage, // 상태를 localStorage에 저장하겠다고 설정.
  whitelist: ['auth'], // auth 상태만 저장하겠다고 설정. 다른 상태는 저장하지 않음.
};

const rootReducer = combineReducers({ 
  auth: authReducer,                 
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ // Redux 창고를 만들어요.
  reducer: persistedReducer, // 저장 기능이 추가된 리듀서를 사용
  middleware: (getDefaultMiddleware) => // 기본 설정을 쓰되,
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist에서 필요 (에러 방지)
    }),
});

export const persistor = persistStore(store);
