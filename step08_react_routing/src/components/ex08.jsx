

/*
예제 8: 404 페이지와 와일드카드 경로 처리하기
잘못된 URL을 입력했을 때 404 페이지를 표시합니다.
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/unknown">Unknown Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
/*
설명
path="*"로 설정된 경로는 일치하는 페이지가 없을 경우 매칭됩니다.
잘못된 경로로 접근 시 NotFound 컴포넌트가 렌더링되어 404 페이지를 표시합니다.
이 예제들은 React Router를 사용해 SPA에서 페이지 전환을 구현하고, URL 파라미터와 쿼리 파라미터를 활용한 동적 라우팅을 구성하는 방법을 보여줍니다. useNavigate, useParams, useSearchParams 등 훅을 활용해 더욱 다양한 경로 처리를 구현할 수 있습니다.
*/