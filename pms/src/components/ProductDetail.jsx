import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetail = () => {
    const object = useParams();
    const [product , setProduct] = useState({});

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

    
    return (
        <>
            <h1>상품 상세조회</h1>
        
            <table>               
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
            <Link to={`/UpdateProduct/${product.productId}`}>
                <button>수정</button>
            </Link>
            <Link to={`/DeleteProduct/${product.productId}`}>
                <button>삭제</button>
            </Link>
        </>
    );

}

export default ProductDetail;