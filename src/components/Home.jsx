import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingList from './ShoppingList';
import Navbar from './Navbar';
import { DataProvider } from '../context/DataContext';
const Home = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');


    const getData = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
        setData(res.data);
        console.log(res);
    }

    useEffect(() => {
        getData();
    }, [])

    const filteredData = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

    return <div className='container'>
        <DataProvider>
            <Navbar />
            <h1>SHOPPING TIME</h1>
            <input value={search} onChange={e => setSearch(e.target.value)} className='search-input' placeholder='Search' />
            <ShoppingList
                data={filteredData}
            />
        </DataProvider>

    </div>
}

export default Home;