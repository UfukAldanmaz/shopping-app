import { useContext } from "react";
import Popup from "./Popup";
import DataContext from "../context/DataContext";

const Navbar = () => {
    const { basket, setButtonPopUp } = useContext(DataContext);


    return <> <div className="nav-container">
        <p className="navbar">Home</p>
        <div className="cart">
            <button className="popup-btn" onClick={() => {
                setButtonPopUp(true);
            }}> <div className="cart-icon">🛒</div> <div className="cart-quantity">{basket.reduce(
                (previousValue, currentValue) => previousValue + currentValue.quantity,
                0
            )}</div> </button>

        </div>

    </div>
        <Popup /> </>
}

export default Navbar;