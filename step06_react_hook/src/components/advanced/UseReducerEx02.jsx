import React, { useReducer, useRef } from "react";



// 리듀서 함수
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, { id: action.id, name: action.name }];
    case "DELETE":
      return [...state.filter(user => user.id !== action.id)];
    case "UPDATE":
      return state.map(user => user.id === action.id ? { ...user, name: action.name } : user); 
    default:
      return state;
  }
};

// 컴포넌트
const UseReducerEx02 = () => {
  const [users, dispatch] = useReducer(reducer, []);
  const userId = useRef(0);

  const handleClickCreate = () => {
    dispatch({ 
      type: "CREATE", 
      id : 1, 
      name : "mockUser"
    });
  }
  
  const handleClickDelete = () => {
    dispatch({ 
      type: "DELETE", 
      id : 1
    });
  }

  const handleClickUpdate = () => {
    dispatch({ 
      type: "UPDATE", 
      id : 1, 
      name : "(update)mockUser"  
    });
  }


  return (
    <div>
      <h3>✅useReducer</h3>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))} 
      <button onClick={handleClickCreate}>Add</button>
      <button onClick={handleClickDelete}>Delete</button>
      <button onClick={handleClickUpdate}>Update</button>
    </div>
  );
};

export default UseReducerEx02;