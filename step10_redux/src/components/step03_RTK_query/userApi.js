import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({ // createApi: RTK Query에서 API를 쉽게 만들게 해주는 도구
  reducerPath: 'userApi', // 이 API 상태의 이름이에요. Redux에서 state.userApi로 접근할 수 있다.

  // fetchBaseQuery: 인터넷 요청을 보내는 기본 도구
  // baseUrl: 모든 요청의 기본 주소예요. 여기에 엔드포인트('users')를 붙여서 요청을 보냄.

  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({ // API에서 할 수 있는 작업(엔드포인트)을 정의
    getUsers: builder.query({ // builder.query: GET 요청(데이터 조회)
      query: () => 'users', // 'users' 엔드포인트에 GET 요청을 보냄
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
