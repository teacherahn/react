import React from "react";

/*
   
    ✅ JSX (JavaScript XML)
    
    - JSX는 React에서 사용되는 JavaScript 확장 문법이다. 
    - JavaScript 코드 안에서 HTML과 유사한 문법을 사용할 수 있게 한다.
    - JSX는 UI 요소를 정의하고 표현하는 데 중요한 역할을 한다.
    - React 컴포넌트 작성 시 HTML처럼 보이지만 JavaScript 코드로 변환된다.
    
*/



const ComponentTest = () => { // 컴포넌트 이름은 반드시 대문자로 시작해야한다.
    
    /*
    
        # React.createElement(type, props, ...children)

            type        : 생성할 HTML 태그 또는 React 컴포넌트 이름 (예: "h1")
            props       : 해당 태그에 전달할 속성 (예: { id: "myId", className: "myClass" }) 또는 null로 설정 가능
            ...children : 태그 안에 들어갈 내용(텍스트 또는 다른 React 요소)

            return React.createElement("div", null, 
                                        React.createElement("h1" , null , "JSX") , 
                                        React.createElement("p" , null , "JSX는 React에서 사용되는 JavaScript 확장 문법입니다." ));
            
            - 일반 자바스크립트만 사용한 코드와 JSX로 작성한 코드를 한번 비교해 봐도 
              JSX를 사용하는 편이 더 가독성이 높고 작성하기 쉽다.
    */

   // 아래와 같이 사용
    return (
        <div>
            <h1>JSX</h1>
            <p>JSX는 React에서 사용되는 JavaScript 확장 문법입니다.</p>
        </div>            
    );

}

export default ComponentTest; // export 하여 App에서 구현한다.
