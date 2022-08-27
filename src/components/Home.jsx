import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingList from './ShoppingList';
const Home = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');


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

    return (<div className='container'>

        <h1>SHOPPING TIME</h1>
        <input value={search} onChange={e => setSearch(e.target.value)} className='search-input' placeholder='Search' />
        <ShoppingList
            data={filteredData}
        />


    </div>)
}

export default Home;