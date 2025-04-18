/*

  ✅ URL 파라미터와 쿼리 파라미터 활용

  - URL 파라미터: 동적인 URL을 만들 때 사용하는 파라미터
  - 쿼리 파라미터: URL 뒤에 ?를 붙이고, 키=값 형태로 데이터를 전달하는 방식

  - useParams 훅은 동적 경로로 전달된 값을 조회할 수 있습니다.
  - useParams 훅은 useParams() 형태로 사용합니다.
  - useSearchParams() 훅은 쿼리 파라미터를 조회할 수 있습니다.
  - useSearchParams 훅은 useSearchParams() 형태로 사용합니다.

*/

import { Route, Routes, Link, useParams, useSearchParams } from 'react-router-dom';


// useParams 훅을 사용해 URL 파라미터를 UserProfile 컴포넌트에서 받아와 사용자 이름을 동적으로 렌더링합니다.
const UserProfile = () => {
  const { username } = useParams();  // 객체를 반환
  return (
    <div>
      <h1>User Profile View</h1>
      <p>username : {username}</p>
    </div>
    
  );
}

const ProductDetail = () => {
  const { category, productId } = useParams();
  return (
    <div>
      <h1>View : ProductDetail Page!</h1>
      <p>category param : {category}</p>
      <p>productId param: {productId}</p>
    </div>
  );
}

// useSearchParams 훅을 사용해 쿼리 파라미터를 조회하고 SearchPage 컴포넌트에서 쿼리 파라미터를 렌더링합니다.
const SearchPage = () => {
  // const [search , setSearch] = useSearchParams();
  const [search] = useSearchParams(); // 배열을 반환
  const query = search.get("q"); // get 메서드로 키에 해당하는 값을 조회

  return (
    <div>
      <h1>Search Page!</h1>
      <p>search word : {query}</p>
    </div>
  );
}

const RoutingEx02 = () =>{
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