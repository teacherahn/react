import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice' // 비동기 작업을 위한 thunk 액션 가져오기  

const UserList = () => {
  const dispatch = useDispatch(); // Redux에게 명령을 내리는 도구
  const { users, loading, error } = useSelector((state) => state.user); // Redux에서 상태 가져오기

  useEffect(() => {
    dispatch(fetchUsers()); // 컴포넌트가 시작될 때 사용자 목록을 가져오라고 명령
  }, [dispatch]);

  if (loading) return <p>⏳ 로딩 중...</p>;
  if (error) return <p>❌ 에러: {error}</p>;

  return (
    <div>
      <h2>👥 사용자 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
