import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import NewTodo from "./NewTodo.jsx";
import TodoList from "./TodoList.jsx";
import Footer from "./Footer";




const TodoMain = () => {  

  const [todos, setTodos] = useState([]);
  const idRef = useRef(0);
  
  const onCreate = (content) => {
     const newTodo = {
      id : idRef.current++, 
      text: content, 
      date: Date.now()
    };
    setTodos([newTodo , ...todos]);
  }

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onUpdate = (id , newText) => {
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
