/* 컴포넌트 라이프 사이클 */

/*
import { Component, useEffect, useState } from "react";
import React, { Component } from 'react';
class UserList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <ul>
        {this.state.users.map((user) => (
          <li key={user.id}>{user.name} / {user.email} / {user.address.city}</li>
        ))}
      </ul>
    );
  }
}

export default UserList;
*/


/*
import { Component } from "react";


class Counter extends Component {
    
    state = { // 변수를 만듬, 왜 {}이렇게 했지? 딱히 없음
        count : 0,
    }

    componentDidUpdate(prevProps , prevState) {
        if (prevState.count !== this.state.count) { // 이전(업데이트하고 난후)과 현재 count가 다르면
            console.log(`counter has chanaged to : ${this.state.count}`)
            console.log("이전 : " + prevState.count , prevState)
            console.log("나웅: " + this.state.count )
        }
    }

    increment = () => { // increament함수 호출
        this.setState({count:this.state.count + 1});
    }

    render() {
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>

        );
    }


}

export default Counter;
*/

/*
class Timer extends Component {
    state = {
        seconds : 0,
    }

    componentDidMount() {
        this.timer = setInterval(
            () => {
                this.setState((prevState) => ({seconds : prevState.seconds+1}))
            } , 1000
        ); 
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Timer cleared");
    }

    render() {
        return <p>Elapsed time : {this.state.seconds} seconds</p>
    }


}

export default Timer;
*/

/*
import { useState,useEffect } from "react";

function Counter() {

    const [count, setCount] = useState(0);
    
    // useEffect 안의 코드는 컴포넌트가 화면에 렌더링될 때마다 실행됩니다.
    useEffect(() => {
        console.log("count has changed to : " + count);
    } ,[count]); // 두번째 배열이 뭐하는거임? > (해결)[] 처음 한번 , []안의 값이 바뀔때 사용
    //의존성 배열(Dependency Array)
    //useEffect의 두 번째 인수로 의존성 배열을 사용해 언제 실행할지를 제어할 수 있습니다.

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>

    );

}

export default Counter;
*/


/*
import { useState,useEffect } from "react";
function RenderLogger() {
    const[count, setCount] = useState(0);
    useEffect(()=>{
        console.log("이건 간단한 예시인듯")
    });

    return (
        <>
            <p>render count : {count}</p>
            <button onClick={() => setCount(count+2)}>+2</button>
        </>
    )

}

export default RenderLogger;
*/
/*
// 이 예시는 왜 하는거?
import { useState,useEffect } from "react"; // 좋은경험, use모두 import를 해야 사용할 수 있다.
function WindowSizeTracker() {

    const[windowWidth , setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () => setWindowWidth(window.innerWidth);
        
        window.addEventListener("resize" , handleResize);
        
        return () => {
            window.removeEventListener("resize"  , handleResize);
            console.log("Event listner removed");
        }

    },[]);

    return <p>Window width : {windowWidth}</p>

}
export default WindowSizeTracker;
*/

import { useEffect, useState } from "react";
function MultiDependencyEffect() {
    const [name , setName] = useState("");
    const [age, setAge] = useState(0);

    useEffect(() => {
        console.log("name : " + name + " / age : " + age);
    } , [name ,age]);
    return (
        <div>
            <input 
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            
            <input type="number" placeholder="Enter age"
            value={age} onChange={(e) => setAge(Number(e.target.value))}/>
        </div>

    );

}

export default MultiDependencyEffect;













