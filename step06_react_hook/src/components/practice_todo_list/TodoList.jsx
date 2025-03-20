import { useState } from "react";
import TodoItem from "./TodoItem";



const TodoList = ({todos , onDelete , onUpdate}) => {   

    const [searchText , setSearchText] = useState('');


    const filterTodos = () => {
        
        if (searchText.trim() === '') {
            return todos;
        }
        return todos.filter(todo => 
            todo.text.toLowerCase().includes(searchText.toLowerCase()));

    }
    const filteredTodos = filterTodos();

    return (
        <div>
            
            검색 ➡️ <input 
                type="text" 
                placeholder="검색어를 입력하세요" 
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
            />
            {filteredTodos.map((todo , index)  => (
              <TodoItem 
                key={todo.id} 
                index={index} 
                todo={todo} 
                onDelete={onDelete}
                onUpdate={onUpdate}
            />
            ))}
            <p>👌 {filteredTodos.length}개 👌</p>
        </div>
    );
}    

export default TodoList;