/*

  [ React Router ]

  - React Router를 사용해 SPA(Single Page Application)에서의 페이지 이동을 관리하는 방법과 
    동적 라우팅 및 URL 파라미터 활용에 대한 다양한 예시를 제시하겠습니다.


  [ React Router로 SPA에서의 페이지 이동 처리 ]

  - React Router는 리액트 애플리케이션에서 경로를 기반으로 다른 페이지 컴포넌트를 렌더링하여 페이지 전환을 구현할 수 있게 해줍니다.

  
*/
 
// 예제 1: 기본 라우팅 설정 및 페이지 이동
// React Router의 BrowserRouter, Route, Link 컴포넌트를 사용해 기본적인 라우팅을 설정하고 페이지 이동을 구현합니다.
import React from 'react';

// BrowserRouter로 전체 애플리케이션을 감싸고, Routes 안에 각 경로에 맞는 컴포넌트를 Route로 정의합니다.
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {

  // Link 컴포넌트를 사용해 to 속성으로 지정된 경로로 이동할 수 있습니다.
  // Home과 About 컴포넌트로 이동하면 SPA 환경에서 전체 페이지 새로 고침 없이 전환이 이루어집니다.
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>  
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;