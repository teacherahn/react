import "./TodoItem.css";

const TodoItem = ({
    id, isDone , content , date , onUpdate , onDelete, // 받아버리기
}) => {

    const onChangeCheckbox = () => {
        onUpdate(id); // checkbox가 선택되면 업데이트 함수 호출
    }
    const onClickDeleteButton = () => {
        onDelete(id); // checkbox가 선택되면 삭제 함수 호출
    }

    return (
        <div className="TodoItem">
            <input type="checkbox" 
                onChange={onChangeCheckbox}
                readOnly
                checked={isDone}
            />
            <div className="content">{content}</div>
            <div className="date">
                {new Date(date).toLocaleDateString()}
            </div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );

}

export default TodoItem;