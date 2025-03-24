import { useState } from 'react';
import axios from 'axios';

const AxiosDelete = () => {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      console.log(`글 ID ${id} 삭제완료`);
      console.log(response);
      console.log(response.data);
      setId('');
      
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>글 삭제</h2>
      <form onSubmit={handleDelete}>
        <p>
          ID : <input
            type="number"
            placeholder="삭제할 글 ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </p>
        <button type="submit">삭제</button>
      </form>
    </div>
  );
}

export default AxiosDelete;