import { useState } from 'react';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, userId: 1 }),
      });
      if (!response.ok) throw new Error('생성 실패');
      const data = await response.json();
      setMessage(`새 글 생성됨! ID: ${data.id}`);
      setTitle('');
      setBody('');
    } catch (error) {
      setMessage(`에러: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>새 글 작성</h2>
      <form onSubmit={handleSubmit}>
        <p>
        제목 : <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </p>
        <p>
        내용 : <textarea
          placeholder="내용"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </p>
        
        <button type="submit">작성</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreatePost;