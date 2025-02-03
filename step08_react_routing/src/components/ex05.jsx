// 예제 5: useNavigate 훅을 사용해 프로그래밍 방식으로 페이지 이동하기 , useNavigate 훅을 사용해 특정 조건에서 코드로 페이지 이동을 구현합니다.
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // useNavigate 훅을 사용해 handleLogin 함수에서 프로그래밍 방식으로 경로를 이동합니다.
  // username이 입력되면 /user/{username} 경로로 이동해 해당 사용자의 프로필 페이지로 이동합니다.
  const handleLogin = () => {
    if (username) {
      navigate(`/user/${username}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function UserProfile() {
  const { username } = useParams();
  return <h2>Welcome, {username}!</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
