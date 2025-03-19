import { useState } from "react";

export function DomEx09() {
    const [grade, setGrade] = useState('');
  
    const handleGradeChange = (event) => {
      setGrade(event.target.value);
    };
  
    return (
      <div>
        <p>
          학년 :
          <select onChange={handleGradeChange}>
            <option value="">선택</option>
            <option value="1학년">1학년</option>
            <option value="2학년">2학년</option>
            <option value="3학년">3학년</option>
          </select>
        </p>
        <p>
          <span>{grade ? '선택된 학년' : '결과'}</span> :
          <input type="text" value={grade} disabled />
        </p>
      </div>
    );
  }
  
  export function DomEx10() {
    const [placeholder, setPlaceholder] = useState('');
  
    const handleChange = (event) => {
      const value = event.target.value;
      const placeholders = {
        goodsId: '상품번호를 입력하세요.',
        goodsTitle: '상품이름을 입력하세요.',
        goodsWriter: '저자를 입력하세요.',
        goodsPublisher: '출판사를 입력하세요.',
        all: '',
      };
      setPlaceholder(placeholders[value]);
    };
  
    return (
      <div>
        <select onChange={handleChange}>
          <option value="all">전체</option>
          <option value="goodsId">상품번호</option>
          <option value="goodsTitle">상품이름</option>
          <option value="goodsWriter">저자</option>
          <option value="goodsPublisher">출판사</option>
        </select>
        <input type="text" placeholder={placeholder} />
      </div>
    );
  }
  
  export function DomEx11() {
    const [totalPrice, setTotalPrice] = useState(7000);
  
    const handleChange = (event) => {
      const quantity = parseInt(event.target.value, 10);
      const prices = [7000, 14000, 21000, 27000, 34000];
      setTotalPrice(prices[quantity - 1]);
    };
  
    return (
      <div>
        <p>
          상품 주문 개수:
          <select onChange={handleChange}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          개
        </p>
        <p>상품 가격: <span>{totalPrice}</span>원</p>
      </div>
    );
  }
  
  export function DomEx12() {
    const [inputValue, setInputValue] = useState('');
    const [selectedBrowser, setSelectedBrowser] = useState('');
    const browsers = ['chrome', 'fireFox', 'exploreEdge'];
  
    const handleClick = () => {
      if (browsers.includes(inputValue)) {
        setSelectedBrowser(inputValue);
      } else {
        alert('값이 존재하지 않습니다.');
      }
    };
  
    return (
      <div>
        <p>
          브라우저 입력:
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={handleClick}>정답</button>
        </p>
        <p>
          브라우저:
          {browsers.map((browser) => (
            <label key={browser}>
              <input
                type="radio"
                name="browser"
                value={browser}
                checked={selectedBrowser === browser}
                readOnly
              />
              {browser}
            </label>
          ))}
        </p>
      </div>
    );
  }
  
  export function DomEx13() {
    const [isDetail, setIsDetail] = useState(false);
  
    return (
      <div>
        <p>
          <label>
            <input type="radio" name="search" checked={!isDetail} onChange={() => setIsDetail(false)} /> 기본 조회
          </label>
          <label>
            <input type="radio" name="search" checked={isDetail} onChange={() => setIsDetail(true)} /> 상세 조회
          </label>
        </p>
        <div>
          <p>
            <select disabled={!isDetail}>
              <option>사용자 이름</option>
              <option>사용자 ID</option>
              <option>제품명</option>
            </select>
            <input type="text" disabled={!isDetail} />
            <button disabled={!isDetail}>당일</button>
            <button disabled={!isDetail}>1주</button>
            <button disabled={!isDetail}>1달</button>
          </p>
        </div>
      </div>
    );
  }

  export function DomEx14() {
    const [paymentMethod, setPaymentMethod] = useState('phone');
  
    return (
      <div>
        <p>
          <label>
            <input type="radio" name="payMethod" value="phone" checked={paymentMethod === 'phone'} onChange={() => setPaymentMethod('phone')} /> 휴대폰 결제
          </label>
          <label>
            <input type="radio" name="payMethod" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} /> 신용카드
          </label>
        </p>
        <p>
          {paymentMethod === 'phone' ? (
            <>
              핸드폰 번호:
              <select>
                <option value='010'>010</option>
                <option value='017'>017</option>
                <option value='018'>018</option>
                <option value='019'>019</option>
              </select>
              - <input type='text' size='10' /> - <input type='text' size='10' />
            </>
          ) : (
            <>
              카드번호: <input type='text' size='10' /> <input type='text' size='10' /> <input type='text' size='10' /> <input type='text' size='10' />
            </>
          )}
        </p>
      </div>
    );
  }
  
  export function DomEx15() {
    const [brand, setBrand] = useState('apple');
    const brandImages = {
      apple: '../images/pic_1.jpg',
      microsoft: '../images/pic_3.jpg'
    };
  
    return (
      <div>
        <img src={brandImages[brand]} alt={brand} width="200" height="200" />
        <hr />
        <label>
          <input type="radio" name="brand" value="apple" checked={brand === 'apple'} onChange={() => setBrand('apple')} /> apple
        </label>
        <label>
          <input type="radio" name="brand" value="microsoft" checked={brand === 'microsoft'} onChange={() => setBrand('microsoft')} /> microsoft
        </label>
      </div>
    );
  }
  
  export function DomEx16() {
    const [selectedBrand, setSelectedBrand] = useState('apple');
  
    return (
      <div>
        <img src="../images/pic_1.jpg" width="200" height="200" onMouseEnter={() => setSelectedBrand('apple')} alt="Apple" />
        <img src="../images/pic_3.jpg" width="200" height="200" onMouseEnter={() => setSelectedBrand('microsoft')} alt="Microsoft" />
        <hr />
        <label>
          <input type="radio" name="brand" checked={selectedBrand === 'apple'} readOnly /> apple
        </label>
        <label>
          <input type="radio" name="brand" checked={selectedBrand === 'microsoft'} readOnly /> microsoft
        </label>
        <span>{selectedBrand}이 선택되었습니다.</span>
      </div>
    );
  }
  
  export function DomEx17() {
    const [reason, setReason] = useState('');
    const [customReason, setCustomReason] = useState('');
  
    return (
      <div>
        <p>
          구매 이유:
          <label>
            <input type="radio" name="reasonBuy" value="quality" onChange={() => setReason('quality')} /> 품질이 좋다
          </label>
          <label>
            <input type="radio" name="reasonBuy" value="costEffect" onChange={() => setReason('costEffect')} /> 가성비가 좋다
          </label>
          <label>
            <input type="radio" name="reasonBuy" value="etc" onChange={() => setReason('etc')} /> 기타
          </label>
        </p>
        {reason === 'etc' && (
          <input type="text" size="50" placeholder="이유를 적어주세요." value={customReason} onChange={(e) => setCustomReason(e.target.value)} />
        )}
      </div>
    );
  }
  