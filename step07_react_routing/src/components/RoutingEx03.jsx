
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

/*

  ✅ useNavigate 훅

  - useNavigate 훅은 프로그래밍 방식으로 경로를 이동할 수 있습니다.
  - useNavigate 훅은 useNavigate() 형태로 사용합니다.
  - useNavigate 훅을 사용하면 버튼 클릭, 입력값 제출 등 이벤트 처리 함수에서 경로를 이동할 수 있습니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 경로를 전달하면 해당 경로로 이동합니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 replace: true 옵션을 전달하면 히스토리 스택을 대체합니다. 
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 -1을 전달하면 뒤로 가기를 합니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 1을 전달하면 앞으로 가기를 합니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 0을 전달하면 새로고침을 합니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 { state: data } 형태로 상태를 전달할 수 있습니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 { replace: true } 옵션을 전달하면 히스토리 스택을 대체합니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 { replace: true, state: data } 형태로 상태와 히스토리 스택을 대체할 수 있습니다.

*/


function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

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

function RoutingEx03() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
  );
}

export default RoutingEx03;
