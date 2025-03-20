/*

    ✅ 상태와 Props를 활용한 동적 목록 렌더링

    - 상태(State)와 속성(Props)을 활용하여 동적으로 목록을 렌더링할 수 있다.
    - 상태(State)를 활용하여 목록 데이터를 관리하고, 속성(Props)을 활용하여 자식 컴포넌트에 데이터를 전달한다.
  
  
    [ 목록 데이터를 추가, 수정, 삭제하는 기능을 구현 훈련예시 ]

    - useState를 사용하여 todos 상태를 관리한다.
    - 입력값을 관리하기 위한 newTodo 상태를 추가한다.
    - 수정 중인 Todo 항목을 관리하기 위한 updateTodo 상태를 추가한다.

*/
const StateEx04 = () => {
  
  return (
    <div>
      <h3>✅동적 목록 렌더링</h3>
      <input
        type="text"
        placeholder="todo를 입력하세요"
      />
      <button>추가</button>
    </div>
  );

};

export default StateEx04;
