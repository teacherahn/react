import axios from 'axios';

// Axios 인스턴스를 만들어 요청 설정을 재사용 가능하게 함
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts', // 모든 요청의 기본 URL
    timeout: 10000, // 요청이 10초 내에 완료되지 않으면 실패 처리
  });
  
  // 요청 인터셉터 설정: 모든 HTTP 요청을 가로채서 수정 가능
  instance.interceptors.request.use(
    // 성공 케이스: 요청이 보내지기 전에 실행
    (config) => {
      // config: 요청 설정 객체 (URL, 헤더, 메서드 등이 포함)
      console.log('[Request] Interceptor is running!');
  
      // 예: 모든 요청에 사용자 인증정보(예시 JWT)를 헤더에 추가
    
      return config; // 수정된 설정을 반환해야 요청이 진행됨
    },
    // 실패 케이스: 요청 준비 중 오류 발생 시
    (error) => {
      console.error('[Request Error] Something went wrong:', error);
      return Promise.reject(error); // 오류를 상위로 전달
    }
  );
  
  export default instance; // 이 인스턴스를 다른 파일에서 사용할 수 있게 내보냄