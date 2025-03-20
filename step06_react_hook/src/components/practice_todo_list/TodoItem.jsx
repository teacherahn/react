import { useEffect, useState } from "react";



const TodoItem = ({index , todo , onDelete , onUpdate}) => {
  
    const [isUpdate , setIsUpdate] = useState(false);
    const [newText , setNewText] = useState(todo.text);

    // todo.text가 바뀔 때 newText 동기화
    useEffect(() => {
        setNewText(todo.text);
    }, [todo.text]);

    const onSaveUpdate = () => {
        if (newText.trim() === "") return; // 빈 값 방지
        onUpdate(todo.id , newText , Date.now());
        setIsUpdate(false);
    }

    return (
        <div>
            {isUpdate ? (  
                <p>
                    {index+1} . 
                <input 
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}    
                />
                <button onClick={onSaveUpdate}>저장</button>
                </p>
            ) : (
                <p>
                    {index+1}. {todo.text} ({new Date(todo.date).toLocaleDateString()})
                    <button onClick={() => setIsUpdate(true)}>수정</button>
                    <button onClick={()=> onDelete(todo.id)}>삭제</button>
                </p>
            )}


        </div>
    );
  
}

export default TodoItem;