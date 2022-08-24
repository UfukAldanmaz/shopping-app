import { useContext } from "react";
import DataContext from "../context/DataContext";

const ShoppingItem = ({ item }) => {
    const { addToBasket, removeFromBasket, getProduct } = useContext(DataContext);

    let first = <button className="add-cart" onClick={() => {
        addToBasket(item);
    }}>Add to Cart</button>

    let second = <div>
        <button onClick={() => removeFromBasket(item)}>➖</button>
        {getProduct(item.id)?.quantity}
        <button className="add-plus" onClick={() => {
            addToBasket(item);
        }}>➕</button>    </div>

    const getProductInBasket = (product) => {
        const found = getProduct(product.id)
        if (found === undefined || found.quantity === 0) {
            return first;
        } else if (found.quantity >= 1) {
            return second;
        }
    }

    return (

        <div className="shopping-items">
            <h2 className="shopping-title">{item.title}</h2>
            <img className="shopping-img" src={item.image} alt={item.title} />
            <h3 className="shopping-price">{item.price} $</h3>
            {
                getProductInBasket(item)
            }

        </div>)

}

export default ShoppingItem;