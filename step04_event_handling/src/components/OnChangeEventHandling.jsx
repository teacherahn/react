/*

  ✅ onChange Event Handling
  
  - React에서 입력 요소의 값을 제어하려면 onChange 이벤트를 사용한다.
  - onChange 이벤트는 입력 요소의 값이 변경될 때마다 발생한다.
  - 입력 요소의 값을 업데이트하려면 이벤트 객체의 target.value를 사용한다.

*/
import React, { useState } from 'react';

const OnChangeEventHandling = () => {

  const [text, setText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [checkedOption, setCheckedOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

   
  //handleChange 함수가 onChange 이벤트로 연결되어, 입력된 값이 text 상태에 실시간으로 업데이트된다.
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // 라디오 버튼의 선택된 값이 selectedOption 상태에 저장되며, onChange 이벤트로 선택된 옵션을 변경할 수 있다.
  const handleRadioChange = (event) => {
    setCheckedOption(event.target.value);
  };

  //selectedFruit 상태가 선택된 옵션을 저장하며, onChange 이벤트로 선택된 값을 실시간으로 업데이트한다.
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <h3>✅ OnChange Event Handling</h3>
      <div>
        Text: <input type="text" onChange={handleChange} />
        <p>Input Text: {text}</p>
      </div>
      <hr/>

      <div>
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> Check!
          <p>{isChecked ? "😊" : "😢"}</p>
        </label>
      </div>
      <hr />

      <div>
        <label>
          <input type="radio" value="option1" name="options" onChange={handleRadioChange} />
          Option 1
        </label>
        <label>
          <input type="radio" value="option2" name="options" onChange={(e) => handleRadioChange(e)} />
          Option 2
        </label>
        <label>
          <input type="radio" value="option3" name="options" onChange={handleRadioChange} />
          Option 3
        </label>
        <p>Checked : {checkedOption}</p>
      </div>
      <hr />

      <div>
        <label>
          Choose a Option: <br/>
          <select onChange={handleSelectChange}>
            <option value="">none</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <p>Selected Option: {selectedOption}</p>
      </div>

    </>
  );
}

export default OnChangeEventHandling;
