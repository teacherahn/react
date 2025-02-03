/*
예제 6: 라디오 버튼 onChange로 선택 항목 관리하기
여러 개의 라디오 버튼 중 하나를 선택하고, 선택된 값을 상태로 관리합니다.
*/
import React, { useState } from 'react';

function RadioButtonExample() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h3>Select an option:</h3>
      <label>
        <input type="radio" value="Option 1" checked={selectedOption === "Option 1"} onChange={handleOptionChange} />
        Option 1
      </label>
      <label>
        <input type="radio" value="Option 2" checked={selectedOption === "Option 2"} onChange={handleOptionChange} />
        Option 2
      </label>
      <label>
        <input type="radio" value="Option 3" checked={selectedOption === "Option 3"} onChange={handleOptionChange} />
        Option 3
      </label>
      <p>Selected: {selectedOption}</p>
    </div>
  );
}

export default RadioButtonExample;
// 라디오 버튼의 선택된 값이 selectedOption 상태에 저장되며, onChange 이벤트로 선택된 옵션을 변경할 수 있습니다.