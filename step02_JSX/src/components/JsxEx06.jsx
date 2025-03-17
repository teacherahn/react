import '../assets/myStyle.css';
/*

    ✅ 인라인 스타일링

    - 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어 주어야 한다.
    - 스타일 이름 중에서 background-color 처럼  문자가 포함되는 이름이 있을 경우 문자를 없애고 카멜 표기법(camelCase)으로 작성해야 한다. 
       따라서 background-color는 backgroundColor로 작성해아한다.
    - 스타일 값이 숫자인 경우에는 단위를 생략하는 것이 아니라 문자열 형태로 단위를 작성해야 한다.
    

*/

const Style1 = () => {
    const name = '리액트';
    return (
        <div style={{
            backgroundColor: 'black',
            color: 'aqua',
            fontSize: '48px',
            fontWeight: 'bold',
            padding: 16 // 단위를 생략하면 px로 지정됩니다.
        }}
        >
            {name}
        </div>
    );
}


const Style2 = () => {
    const name = '리액트';
    return <div className="container">{name}</div>;
}

export { Style1, Style2 }; // App에서 구현한다.
  
