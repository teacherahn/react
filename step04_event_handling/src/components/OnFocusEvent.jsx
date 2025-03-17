/*


  [ 입력 필드의 onFocus 및 onBlur 이벤트 처리 ]

  - 입력 필드가 포커스를 얻거나 잃었을 때 이벤트를 처리할 수 있다.

*/

const OnFocusEvent = () => {

  const handleFocus = (event) => {
    console.log("Input is focused");
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log("");
  };

  const handleBlur = (event) => {
    console.log("Input is blurred");
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log("");
  };

  return (
    <div>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Click to focus"
      />
    </div>
  );
}

export default OnFocusEvent;