/*

    ✅ 다양한 상태 관리

    - useState를 사용하여 숫자, 문자열, 불리언, 객체, 배열 상태를 관리할 수 있다.
    - useState를 여러 번 사용하여 여러 상태를 관리할 수 있다.
  
*/

const StateEx03 = () => {

    // 숫자 상태
    // 문자열 상태
    // 불리언 상태
    // 객체 상태 (초기값 설정)
    // 배열 상태
  
    return (
      <div>
        <h3>✅ 다양한 상태 관리</h3>
        <p>
          숫자 상태: 
          <button>increment</button>
        </p>
        <p>
            글자 상태: 
            <input
              type="text"
              placeholder="텍스트 입력"
          />
        </p>
        <p>
            불리언 상태: "✅" "❌"
            <button>
                Click
            </button>
        </p>
        <p>
            객체 : 
            <button>포스트 변경</button>
        </p> 
        <p>배열 :
          <button>
            포스트리스트 변경
          </button>
        </p>
      </div>
    );
  };

  export default StateEx03;