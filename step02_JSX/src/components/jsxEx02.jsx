import React from "react";

// ✅ JSX 주석 (Comment) {/* ... */}

// JSX 내부에서 주석을 작성할 때는 {/* ... 주석 ... */}와 같은 형식으로 작성한다.
// JSX는 실제로 HTML처럼 보이지만, 빌드 도구(예: Babel)가 이를 JavaScript로 변환하는데 
// 결과는 React.createElement() 호출로 바뀌고 주석은 제거된다.  따라서, 주석은 브라우저에 나타나지 않는다.

const CommentTest = () => {

    // 일반 JavaScript 영역에서의 주석 > 렌더링 안됨
    /* 자바스크립트 주석 > 렌더링 안됨 */
    
    // JSX 내부에서는 {/* ... */}로 주석을 작성해야 함
    return (
        <div> 
            <h1>JSX</h1>
            <p>JSX는 React에서 사용되는 JavaScript 확장 문법입니다.</p>
            {/*<p>JSX는 React에서 사용되는 JavaScript 확장 문법입니다.</p>*/}
            {/* JSX 내부 주석으로, 브라우저에는 나타나지 않습니다. */}
            // 텍스트로 렌더링 됩니다.
            /* 역시 텍스트로 렌더링 됩니다" */
        </div>    
    );

    // 일반 JavaScript 영역에서의 주석 > 렌더링 안됨
    /* 자바스크립트 주석 > 렌더링 안됨 */

}




export default CommentTest; // export 하여 App에서 구현한다.
