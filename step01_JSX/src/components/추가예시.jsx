조건부 렌더링과 리스트 렌더링에 대해 다양한 예시를 통해 설명해 보겠습니다. 조건부 렌더링에는 if 조건과 삼항 연산자를 활용하고, 리스트 렌더링에서는 map 메서드를 사용해 배열을 반복 렌더링하는 방법을 다룹니다.

조건부 렌더링 예제
예제 1: if 조건을 사용한 간단한 조건부 렌더링
로그인 상태에 따라 다른 메시지를 보여주는 예제입니다.

코드
jsx
코드 복사
import React, { useState } from 'react';

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome back!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please sign in.</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
}

export default Greeting;
설명
로그인 상태에 따라 서로 다른 메시지와 버튼이 렌더링됩니다.
isLoggedIn이 true이면 "Welcome back!" 메시지와 로그아웃 버튼이 표시되고, false이면 "Please sign in." 메시지와 로그인 버튼이 나타납니다.
예제 2: 삼항 연산자를 활용한 간단한 조건부 렌더링
삼항 연산자를 사용하여 로그인 상태에 따라 다른 버튼 텍스트를 보여주는 예제입니다.

코드
jsx
코드 복사
import React, { useState } from 'react';

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <p>{isLoggedIn ? "Logged in" : "Not logged in"}</p>
    </div>
  );
}

export default LoginButton;
설명
isLoggedIn 상태에 따라 삼항 연산자를 사용해 버튼 텍스트가 변경됩니다.
isLoggedIn이 true이면 "Logout"이, false이면 "Login"이 버튼에 표시됩니다.
예제 3: 특정 조건에 따라 컴포넌트 숨기기
입력한 값이 길면 경고 메시지를 표시하는 예제입니다.

코드
jsx
코드 복사
import React, { useState } from 'react';

function WarningMessage() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      {text.length > 10 && <p style={{ color: "red" }}>Text is too long!</p>}
    </div>
  );
}

export default WarningMessage;
설명
입력 필드에 10자 이상의 텍스트를 입력하면 조건부로 경고 메시지가 나타납니다.
text.length > 10 조건을 만족하면 <p> 태그에 경고 메시지를 표시합니다.
예제 4: && 연산자를 활용한 조건부 렌더링
특정 조건이 참일 때만 컴포넌트를 렌더링합니다.

코드
jsx
코드 복사
import React, { useState } from 'react';

function ShowSecret() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Secret" : "Show Secret"}
      </button>
      {show && <p>The secret code is 1234</p>}
    </div>
  );
}

export default ShowSecret;
설명
show 상태가 true일 때만 <p>The secret code is 1234</p>가 렌더링됩니다.
&& 연산자를 사용해 간단히 조건부 렌더링을 구현했습니다.
리스트 렌더링 예제
예제 5: 배열을 map을 사용하여 반복 렌더링하기
배열에 저장된 항목을 리스트로 출력하는 기본적인 예제입니다.

코드
jsx
코드 복사
import React from 'react';

function NameList() {
  const names = ["Alice", "Bob", "Charlie", "Dave"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default NameList;
설명
names 배열의 각 요소를 map을 통해 <li> 태그로 렌더링합니다.
각 리스트 항목에 key 속성으로 index를 부여해 React가 각 요소를 구분할 수 있도록 했습니다.
예제 6: 객체 배열을 map을 사용하여 리스트 렌더링하기
배열이 객체로 이루어진 경우 map을 활용해 특정 속성을 리스트로 출력할 수 있습니다.

코드
jsx
코드 복사
import React from 'react';

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 600 },
  ];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
설명
products 배열의 각 객체에서 name과 price 값을 추출하여 <li> 태그로 표시합니다.
객체의 id 값을 key로 사용해 각 요소가 고유하게 구분됩니다.
예제 7: 조건부 렌더링을 포함한 리스트 렌더링
상품 리스트에서 특정 조건에 따라 할인을 표시하는 예제입니다.

코드
jsx
코드 복사
import React from 'react';

function DiscountedProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1500, isDiscounted: true },
    { id: 2, name: "Phone", price: 800, isDiscounted: false },
    { id: 3, name: "Tablet", price: 600, isDiscounted: true },
  ];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          {product.isDiscounted && <span> (Discounted!)</span>}
        </li>
      ))}
    </ul>
  );
}

export default DiscountedProductList;
설명
isDiscounted가 true인 상품만 "(Discounted!)" 표시가 추가됩니다.
삼항 연산자를 사용하여 isDiscounted 조건에 따라 할인 표시가 조건부로 렌더링됩니다.
예제 8: 리스트에서 동적 상태 관리하기
리스트에서 선택한 항목을 강조 표시하는 예제입니다.

코드
jsx
코드 복사
import React, { useState } from 'react';

function SelectableList() {
  const items = ["Apple", "Banana", "Cherry", "Date"];
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => handleClick(index)}
          style={{
            color: selectedIndex === index ? "blue" : "black",
            fontWeight: selectedIndex === index ? "bold" : "normal",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default SelectableList;
설명
selectedIndex 상태를 통해 사용자가 클릭한 항목을 강조 표시합니다.
클릭된 항목의 index가 selectedIndex와 같으면 글자가 파란색과 굵은 글씨로 강조됩니다.
예제 9: filter와 map을 함께 사용해 조건부 리스트 렌더링하기
특정 조건을 만족하는 항목만 리스트에 표시합니다.

코드
jsx
코드 복사
import React from 'react';

function FilteredProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 600 },
  ];

  return (