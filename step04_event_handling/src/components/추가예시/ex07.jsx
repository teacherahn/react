/*

  [ 드롭다운 메뉴에서 선택된 값 관리하기 ]

    - 드롭다운 메뉴에서 선택된 값을 관리하고 상태에 반영한다.

*/

import React, { useState } from 'react';

function SelectExample() {
  const [selectedFruit, setSelectedFruit] = useState("");

  //selectedFruit 상태가 선택된 옵션을 저장하며, onChange 이벤트로 선택된 값을 실시간으로 업데이트한다.
  const handleSelectChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <div>
      <label>
        Choose a fruit:
        <select value={selectedFruit} onChange={handleSelectChange}>
          <option value="">Select</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
        </select>
      </label>
      <p>Selected fruit: {selectedFruit}</p>
    </div>
  );
}

export default SelectExample;