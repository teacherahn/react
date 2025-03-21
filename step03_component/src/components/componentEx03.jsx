/*

   ✅ 컴포넌트 구조화(component structuring)와 재사용(reusability)

    - React 컴포넌트는 한 번 정의하면 여러 곳에서 재사용이 가능하다. 
    - 컴포넌트를 구조화하여 관리하면 코드의 가독성이 좋아지고, 유지보수가 용이해진다.
    - 컴포넌트를 구조화할 때는 기능별로 분리하여 관리하는 것이 좋다.

    [ 참고 ]
    - 컴포넌트 구조화: 컴포넌트를 기능별로 분리하여 관리하는 것
    - 컴포넌트 재사용: 한 번 정의한 컴포넌트를 여러 곳에서 사용하는 것
    - 컴포넌트 가독성: 코드를 읽기 쉽고 이해하기 쉽게 작성하는 것
    - 컴포넌트 유지보수: 코드를 수정하거나 업데이트하는 것

    [ 예시 ]
    - Header: 웹사이트 제목
    - Body: 본문 내용
    - Footer: 저작권 정보

*/

const Title = () => {
  return <h3>제목</h3>;
}
const Content = () => {
  return <p>본문 내용</p>;
}


const Header = () => {
  return <h1>웹사이트 제목</h1>;
}

const Body = () => {
  return <>
          <h2>여기는 본문 내용입니다.</h2>
          <Title/>
          <Content/>
        </>;
}

const Footer = () => {
  return <small>© 2025 React 학습</small>;
}

const Container = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Container;
// Header, Content, Footer 컴포넌트를 분리하여 관리하고, Container 컴포넌트에서 합쳐서 사용한다.