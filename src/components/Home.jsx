import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingList from './ShoppingList';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate()


    const getData = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const filteredData = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

    const openSideBar = () => {
        setOpenMenu(current => !current)
    }

    return (<div className='container'>

        <h1>SHOPPING TIME</h1>
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

        <input value={search} onChange={e => setSearch(e.target.value)} className='search-input' placeholder='Search' />
        <ShoppingList
            data={filteredData}
        />


    </div>)
}

export default Home;