📘 폼(Form)과 사용자 입력 관리
React에서는 폼을 관리하는 방법으로 제어 컴포넌트와 비제어 컴포넌트가 있습니다.

1. 제어 컴포넌트 (Controlled Component)
제어 컴포넌트는 상태가 컴포넌트 내에서 관리되는 폼 요소입니다. 사용자가 입력한 값을 state로 관리하고, onChange 이벤트를 통해 상태를 업데이트합니다.

jsx
코드 복사
function FormExample() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
사용자가 입력할 때마다 onChange가 호출되어 상태가 업데이트되고, value 속성에 상태 값이 반영됩니다.