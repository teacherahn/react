/*
동적 라우팅과 URL 파라미터 활용
동적 라우팅을 사용하면 URL의 일부를 파라미터로 받아 해당 파라미터에 따라 동적으로 페이지 내용을 변경할 수 있습니다.
*/


// 예제 3: URL 파라미터를 사용해 동적 페이지 구현하기 , useParams 훅을 사용해 URL 파라미터를 받아 사용자 프로필 페이지를 구현합니다.
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams();

  return <h2>Welcome, {username}!</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user/johndoe">John's Profile</Link>
        <Link to="/user/janedoe">Jane's Profile</Link>
      </nav>
      <Routes>
        {/* path="/user/:username" 형태로 경로를 설정하면 username 부분이 파라미터로 받아집니다. */}
        {/* useParams 훅을 사용해 URL 파라미터를 UserProfile 컴포넌트에서 받아와 사용자 이름을 동적으로 렌더링합니다. */}
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
