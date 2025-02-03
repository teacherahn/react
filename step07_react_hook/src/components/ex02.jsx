// 예제 2: useEffect를 사용한 기본 생명주기 관리
// useEffect는 컴포넌트의 생명주기를 관리하는 훅으로, 
// 컴포넌트가 처음 마운트될 때, 상태가 업데이트될 때, 또는 언마운트될 때 특정 작업을 수행할 수 있습니다.

import React, { useState, useEffect } from 'react';

function Timer() {

  const [count, setCount] = useState(0); 

  useEffect(() => { // useEffect 안에서 타이머를 설정해 1초마다 count가 증가합니다.
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount // return문에서 clearInterval을 호출하여 타이머가 컴포넌트가 언마운트될 때 정리됩니다.
  }, []);

  return <p>Timer: {count} seconds</p>;

}

export default Timer;