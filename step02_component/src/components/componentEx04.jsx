/*
4. 고차 컴포넌트 (Higher-Order Component, HOC)
고차 컴포넌트는 하나의 컴포넌트를 받아서 새로운 컴포넌트를 반환하는 함수입니다. 이 방법을 통해 공통된 기능을 여러 컴포넌트에 재사용할 수 있습니다.

*/

// withLoading.js - 로딩 기능을 추가하는 HOC
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
}

// ExampleComponent.js
function ExampleComponent() {
  return <div>Example Component</div>;
}

// 로딩 기능이 추가된 컴포넌트
const ExampleWithLoading = withLoading(ExampleComponent);
이제 ExampleWithLoading 컴포넌트는 isLoading이라는 props를 받아, 로딩 중에는 로딩 메시지를, 로딩이 끝나면 실제 컴포넌트를 렌더링합니다.