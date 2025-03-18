/*

  [ 상태를 Props로 전달하기 ]

  -  부모 컴포넌트의 상태를 자식 컴포넌트에 props로 전달하여 데이터를 공유할 수 있다.
    
*/

import React, { useState } from 'react';

function Display(props) { // Display는 부모 컴포넌트의 count 값을 받아 화면에 표시한다.
  //Display 컴포넌트는 props로 전달된 value를 읽을 수만 있으며, 직접 수정할 수 없다.
  //props.count = 5; // props로 전달된 값을 직접 수정하려고 하면 에러가 발생한다.
  return <h1>Current Count: {props.count}</h1>;
}

function CounterApp() {
  
  const [count, setCount] = useState(0); // CounterApp 컴포넌트는 count 상태를 가지고 있으며, Display 컴포넌트에 count 값을 전달한다.

  /*
    const increment = () => {
      setCount(count + 1);
    };
  */

  return (
    <div>
      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );

}

export default CounterApp;


/*

  부모-자식 컴포넌트 간 데이터 전달 실습 예시
예제 4: 부모에서 자식으로 이벤트 함수 전달하기
부모 컴포넌트가 자식 컴포넌트에 이벤트 함수도 함께 전달하여 자식 컴포넌트에서 부모 컴포넌트의 상태를 업데이트하도록 할 수 있습니다.

*/
import React, { useState } from 'react';

function ChildComponent(props) {
  return (
    <button onClick={props.onIncrement}>Increment from Child</button>
  );
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onIncrement={incrementCount} />
    </div>
  );
}

export default ParentComponent;
//ParentComponent는 count 상태와 incrementCount 함수를 정의합니다.
//incrementCount 함수를 ChildComponent에 props로 전달하여, 자식 컴포넌트에서 버튼을 클릭하면 부모 컴포넌트의 상태가 업데이트됩니다.


/*

4-5번 하나로!


예제 5: 다중 자식 컴포넌트에 상태 전달하기
부모 컴포넌트가 여러 자식 컴포넌트에 동일한 상태를 props로 전달하여 각기 다른 방식으로 데이터를 표시하도록 할 수 있습니다.
*/
import React, { useState } from 'react';

function DisplayCounter(props) {
  return <p>Counter: {props.count}</p>;
}

function DisplayMessage(props) {
  return <p>{props.count > 5 ? "High count!" : "Keep going!"}</p>;
}

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <DisplayCounter count={count} />
      <DisplayMessage count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterApp;
//DisplayCounter와 DisplayMessage 컴포넌트는 동일한 count 값을 props로 전달받아 다른 방식으로 렌더링합니다.
//DisplayMessage는 count가 5보다 큰지 여부에 따라 조건에 맞는 메시지를 표시합니다.


/*

  [ 상태와 Props를 활용한 동적 목록 렌더링 ]

  -  상태를 관리하여 동적 목록을 생성하고, props를 통해 자식 컴포넌트에 전달하여 리스트를 렌더링할 수 있습니다.

*/
import React, { useState } from 'react';

function TodoItem({ item }) {
  return <li>{item}</li>;
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} item={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
// TodoList 컴포넌트는 todos 상태를 관리하고, 새로운 할 일을 추가할 수 있는 기능을 제공한다.
// TodoItem 컴포넌트는 props로 전달받은 할 일 목록을 하나씩 렌더링한다.



*
예제 8: 복잡한 상태를 여러 컴포넌트에 전달하기
상태를 여러 계층의 자식 컴포넌트로 전달해 데이터를 공유할 수 있습니다.
*/
import React, { useState } from 'react';

function GrandchildComponent({ message }) {
  return <p>Message from Parent: {message}</p>;
}

function ChildComponent({ message }) {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandchildComponent message={message} />
    </div>
  );
}

function ParentComponent() {
  const [message, setMessage] = useState("Hello from Parent!");

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} />
      <button onClick={() => setMessage("Updated Message!")}>Update Message</button>
    </div>
  );
}

export default ParentComponent;
/*
ParentComponent는 message 상태를 관리하며, 이를 ChildComponent에 전달합니다.
ChildComponent는 다시 message를 GrandchildComponent로 전달하여 여러 계층의 컴포넌트가 동일한 상태를 참조할 수 있게 합니다.
이렇게 다양한 예제를 통해 상태와 Props의 차이와 부모-자식 컴포넌트 간의 데이터 전달 방법을 실습하면, React 컴포넌트 간 데이터 관리를 쉽게 이해하고 활용할 수 있습니다.
*/