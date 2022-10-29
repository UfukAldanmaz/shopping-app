import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DataContext from "../context/DataContext";
import "./product-detail.css"

const ProductDetail = () => {
    const [data, setData] = useState({});
    const { loading, setLoading, addToBasket, removeFromBasket, getProduct } = useContext(DataContext);
    const navigate = useNavigate();
    const { id } = useParams();

    const getData = async () => {
        try {
            let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setData(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getData();
    }, []);

    let first = <button className="add-cart-detail" onClick={() => {
        addToBasket(id);
    }}>Add to Cart</button>

    let second = <div className="add-btn-on-card-detail">
        <button className="plus-minus-detail" onClick={() => removeFromBasket(id)}>-</button>
        <p className="quantity-on-card-detail">{getProduct(id.id)?.quantity}</p>
        <button className="plus-minus-detail" onClick={() => {
            addToBasket(id);
        }}>+</button>    </div>

    const getProductInBasket = (product) => {
        const found = getProduct(product.id)
        if (found === undefined || found.quantity === 0) {
            return first;
        } else if (found.quantity >= 1) {
            return second;
        }
    }


    return (loading ? <p>Loading...</p> :
        <div className="detail-container">
            <div className="detail-img"> <img width={100} src={data.image} alt={data.title} />
            </div>
            <div className="detail-info">
                <h2 className="detail-title">{data.title}</h2>
                <p className="detail-price"> ${data.price}</p>
                {getProductInBasket(id)}
                <p className="detail-description">{data.description}</p>
                <button className="detail-back-btn" onClick={() => navigate("/")}>Go back</button>

            </div>
        </div>
    );
}

export default ProductDetail;