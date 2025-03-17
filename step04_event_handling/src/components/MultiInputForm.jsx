/*

  [ 다중 입력 필드 관리하기 (이름, 이메일) ]
    
  - 여러 개의 입력 필드가 있는 경우 각각의 필드가 업데이트될 때마다 상태를 업데이트하도록 할 수 있다.

*/
import React, { useState } from 'react';

function MultiInputForm() {
  
  
  // 여러 필드 값을 관리하기 위해 formData 상태를 객체로 설정하고, name 속성을 사용해 어떤 필드가 업데이트되는지 확인하여 상태를 업데이트한다.
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name = " + name);
    console.log("value = " + value);
    console.log("");
  };

  return (
    <div>
      <p>
      <label>
        Name: <input type="text" name="name"  onChange={handleChange} />
      </label>
      </p>
      <p>
      <label>
        Email: <input type="email" name="email" onChange={handleChange} />
      </label>
      </p>
      <p>
      <label>
        HP:  <input type="text" name="hp" onChange={handleChange} />
      </label>
      </p>
    </div>
  );
}

export default MultiInputForm;