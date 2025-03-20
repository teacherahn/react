
/*

  ✅ 제어 컴포넌트 (Controlled Component) 

    - 제어 컴포넌트는 React 상태(state)를 사용해서 입력값을 관리하는 방식
    - 입력값이 바뀔 때마다 상태가 업데이트되고, 그 상태를 기반으로 화면에 보여준다.
    - React의 상태에 의해 제어되므로 사용자 입력을 제한하거나 검증할 수 있다.
    - React의 상태를 업데이트하고, 입력값을 제어할 수 있다.
   

  ✅ 비제어 컴포넌트 (Uncontrolled Component)

    - 비제어 컴포넌트는 React 상태 대신 DOM 자체에서 입력값을 관리하는 방식
    - React의 상태에 의존하지 않고, DOM 요소에 직접 접근하여 입력값을 가져온다.
    - 제어가 React의 상태에 의해 제한되지 않으며, 기본 HTML 폼과 비슷한 방식이다.
    - 간단한 경우 유용, 상태 관리가 필요 없을 때 사용한다.
    - ref를 사용하여 입력값에 접근한다.
    - current 프로퍼티를 사용하여 ref에 연결된 DOM 요소에 접근한다.
   
*/


function ControlledComponent() {

  // 제어 컴포넌트: React의 상태를 사용하여 관리
 
  
  // 비제어 컴포넌트: ref를 사용하여 DOM 요소에 직접 접근
  // ref를 만들어서 입력 요소에 연결
 
 
  return (
    <>
      <h3>✅ Controlled Component</h3>
      <div>
        <input
          type="text"
          placeholder="상태관리중"
        />
        <p>재 렌더링:</p>
      </div>
      <h3>✅ Uncontrolled Component</h3>
      <div>
        <p>금액 : <input
          type="text"
          placeholder="상태관리 x"
        />
        </p>
        <p>
          부가세 포함 금액 : <input
            type="text"
            placeholder="상태관리 x"
            readOnly
        />
        </p>
        <button>입력값 확인</button>
      </div>
    </>
  );
}

export default ControlledComponent;