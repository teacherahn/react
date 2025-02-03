/*

  [ 클래스형 컴포넌트의 생명주기 메서드 이해 ]

    React에서 컴포넌트 생명주기는 컴포넌트가 생성, 업데이트, 제거될 때 일어나는 일련의 단계를 의미한다. 
    클래스형 컴포넌트에서는 생명주기 메서드로 관리할 수 있으며, 
    함수형 컴포넌트에서는 useEffect 훅을 사용해 생명주기를 관리합니다.

    - 클래스형 컴포넌트는 특정 시점에 호출되는 다양한 생명주기 메서드를 통해 컴포넌트의 상태를 제어할 수 있습니다.

    - 생명주기 메서드 종류
    1) componentDidMount: 컴포넌트가 처음 화면에 렌더링된 직후 호출됩니다. 보통 API 호출, 타이머 설정 등의 초기 작업에 사용됩니다.
    2) componentDidUpdate: 컴포넌트가 업데이트된 직후 호출됩니다. 상태 또는 props가 변경될 때 실행되어, 변경된 상태에 맞춰 추가 작업을 수행할 수 있습니다.
    3) componentWillUnmount: 컴포넌트가 화면에서 제거되기 직전에 호출됩니다. 리소스를 정리하거나 타이머를 해제하는 등의 작업에 사용됩니다.

*/


// 예제 1: componentDidMount로 API 호출하기
import React, { Component } from 'react';

class UserList extends Component {
  state = {
    users: [],
  };

  // componentDidMount를 사용해 컴포넌트가 렌더링된 직후 API에서 데이터를 가져옵니다.
  // componentDidMount에서 API를 호출하고 데이터를 가져와 users 상태에 저장합니다.
  // 컴포넌트가 처음 렌더링될 때만 실행되므로, 불필요한 API 호출을 방지할 수 있습니다.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <ul>
        {this.state.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default UserList;