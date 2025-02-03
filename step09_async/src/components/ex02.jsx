import React, { useState } from 'react';
import axios from 'axios';

// 예제 2: axios의 POST 요청을 통한 데이터 생성
function CreateUser() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => { // 폼이 제출되면 handleSubmit 함수가 호출되어 API 요청이 보내지고, 서버 응답이 콘솔에 출력됩니다.
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', { name }) // axios.post()를 사용하여 사용자 이름을 서버에 전송합니다.
      .then((response) => {
        console.log("User created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    /* 폼을 통해 사용자가 입력한 데이터를 API에 POST 요청으로 전송하여 서버에 새 항목을 생성합니다. */
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Create User</button>
    </form>
  );
}

export default CreateUser;