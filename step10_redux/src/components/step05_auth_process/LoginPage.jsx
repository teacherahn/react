// src/components/auth/LoginPage.jsx
import React, { useState } from 'react';
import { useLoginMutation } from './authApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, logout } from './authSlice';

/*
지금 이 흐름은 정말 실무에서도 쓰이는 완성도 높은 인증 구조예요:
✅ RTK Query로 API 요청 자동화

✅ 로그인 상태를 redux-persist로 유지

✅ 필요할 때만 토큰 자동 포함

✅ 새로고침에도 상태 유지

이제 다음 단계를 생각해볼 수 있어요:

🌱 확장 아이디어
✅ 로그아웃 버튼 + 상태 초기화

✅ 로그인된 사용자만 접근 가능한 페이지 보호 (라우팅 가드)

✅ 회원가입, 내 정보 보기, 프로필 수정

✅ 토큰 만료 → 자동 로그아웃 또는 리프레시 토큰 적용

✅ 관리자 권한 등 Role 기반 렌더링
*/

const LoginPage = () => {
  const [memberId, setMemberId] = useState('');
  const [passwd, setPasswd] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const result = await login({ memberId, passwd }).unwrap();
      dispatch(setCredentials(result));
    } catch (err) {
      console.error('로그인 실패:', err);
    }
  };

  return (
    <div>
      <h2>🔐 RTK Query 로그인</h2>
      <input
        type="text"
        placeholder="아이디"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="비밀번호"
        value={passwd}
        onChange={(e) => setPasswd(e.target.value)}
      /><br />
      <button onClick={handleLogin} disabled={isLoading}>로그인</button>

      {auth.isLoggedIn && <p>✅ {auth.user?.memberId} 님 환영합니다!</p>}
      {error && <p style={{ color: 'red' }}>❌ 로그인 실패</p>}
    </div>
  );
};

export default LoginPage;
