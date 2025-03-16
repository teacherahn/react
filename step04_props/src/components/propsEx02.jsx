/*


  [ 부모-자식 컴포넌트 간 데이터 전달 실습 ]
  - React에서는 부모 컴포넌트가 자식 컴포넌트에 props를 통해 데이터를 전달하고, 
    자식 컴포넌트에서 이벤트를 발생시켜 부모 컴포넌트의 상태를 업데이트할 수 있습니다.
*/

//예제: 부모-자식 컴포넌트 간 데이터 전달
function ChildComponent({ message, onMessageChange }) {
  return (
    <div>
      <p>{message}</p>
      <button onClick={() => onMessageChange("Hello from Child!")}>
        Update Message
      </button>
    </div>
  );
}

function ParentComponent() {
  const [message, setMessage] = useState("Initial Message");

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} onMessageChange={setMessage} />
    </div>
  );
}
//ParentComponent는 message 상태와 setMessage 함수를 ChildComponent에 전달합니다.
//ChildComponent의 버튼을 클릭하면 onMessageChange가 호출되어 부모의 message 상태가 업데이트됩니다.