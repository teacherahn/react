
/*

    ✅ 속성(Props) 심화

    - props를 통해 함수 , 객체  , 배열 , 이벤트 , 스타일 등 다양한 데이터를 전달할 수 있다.
  
    [ 예시 ]
    - 함수 props: onClick={setCount}
    - 객체 props: user={{name: "mockUser", email: "}}
    - 배열 props: data={["a", "b", "c"]}  
    - 이벤트 props: onClick={handleClick}
    - 스타일 props: style={{color: "blue"}}

*/

import { useState } from "react";



// 객체 props 추가 예시
const ObjectButton = ({ user }) => {
  return <p>{user.id} : {user.name}</p>;
}


// 배열 props 추가 예시
const ArrayButton = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.id} : {user.name}</li>
      ))}
    </ul>
  );
}

// 스타일 props 추가 예시
// return <p style={props.myStyle}>{prop.text}</p>;
//const StyledText = (props) => {
const StyledText = ({ text , myStyle }) => {
  return <p style={myStyle}>{text}</p>;
};

// 이벤트 props 추가 예시

//const EventButton = (props) => {
//return <button onClick={props.onClickEvent}>Child</button>;
const EventButton = ({ onClickEvent }) => {
  return <button onClick={onClickEvent}>Child</button>;
}

// 함수 props 추가 예시
const FunctionButton = ({ func}) => {
  return <button onClick={func}>Child</button>;
}

const PropsEx02 = () => {
  // 함수 전달 예시
  const [count, setCount] = useState(0);

  // 이벤트 전달 예시
  const handleClick = () => {
    alert("Clicked!");
  }

  return (
    <>

      <h3>✅ Props로 객체 전달</h3>
      <ObjectButton user={{id : 1 , name : "mockUser"}}/>
      <hr/>

      <h3>✅ Props로 배열 전달</h3>
      <ArrayButton users={[{id : 1 , name : "mockUser1"} , 
                          {id : 2 , name : "mockUser2"},
                          {id : 3 , name : "mockUser3"}
                        ]
                        }/>
      <hr/>


      <h3>✅ Props로 스타일 전달</h3>
      <StyledText text="Styled Text" myStyle={{color: "gold"}} />
      <StyledText text="Styled Text" myStyle={{color: "silver"}} />
      <hr/>

      <h3>✅ Props로 이벤트 전달</h3>
      <button onClick={handleClick}>Parent</button>
      <EventButton onClick={handleClick} />
      <hr/>

      <h3>✅ Props로 함수 전달 {count}</h3>
      <button onClick={() => setCount(count + 1)}>Parent</button>
      <FunctionButton func={() => setCount(count+1)} />
    </>
  );
}

export default PropsEx02;

