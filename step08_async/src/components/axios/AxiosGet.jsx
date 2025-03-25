
/*

      ✅ Axios

      - Axios는 HTTP 클라이언트 라이브러리로, 비동기 방식의 HTTP 요청을 수행할 수 있다.
      - Promise 기반으로 작동하며, async/await도 함께 사용할 수 있다.
      - 주요 메서드는 axios.get(), axios.post(), axios.put(), axios.delete() 등이 있다.
      - 요청/응답을 JSON 형태로 처리하며, 요청 취소 기능도 제공한다.
      - 브라우저에선 XMLHttpRequest, Node.js에선 http 모듈을 사용한다.
      - 사용하려면 axios를 설치하고 import 해야 한다.
          설치 명령어 : npm install axios
      
*/

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const AxiosGet = () => {

  const [posts, setPosts] = useState([]); // 게시글을 저장하는 상태
  const [isLoading, setIsLoading] = useState(false); // 로딩 중인지 나타내는 상태


  const temp = async () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')  
    .then(response => {
      console.log(response.data.slice(0,10));
    })  
    .catch(error => {
      console.error(error)
    });
  }; 

 

  const fetchPosts = async () => { // fetchPosts라는 비동기 함수를 만들어 데이터 가져오기 시작
    setIsLoading(true);   // 데이터 가져오는 중임을 나타내기 위해 isLoading을 true로 설정
    try { // 에러가 발생할 수 있는 코드를 try 블록 안에 넣음
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // axios로 주어진 URL에서 데이터를 요청하고 응답을 기다림
      setPosts(response.data); // 응답에서 받은 데이터를 posts 상태에 저장
    } catch (error) { // 요청 중 에러가 발생하면 catch 블록이 실행됨
      console.log(error);
      console.log(error.message);
    } finally { // try나 catch가 끝난 후 항상 실행되는 블록
      setIsLoading(false); // 로딩이 끝났음을 나타내기 위해 isLoading을 false로 설정
    }
  };

  useEffect(() => { // 컴포넌트가 처음 로드될 때 실행될 작업을 정의
    temp();
  }, []); // 빈 의존성 배열을 넣어 컴포넌트가 처음 로드될 때만 실행되도록 설정

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosGet;