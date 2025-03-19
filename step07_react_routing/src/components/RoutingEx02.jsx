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
  return <h2>Welcome, {username}!</h2>;
}


function ProductDetail() {

  const { category, productId } = useParams();

  return (
    <div>
      <h2>Category: {category}</h2>
      <p>Product ID: {productId}</p>
    </div>
  );

}


function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return <h2>Search Results for: {query}</h2>;
}

function RoutingEx02() {
  return (
    <>

      {/* path="/user/:username" 형태로 경로를 설정하면 username 부분이 파라미터로 받아집니다. */}
      {/* useParams 훅을 사용해 URL 파라미터를 UserProfile 컴포넌트에서 받아와 사용자 이름을 동적으로 렌더링합니다. */}
      <nav>
        <Link to="/user/johndoe">John's Profile</Link>
        <Link to="/user/janedoe">Jane's Profile</Link>
      </nav>
      <Routes>
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>

      <nav>
        <Link to="/products/electronics/1">Electronics Product 1</Link>
        <Link to="/products/books/2">Book Product 2</Link>
      </nav>

      {/*
          URL에서 category와 productId 두 가지 파라미터를 받아옵니다.
          useParams 훅으로 파라미터 값을 ProductDetail 컴포넌트에서 받아 카테고리와 제품 ID를 동적으로 표시합니다. 
      */}
      <Routes>
        <Route path="/products/:category/:productId" element={<ProductDetail />} />
      </Routes>


      <nav>
        <Link to="/search?query=react">Search for "react"</Link>
        <Link to="/search?query=router">Search for "router"</Link>
      </nav>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
      </Routes>

    </>
  );
}

export default RoutingEx02;