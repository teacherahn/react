import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteProduct = () => {
    const param = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:8080/product/${param.productId}`)
        .then(()=>{
            alert("삭제 되었습니다.");
            navigate('/Products'); 
        })
    },[]);


}

export default DeleteProduct;