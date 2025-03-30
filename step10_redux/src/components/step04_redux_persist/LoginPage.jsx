import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './auth';

function LoginPage() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login({
      token: 'fake-token-123',
      user: { name: '홍길동', email: 'hong@example.com' },
    }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isLoggedIn && user ? (
        <>
          <p>{user.name}님 환영합니다!</p>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <>
          <button onClick={handleLogin}>로그인</button>
        </>
      )}
    </div>
  );
}

export default LoginPage;
