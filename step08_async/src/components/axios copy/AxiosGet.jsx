
/*

      ✅ Axios

      - Axios는 HTTP 클라이언트 라이브러리로, 비동기 방식의 HTTP 요청을 수행할 수 있다.
      - Promise 기반으로 작동하며, async/await도 함께 사용할 수 있다.
      - 주요 메서드는 axios.get(), axios.post(), axios.put(), axios.delete() 등이 있다.
      - 요청/응답을 JSON 형태로 처리하며, 요청 취소 기능도 제공한다.
      - 브라우저에선 XMLHttpRequest, Node.js에선 http 모듈을 사용한다.
      - 사용하려면 axios를 설치하고 import 해야 한다.
          설치 명령어 : npm install axios
      
*/

const AxiosGet = () => {

  return (
    <div>
      <h2>게시글 목록</h2>
    </div>
  );
}

export default AxiosGet;