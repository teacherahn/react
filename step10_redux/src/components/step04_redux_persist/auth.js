import { createSlice } from '@reduxjs/toolkit';


// 뭐예요?: 이 파일은 로그인 상태를 관리해요. 로그인했는지, 토큰이 뭔지, 사용자 정보가 뭔지를 다뤄요.
// 주요 역할: 로그인과 로그아웃 기능을 만들어줘요.

const authSlice = createSlice({
  name: 'auth', // 이 상태 조각의 이름이에요. "auth"라는 이름으로 구분돼요.
  initialState: { // 초기 상태를 설정해요. 처음에는 로그인 안 한 상태로 시작해요.
    isLoggedIn: false,
    token: null,
    user: null,
  },
  reducers: { // 동기 작업을 위한 리듀서에요. 로그인과 로그아웃 기능을 정의해요.
    login: (state, action) => { // 로그인할 때 호출돼요. action.payload에 로그인 정보가 들어와요.
      state.isLoggedIn = true;
      state.token = action.payload.token; // 로그인 성공하면 토큰을 저장해요.
      state.user = action.payload.user; // 로그인 성공하면 사용자 정보를 저장해요.
    },
    logout: (state) => {
      state.isLoggedIn = false; // 로그아웃할 때 호출돼요. 로그인 상태를 false로 바꿔요.
      state.token = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
