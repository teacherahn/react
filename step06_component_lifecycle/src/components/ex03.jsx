// 예제 3: componentWillUnmount로 타이머 정리하기
class Timer extends Component {
  state = {
    seconds: 0,
  };

  // componentDidMount에서 타이머를 설정해 매초 seconds 상태가 증가합니다.
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  // componentWillUnmount를 사용해 컴포넌트가 제거될 때 타이머를 해제하는 예제입니다.
  // componentWillUnmount에서 타이머를 해제해, 컴포넌트가 제거될 때 메모리 누수를 방지합니다.
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Timer cleared");
  }

  render() {
    return <p>Elapsed time: {this.state.seconds} seconds</p>;
  }
}

export default Timer;