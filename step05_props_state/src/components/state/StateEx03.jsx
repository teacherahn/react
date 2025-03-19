/*

    ✅ 다양한 상태 관리

    - useState를 사용하여 숫자, 문자열, 불리언, 객체, 배열 상태를 관리할 수 있다.
    - useState를 여러 번 사용하여 여러 상태를 관리할 수 있다.
  
*/

import React, { useState } from 'react';

const StateEx03 = () => {
    const [count, setCount] = useState(0); // 숫자 상태
    const [text, setText] = useState(""); // 문자열 상태
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 불리언 상태
    const [post, setPost] = useState({ id: 0 , title: "" }); // 객체 상태 (초기값 설정)
    const [posts, setPosts] = useState([]); // 배열 상태
  
    return (
      <div>
        <h3>✅ 다양한 상태 관리</h3>
        <p>
          숫자 상태: {count} 
          <button onClick={() => setCount(count + 1)}>increment</button>
        </p>
      
        <p>
            글자 상태: {text} 
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="텍스트 입력"
          />
        </p>
  
        <p>
            불리언 상태: {isLoggedIn ? "✅" : "❌"}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                Click
            </button>
        </p>
  
       
        <p>
            객체 : {post.id} - {post.title} 
            <button onClick={() => setPost({ id: 1, title: "React Hooks" })}>포스트 변경</button>
        </p>
       
        <p>배열 :
        { posts.map((post) => (
            <span key={post.id}>
              {post.id} - {post.title} <br/>
            </span>
          ))}
        <button
          onClick={() =>
            setPosts([
              { id: 1, title: "React Event" },
              { id: 2, title: "React Props" },
              { id: 3, title: "React State" }
            ])
          }
        >
          포스트리스트 변경
        </button>
        </p>
      </div>
    );
  };

  export default StateEx03;