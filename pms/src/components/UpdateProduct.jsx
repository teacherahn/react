import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



const UpdateProduct = () => {
    const object = useParams();
    const [product , setProduct] = useState({});
    const navigate = useNavigate();
 
    useEffect(()=>{
        axios.get(`http://localhost:8080/product/${object.productId}`)
        .then((response)=>{
            console.log(response.data);
            setProduct(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[]);


    const handleChange = (e) => {
        const {name , value} = e.target;
        setProduct({
            ...product , 
            [name] : value
        });
    }
    
    //handleSubmit: 폼이 제출될 때 호출되는 함수입니다.
    const handleSubmit = (e) => {
   
        e.preventDefault();  // 폼 제출 시 페이지 새로고침 방지
        console.log(product);
        axios.put(`http://localhost:8080/product/${product.productId}` , product , {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(()=>{
            navigate("/Products")
        });

    }
    return (
        <>
            <h1>상품 수정</h1>       
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>                      
                        <tr>
                            <td>상품 ID</td>
                            <td>{product.productId}</td>
                        </tr>
                        <tr>
                            <td>상품 이름</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={product.name}
                                    onChange={handleChange}
                                />     
                            </td>
                        </tr>
                        <tr>
                            <td>상품 설명</td>
                            <td>
                                <textarea
                                    name="description"  
                                    onChange={handleChange}    
                                    value={product.description}                     
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>상품가격</td>
                            <td>
                            <input
                                type="text"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                            /> 
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="수정하기" />              
            </form>
        </>
    );

}

export default UpdateProduct;