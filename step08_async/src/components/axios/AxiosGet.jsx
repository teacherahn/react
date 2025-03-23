import { useState, useEffect } from 'react';
import axios from 'axios';

/*

    ✅ Axios

    - Axios는 HTTP 클라이언트 라이브러리로, 비동기 방식으로 HTTP 데이터 요청을 수행할 수 있다.
    - Axios는 브라우저와 Node.js 환경에서 모두 사용할 수 있다.
    - Axios는 Promise 기반으로 작동한다.
    - Axios는 다음과 같은 기능을 제공한다.
        - HTTP 요청을 수행할 수 있다.
        - HTTP 요청을 취소할 수 있다.
        - HTTP 요청과 응답을 JSON 형태로 변환할 수 있다.
        - 브라우저의 XMLHttpRequest 객체와 Node.js의 http 모듈을 사용한다.
    - Axios를 사용하려면 axios 라이브러리를 설치해야 한다.
    - Axios를 사용하려면 axios 라이브러리를 import 해야 한다.
    - Axios를 사용하려면 axios.get(), axios.post(), axios.put(), axios.delete() 등의 메서드를 사용한다.
    - Axios를 사용하려면 async/await 또는 Promise를 사용한다.
    - Axios를 사용하려면 요청할 URL을 전달하고, 응답을 받아 처리한다.
    -


*/

function ReadPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data.slice(0, 5)); // 처음 5개만 표시
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div>
      <h2>글 목록</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadPosts;