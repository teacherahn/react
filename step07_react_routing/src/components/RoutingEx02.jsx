/*

  ✅ URL 파라미터와 쿼리 파라미터 활용

  - URL 파라미터: 동적인 URL을 만들 때 사용하는 파라미터
  - 쿼리 파라미터: URL 뒤에 ?를 붙이고, 키=값 형태로 데이터를 전달하는 방식

  - useParams 훅은 동적 경로로 전달된 값을 조회할 수 있습니다.
  - useParams 훅은 useParams() 형태로 사용합니다.
  - useSearchParams() 훅은 쿼리 파라미터를 조회할 수 있습니다.
  - useSearchParams 훅은 useSearchParams() 형태로 사용합니다.
*/


// 예제 3: URL 파라미터를 사용해 동적 페이지 구현하기 , useParams 훅을 사용해 URL 파라미터를 받아 사용자 프로필 페이지를 구현합니다.

import React from 'react';


import { Route, Routes, Link, useParams, useSearchParams } from 'react-router-dom';


function UserProfile() {
  const { username } = useParams();
  return <h2>View : {username} Profile Page!</h2>;
}


function ProductDetail() {

  const { category, productId } = useParams();

  return (
    <div>
      <h2>View : ProductDetail Page!</h2>
      <p>category param : {category}</p>
      <p>productId pram: {productId}</p>
    </div>
  );

}


function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return <h2>Search Results for: {query}</h2>;
}

function RoutingEx02() {
  return (
    <>
      <hr/>
      <Routes>
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/products/:category/:productId" element={<ProductDetail />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <hr/>

      {/* path="/user/:username" 형태로 경로를 설정하면 username 부분이 파라미터로 받아집니다. */}
      {/* useParams 훅을 사용해 URL 파라미터를 UserProfile 컴포넌트에서 받아와 사용자 이름을 동적으로 렌더링합니다. */}
      <h3>✅ URL 파라미터 </h3>
      <nav>
        <Link to="/user/mockUser1">mockUser1 Profile</Link><br/>
        <Link to="/user/mockUser2">mockUser2 Profile</Link><br/>
        <Link to="/products/electronics/1">Electronics Product 1</Link><br/>
        <Link to="/products/books/2">Book Product 2</Link>
      </nav>
      <hr/>
     
      <h3>✅ 쿼리 파라미터</h3>
      <nav>
        <Link to="/search?q=react">Search React</Link><br/>
        <Link to="/search?q=router">Search Router</Link>
      </nav>
   
    </>
  );
}

export default RoutingEx02;