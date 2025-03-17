/*

  [ onChange 이벤트로 입력 값 실시간으로 반영하기 ]
  
    - onChange 이벤트를 통해 입력 필드에서 입력된 값이 실시간으로 상태에 반영되도록 한다.

*/
import React, { useState } from 'react';

const TextInput = () => {

  const [text, setText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");
   
  //handleChange 함수가 onChange 이벤트로 연결되어, 입력된 값이 text 상태에 실시간으로 업데이트된다.
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // 라디오 버튼의 선택된 값이 selectedOption 상태에 저장되며, onChange 이벤트로 선택된 옵션을 변경할 수 있다.
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //selectedFruit 상태가 선택된 옵션을 저장하며, onChange 이벤트로 선택된 값을 실시간으로 업데이트한다.
  const handleSelectChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <>
    <div>
      Text: <input type="text" onChange={handleChange} />
      <p>Input Text: {text}</p>
    </div>
    <hr />
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> Check!
        <p>{isChecked ? "Thank you for agreeing!" : "Please agree to terms"}</p>
      </label>
    </div>
    <hr />
    <div>
      <label>
        <input type="radio" value="Option 1" checked={selectedOption === "Option 1"} onChange={handleOptionChange} />
        Option 1
      </label>
      <label>
        <input type="radio" value="Option 2" checked={selectedOption === "Option 2"} onChange={handleOptionChange} />
        Option 2
      </label>
      <label>
        <input type="radio" value="Option 3"checked={selectedOption === "Option 3"} onChange={handleOptionChange} />
        Option 3
      </label>
      <p>Selected: {selectedOption}</p>
    </div>
    <hr />
    <div>
      <label>
        Choose a fruit: <br/>
        <select value={selectedFruit} onChange={handleSelectChange}>
          <option value="">Select</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
        </select>
      </label>
      <p>Selected fruit: {selectedFruit}</p>
    </div>
    <div>
      <input type="number" value={number} onChange={handleChange} />
      <p>Entered Number: {number}</p>
    </div>

    </>
  );
}

export default TextInput;
