// 예제 3: useEffect를 활용한 의존성 관리 의존성 배열을 설정하여 특정 상태가 변경될 때만 실행되는 동작을 구현할 수 있습니다.
import React, { useState, useEffect } from 'react';

function NameGreeting() {

  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (name) {
      setGreeting(`Hello, ${name}!`);
    }
  }, [name]); // Run only when 'name' changes
  // name 상태가 변경될 때만 useEffect가 실행되도록 의존성 배열에 name을 설정했습니다.
  // 입력된 이름에 따라 인사말이 업데이트됩니다.

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{greeting}</p>
    </div>
  );
}

export default NameGreeting;


/*
지피짱 참고

useEffect는 클래스형 컴포넌트에서 각각 별도로 구현했던 componentDidMount, componentDidUpdate, **componentWillUnmount**의 역할을 하나의 함수로 수행할 수 있습니다.

비유하자면:

componentDidMount, componentDidUpdate, componentWillUnmount가 각각 별개의 도구(드릴, 톱, 망치)라면, useEffect는 이 모든 기능을 가진 스위스 군용 칼과 같습니다. 상황에 따라 필요에 맞게 다용도로 사용할 수 있습니다.


componentDidMount → 컴포넌트가 처음 화면에 렌더링될 때 실행 ,, 공연 준비하기
componentDidUpdate → 특정 값이 변경될 때 실행, 배우가 대사 변경
componentWillUnmount → 컴포넌트가 사라지기 전에 정리 작업 실행 , 공연 종료 후 정리 작업

import React, { useState, useEffect } from 'react';

function ShowCounter() {
  const [count, setCount] = useState(0);

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log(`현재 카운트: ${count}`);

    // componentWillUnmount
    return () => {
      console.log("컴포넌트가 사라지기 전에 정리합니다.");
    };
  }, [count]); // count가 변경될 때마다 실행

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ShowCounter;

*/