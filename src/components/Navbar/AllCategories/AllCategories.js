import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from "react-icons/md";
import {
    GiMeat, GiShinyApple, GiMilkCarton, GiSlicedBread,
    GiFrozenOrb, GiCoffeeCup
} from "react-icons/gi";
import { FaCookie, FaLeaf } from "react-icons/fa";
import './AllCategories.css';

const AllCategories = () => {
    const [showCategories, setShowCategories] = useState(true);

    const handleCategories = () => setShowCategories(!showCategories);

    return (
        <div className='all-categories-container'>
            <div onClick={handleCategories} className='all-categories'>
                <AiOutlineMenu className='category-menu-icon' />
                <h5>All Categories</h5>
                <MdKeyboardArrowDown className='category-down-arrow-icon' />
                <div>Total 63 products</div>
            </div>
            {/* CATEGORIES MENU */}
            <div className={showCategories ? 'categories-menu' : 'categories-menu active'}>
                <div className={showCategories ? 'categories-menu-container' : 'categories-menu-container active'}>
                    <p className={showCategories ? 'categories-nav-link' : 'categories-nav-link active'}>
                        <GiShinyApple className='categories-icon' />
                        <span>Fruits & Vegetables</span>
                    </p>
                    <p className={showCategories ? 'categories-nav-link' : 'categories-nav-link active'}>
                        <GiMeat className='meat-icon' />
                        <span>Meats & Seafood</span>
                    </p>
                    <p className={showCategories ? 'categories-nav-link' : 'categories-nav-link active'}>
                        <GiMilkCarton className='milk-icon' />
                        <span>Breakfast & Dairy</span>
                    </p>
                    <p className={showCategories ? 'categories-nav-link' : 'categories-nav-link active'}>
                        <GiCoffeeCup className='coffee-icon' />
                        <span>Beverages</span>
                    </p>
                    <p className={showCategories ? 'categories-nav-link' : 'categories-nav-link active'}>
                        <GiSlicedBread className='bread-icon' />
                        <span>Breads & Bakery</span>
                    </p>
                    <p className={showCategories ? 'categories-nav-link' : 'categories-nav-link active'}>
                        <GiFrozenOrb className='categories-icon' />
                        <span>Frozen Foods</span>
                    </p>
                    <p className={showCategories ? 'categories-nav-link' : 'categories-nav-link active'}>
                        <FaCookie className='categories-icon' />
                        <span>Biscuits & Snacks</span>
                    </p>
                    <p className={showCategories ? 'categories-nav-link' : 'categories-nav-link active'}>
                        <FaLeaf className='categories-icon' />
                        <span>Grocery & Staples</span>
                    </p>
                </div>
                <div className={showCategories ? 'other-categories-link' : 'other-categories-link active'}>
                    <p>Value of the Day</p>
                    <p>Top 100 Offers</p>
                    <p>New Arrivals</p>
                </div>
            </div>
        </div>
    );
};

export default AllCategories;