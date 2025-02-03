/*
예제 4: axios의 DELETE 요청으로 데이터 삭제하기
.
*/

import React, { useState } from 'react';
import axios from 'axios';

// 예제 4: axios의 DELETE 요청으로 데이터 삭제하기
function DeleteUser() {
  const [userId, setUserId] = useState("");

  const handleDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`) // axios.delete()를 사용해 userId에 해당하는 사용자를 삭제하는 요청을 보냅니다.
      .then(() => {
        console.log("User deleted");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
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
      {/*사용자가 특정 ID를 입력하고 해당 ID에 맞는 데이터를 삭제 */}
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
}

export default DeleteUser;
