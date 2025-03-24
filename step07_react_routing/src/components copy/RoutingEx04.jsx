/*

  ✅ Nested Routes(중첩 라우트)

  - 중첩 라우트는 하나의 경로에 여러 개의 경로를 중첩해 사용하는 방식입니다.
  - 중첩 라우트를 사용하면 여러 개의 컴포넌트를 중첩해 렌더링할 수 있습니다.
  - Outlet 컴포넌트를 사용해 중첩된 컴포넌트를 렌더링할 수 있습니다.

*/

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
      {/* 여기로 중첩된 컴포넌트가 렌더링됩니다. */}  
    </div>
  );
}

const RoutingEx04 = () => {
  return (
    <>
      <h3>✅ Nested Routes(중첩 라우트)</h3>
    </>
  );
}

export default RoutingEx04;
