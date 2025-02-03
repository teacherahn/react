// 예제 2: componentDidUpdate로 상태 변화 감지하기
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  // componentDidUpdate를 사용해 특정 상태가 변경될 때마다 콘솔에 메시지를 출력합니다.
  // componentDidUpdate는 count 상태가 변경될 때마다 호출됩니다.
  // 이전 상태와 비교해 변경이 감지되면 콘솔에 새로운 count 값이 출력됩니다.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Count has changed to: ${this.state.count}`);
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
