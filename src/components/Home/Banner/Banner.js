import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import './Banner.css';

const Banner = () => {
    return (
        <Container fluid="sm">
            <div className='banner-section'>
                <Carousel controls={false}>
                    <Carousel.Item className='banner-container' interval={1500}>
                        <img
                            className="d-block banner-img"
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg"
                            alt="First slide"
                        />
                        <div className='banner-content'>
                            <p className='offer-content'>
                                Exclusive offer
                                <span>-20% off</span>
                            </p>
                            <h1 className='banner-heading'>Specialist in the grocery store</h1>
                            <p className='banner-sub-heading'>Only this week. Don’t miss...</p>
                            <p className='banner-price'>
                                from
                                <span>$7.99</span>
                            </p>
                            <button className='banner-shop-btn'>
                                Shop now
                                <HiOutlineArrowNarrowRight className='banner-arrow-icon' />
                            </button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='banner-container' interval={1500}>
                        <img
                            className="d-block banner-img"
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg"
                            alt="First slide"
                        />
                        <div className='banner-content'>
                            <p className='offer-content'>
                                Exclusive offer
                                <span>-30% off</span>
                            </p>
                            <h1 className='banner-heading'>Feed your family the best </h1>
                            <p className='banner-sub-heading'>Only this week. Don’t miss...</p>
                            <p className='banner-price'>
                                from
                                <span>$8.99</span>
                            </p>
                            <button className='banner-shop-btn'>
                                Shop now
                                <HiOutlineArrowNarrowRight className='banner-arrow-icon' />
                            </button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='banner-container' interval={1500}>
                        <img
                            className="d-block banner-img"
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg"
                            alt="First slide"
                        />
                        <div className='banner-content'>
                            <p className='offer-content'>
                                Exclusive offer
                                <span>-40% off</span>
                            </p>
                            <h1 className='banner-heading'>Grocery full of inspiration </h1>
                            <p className='banner-sub-heading'>Only this week. Don’t miss...</p>
                            <p className='banner-price'>
                                from
                                <span>$6.99</span>
                            </p>
                            <button className='banner-shop-btn'>
                                Shop now
                                <HiOutlineArrowNarrowRight className='banner-arrow-icon' />
                            </button>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    );
};

export default Banner;
