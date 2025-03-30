import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage 사용
import { combineReducers } from 'redux';
import authReducer from './auth'; // authSlice에서 만든 리듀서 가져오기

//뭐예요?: 이 파일은 Redux의 "상태 창고"를 만들고, 그 상태를 브라우저에 저장할 수 있게 설정해요.
//주요 역할: 로그인 상태(auth)를 관리하고, 앱을 껐다 켜도 로그인 정보가 남아있게 해줘요.
const persistConfig = {
  key: 'root', //저장할 때 사용할 이름
  storage, // 상태를 localStorage에 저장하겠다고 설정.
  whitelist: ['auth'], // auth 상태만 저장하겠다고 설정. 다른 상태는 저장하지 않음.
};

const rootReducer = combineReducers({ // 여러 상태를 하나로 묶어요.
  auth: authReducer, //auth라는 이름으로 authSlice의 상태를 사용해요. 
                     //authReducer는 로그인 상태를 관리하는 슬라이스에요.
});

// 상태를 저장할 수 있게 rootReducer를 감싸요. 이걸로 상태가 localStorage에 저장되고, 앱을 다시 켰을 때 불러와져요.
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ // Redux 창고를 만들어요.
  reducer: persistedReducer, // 저장 기능이 추가된 리듀서를 사용
  middleware: (getDefaultMiddleware) => // 기본 설정을 쓰되,
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist에서 필요 (에러 방지)
    }),
});

export const persistor = persistStore(store);
