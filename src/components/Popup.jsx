import { useContext } from "react";
import DataContext from "../context/DataContext";
import wastebasket from "../images/wastebasket.png"

const Popup = ({ buttonPopUp, setButtonPopUp, children }) => {
    const { basket, handleDelete, removeFromBasket, addToBasket } = useContext(DataContext);

    return (buttonPopUp) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className="popup-header">
                    <button className='close-btn' onClick={() => setButtonPopUp(false)}>
                        X
                    </button>
                </div>
                {children}
                {basket.length === 0 ? <div className="empty-cart">Your cart is empty!</div> :
                    basket.map(item => {
                        return (
                            <div className='popup-box' key={item.id}>
                                <button className="delete-cart-item" onClick={() => handleDelete(item.id)}>
                                    <img className="delete-img" src={wastebasket} alt="wastebasket" />
                                </button>
                                <h1 className='popup-title'>{item.title}</h1>
                                <img className='popup-img' src={item.image} alt={item.title} />
                                <h2 className='popup-price'>${item.price}</h2>
                                <div className="btn-container">
                                    <button className="dec-in-btn" onClick={() => addToBasket(item)}>➕</button>
                                    <p className="quantity-p">{item.quantity}</p>
                                    <button className="dec-in-btn" onClick={() => removeFromBasket(item)}>➖</button>
                                </div>
                            </div>)
                    })
                }
                {basket.length > 0 ? <p className="price-total"> <b>TOTAL :</b> ${basket.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0).toFixed(2)}</p> : ''}
            </div>
        </div>
    ) : "";

}

export default Popup;