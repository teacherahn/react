import axios from "axios";  // axios: HTTP 요청을 보내기 위한 라이브러리입니다. 이 코드에서는 POST 요청을 사용하여 서버로 데이터를 전송합니다.
import { useState } from "react"; //  React의 훅(Hook)으로, 컴포넌트 내에서 **상태(state)**를 관리하기 위해 사용됩니다.
import { useNavigate } from "react-router-dom";

// 상태란 컴포넌트 내에서 관리되는 동적인 데이터입니다. 폼 입력값을 저장하는 데 사용됩니다.

const CreateProduct = () => {
    const navigate = useNavigate();
    // 사용자 입력값을 저장하는 상태 변수입니다
    // 초기값은 모두 빈 문자열('')로 설정되어 있습니다.
    // setFormData: formData 값을 업데이트하기 위한 함수입니다.
    const [formData , setFormData] = useState({
        image : '',
        name : '',
        descrption : '',
        price : ''
    });

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData({
            ...formData , 
            [name] : value
        });
    }
    
    //handleSubmit: 폼이 제출될 때 호출되는 함수입니다.
    const handleSubmit = (e) => {
   
        e.preventDefault();  // 폼 제출 시 페이지 새로고침 방지

        axios.post(`http://localhost:8080/product` , formData , {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(()=>{
            navigate("/Products");
        });

    }


    return (
        <>
            <h1>상품 상세조회</h1> 
            <form onSubmit={handleSubmit}>          
                <table>
                    <tbody>
                        <tr>
                            <td>상품이미지</td>
                            <td><input type="text" name="image" onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td>상품 이름</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"  onChange={handleChange}               
                                />     
                            </td>
                        </tr>
                        <tr>
                            <td>상품 설명</td>
                            <td>
                                <textarea
                                    name="description"  onChange={handleChange}                         
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>상품가격</td>
                            <td>
                            <input
                                type="text"
                                name="price" onChange={handleChange}
                            /> 
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="추가"/>
            </form>      
        </>
    );

}

export default CreateProduct;