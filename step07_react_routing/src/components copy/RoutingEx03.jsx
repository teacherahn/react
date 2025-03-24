import { useState } from 'react';

/*

  ✅ useNavigate 훅

  - useNavigate 훅은 프로그래밍 방식으로 경로를 이동할 수 있습니다.
  - useNavigate 훅은 useNavigate() 형태로 사용합니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 경로를 전달하면 해당 경로로 이동합니다.
  
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 -1을 전달하면 뒤로 가기를 합니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 1을 전달하면 앞으로 가기를 합니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 0을 전달하면 새로고침을 합니다.
  
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 { state: data } 형태로 상태를 전달할 수 있습니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 { replace: true } 옵션을 전달하면 히스토리 스택을 대체합니다.
  - useNavigate 훅을 사용해 경로를 이동할 때, navigate 함수에 { replace: true, state: data } 형태로 상태와 히스토리 스택을 대체할 수 있습니다.

  - useLocation 훅을 사용해 현재 경로와 상태를 조회할 수 있습니다.
  - useLocation 훅은 useLocation() 형태로 사용합니다.
  - useLocation 훅을 사용해 현재 경로와 상태를 조회할 때, location.pathname으로 경로를 조회할 수 있습니다.
  - useLocation 훅을 사용해 현재 경로와 상태를 조회할 때, location.state로 상태를 조회할 수 있습니다.


*/


const Main = () => {
  return  <h1>View: Main Page</h1>
}

const Signup = () => {
  return <h1>View : Signup Page</h1>;
}

const Signin = () => {
  return <h1>View : Signin Page</h1>;
}

const NotFound = () => {
  return <h1>View : 404 - Page Not Found</h1>;
}

const Products = () => {
  return (
    <div>
      <h1>🛍️ Products Page</h1>
    </div>
  );
}

const WithState = () => {
  return (
    <div>
      <h1>View : With State Page</h1>
    </div>
  );
}



const RoutingEx03 = () => {

  const [url ,setUrl] = useState('');
  // useNavigate 훅을 사용해 경로를 이동할 수 있습니다.

  const handleClick = () => {
   // navigate 함수에 경로를 전달하면 해당 경로로 이동합니다.
  }

  const goBack = () => {
   // 뒤로가기
  };

  // replace: true 옵션은 히스토리 스택을 대체합니다.
  const goWithReplace = () => {
    // [ "/", "/signin" , "/signup" ]
    // [ "/", "/signup"]
  };

  // state는 상태를 전달할 때 사용합니다.
  const goWithState = () => {
  };

  const goWithReplaceAndState = () => {
  };

  return (
    <>

      <p>
        URL : <input 
          type="text"
          placeholder="Input URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleClick}>Go</button>
      </p>
      <hr />

      <div>
        <h3>✅ useNavigate </h3>
        <button onClick={goBack}>⬅️ navigate(-1) 뒤로가기</button>
        <button onClick={goWithReplace}>🔁 replace: true 이동</button>
        <button onClick={goWithState}>📤 상태(state) 전달 이동</button>
        <button onClick={goWithReplaceAndState}>🔁 replace + state 전달 이동</button>
      </div>
    </>
  );
}

export default RoutingEx03;
