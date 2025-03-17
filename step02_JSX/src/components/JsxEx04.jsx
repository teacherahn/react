import React from "react";


/*

    ✅ Component Export

    - 모듈에는 기본 내보내기가 여러 개 있을 수 없다.
    - 따라서, export default를 사용하여 하나의 컴포넌트만 내보내야 한다.
    - 여러 개의 컴포넌트를 내보내고 싶다면, 이름을 붙여서 내보내야 한다.
    - export default ReturnTest1;
  
*/

const ExportTest1 = () => {return <p>export test1</p>}
const ExportTest2 = () => {return <p>export test2</p>}
const ExportTest3 = () => {return <p>export test3</p>}
const ExportTest4 = () => {return <p>export test4</p>}
const ExportTest5 = () => {return <p>export test5</p>}


    
// 기본 내보내기가 하나만 있어야 한다.
export default ExportTest1; 
// export default ExportTest2; // 오류 발생 , 
// export default ExportTest3;

// 이름을 붙여서 여러개의 컴포넌트를 내보낼 수 있다.
export {ExportTest2, ExportTest3, ExportTest4, ExportTest5}; 