import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShoppingItem from "../components/ShoppingItem";
import DataContext from "../context/DataContext";

const Products = () => {
    const { filteredData } = useContext(DataContext);
    const [list, setList] = useState(filteredData);
    const { category } = useParams();
    const filteredList = () => {
        if (!category) {
            return filteredData;
        }

        return filteredData.filter((item) => item.category === category);

    }

    useEffect(() => {
        console.log(category, filteredData.length);
        const selectedData = filteredList();
        setList(selectedData);
    }, [filteredData, category])


    return <div id="shopping-list">{list.map(item =>
        <ShoppingItem key={item.id} item={item} />
    )}
    </div>
}

export default Products;