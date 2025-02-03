import React from "react";

/*
   
    [ JSX (JavaScript XML) ]
    
    - JSX는 React에서 사용되는 JavaScript 확장 문법이다. 
    - JavaScript 코드 안에서 HTML과 유사한 문법을 사용할 수 있게 한다.
    - JSX는 UI 요소를 정의하고 표현하는 데 중요한 역할을 한다.
    - React 컴포넌트 작성 시 HTML처럼 보이지만 JavaScript 코드로 변환된다.
    
*/



function MyComponent() { // 컴포넌트 이름은 대문자로 시작해야한다.
    
    /*
    
        # React.createElement(type, props, ...children)
            type: 생성할 HTML 태그 또는 React 컴포넌트 이름 (예: "h1")
            props: 해당 태그에 전달할 속성 (예: { id: "myId", className: "myClass" }) 또는 null로 설정 가능
            ...children: 태그 안에 들어갈 내용(텍스트 또는 다른 React 요소)

             일반 자바스크립트만 사용한 코드와 JSX로 작성한 코드를 한번 비교해 봐도 JSX를 사용하는 편이 더 가독성이 높고 작성하기 쉽다고 느겨질 것입니다. 

            return React.createElement("div", null, 
                                        React.createElement("h1" , null , "JSX") , 
                                        React.createElement("p" , null ,"JSX는 React에서 사용되는 JavaScript 확장 문법이다." ));

    */

   // 아래와 같이 사용
    return (
        <div>
            <h1>JSX</h1>
            <p>JSX는 React에서 사용되는 JavaScript 확장 문법이다.</p>
        </div>            
    );

}

function CommentTest() {

    // 주석
    
    // JSX 내부에서 주석을 작성할 때는 {/* ... */}와 같은 형식으로 작성한다.
    // 시작 태그를 여러 줄로 작성할 때는 그 내부에서 // ... 와 같은 형태의 주석도 작성할 수 있다.
    // 만약 일반 자바스크립트에서 주석을 작성할 때처럼 아무 데나 주석을 작성하면 그 주석은 브라우저에 보여진다.

    return (
        <div // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
        >
            <h1>JSX</h1>
            <p>JSX는 React에서 사용되는 JavaScript 확장 문법이다.</p>
            {/* <input type="button"/> */}
        </div>    
        // 주석
        /* 주석 */
        // 하지만 이런 주석이나 
            /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
    );

}




export default MyComponent; // export 하여 App에서 구현한다.
