폼 처리 및 사용자 입력 관리 예제
예제 1: 단일 입력 필드를 사용한 기본 폼 처리
간단한 폼을 사용해 사용자가 입력한 이름을 실시간으로 상태에 반영하는 예제입니다.

코드
jsx
코드 복사
import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;
설명
name 상태로 입력 필드의 값을 관리하며, onChange 이벤트를 통해 상태를 업데이트합니다.
폼 제출 시 handleSubmit 함수에서 alert를 통해 입력된 이름을 표시합니다.
예제 2: 다중 입력 필드의 상태 관리
사용자의 이름과 이메일을 입력받아 여러 개의 상태를 관리하는 예제입니다.

코드
jsx
코드 복사
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Data:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
설명
여러 입력 필드의 상태를 객체 형태로 관리합니다.
handleChange 함수에서 name 속성을 활용해 필드별로 상태를 업데이트할 수 있습니다.
예제 3: 선택 항목을 상태로 관리하기 (라디오 버튼)
라디오 버튼을 사용해 성별을 선택하고 선택된 값을 상태로 관리합니다.

코드
jsx
코드 복사
import React, { useState } from 'react';

function GenderForm() {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected Gender: ${gender}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="radio" name="gender" value="Male" onChange={handleChange} />
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="Female" onChange={handleChange} />
        Female
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default GenderForm;
설명
라디오 버튼의 선택된 값이 gender 상태에 저장되며, onChange로 선택 상태를 업데이트합니다.
예제 4: 체크박스로 다중 선택 상태 관리하기
체크박스를 사용해 여러 선택 항목을 배열로 관리하는 예제입니다.

코드
jsx
코드 복사
import React, { useState } from 'react';

function HobbiesForm() {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    setSelectedHobbies((prevHobbies) =>
      checked ? [...prevHobbies, value] : prevHobbies.filter((hobby) => hobby !== value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected Hobbies: ${selectedHobbies.join(", ")}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="checkbox" value="Reading" onChange={handleChange} />
        Reading
      </label>
      <label>
        <input type="checkbox" value="Gaming" onChange={handleChange} />
        Gaming
      </label>
      <label>
        <input type="checkbox" value="Cooking" onChange={handleChange} />
        Cooking
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HobbiesForm;
설명
체크된 항목은 selectedHobbies 배열에 추가되고, 체크 해제된 항목은 배열에서 제거됩니다.
제어 컴포넌트와 비제어 컴포넌트 예제
제어 컴포넌트 (Controlled Component) 예제
제어 컴포넌트는 상태로 폼 입력 값을 관리하는 컴포넌트입니다. 입력 필드가 value 속성으로 상태와 연결되어 있어 상태가 변경되면 입력 필드의 값도 함께 업데이트됩니다.

예제 5: 제어 컴포넌트로 관리하는 폼
입력 필드의 값을 상태로 관리하고, 상태가 업데이트될 때마다 입력 필드의 value가 반영됩니다.

코드
jsx
코드 복사
import React, { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
설명
입력 필드의 값은 inputValue 상태로 관리되며, 상태가 변경되면 value 속성을 통해 입력 필드에 반영됩니다.
제어 컴포넌트는 입력 값이 상태와 항상 일치하도록 유지합니다.
비제어 컴포넌트 (Uncontrolled Component) 예제
비제어 컴포넌트는 React의 상태가 아닌 ref를 사용하여 DOM 요소의 값을 직접 제어하는 방식입니다. 이 방법은 주로 입력 값이 폼 제출 시 한 번만 필요하거나 간단한 값 관리가 필요할 때 사용됩니다.

예제 6: 비제어 컴포넌트로 관리하는 폼
ref를 사용하여 입력 필드의 값을 가져와 비제어 방식으로 폼을 관리합니다.

코드
jsx
코드 복사
import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
설명
입력 필드의 값을 직접 관리하지 않고, 제출 시 inputRef.current.value로 가져옵니다.
React 상태가 아닌 DOM을 직접 참조하는 방식이므로 컴포넌트가 입력 필드의 값에 영향을 주지 않습니다.
예제 7: 비제어 컴포넌트와 기본값 설정
비제어 컴포넌트에서 defaultValue를 사용해 입력 필드의 기본값을 설정합니다.

코드
jsx
코드 복사
import React, { useRef } from 'react';

function DefaultUncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" ref={inputRef} defaultValue="Default Text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DefaultUncontrolledForm;
설명
defaultValue를 사용하여 초기 입력값을 설정했습니다. 이 값은 inputRef를 통해 가져올 수 있으며, 사용자에 의해 수정될 수 있습니다.
예제 8: 제어 컴포넌트와 비제어 컴포넌트의 차이점 확인하기
제어 컴포넌트와 비제어 컴포넌트를 함께 사용하여 차이를 비교합니다.

코드
jsx
코드 복사
import React, { useState, useRef } from 'react';

function ControlledVsUncontrolledForm() {
  const [controlledValue, setControlledValue] = useState("");
  const uncontrolledRef = useRef(null);

  const handleControlledChange = (event) => {
    setControlledValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Controlled: ${controlledValue}\nUncontrolled: ${uncontrolledRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Controlled Input:
        <input type="text" value={controlledValue} onChange={handleControlledChange} />
      </label>
      <br />
      <label>
        Uncontrolled Input:
        <input type="text" ref={uncontrolledRef} defaultValue="Default Text" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledVsUncontrolledForm;
설명
controlledValue는 제어 컴포넌트로 상태를 통해 관리되고, uncontrolledRef는 비제어 컴포넌트로 ref를 통해 직접 접근합니다.
두 방식의 입력 값이 폼 제출 시 alert로 확인됩니다.
이러한 예제들은 React에서 폼과 입력값을 관리하는 다양한 방법을 이해하는 데 도움을 줍니다. 제어 컴포넌트는 상태를 사용하여 입력 값을 실시간으로 관리하고, 비제어 컴포넌트는 ref를 통해 DOM 요소를 직접 제어합니다.