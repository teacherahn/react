/*

  ✅ URL 파라미터와 쿼리 파라미터 활용

  - URL 파라미터: 동적인 URL을 만들 때 사용하는 파라미터
  - 쿼리 파라미터: URL 뒤에 ?를 붙이고, 키=값 형태로 데이터를 전달하는 방식

  - useParams 훅은 동적 경로로 전달된 값을 조회할 수 있습니다.
  - useParams 훅은 useParams() 형태로 사용합니다.
  - useSearchParams() 훅은 쿼리 파라미터를 조회할 수 있습니다.
  - useSearchParams 훅은 useSearchParams() 형태로 사용합니다.

*/

// useParams 훅을 사용해 URL 파라미터를 UserProfile 컴포넌트에서 받아와 사용자 이름을 동적으로 렌더링합니다.
const UserProfile = () => {
  return (
    <div>
      <h1>User Profile View</h1>
    </div>   
  );
}

const ProductDetail = () => {
  return (
    <div>
      <h1>View : ProductDetail Page!</h1>
    </div>
  );
}

// useSearchParams 훅을 사용해 쿼리 파라미터를 조회하고 SearchPage 컴포넌트에서 쿼리 파라미터를 렌더링합니다.
const SearchPage = () => {
  return (
    <div>
      <h1>Search Page!</h1>
    </div>
  );
}

const RoutingEx02 = () =>{
  return (
    <>
      
      {/* path="/user/:username" 형태로 경로를 설정하면 username 부분이 파라미터로 받아집니다. */}
      {/* useParams 훅을 사용해 URL 파라미터를 UserProfile 컴포넌트에서 받아와 사용자 이름을 동적으로 렌더링합니다. */}
      <h3>✅ URL 파라미터 </h3>
    
     
      <h3>✅ 쿼리 파라미터</h3>
     
    </>
  );
}

export default RoutingEx02;