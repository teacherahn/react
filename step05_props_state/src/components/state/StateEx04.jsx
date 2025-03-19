/*

  ✅ 상태와 Props를 활용한 동적 목록 렌더링

  - 상태(State)와 속성(Props)을 활용하여 동적으로 목록을 렌더링할 수 있다.
  - 상태(State)를 활용하여 목록 데이터를 관리하고, 속성(Props)을 활용하여 자식 컴포넌트에 데이터를 전달한다.
  
  
  
    [ 목록 데이터를 추가, 수정, 삭제하는 기능을 구현 훈련예시 ]

    - useState를 사용하여 todos 상태를 관리한다.
    - 입력값을 관리하기 위한 newTodo 상태를 추가한다.
    - 수정 중인 Todo 항목을 관리하기 위한 updateTodo 상태를 추가한다.

*/
import React, { useState } from 'react';
import { useEffect } from 'react';


const StateEx04 = () => {
  const [todos, setTodos] = useState([]);           // Todo항목 배열
  const [newTodoText, setNewTodoText] = useState(""); // 새로운 Todo 항목
  const [updateTodo, setUpdateTodo] = useState({id : "" , text : ""}); // 수정 중인 Todo 항목 (id, text)
  

  const handleAddTodo = () => {
    if (newTodoText.trim() === "") return;
    const newItem = { id: Date.now(), text: newTodoText }; // 고유 ID 추가 (API 대비)
    setTodos([...todos, newItem]); // 기존 목록에 새로운 항목 추가
    setNewTodoText("");
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleUpdateStart = (todo) => {
    setUpdateTodo({
      id : todo.id,
      text : todo.text
    });
  };

  const handleUpdate = (updateTodo) => {
    if (updateTodo.text.trim() === "") return;
    const updatedTodos = todos.map((todo) =>
      todo.id === updateTodo.id ? { ...todo, text: updateTodo.text } : todo
    );
    setTodos(updatedTodos);
    setUpdateTodo({});
  };

  // 상태 변경 시 실행
  useEffect(() => {
    console.log(todos); // 최신 값 출력
  }, [todos])

  return (
    <div>
      <h3>✅동적 목록 렌더링(훈련예시)</h3>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)} 
        placeholder="todo를 입력하세요"
      />
      {/* 리액트는 UI를 상태로 관리하는 것을 권장 */}
      <button onClick={handleAddTodo}>추가</button>

      <ul>
        {todos.map((todo) => ( 
            updateTodo.id === todo.id ? (
              <li key={todo.id}>
                <input
                  type="text"
                  value={updateTodo.text}
                  onChange={(e) => setUpdateTodo({...updateTodo , text:e.target.value})} 
                />
                <button onClick={() => handleUpdate(updateTodo)}>저장</button>
              </li>
            ) : (
              <li key={todo.id}>{todo.text}
                 <button onClick={() => handleUpdateStart(todo)}>수정</button>
                 <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
              </li>
            )
        ))}
      </ul>
    </div>
  );
};

export default StateEx04;

{/*

  const TodoItem = ({text, onDelete, onEdit }) => {
  return (
    <>
      {text}
      <button onClick={onEdit}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </>
  );
};


<TodoItem
text={todo.text}
onDelete={() => handleDeleteTodo(todo.id)}
onEdit={() => handleEditStart(todo.id, todo.text)}
/>*/}