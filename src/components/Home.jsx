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

    const handleCategoryChange = (e) => {
        navigate(
            `/products/${e.target.getAttribute("data-category")}`
        );
    }

    return (
        <div className='container'>

            <div className='image-slider'>
                <ImageSlider />
            </div>

            <div className='shopping-list-home'>
                <div className='shopping-items-home'>
                    <h2>All</h2>
                    <img data-category="" onClick={(e) => handleCategoryChange(e)} className="shopping-img-home" src={All} alt="All" />

                </div>
                <div className='shopping-items-home' >
                    <h2>Men</h2>
                    <img data-category="men's clothing" onClick={(e) => handleCategoryChange(e)} className="shopping-img-home" src={Men} alt="Men" />

                </div>
                <div className='shopping-items-home'>
                    <h2>Women</h2>
                    <img data-category="women's clothing" onClick={(e) => handleCategoryChange(e)} className="shopping-img-home" src={Women} alt="Women" />

                </div>
                <div className='shopping-items-home'>
                    <h2>Jewelery</h2>
                    <img data-category="jewelery" onClick={(e) => handleCategoryChange(e)} className="shopping-img-home" src={Jewelery} alt="Jewelery" />

                </div>
                <div className='shopping-items-home'>
                    <h2>Electronics</h2>
                    <img data-category="electronics" onClick={(e) => handleCategoryChange(e)} className="shopping-img-home" src={Electronics} alt="electronics" />

                </div>
            </div>
        </div>
    )
}

export default Home;