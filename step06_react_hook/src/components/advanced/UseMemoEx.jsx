/*

  ✅ React Advanced Hook (useMemo)

  - useMemo는 계산량이 많은 함수의 반환값을 캐싱하여 성능을 최적화하는 Hook이다.
  - useMemo는 두 번째 인자로 전달된 의존성 배열이 변경될 때만 함수를 실행하고, 그렇지 않으면 이전에 계산된 값을 반환한다.
  - useMemo는 렌더링 중에 실행되며, 렌더링 중에만 실행되기 때문에 렌더링 중에는 값을 반환할 수 없다.
  - useMemo(() => 함수, [의존성 배열]) : 함수를 실행하고, 의존성 배열이 변경될 때만 함수를 실행한다.

*/

import { useState, useMemo, useRef } from 'react';

const UseMemoEx = () => {
  const [var1, setVar1] = useState(0);  // 계산에 영향을 주는 상태
  const [var2, setVar2] = useState(0);  // 리렌더링만 유도하는 상태

  const idx = useRef(1); // 계산이 실행될 때마다 누적되는 값

  // 무거운 계산을 시뮬레이션
  const simulateExpensiveCalculation = () => {
    console.log("🔥 계산 발생!");
    for (let i = 0; i < 10000000; i++) {
      idx.current += i;
    }
    return idx.current;
  };

  // useMemo를 사용해 var1이 변경될 때만 계산 실행
  const memoizedResult = useMemo(() => simulateExpensiveCalculation(), [var1]);

  return (
    <div style={{ fontFamily: 'Arial', lineHeight: '1.6', padding: '20px' }}>
      <h2>🧠 useMemo 캐싱 실험</h2>
      <p><strong>var1 (계산 트리거):</strong> {var1}</p>
      <p><strong>var2 (단순 리렌더):</strong> {var2}</p>
      <p><strong>계산 결과 (idx.current):</strong> {memoizedResult}</p>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setVar1(var1 + 1)} style={{ marginRight: '10px' }}>
          🚀 var1 변경 (계산 발생)
        </button>
        <button onClick={() => setVar2(var2 + 1)} style={{ marginRight: '10px' }}>
          🔁 var2 변경 (캐싱 테스트)
        </button>
        <button onClick={() => (idx.current = 1)}>
          ♻️ 계산값 초기화
        </button>
      </div>

      <p style={{ marginTop: '20px', color: 'gray' }}>
        콘솔을 열어 "🔥 계산 발생!" 로그가 언제 나오는지 확인해보세요!
      </p>
    </div>
  );
};

export default UseMemoEx;