/*

  ✅ React Router

    - React Router는 리액트 애플리케이션에서 페이지 이동을 처리하는 라이브러리입니다.
    - React Router는 브라우저의 주소와 렌더링할 컴포넌트를 매핑하여 페이지 이동을 처리합니다.
    - React Router는 SPA(Single Page Application)에서 페이지 이동을 처리할 때 사용합니다.
    - React Router는 BrowserRouter, Route, Link, NavLink, Redirect, Switch 등의 컴포넌트를 제공합니다.
    - 전체 페이지를 새로 고침하지 않고 컴포넌트만 변경합니다.
    - 뒤로 가기, 앞으로 가기, 새로 고침 등의 기능을 사용할 수 있습니다

    - BrowserRouter 컴포넌트는 브라우저의 주소와 렌더링할 컴포넌트를 매핑합니다.
    - Route 컴포넌트는 경로와 렌더링할 컴포넌트를 매핑합니다.
    - Link 컴포넌트는 페이지 이동을 위한 링크를 제공합니다.
    - NavLink 컴포넌트는 현재 활성화된 링크를 스타일링할 수 있습니다.
  

  ✅ React Router 설치 및 설정

    - React Router는 npm 패키지로 설치할 수 있습니다.

      [ 설치 명령어 ]
      npm install react-router-dom
 
    - BrowserRouter 컴포넌트로 App 컴포넌트를 감싸고, Route 컴포넌트로 페이지를 정의합니다.

      [ main.jsx 혹은 App.jsx 파일]        
      import { BrowserRouter } from 'react-router-dom';
      <BrowserRouter>
        <App />
      </BrowserRouter>

*/
 
const Main = () => {
  return <h1>View : Main Page</h1>;
}

const Signup = () => {
  return <h1>View : Signup Page</h1>;
}

const Signin = () => {
  return <h1>View : Signin Page</h1>;
}

const UserManagement = () => {
  return <h1>View : UserManagement Page</h1>;
}

const GroupManagement = () => {
  return <h1>View : GroupManagement Page</h1>;
}

const AuthManagement = () => {
  return <h1>View : AuthManagement Page</h1>;
}


const NotFound = () => {
  return <h1>View : 404 - Page Not Found</h1>;
}

const RoutingEx01 = () => {

  // Link 컴포넌트를 사용해 to 속성으로 지정된 경로로 이동할 수 있습니다.
  // Home과 About 컴포넌트로 이동하면 SPA 환경에서 전체 페이지 새로 고침 없이 전환이 이루어집니다.
  return (
    <>
      <h3>✅ Link </h3>
     

      {/* NavLink 컴포넌트를 사용해 현재 활성화된 링크를 자동으로 인식하고, isActive 속성을 활용해 스타일을 적용할 수 있습니다. */}
      <h3>✅ NavLink </h3>
      
    
      {/* Route 컴포넌트로 경로와 컴포넌트를 매핑합니다. */}
      {/* Routes 컴포넌트로 Route 컴포넌트를 감싸서 페이지 이동을 설정합니다. */}
    
    </>
  );
}

export default RoutingEx01;