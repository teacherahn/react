/*
예제 6: URL 쿼리 파라미터 활용하기
쿼리 파라미터를 사용해 URL을 통해 전달된 정보를 받아 상태를 변경하거나 필터링을 구현합니다.
*/


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return <h2>Search Results for: {query}</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/search?query=react">Search for "react"</Link>
        <Link to="/search?query=router">Search for "router"</Link>
      </nav>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
/*
설명
useSearchParams 훅을 사용해 URL 쿼리 파라미터를 읽고, 검색어 query를 가져옵니다.
검색어에 따라 동적으로 결과를 표시할 수 있습니다.
*/