import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const container = useRef(false);

    const openSideBar = () => {
        setOpenMenu(current => !current)
    }

    const handleCategoryChange = (e) => {
        navigate(
            `/products/${e.target.getAttribute("data-category")}`
        );
        setOpenMenu(false);
    }

    const handleClickOutside = (event) => {
        if (container.current && !container.current.contains(event.target)) {
            setOpenMenu(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpenMenu])

    return (
        <div className='container'>
            <div className="menu" ref={container} >
                <label className='bar-span' onClick={openSideBar}>
                    <span className='bar-span'>&nbsp;</span>
                    <span className='bar-span'>&nbsp;</span>
                    <span className='bar-span'>&nbsp;</span></label>
            </div>
            {openMenu && <div className='popup'>
                <ul className='sidebar-inner' ref={container}>
                    <li data-category="" onClick={(e) => handleCategoryChange(e)}>All</li>
                    <li data-category="men's clothing" onClick={(e) => handleCategoryChange(e)}>Men</li>
                    <li data-category="women's clothing" onClick={(e) => handleCategoryChange(e)}>Women</li>
                    <li data-category="jewelery" onClick={(e) => handleCategoryChange(e)}>Jewelery</li>
                    <li data-category="electronics" onClick={(e) => handleCategoryChange(e)}>Electronics</li>
                    <li>Your Profile</li>
                    <li onClick={() => navigate('/about') & setOpenMenu(false)}>About Us</li>
                </ul>
                <button className='sidebar-close-btn' onClick={() => setOpenMenu(false)}>
                    X
                </button>
            </div>
            }
        </div>
    )
}

export default Sidebar;