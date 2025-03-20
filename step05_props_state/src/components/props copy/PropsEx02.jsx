
/*

    ✅ 속성(Props) 심화

    - props를 통해 함수 , 객체  , 배열 , 이벤트 , 스타일 등 다양한 데이터를 전달할 수 있다.
  
    [ 예시 ]
    - 함수 props: onClick={setCount}
    - 객체 props: user={name: "mockUser", email: "}}
    - 배열 props: data={["a", "b", "c"]}  
    - 이벤트 props: onClick={handleClick}
    - 스타일 props: style={{color: "blue"}}

*/


// 객체 props 추가 예시

// 배열 props 추가 예시

// 스타일 props 추가 예시

// 이벤트 props 추가 예시

// 함수 props 추가 예시


const PropsEx02 = () => {
  
  // 함수 전달 예시
  const [count, setCount] = useState(0);

  // 이벤트 전달 예시
  const handleClick = () => {
    alert("Clicked!");
  }

  return (
    <>

      <h3>✅ Props로 객체 전달</h3>
      <hr/>

      <h3>✅ Props로 배열 전달</h3>
      <hr/>

      <h3>✅ Props로 스타일 전달</h3>
      <hr/>

      <h3>✅ Props로 이벤트 전달</h3>
      <button>Parent</button>
      <hr/>

      <h3>✅ Props로 함수 전달 {count}</h3>
      <button>Parent</button>

    </>
  );
}

export default PropsEx02;

