/*
 함수형 컴포넌트에서 useEffect로 생명주기 관리하기
  함수형 컴포넌트에서는 useEffect 훅을 사용해 생명주기 메서드 역할을 대신할 수 있습니다. 
  useEffect는 의존성 배열을 활용하여 특정 시점에 실행할 작업을 설정할 수 있습니다.
  예제 4: useEffect로 컴포넌트가 마운트될 때만 실행하기
  API 호출이나 초기화 작업을 컴포넌트가 마운트될 때 한 번만 실행합니다.
*/

import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); // Empty dependency array

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;

/*
빈 배열 []을 의존성 배열로 설정해, useEffect가 컴포넌트가 처음 마운트될 때만 실행되도록 했습니다.
componentDidMount와 동일한 역할을 하며, 한 번만 실행되는 초기 작업에 적합합니다.
*/

/*
예제 5: useEffect로 상태 변화 감지하기
특정 상태가 변경될 때마다 useEffect가 실행됩니다.
*/

import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]); // Depend on 'count'

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
/*
count 상태가 변경될 때마다 useEffect가 실행되어 콘솔에 새로운 count 값이 출력됩니다.
componentDidUpdate와 유사하게 특정 상태가 업데이트될 때마다 동작을 수행할 수 있습니다.
*/

/*
예제 6: useEffect로 컴포넌트가 언마운트될 때 정리하기
컴포넌트가 언마운트될 때 특정 작업을 정리하는 componentWillUnmount 역할을 수행하는 예제입니다.
*/

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup function
      console.log("Timer cleared");
    };
  }, []);

  return <p>Elapsed time: {seconds} seconds</p>;
}

export default Timer;

/*
useEffect 내부에서 타이머를 설정하고, return으로 정리 함수(Cleanup function)를 반환하여 컴포넌트가 언마운트될 때 타이머를 해제합니다.
componentWillUnmount와 동일하게 컴포넌트가 제거될 때 메모리 누수를 방지할 수 있습니다.
*/

/*
예제 7: 의존성 배열 없이 useEffect 사용하기   (6-7 묶어라)
의존성 배열을 설정하지 않으면, useEffect가 매번 렌더링될 때마다 실행됩니다.
*/

import React, { useState, useEffect } from 'react';

function RenderLogger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  }); // No dependency array

  return (
    <div>
      <p>Render count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
}

export default RenderLogger;
/*
설명
의존성 배열이 없으므로, 상태가 업데이트되거나 props가 변경될 때마다 useEffect가 실행됩니다.
useEffect가 컴포넌트 렌더링마다 호출되며, 상태나 props가 바뀔 때마다 특정 동작을 실행하고자 할 때 유용합니다.
*/

/*
예제 8: useEffect로 윈도우 이벤트 리스너 관리하기
윈도우 사이즈를 추적하고, 컴포넌트가 언마운트될 때 이벤트 리스너를 제거하는 예제입니다.
*/


import React, { useState, useEffect } from 'react';

function WindowSizeTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener removed");
    };
  }, []);

  return <p>Window width: {windowWidth}px</p>;
}

export default WindowSizeTracker;
/*
설명
resize 이벤트를 설정해 창 크기 변화에 따라 windowWidth 상태를 업데이트합니다.
언마운트될 때 removeEventListener를 호출하여 메모리 누수를 방지합니다.
/*

/*
예제 9: 의존성 배열을 사용해 특정 상태와 생명주기 단계 결합하기
두 개 이상의 상태에 따라 useEffect가 조건부로 실행되는 예제입니다.
*/

import React, { useState, useEffect } from 'react';

function MultiDependencyEffect() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log(`Name or age has changed - Name: ${name}, Age: ${age}`);
  }, [name, age]); // Triggered only when name or age changes

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
    </div>
  );
}

export default MultiDependencyEffect;
/*
설명
name이나 age가 변경될 때마다 useEffect가 실행됩니다.
useEffect를 통해 두 개 이상의 상태를 감지하고, 상태가 변경될 때마다 특정 작업을 수행할 수 있습니다.
이러한 예제를 통해 클래스형 컴포넌트와 함수형 컴포넌트의 생명주기 관리 방법을 비교해 볼 수 있습니다. useEffect는 componentDidMount, componentDidUpdate, componentWillUnmount 메서드의 역할을 모두 수행할 수 있어 함수형 컴포넌트에서 다양한 생명주기 관리를 가능하게 합니다.
*/



