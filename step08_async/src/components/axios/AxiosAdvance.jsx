

import { useState, useEffect } from 'react';
import axios from './axios'; // axios.js 파일을 import

/*

    ✅ Axios Advance

    - import.meta.env.VITE_API_URL을 사용하여 환경변수를 사용할 수 있다.
    - .env 파일(메인경로)에 VITE_API_URL을 설정하고 import.meta.env.VITE_API_URL로 사용한다.
    - .env 파일에 설정한 변수는 import.meta.env.변수명으로 사용할 수 있다.
*/

const AxiosAdvance = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      console.log(import.meta.env.VITE_API_URL);
      const response = await axios.get(import.meta.env.VITE_API_URL);
      setPosts(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
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

export default AxiosAdvance;