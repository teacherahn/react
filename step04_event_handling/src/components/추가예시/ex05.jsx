/*
예제 5: Checkbox onChange 이벤트로 선택 상태 관리하기
체크박스를 사용해 상태를 업데이트하며, 체크 여부에 따라 메시지를 변경합니다.
*/
import React, { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  //체크박스의 선택 상태를 isChecked로 관리하며, onChange 이벤트를 통해 체크박스가 체크되었는지 여부를 반영한다.
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        Agree to terms
      </label>
      <p>{isChecked ? "Thank you for agreeing!" : "Please agree to terms"}</p>
    </div>
  );
}

export default CheckboxExample;