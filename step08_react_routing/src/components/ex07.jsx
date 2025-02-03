/*
예제 7: 중첩 라우팅으로 상세 페이지 구성하기
중첩 라우팅을 사용해 상위 컴포넌트에 하위 경로를 포함하여 구성합니다.
*/


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product" element={<ProductPage />}>
          <Route path="details" element={<ProductDetails />} />
          <Route path="reviews" element={<ProductReviews />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
/*
ProductPage 컴포넌트에서 <Outlet />을 사용해 하위 경로가 삽입될 위치를 지정합니다.
/product/details로 이동하면 ProductDetails가, /product/reviews로 이동하면 ProductReviews가 렌더링됩니다.
*/