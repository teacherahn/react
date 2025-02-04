import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const object = useParams();
    console.log(object.productId);
    
    const [product , setProduct] = useState(null);

    useEffect(()=>{
        axios.get(`http://localhost/product/${object.productId}`)
        .then((response)=>{
            setProduct(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[]);

    
    return (
        <>
            <h1>상품 상세조회</h1>
        
            <table>
                <tr>
                    <td>상품이미지</td>
                </tr>
                <tr>
                    <td>상품 ID</td>
                    <td>{product.productId}</td>
                </tr>
                <tr>
                    <td>상품 이름</td>
                    <td>{product.name}</td>
                </tr>
                <tr>
                    <td>상품 설명</td>
                    <td>{product.description}</td>
                </tr>
                <tr>
                    <td>상품가격</td>
                    <td>{product.price}원</td>
                </tr>
                <tr>
                    <td>생성 일자</td>
                    <td>{product.createdAt}</td>
                </tr>
                <tr>
                    <td>수정 일자</td>
                    <td>{product.updatedAt}</td>
                </tr>
            </table>
        </>
    );

}

export default ProductDetail;