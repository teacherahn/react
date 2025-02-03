/*

  [ JSX와 HTML의 차이점 ]
  
  JSX와 HTML은 비슷해 보이지만 몇 가지 중요한 차이점이 있다.

*/

// 1. HTML에서는 빈 태그도 <img>, <input>과 같이 닫지 않지만, JSX에서는 반드시 />로 self-closing 형식을 사용해야 합니다.
function Expression3() {
  return (
    <>
      {/*</><img src="image.jpg" alt="Example">*/}
      <img src="image.jpg" alt="Example" />
      {/*<input type="text" >*/}
      <input type="text" />
    </>
  );
}



// 2. 속성 이름의 차이 , HTML에서는 class, for와 같은 예약어가 있지만, JSX에서는 className, htmlFor처럼 변경하여 사용합니다.
function diff1 () {
  return (
      <div>
        <div className="container">...</div>
        <label htmlFor="inputId">Label</label>
      </div>
  );
}

/*

  3. JavaScript 표현식 사용 가능
  
    JSX 안에서는 자바스크립트 표현식을 쓸 수 있습니다. 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 { }로 감싸면 됩니다. 
    JSX에서는 { }를 사용해 JavaScript 표현식을 삽입할 수 있습니다.

*/
export function Expression() {
  
  const productNm = "테스트 상품 이름";
  const price = 1000000;
 
  return (
    <>
      <h1>상품명 : {productNm}</h1> // 테스트 상품 이름
      <h2>가격 : {price}</h2>     // 1000000
    </>
  );

}


