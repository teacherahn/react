baseQuery: fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }, endpointName) => {
    const token = getState().auth.token;

    // login 요청에는 토큰을 붙이지 않는다
    if (endpointName !== 'login' && token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
})