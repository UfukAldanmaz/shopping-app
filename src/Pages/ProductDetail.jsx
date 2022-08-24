import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    const getData = async () => {
        let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setData(data);
        setLoading(false);
    }


    useEffect(() => {
        getData();
    });
    return (loading ? <p>Loading...</p> :
        <div className="detail-container">
            <div className="detail-img"> <img width={100} src={data.image} alt={data.title} />
            </div>
            <div className="detail-info"><h2>{data.title}</h2>
                <p className="detail-price">Price : ${data.price}</p>
                <p className="detail-description">{data.description}</p>
                <button className="detail-back-btn" onClick={() => navigate(-1)}>Go back</button>
            </div>

        </div>
    );
}

export default ProductDetail;