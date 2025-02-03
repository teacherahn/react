/*

  [ 상태와 Props를 활용한 동적 목록 렌더링 ]

  -  상태를 관리하여 동적 목록을 생성하고, props를 통해 자식 컴포넌트에 전달하여 리스트를 렌더링할 수 있습니다.

*/
import React, { useState } from 'react';

function TodoItem({ item }) {
  return <li>{item}</li>;
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} item={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
// TodoList 컴포넌트는 todos 상태를 관리하고, 새로운 할 일을 추가할 수 있는 기능을 제공합니다.
// TodoItem 컴포넌트는 props로 전달받은 할 일 목록을 하나씩 렌더링합니다.