/*
import { useRef, useState } from "react";
import Editor from "./tester/Editor";
import Header from "./tester/Header";
import List from "./tester/List";

// 샘플데이터
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];


function App() {
  const [todos , setTodos] = useState(mockData); // 샘플데이터로 todos 에저장
  const idRef = useRef(3); // ?

  const onCreate = (content) => { // content를 전달받음
    const newTodo = {    // 새로운 todo객체 생성
      id: idRef.current++,   //다음은 4;
      isDone: false,      // 사용 x
      content: content,   // 본문은 추가
      date: new Date().getTime(), // 날짜는 현재시간
    };

    setTodos([newTodo, ...todos]); // 새로운 todo로 맨 앞에 추가 다시만듬
    //setTodos([...todos,newTodo]); // 새로운 todo로 맨 뒤에 추가 다시만듬

    //setTodos를 호출할 때 기존 todos 배열을 직접 수정하지 않고, 새로운 배열을 생성하여 업데이트합니다.
    // React 상태는 불변성을 유지해야 하기 때문에 기존 배열을 수정하면 안 됩니다.

  };

  const onUpdate = (targetId) => { // id를 전달받음
    setTodos(  // 방문하여서 수정함
      todos.map((todo)=>  // 반복돌림 훑으면서 id랑 같으면?
      todo.id === targetId ? {...todo , isDone : !todo.isDone} : todo  // 같으면 모든 속성을 복사하여 반전시킨다. : 안같으면 그냥 반환
    ));
  }

  const onDelete = (targetId) => {
    // targetId랑 일치하는 Id만 필터 (새로운배열)
    setTodos(todos.filter((todo)=> todo.id !== targetId))
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List 
        todos={todos}       // 해야일들 전달
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App
*/