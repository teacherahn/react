import { useState } from 'react';
import axios from 'axios';

/*

  ✅ Axios Post

  - axios.post(url, data, config) : POST 요청을 수행한다.
  - axios.post() 메서드는 URL, 데이터, 설정을 인수로 받는다.
  - axios.post() 메서드는 async/await 또는 Promise를 사용한다.

*/

const AxiosPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 동작을 막음
    try {
      // axios.post(url, data, config);
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title, //title : title, (key와 value가 같으면 하나만 써도 됨)
        body, // body : body,
        id : 101,
        userId: 1,
      });
      setTitle('');
      setBody('');

      console.log("작성 완료!");
      console.log(response);
      console.log(response.data);

    } catch (error) {
      console.log(error);
      console.log(error.message);
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
    </div>
  );
}

export default AxiosPost;