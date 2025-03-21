import { useState } from "react";
import TodoItem from "./TodoItem";



const TodoList = ({todos , onDelete , onUpdate}) => {   

    const [searchText , setSearchText] = useState('');


    const filterTodos = () => {
 
        if (searchText.trim() === '') { // 검색어가 없으면 전체 목록 반환
            return todos;
        }

        // 검색어가 포함된 목록 반환
        // .includes() : 문자열이 포함되어 있는지 확인
        // toLowerCase() : 대문자를 소문자로 변환
        return todos.filter(todo => 
            todo.text.toLowerCase().includes(searchText.toLowerCase()) // 대소문자 구분 없이 검색
        ) ;

    }

    const filteredTodos = filterTodos(); // 검색된 목록

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