import { useState } from 'react';
import axios from 'axios';

/*

  ✅ Axios로 PUT 요청

    - axios.put(url, data, config) : PUT 요청을 수행한다.
    - axios.put() 메서드는 URL, 데이터, 설정을 인수로 받는다.
    - axios.put() 메서드는 async/await 또는 Promise를 사용한다.
    
*/

const AxiosPut = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault(); // 기본 동작을 막음
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        id,
        title,
        body,
        userId: 1,
      });
      console.log(`글 ID ${id} 수정완료`);
      console.log(response);
      console.log(response.data);
      setId('');
      setTitle('');
      setBody('');
      
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  } 

  return (
    <div>
      <h2>글 수정</h2>
      <form onSubmit={handleUpdate}>
        <p>
          ID : <input
            type="number"
            placeholder="수정할 글 ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </p>
        <p>
            제목  : <input
            type="text"
            placeholder="새 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          내용 : <textarea
            placeholder="새 내용"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </p>
        <button type="submit">수정</button>
      </form>
    </div>
  );
}

export default AxiosPut;