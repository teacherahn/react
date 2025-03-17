import { Fragment } from "react"

/*

    ✅ JSX의 자식 요소

    - JSX에서는 모든 자식 요소가 하나의 부모 요소 내에 있어야 한다.
    - 다중 요소를 사용하고 싶다면, <div>, <Fragment> 등으로 묶어줘야 한다.
    - <Fragment>는 불필요한 div 태그를 생성하지 않고 여러 요소를 그룹화할 수 있다.
    - <Fragment> 대신에 <> </>를 사용할 수도 있다.
   
*/


const ReturnTest1 = () => {
    // 반환 엘리먼트가 1개이면 ()를 생략할 수 있다.
    //return (<h1>Test Data1</h1>);  // OK
    return <h1>Test Data1</h1>;    // OK

}

// (오류 코드) 컴포넌트에 여러 요소가 있지만 반드시 부모 요소 하나로 감싸야 한다.
const ReturnTest2 = () => {
    /*
    return (
        <h1>Test Data1</h1>
        <h2>Test Data2</h2>
        <h3>Test Data3</h3>
    )
    */

}

// div 태그 사용
const ReturnTest3 = () =>{
    return (
        <div>
            <h1>Test Data1</h1>
            <h2>Test Data2</h2>
            <h3>Test Data3</h3>
        </div>
    )
}

// import { Fragment } from "react"
// <Fragment>는 불필요한 div 태그를 생성하지 않고 여러 요소를 그룹화할 수 있다.
const ReturnTest4 = () => {
    return (
        <Fragment>
            <h1>Test Data1</h1>
            <h2>Test Data2</h2>
            <h3>Test Data3</h3>
        </Fragment>
    )
}

// <Fragment> 대신에 <> </>를 사용할 수도 있다.
const ReturnTest5 = () => {
    return (
        <>
            <h1>Test Data1</h1>
            <h2>Test Data2</h2>
            <h3>Test Data3</h3>
        </>
    )

}


export default ReturnTest1;
