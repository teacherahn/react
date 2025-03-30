import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,

    // 🔥 핵심: 로그인 요청에는 토큰을 안 붙임
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = getState().auth.token;

      // endpoint가 'login'이 아닐 때만 토큰 추가
      if (endpoint !== 'login' && token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ memberId, passwd }) => ({
        url: '/member/signin',
        method: 'POST',
        body: { memberId, passwd },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;