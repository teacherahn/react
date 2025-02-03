/*
예제 4: 사용자 입력 관리 (숫자 입력 필드)
입력 필드에 숫자를 입력하고, 입력된 값에 따라 상태를 업데이트합니다.
*/
import React, { useState } from 'react';

function NumberInput() {
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    setNumber(Number(event.target.value));
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleChange} />
      <p>Entered Number: {number}</p>
    </div>
  );
}

export default NumberInput;
//handleChange 함수가 onChange 이벤트와 연결되어 있으며, 사용자가 입력한 값이 number 상태에 실시간으로 반영됩니다.