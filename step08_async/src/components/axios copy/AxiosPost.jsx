import { useState } from 'react';

/*

    ✅ Axios Post

    - axios.post(url, data, config) : POST 요청을 수행한다.
    - axios.post() 메서드는 URL, 데이터, 설정을 인수로 받는다.
    - axios.post() 메서드는 async/await 또는 Promise를 사용한다.

*/

const AxiosPost = () => {
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <div>
      <h2>게시글 작성</h2>
      <form>
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