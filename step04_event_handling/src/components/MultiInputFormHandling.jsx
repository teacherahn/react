/*

  ✅ 다중 입력 필드 관리하기
    
  - 여러 개의 입력 필드를 관리할 때는 useState를 여러 번 사용하거나, 객체 형태로 관리하는 방법이 있다.
  - 여러 필드 값을 관리하기 위해 formData 상태를 객체로 설정하고, name 속성을 사용해 어떤 필드가 업데이트되는지 확인하여 상태를 업데이트한다.
  - name 속성을 사용하여 어떤 필드가 업데이트되는지 확인하고, 상태를 업데이트한다.
  - 이벤트 객체의 target.name과 target.value를 사용하여 필드의 이름과 값을 확인한다.

*/
import React, { useState } from 'react';

function MultiInputFormHandling() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hp: "",
    isFirst: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name] : value }); // [name] : value -> 동적 키로 상태 업데이트
  };


 
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 이벤트 막기

    // 유효성 검사
    console.log(formData); 

    // fetch , axios, ajax 등을 이용하여 서버로 전송하는 코드가 들어갈 자리
    alert("폼이 제출되었습니다!");

  };

  return (
    <div>
      <h3>✅ 다중 입력 필드 관리하기</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
        </p>
        <p>
          <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label>     
        </p>
        <p>
          <label>HP: <input type="text" name="hp" value={formData.hp} onChange={handleChange} /></label>   
        </p>

        <p>
          <label>
            <input type="checkbox" name="isFirst" checked={formData.isFirst}  onChange={handleChange} /> is first?</label>
        </p>
     

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultiInputFormHandling;