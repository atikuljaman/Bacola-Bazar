import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import smallLogo from '../../../Assets/Images/bacola-logo-mobile.png';
import './MainNavbar.css';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import SelectLocation from '../SelectLocation/SelectLocation';
import AllCategories from '../AllCategories/AllCategories';

const MainNavbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleSidebarMenu = () => setShowMenu(!showMenu);

    return (
        <div className='navbar-container'>
            {/* HAMBURGER MENU */}
            <div onClick={handleSidebarMenu} className='hamburger-menu'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <div>
                <img className='img-fluid small-logo' src={smallLogo} alt='Mobile logo' />
            </div>
            {/* SIDE NAVBAR */}
            <ul className={showMenu ? 'side-nav-menu active' : 'side-nav-menu'}>
                <div className='side-nav-menu-top'>
                    <img className='img-fluid side-nav-menu-logo' src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png' alt='' />
                    <IoIosCloseCircleOutline onClick={handleSidebarMenu} className='close-icon' />
                </div>
                <div className='side-nav-location-container'>
                    <SelectLocation />
                </div>
                <div className='side-nav-all-categories-container'>
                    <AllCategories />
                </div>
                <li>Home</li>
                <li>Shop</li>
                <li>Meats & Seafoods</li>
                <li>Bakery</li>
                <li>Beverages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            {/* CART */}
            <div className='navbar-container-cart'>
                <Cart />
            </div>
        </div>
    );
};

export default MainNavbar;
