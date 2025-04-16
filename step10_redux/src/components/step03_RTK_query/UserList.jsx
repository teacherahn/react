import React from 'react';
import { useGetUsersQuery } from './userApi';

const UserList = () => {
  const { data, error, isLoading } = useGetUsersQuery(); // useGetUsersQuery: RTK Query가 만든 훅(Hook

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생!</p>;

  return (
    <div>
      <h2>👥 사용자 목록</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
