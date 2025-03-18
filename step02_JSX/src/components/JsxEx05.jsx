import '../assets/myStyle.css';
import postman from '../assets/postman.png';
/*

  ✅ JSX와 HTML의 차이점
  
  - JSX와 HTML은 비슷해 보이지만 몇 가지 중요한 차이점이 있습니다.
  - JSX는 JavaScript의 확장이므로, HTML과 다르게 몇 가지 규칙이 있습니다.

*/

// 1. HTML에서는 빈 태그도 <img>, <input>과 같이 닫지 않지만, JSX에서는 반드시 />로 self-closing 형식을 사용해야 합니다.
const Diff1 = () => {
  return (
    <>
      {/*<img src={postman} alt="Example">*/} {/* 오류  */}
      <img src={postman} alt="Example" />
      {/*<input type="text" >*/}  {/* 오류  */}
      <input type="text" />
    </>
  );
}



// 2. 속성 이름의 차이 , HTML에서는 class, for와 같은 예약어가 있지만, JSX에서는 className, htmlFor처럼 변경하여 사용합니다.
const Diff2 = () => {
  return (
      <>
          {/*<div class="container">class 적용(사실 안됨)</div>*/}
          <div className="container">class 적용</div>

          {/*<label for="testId1">Label(사실 안됨)</label>
          <input id="testId1" type="text" />*/}

          <label htmlFor="testId2">Label</label>
          <input id="testId2" type="text" />

      </>
  );
}

/*

  3. JavaScript 표현식 사용 가능
  
    JSX 안에서는 자바스크립트 표현식을 쓸 수 있습니다.
    JSX에서는 { }를 사용해 JavaScript 표현식을 삽입할 수 있습니다.

*/
const Diff3 = () => {
  
  const productNm = "테스트 상품 이름";
  const price = 1000000;
 
  console.log(`javascript 표현식은 ${productNm} , ${price}로 사용`);

  return (
    <>
      <h1>상품명 : {productNm}</h1>
      <h2>가격 : {price}</h2>
    </>
  );

}

export { Diff1, Diff2, Diff3 }; 
