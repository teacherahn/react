/*

  ✅ React Router

  - React Router는 리액트 애플리케이션에서 페이지 이동을 처리하는 라이브러리입니다.
  - React Router는 브라우저의 주소와 렌더링할 컴포넌트를 매핑하여 페이지 이동을 처리합니다.
  - React Router는 SPA(Single Page Application)에서 페이지 이동을 처리할 때 사용합니다.
  - React Router는 BrowserRouter, Route, Link, NavLink, Redirect, Switch 등의 컴포넌트를 제공합니다.
  - React Router는 브라우저의 주소를 변경하면서 페이지를 이동하므로, 전체 페이지를 새로 고침하지 않고 컴포넌트만 변경합니다.
  - React Router는 브라우저의 주소를 변경하면서 페이지를 이동하므로, 뒤로 가기, 앞으로 가기, 새로 고침 등의 기능을 사용할 수 있습니다

  ✅ React Router 설치 및 설정

  - React Router는 npm 패키지로 설치할 수 있습니다.

    npm install react-router-dom

    main.jsx 파일에서 BrowserRouter 컴포넌트로 App 컴포넌트를 감싸고, Route 컴포넌트로 페이지를 정의합니다.


  - React Router를 사용하려면 react-router-dom 패키지를 설치합니다.
  - React Router를 사용하려면 BrowserRouter 컴포넌트로 애플리케이션을 감싸고, Route 컴포넌트로 페이지를 정의합니다.
  - BrowserRouter 컴포넌트는 브라우저의 주소와 렌더링할 컴포넌트를 매핑합니다.
  - Route 컴포넌트는 경로와 렌더링할 컴포넌트를 매핑합니다.
  - Link 컴포넌트는 페이지 이동을 위한 링크를 제공합니다.
  - NavLink 컴포넌트는 현재 활성화된 링크를 스타일링할 수 있습니다.
  - Redirect 컴포넌트는 페이지를 다른 경로로 이동시킬 수 있습니다.
  - Switch 컴포넌트는 경로와 일치하는 첫 번째 Route 컴포넌트만 렌더링합니다.
  - useLocation 훅은 현재 경로 정보를 조회할 수 있습니다.
  - useHistory 훅은 페이지 이동을 위한 history 객체를 조회할 수 있습니다.
  - useRouteMatch 훅은 현재 경로와 일치하는 정보를 조회할 수 있습니다.
  - withRouter 함수는 컴포넌트를 Route 컴포넌트로 감싸줍니다.
  - Prompt 컴포넌트는 페이지 이동 시 사용자에게 확인 메시지를 표시할 수 있습니다.
  - BrowserRouter 컴포넌트는 하나의 자식 컴포넌트만 렌더링해야 합니다.
  - Route 컴포넌트는 path 속성과 element 속성을 가져야 합니다.
  - Link 컴포넌트는 to 속성을 가져야 합니다.
  - NavLink 컴포넌트는 to 속성을 가져야 합니다.
  - Redirect 컴포넌트는 to 속성을 가져야 합니다.
  - Switch 컴포넌트는 자식 컴포넌트로 Route 컴포넌트만 가져야 합니다.
  
  - useLocation 훅은 useLocation() 형태로 사용합니다.
  - useHistory 훅은 useHistory() 형태로 사용합니다.
  - useRouteMatch 훅은 useRouteMatch() 형태로 사용합니다.
  - withRouter 함수는 withRouter(컴포넌트) 형태로 사용합니다.
  
*/
 
// React Router의 BrowserRouter, Route, Link 컴포넌트를 사용해 기본적인 라우팅을 설정하고 페이지 이동을 구현합니다.


// BrowserRouter로 전체 애플리케이션을 감싸고, Routes 안에 각 경로에 맞는 컴포넌트를 Route로 정의합니다.
import { Route, Routes, Link , NavLink } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

const RoutingEx01 = () => {

  // Link 컴포넌트를 사용해 to 속성으로 지정된 경로로 이동할 수 있습니다.
  // Home과 About 컴포넌트로 이동하면 SPA 환경에서 전체 페이지 새로 고침 없이 전환이 이루어집니다.
  return (
    <>
      <nav>
        <Link to="/">Home</Link>  
        <Link to="/about">About</Link> {/* /about 과 .about과 about의 차이?*/}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* NavLink 컴포넌트를 사용해 현재 활성화된 링크를 자동으로 인식하고, isActive 속성을 활용해 스타일을 적용할 수 있습니다. */}

      <nav >
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
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
      </>
  );
}

export default RoutingEx01;