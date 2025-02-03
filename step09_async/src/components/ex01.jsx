/*

    [ 비동기 작업]

    - React에서 비동기 작업을 처리하기 위해 주로 API 호출과 데이터 Fetching을 사용한다. 

    [ API 호출과 데이터 Fetching (axios 사용) ]

    - axios는 API 요청을 보내고, 서버로부터 데이터를 가져오는 데 사용되는 HTTP 클라이언트 라이브러리. 
    - axios를 통해 GET, POST, PUT, DELETE와 같은 HTTP 요청을 쉽게 보낼 수 있습니다.
  
  */
 
 import { useState, useEffect } from 'react';
 import axios from 'axios';
 
// 예제 1: axios를 사용한 기본 GET 요청
function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    {/* API에서 데이터를 GET 요청으로 가져오고, 데이터를 상태에 저장하여 화면에 표시합니다. */}
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => { 
        setUsers(response.data);
      }) // axios.get()을 사용하여 URL에 GET 요청을 보내고, 응답 데이터는 .then() 블록에서 users 상태로 저장됩니다.
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // useEffect의 의존성 배열을 빈 배열 []로 설정하여 컴포넌트가 처음 마운트될 때만 API 호출

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;