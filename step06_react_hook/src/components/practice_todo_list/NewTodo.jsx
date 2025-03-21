import { useState } from "react";


const NewTodo = ({onCreate}) => {

    const [content , setContent] = useState('');

    const handleClick = () => {
        if (content.trim() === '') {
            alert("할 일을 입력하세요");
            return;
        }
        onCreate(content);
        setContent('');
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && content.trim() !== "") {
          onCreate(content);
          setContent("");
        }
      };

    return (
        <div >
            New Todo : <input 
                type="text" 
                size={40}
                value={content}
                placeholder="할 일을 입력하세요" 
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleClick}>추가</button>
        </div>
    );

}

export default NewTodo;