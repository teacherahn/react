// 예제 4: 다중 URL 파라미터로 상세 페이지 구성하기 , 복수의 URL 파라미터를 사용해 특정 카테고리와 제품 ID에 따라 내용을 동적으로 변경합니다.
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

function ProductDetail() {

  const { category, productId } = useParams();

  return (
    <div>
      <h2>Category: {category}</h2>
      <p>Product ID: {productId}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/products/electronics/1">Electronics Product 1</Link>
        <Link to="/products/books/2">Book Product 2</Link>
      </nav>
      <Routes>
        {/*
          URL에서 category와 productId 두 가지 파라미터를 받아옵니다.
          useParams 훅으로 파라미터 값을 ProductDetail 컴포넌트에서 받아 카테고리와 제품 ID를 동적으로 표시합니다. 
        */}
        <Route path="/products/:category/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
