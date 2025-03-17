/*

 제어와 비제어의 차이점
 제어는 실시간 (비번유효성) 비제어는 가끔 한번, submit

[ 📘 폼(Form)과 사용자 입력 관리 ]
  - React에서는 폼을 관리하는 방법으로 제어 컴포넌트와 비제어 컴포넌트가 있다.

1. 제어 컴포넌트 (Controlled Component)
  - 제어 컴포넌트는 상태가 컴포넌트 내에서 관리되는 폼 요소이다. 
  - 사용자가 입력한 값을 state로 관리하고, onChange 이벤트를 통해 상태를 업데이트한다.
*/

function FormExample() {
  const [name, setName] = useState("");

  // 사용자가 입력할 때마다 onChange가 호출되어 상태가 업데이트되고, value 속성에 상태 값이 반영된다.
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