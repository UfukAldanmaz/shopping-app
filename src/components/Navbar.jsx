import { useContext } from "react";
import Popup from "./Popup";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { basket, setButtonPopUp, search, setSearch } = useContext(DataContext);

    const navigate = useNavigate();

    // const [search, setSearch] = useState('');

    // const filteredData = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

    return <> <div className="nav-container">
        {/* <p className="navbar">{Home}</p> */}
        <h3 className="homepage" onClick={() => navigate("/")} >ShopAll</h3>
        {/* <input placeholder="Search" /> */}
        <input value={search} onChange={e => setSearch(e.target.value)} className='search-input' placeholder='Search' />

        {/* <input value={search} onChange={e => setSearch(e.target.value)} className='search-input' placeholder='Search' /> */}
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