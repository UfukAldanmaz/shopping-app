import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const ShoppingItem = ({ item }) => {
    const { addToBasket, removeFromBasket, getProduct } = useContext(DataContext);
    const navigate = useNavigate();
    const [openDropdown, setOpenDropdown] = useState(false);

    let first = <button className="add-cart" onClick={() => {
        addToBasket(item);
    }}>Add to Cart</button>

    let second = <div className="add-btn-on-card">
        <button className="plus-minus" onClick={() => removeFromBasket(item)}>➖</button>
        <p className="quantity-on-card">{getProduct(item.id)?.quantity}</p>
        <button className="plus-minus" onClick={() => {
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

    const handleDropdown = () => {
        openDropdown ? setOpenDropdown(false) : setOpenDropdown(true);
    }

    return (
        <>
            <div className="shopping-items">
                <div className="three-dots-option"><button onClick={handleDropdown} className="menu-btn">⋮</button>
                    {openDropdown && <div className="drop-down">
                        <ul>
                            <li onClick={() => navigate(`${item.id}`)}>Details</li>
                        </ul>
                    </div>}
                </div>

                {/* 
                    <span className="dots"></span> <span className="dots"></span> <span className="dots"></span>
                </div> */}
                <div>
                    <h2 className="shopping-title">{item.title}</h2>
                    <img className="shopping-img" src={item.image} alt={item.title} />
                    <h3 className="shopping-price">{item.price} $</h3>
                </div>

                {
                    getProductInBasket(item)
                }

            </div>

        </>)

}

export default ShoppingItem;