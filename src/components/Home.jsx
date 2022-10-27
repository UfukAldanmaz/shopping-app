import React, { useState, useContext, useEffect } from 'react';
import ShoppingList from './ShoppingList';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';
const Home = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();
    const navigate = useNavigate();
    const { filteredData } = useContext(DataContext);
    const [list, setList] = useState(filteredData);

    const openSideBar = () => {
        setOpenMenu(current => !current)
    }

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.getAttribute("data-category"))
    }

    const filteredList = () => {
        if (!selectedCategory) {
            return filteredData;
        }

        return filteredData.filter((item) => item.category === selectedCategory);
    }

    useEffect(() => {
        const selectedData = filteredList();
        setList(selectedData);
    }, [filteredList])


    return (<div className='container'>

        <div class="menu" >
            <label className='bar-span' onClick={openSideBar}>
                <span className='bar-span'>&nbsp;</span>
                <span className='bar-span'>&nbsp;</span>
                <span className='bar-span'>&nbsp;</span></label>
        </div>
        {openMenu && <div className='popup'>
            <ul className='sidebar-inner'>
                <li data-category="" onClick={handleCategoryChange}>All</li>
                <li data-category="men's clothing" onClick={handleCategoryChange}>Men</li>
                <li data-category="women's clothing" onClick={handleCategoryChange}>Women</li>
                <li data-category="jewelery" onClick={handleCategoryChange}>Accessories</li>
                <li data-category="electronics" onClick={handleCategoryChange}>Electronics</li>
                <li>Your Profile</li>
                <li onClick={() => navigate('/about')}>About Us</li>

            </ul>
            <button className='sidebar-close-btn' onClick={() => setOpenMenu(false)}>
                X
            </button>
        </div>
        }
        <ShoppingList
            data={list}
        />
    </div >)
}

export default Home;