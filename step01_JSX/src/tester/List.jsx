import { useState } from "react";
import "./List.css"
import TodoItem from "./TodoItem";

const List = ({todos , onUpdate, onDelete}) => { // props전달
    const [search ,setSearch] = useState(""); // 검색 초깃값 빈문자열

    const onChangeSearch = (e) => { // 변화가 생기면 search에 저장
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if (search === "") {
            return todos; // search가 빈문자열이면 todoList를 반환
        }
        return todos.filter((todo) =>   // 배열.만족하는애만 배열로반환(필터 조건)
            todo.content    // 배열의 각 요소
            .toLowerCase()  // 소문자로 변환 (대소문자 구분없이 검색)
            .includes(search.toLowerCase()) // 검색한거의 대소문자 구분없이 검색 include는 있으면 true 없으면 false
        );
    }

    const filteredTodos = getFilteredData(); // 검색된 데이터 반환


    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <input             
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"
            />
            <div className="todos_wrapper">
                { filteredTodos.map((todo)=>{  // 검색된 todoList를 순회 
                    return (
                        <TodoItem
                            key={todo.id}  // 렌더링 의무임
                            {...todo}      //펼쳐서 전달함
                            onUpdate={onUpdate} // item으로 함수전달
                            onDelete={onDelete} // item으로 함수전달
                        />
                    );
                })}
            </div>
        </div>
    );

}
export default List;