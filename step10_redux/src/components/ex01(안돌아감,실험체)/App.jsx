import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./todoSlice"


const App = () => {

    const todos = useSelector((state) => state.todos);
    const dispatch  = useDispatch();
    const [newTodo , setNewTodo] = useState('');
    
    const handleAddTodo = () => {
        if(newTodo.trim()) {
            dispatch(addTodo(newTodo));
            setNewTodo('');
        }
    }

    return (
        <div style={{ padding: '20px' }}>
          <h1>Todo 리스트</h1>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="할 일을 입력하세요"
          />
          <button onClick={handleAddTodo}>추가</button>
    
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} style={{ margin: '10px 0' }}>
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => dispatch(toggleTodo(todo.id))}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  style={{ marginLeft: '10px' }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    
}
export default App;