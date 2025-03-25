import { useState } from 'react';


/*

    ✅ Axios DELETE

    - axios.delete(url, config) : DELETE 요청을 수행한다.
    - axios.delete() 메서드는 URL, 설정을 인수로 받는다.
    - axios.delete() 메서드는 async/await 또는 Promise를 사용한다.
  
*/

const AxiosDelete = () => {
  const [id, setId] = useState('');

  return (
    <div>
      <h2>게시글 삭제</h2>
      <form>
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