/*

  ✅ 다중 입력 필드 관리하기
    
  - 여러 개의 입력 필드를 관리할 때는 useState를 여러 번 사용하거나, 객체 형태로 관리하는 방법이 있다.
  - 여러 필드 값을 관리하기 위해 formData 상태를 객체로 설정하고, name 속성을 사용해 어떤 필드가 업데이트되는지 확인하여 상태를 업데이트한다.
  - name 속성을 사용하여 어떤 필드가 업데이트되는지 확인하고, 상태를 업데이트한다.
  - 이벤트 객체의 target.name과 target.value를 사용하여 필드의 이름과 값을 확인한다.

*/
function MultiInputFormHandling() {

 
  return (
    <div>
      <h3>✅ 다중 입력 필드 관리하기</h3>
      <form >
        <p>
          <label>Name: <input type="text" name="name"  /></label>
        </p>
        <p>
          <label>Email: <input type="email" name="email"  /></label>     
        </p>
        <p>
          <label>HP: <input type="text" name="hp" /></label>   
        </p>
        <p>
          <label>
            <input type="checkbox" name="isFirst" /> is first?</label>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultiInputFormHandling;