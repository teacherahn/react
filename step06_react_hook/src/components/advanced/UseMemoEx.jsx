// 예제 8: useMemo를 사용한 계산된 값 캐싱 , useMemo는 특정 값이 변경될 때만 계산을 수행하여 성능을 최적화할 수 있습니다.

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