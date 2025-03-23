/*

  ✅ Nested Routes(중첩 라우트)

  - 중첩 라우트는 하나의 경로에 여러 개의 경로를 중첩해 사용하는 방식입니다.
  - 중첩 라우트를 사용하면 여러 개의 컴포넌트를 중첩해 렌더링할 수 있습니다.
  - Outlet 컴포넌트를 사용해 중첩된 컴포넌트를 렌더링할 수 있습니다.

*/


import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';

function ProductList() {
  return <h3>View : Product List</h3>;
}

function ProductDetails() {
  return <h3>View : Product Detail</h3>;
}

function ProductReviews() {
  return <h3>View : Product Reviews</h3>;
}

function ProductPage() {
  return (
    <div>
      <h2>Product Page</h2>
      <nav>
        <Link to="list" style={{ marginRight: '10px' }}>List</Link>
        <Link to="details" style={{ marginRight: '10px' }}>Details</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet /> {/* 여기로 중첩된 컴포넌트가 들어온다! */}
    </div>
  );
}

function RoutingEx04() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<ProductPage />}>
          <Route path="list" element={<ProductList />} />
          <Route path="details" element={<ProductDetails />} />
          <Route path="reviews" element={<ProductReviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default RoutingEx04;
