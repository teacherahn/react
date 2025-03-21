import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import NewTodo from "./NewTodo.jsx";
import TodoList from "./TodoList.jsx";
import Footer from "./Footer";




const TodoMain = () => {  

  const [todos, setTodos] = useState([]); // 할 일 목록
  const idRef = useRef(0); // id 값 관리
  
  const onCreate = (content) => { // 할 일 추가
     const newTodo = {
      id : idRef.current++, 
      text: content, 
      date: Date.now()
    };
    setTodos([newTodo , ...todos]);
  }

  const onDelete = (id) => { // 할 일 삭제
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onUpdate = (id , newText) => { // 할 일 수정
    setTodos(todos.map(todo => todo.id === id ? {...todo , text : newText , date : Date.now()} : todo));
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Header />
      <NewTodo onCreate={onCreate}/>
      <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate}/>
      <Footer/> 
    </div>
  );

}

export default TodoMain;
