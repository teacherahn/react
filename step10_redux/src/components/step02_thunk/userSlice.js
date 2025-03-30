import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ✅ 비동기 thunk 정의 createAsyncThunk :  비동기 API 요청을 위한 thunk 생성 도우미
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => { 
  //상태 흐름	pending → fulfilled or rejected
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const userSlice = createSlice({
  name: 'user', // 이 상태 조각의 이름
  initialState: { // 초기 상태 설정
    users: [],
    loading: false,
    error: null,
  },
  reducers: {}, // 동기 작업은 없음
  // extraReducers	비동기 결과에 따라 상태 업데이트 처리
  extraReducers: (builder) => { // 비동기 작업 결과를 처리
    //상태 흐름	pending → fulfilled or rejected
    builder
      .addCase(fetchUsers.pending, (state) => { // 데이터 가져오는 중일 때
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => { // 데이터 가져오기 성공
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => { // 데이터 가져오기 실패
        state.loading = false;
        state.error = '사용자 불러오기 실패';
      });
  },
});

export default userSlice.reducer;
