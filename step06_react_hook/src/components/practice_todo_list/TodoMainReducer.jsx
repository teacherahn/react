import { useEffect, useReducer, useRef, useState } from "react";
import Header from "./Header.jsx";
import NewTodo from "./NewTodo.jsx";
import TodoList from "./TodoList.jsx";
import Footer from "./Footer.jsx";


function reducer(state , action) {
  switch (action.type) {
    case "CREATE":
      return [action.newTodo , ...state];
    case "UPDATE":
      return state.map(todo => todo.id === action.id ? {...todo , text : action.text , date : action.date} : todo);
    case "DELETE":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}


const TodoMainReducer = () => {  

  const [todos, dispatch] = useReducer(reducer , []);
  const idRef = useRef(0);
  
  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      newTodo : {
        id : idRef.current++, 
        text: content, 
        date: Date.now()
      }
    });
  }

  const onDelete = (id) => {
    dispatch({
      type:"DELETE",
      id : id
    });
  }

  const onUpdate = (id , newText , date) => {
    dispatch({
      type:"UPDATE",
      id : id,
      text : newText,
      date : date
    });
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

export default TodoMainReducer;
