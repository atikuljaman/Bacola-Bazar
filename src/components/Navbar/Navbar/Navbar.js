import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineSafety } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import Cart from '../Cart/Cart';
import MainNavbar from '../MainNavbar/MainNavbar';
import SelectLocation from '../SelectLocation/SelectLocation';
import AllCategories from '../AllCategories/AllCategories';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            {/* NAVBAR TOP */}
            <div className='navbar-top text-center'>
                <p className='text-white m-0'>Due to the <strong>COVID 19</strong> epidemic, orders may be
                    processed with a slight delay</p>
            </div>
            <div className='navbar-top-bottom'>
                <Container>
                    <Row>
                        <Col className='navbar-top-bottom-left' md={4}>
                            <p>About Us</p>
                            <p>My Account</p>
                            <p>Wishlist</p>
                            <p>Order Tracking</p>
                        </Col>
                        <Col className='navbar-top-bottom-center' md={7}>
                            <AiOutlineSafety className='secure-icon' />
                            <p>100% Secure delivery without contacting the courier</p>
                            <p>Need help? Call Us: <span>+ 0020 500</span></p>
                        </Col>
                        <Col className='navbar-top-bottom-bottom' md={1}>
                            <p>English</p>
                            <p>USD</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* NAVBAR CENTER  */}
            <Container className='navbar-center'>
                <div className='d-flex align-items-center'>
                    <div>
                        <img className='logo' src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png' alt='Bacola-Logo' />
                        <p className='logo-title'>Online Grocery Shopping Center</p>
                    </div>
                    <div className='location-container'>
                        <SelectLocation />
                    </div>
                </div>
                <div className='navbar-search-container'>
                    <input placeholder='Search for products...' />
                    <BsSearch className='navbar-search-icon' />
                </div>
                <div className='navbar-center-right-container'>
                    <div className='user-account'>
                        <VscAccount className='user-account-icon' />
                    </div>
                    <Cart />
                </div>
            </Container>
            {/* NAVBAR BOTTOM */}
            <div className='navbar-bottom'>
                <Container fluid="sm" className='d-flex align-items-center justify-content-between p-0'>
                    <div className='navbar-all-categories'>
                        <AllCategories />
                    </div>
                    <MainNavbar />
                </Container>
            </div>
        </>
    );
};

export default Navbar;

