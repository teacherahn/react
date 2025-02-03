1. 조건부 렌더링
React에서 특정 조건에 따라 컴포넌트를 렌더링하려면 if 문이나 삼항 연산자를 사용할 수 있습니다.

jsx
코드 복사
function UserGreeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
}
2. 리스트 렌더링
배열의 각 요소를 렌더링하려면 map 메서드를 사용해 요소별로 컴포넌트를 생성할 수 있습니다.

jsx
코드 복사
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
key 속성은 React가 각 요소를 구분하는 데 사용되므로 고유한 값을 부여해야 합니다.