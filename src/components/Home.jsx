import React, { useState, useContext } from 'react';
import ShoppingList from './ShoppingList';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';
const Home = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const { filteredData } = useContext(DataContext);


    const openSideBar = () => {
        setOpenMenu(current => !current)
    }

    return (<div className='container'>

        <label class="menu" onClick={openSideBar}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
        </label>
        {openMenu && <div className='popup'>
            <ul className='sidebar-inner'>
                <li>Men</li>
                <li>Women</li>
                <li>Your Profile</li>
                <li onClick={() => navigate('/about')}>About Us</li>

            </ul>
            <button className='sidebar-close-btn' onClick={() => setOpenMenu(false)}>
                X
            </button>
        </div>}

        <ShoppingList
            data={filteredData}
        />


    </div>)
}

export default Home;