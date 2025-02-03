// 예제 2: 네비게이션 메뉴 추가 및 스타일링 , 기본 네비게이션 메뉴에 스타일을 추가해 현재 활성화된 링크를 강조 표시합니다.
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        {/* NavLink 컴포넌트를 사용해 현재 활성화된 링크를 자동으로 인식하고, isActive 속성을 활용해 스타일을 적용할 수 있습니다. */}
        <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
          About
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
          Contact
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;