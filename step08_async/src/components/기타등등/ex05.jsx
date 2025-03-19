


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // React의 useEffect 훅은 컴포넌트가 마운트되거나 상태가 변경될 때 비동기 작업을 실행할 수 있습니다. API 호출과 같은 비동기 작업을 useEffect 안에서 처리할 수 있습니다.
    async function fetchPosts() {
      try {
        // useEffect를 사용해 컴포넌트가 처음 렌더링될 때 API 데이터를 비동기로 가져와 상태에 저장합니다.
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // useEffect 안에서 비동기 함수를 정의하고 호출하여 데이터를 가져옵니다.
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // loading 상태를 사용해 데이터가 로딩 중일 때 "Loading..." 메시지를 표시하고, 데이터가 로딩되면 게시글 목록을 표시합니다.
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;