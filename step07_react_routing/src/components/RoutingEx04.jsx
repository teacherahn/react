/*

  ✅ Nested Routes(중첩 라우트)

  - 중첩 라우트는 하나의 경로에 여러 개의 경로를 중첩해 사용하는 방식입니다.
  - 중첩 라우트를 사용하면 여러 개의 컴포넌트를 중첩해 렌더링할 수 있습니다.
  - Outlet 컴포넌트를 사용해 중첩된 컴포넌트를 렌더링할 수 있습니다.

*/


import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';

function ProductPage() {
  return (
    <div>
      <h2>Product Page</h2>
      <nav>
        <Link to="details">Details</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function ProductDetails() {
  return <p>Here are the product details.</p>;
}

function ProductReviews() {
  return <p>Here are the product reviews.</p>;
}

function RoutingEx04() {
  return (

      <Routes>
        <Route path="/product" element={<ProductPage />}>
          <Route path="details" element={<ProductDetails />} />
          <Route path="reviews" element={<ProductReviews />} />
        </Route>
      </Routes>
  );
}

export default RoutingEx04;
