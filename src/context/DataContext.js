import { createContext, useState } from "react";


const DataContext = createContext({});


export const DataProvider = ({ children }) => {

    const [basket, setBasket] = useState([]);
    const [buttonPopUp, setButtonPopUp] = useState(false);

    const addToBasket = (product) => {

        setBasket(cart => {
            if (cart.some(item => item.id === product.id)) {
                return cart.map(item => item.id === product.id ?
                    { ...item, quantity: item.quantity + 1 } :
                    item)
            }
            else {
                const newItem = { ...product, quantity: 1 };
                const r = cart.concat(newItem);
                return r;

            }
        });
    }

    const getProduct = (id) => {
        const found = basket.find(item => item.id === id);
        return found;
    }

    const handleDelete = (id) => {
        setBasket(basket.filter(item => item.id !== id));
    }

    const removeFromBasket = (product) => {
        const basketItem = basket.find(item => item.id === product.id);

        if (basketItem === undefined) {
            return;
        }

        if (basketItem.quantity === 1) {
            handleDelete(product.id);
        }

        if (basketItem.quantity > 1) {
            setBasket(cart =>
                cart.map(item => item.id === product.id ?
                    { ...item, quantity: item.quantity - 1 } : item));
            return;
        }
    }

    return (
        <DataContext.Provider value={{
            basket, handleDelete, addToBasket, removeFromBasket, getProduct,
            buttonPopUp, setButtonPopUp
        }} >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;