/*

  ✅ Nested Routes(중첩 라우트)

  - 중첩 라우트는 하나의 경로에 여러 개의 경로를 중첩해 사용하는 방식입니다.
  - 중첩 라우트를 사용하면 여러 개의 컴포넌트를 중첩해 렌더링할 수 있습니다.
  - Outlet 컴포넌트를 사용해 중첩된 컴포넌트를 렌더링할 수 있습니다.

*/


import { Route, Routes, Link, Outlet } from 'react-router-dom';

const ProductList = () => {
  return <h1>View : Product List</h1>;
}

const ProductDetails = () => {
  return <h1>View : Product Detail</h1>;
}

const ProductReviews = () => {
  return <h1>View : Product Reviews</h1>;
}

const ProductPage = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <nav>
        <Link to="list" style={{ marginRight: '10px' }}>List</Link>
        <Link to="details" style={{ marginRight: '10px' }}>Details</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      {/* 여기로 중첩된 컴포넌트가 렌더링됩니다. */}
      <hr/>
      <Outlet /> 
      <hr/>
    </div>
  );
}

const RoutingEx04 = () => {
  return (
    <>
      <h3>✅ Nested Routes(중첩 라우트)</h3>
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
