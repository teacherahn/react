/*
📘 이벤트 핸들링
React에서는 다양한 이벤트를 핸들링할 수 있습니다. 대표적인 이벤트로는 onClick, onChange 등이 있으며, React에서는 이벤트를 Camel Case로 작성합니다.
*/
//1. 이벤트의 기본 처리 방식
//예제: onClick 이벤트
function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
//예제: onChange 이벤트로 사용자 입력 관리
function TextInput() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}