import { Fragment } from "react"

/*

    [ JSX의 자식 요소 ]

    - JSX에서는 모든 자식 요소가 하나의 부모 요소 내에 있어야 한다.
    - 다중 요소를 사용하고 싶다면, <div>, <Fragment> 등으로 묶어줘야 한다.

*/


function ReturnTest1() {

    // 반환 엘리먼트가 1개이면 () 를 생략가능하다.
    //return (<h1>Test Data1</h1>);  // OK
    //return <h1>Test Data1</h1>;    // OK

}

 // 컴포넌트에 여러 요소가 있지만 반드시 부모 요소 하나로 감싸야 한다. [오류!]
function ReturnTest2() {

    /*
    return (
        <h1>Test Data1</h1>
        <h2>Test Data2</h2>
        <h3>Test Data3</h3>
    )
    */

}

// div 태그 사용
function ReturnTest3() {
    
    return (
        <div>
            <h1>Test Data1</h1>
            <h2>Test Data2</h2>
            <h3>Test Data3</h3>
        </div>
    )
}

// import { Fragment } from "react"
//  <Fragment> 사용
function ReturnTest4() {
    return (
        <Fragment>
            <h1>Test Data1</h1>
            <h2>Test Data2</h2>
            <h3>Test Data3</h3>
        </Fragment>
    )
}

//   <> 사용
function ReturnTest5() {
    return (
        <>
            <h1>Test Data1</h1>
            <h2>Test Data2</h2>
            <h3>Test Data3</h3>
        </>
    )

}

// 모듈에는 기본 내보내기가 여러 개 있을 수 없다.
/*
export default ReturnTest1;
export default ReturnTest2;
export default ReturnTest3;
export default ReturnTest4;
export default ReturnTest5;
*/