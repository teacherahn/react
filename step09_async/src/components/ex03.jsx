import React, { useState } from 'react';
import axios from 'axios';

// 예제 3: axios의 PUT 요청으로 데이터 수정하기
function UpdateUser() {
  const [userId, setUserId] = useState("");
  const [newName, setNewName] = useState("");
  
  const handleUpdate = () => {
    // 기존 데이터를 수정하는 API 요청을 보내며, PUT 요청을 통해 특정 항목의 데이터를 업데이트합니다.
    axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, { name: newName }) // axios.put() 메서드로 특정 userId의 이름을 newName으로 업데이트합니다.
      .then((response) => {
        console.log("User updated:", response.data); // 업데이트된 데이터는 콘솔에 출력되며, 사용자가 입력한 값에 따라 데이터가 변경됩니다.
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
}

export default UpdateUser;