import { useState, useEffect } from 'react';

function ReadPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('데이터 조회 실패');
        const data = await response.json();
        //setPosts(data.slice(0, 5)); // 처음 5개만 표시
        setPosts(data);
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
      <table border="1">
        {posts.map(post => (
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
            </tr>
        ))}
      </table>
    </div>
  );
}

export default ReadPosts;