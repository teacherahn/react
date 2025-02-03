// 예제 8: useMemo를 사용한 계산된 값 캐싱 , useMemo는 특정 값이 변경될 때만 계산을 수행하여 성능을 최적화할 수 있습니다.
import React, { useState, useMemo } from 'react';

function ExpensiveCalculationExample() {

  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  // useMemo를 사용해 특정 값이 변하지 않으면 이전 계산 결과를 캐싱하여 불필요한 계산을 방지합니다.
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]); // number 값이 변경될 때만 expensiveCalculation이 다시 계산됩니다.

  return (
    <div>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default ExpensiveCalculationExample;