import axios from "axios";
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route , Link} from "react-router-dom"

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost/product`)
        .then((response)=>{
            setProducts(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });

    },[]);
  

    return (
        <>
            <h1>상품리스트</h1>       
            <table>
                <thead>
                    <tr>
                        <td>상품 이미지</td>
                        <td>상품 ID</td>
                        <td>상품 이름</td>
                        <td>일자</td>
                    </tr>
                </thead>
                <tbody>
                   {products.map((product)=>(
                        <tr key={product.productId}>
                            <td><img src={`/images/${product.image}`} width={30} height={30}/></td>
                            <td>{product.productId}</td>            
                            <td><Link to={`/ProductDetail/${product.productId}`}>{product.name}</Link></td>
                            <td>{product.createdAt}</td>
                        </tr>
                   ))}
                </tbody>
            </table>
        </>
    );

}

export default Products;