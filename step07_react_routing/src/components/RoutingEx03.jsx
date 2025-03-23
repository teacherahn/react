
import React, { useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';

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


function Main() {
  const location = useLocation();
  return (
    <div>
      <h2>View: Main Page</h2>
      <p>현재 경로: {location.pathname}</p>
      <p>상태: {location.state ? `From: ${location.state.from}` : '없음'}</p>
    </div>
  );
}

function Signup() {
  return <h2>View : Signup Page</h2>;
}

function Signin() {
  return <h2>View : Signin Page</h2>;
}

function ProductDetail() {

  const { category, productId } = useParams();
  const location = useLocation(); // ✅ useLocation 훅
  console.log(location);
  const state = location.state;
  console.log(state);

  return (
    <div>
      <h2>🛍️ ProductDetail Page</h2>
      <p>category param: {categlocationory}</p>
      <p>productId param: {productId}</p>
      <p>price : {state.price}</p>
      <p>brand : {state.brand}</p>
      <p>inStock : {state.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );

}


function NotFound() {
  return <h2>View : 404 - Page Not Found</h2>;
}


function RoutingEx03() {

  const [url ,setUrl] = useState('');
  const navigate = useNavigate(); // useNavigate 훅을 사용해 경로를 이동할 수 있습니다.

  const handleClick = () => {
    navigate(url); // navigate 함수에 경로를 전달하면 해당 경로로 이동합니다.
  }

  const goToURL = () => {
    navigate(url);
  };

  const goBack = () => {
    //navigate(0);// 새로고침
    navigate(-1); // 뒤로가기
    //navigate(1); // 앞으로가기
  };

  const goWithState = () => {
    navigate('/products/electronics/123', {
      state: { price: 99900, brand: 'Samsung', inStock: true }, // 상태(state) 전달
    });
  };

  const goWithReplace = () => {
    //navigate('/signup');  //signin > signup > 뒤로가기 > signin
    navigate('/signup', { replace: true }); // signin > signup > 뒤로가기 > signup
  };

  const goWithReplaceAndState = () => {
    navigate('/products/books/456', {
      replace: true,
      state: { price: 100000, brand: 'Apple', inStock: false },
    });
  };

  return (
      <>
         <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/products/:category/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        URL : <input 
          type="text"
          placeholder="Input URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleClick}>Go</button>

        <hr />

      {/* navigate 기능 테스트 버튼 */}
      <div>
        <strong>📦 useNavigate 확장 실습</strong> <br />
        <button onClick={goBack}>⬅️ navigate(-1) 뒤로가기</button>
        <button onClick={goWithState}>📤 상태(state) 전달 이동</button>
        <button onClick={goWithReplace}>🔁 replace: true 이동</button>
        <button onClick={goWithReplaceAndState}>
          🔁 replace + state 전달 이동
        </button>
      </div>


      </>
  );
}

export default RoutingEx03;
