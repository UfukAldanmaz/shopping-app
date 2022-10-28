import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import All from '../images/all.png'
import Men from '../images/men.jpg'
import Women from '../images/women.jpg'
import Jewelery from '../images/jewelery.jpg'
import Electronics from '../images/electronics.jpg'
import '../style.css'


const Home = () => {

    const navigate = useNavigate();
    // const { filteredData } = useContext(DataContext);
    const slides = [
        { url: 'http://localhost:3000/image-1.jpg', title: "electronics" },
        // { url: 'http://localhost:3000/jewelery.jpg' },
        // { url: 'http://localhost:3000/women.jpg' }

    ]

    const handleCategoryChange = (e) => {
        navigate(
            `/products/${e.target.getAttribute("data-category")}`
        );
    }


    return (
        <div className='container'>

            <div style={{ height: '280px', width: "500px", margin: "0 auto" }} className='image-slider'>
                <ImageSlider slides={slides} />
            </div>

            <div id='shopping-list'>
                <div className='shopping-items'>
                    <h2>All</h2>
                    <img data-category="" onClick={(e) => handleCategoryChange(e)} style={{ width: '300px', borderRadius: "15px" }} src={All} />

                </div>
                <div className='shopping-items' >
                    <h2>Men</h2>
                    <img data-category="men's clothing" onClick={(e) => handleCategoryChange(e)} className="shopping-img" src={Men} alt="Men" />

                </div>
                <div className='shopping-items'>
                    <h2>Women</h2>
                    <img data-category="women's clothing" onClick={(e) => handleCategoryChange(e)} className="shopping-img" src={Women} alt="Women" />

                </div>
                <div className='shopping-items'>
                    <h2>Jewelery</h2>
                    <img data-category="jewelery" onClick={(e) => handleCategoryChange(e)} className="shopping-img" src={Jewelery} alt="Jewelery" />

                </div>
                <div className='shopping-items'>
                    <h2>Electronics</h2>
                    <img data-category="electronics" onClick={(e) => handleCategoryChange(e)} className="shopping-img" src={Electronics} alt="electronics" />

                </div>
            </div>
        </div>
    )
}

export default Home;