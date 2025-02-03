/*
검색어가 변경될 때마다 비동기 API 요청을 보내 검색 결과를 가져오는 예제입니다.
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 예제 6: 의존성 배열을 사용한 특정 상태 변화에 따른 비동기 호출
function SearchPosts() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`); // title_like 파라미터를 사용해 제목에 검색어가 포함된 게시물만 필터링하여 가져옵니다.
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query]); //query 상태가 변경될 때마다 useEffect가 실행되어 검색 요청이 전송됩니다.

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/*검색어가 변경될 때마다 비동기 API 요청을 보내 검색 결과를 가져오는 예제입니다. */}
      <ul>
        {results.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPosts;
