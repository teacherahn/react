import { useState } from 'react';
import axios from 'axios';

function DeletePost() {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setMessage(`글 ID ${id} 삭제됨!`);
      setId('');
    } catch (error) {
      setMessage(`에러: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>글 삭제</h2>
      <form onSubmit={handleDelete}>
        <input
          type="number"
          placeholder="삭제할 글 ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <button type="submit">삭제</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeletePost;