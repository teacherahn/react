import { useState } from 'react';

function UpdatePost() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, title, body, userId: 1 }),
      });
      if (!response.ok) throw new Error('수정 실패');
      const data = await response.json();
      setMessage(`글 ID ${data.id} 수정됨!`);
      setId('');
      setTitle('');
      setBody('');
    } catch (error) {
      setMessage(`에러: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>글 수정</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="number"
          placeholder="수정할 글 ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="새 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="새 내용"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">수정</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdatePost;