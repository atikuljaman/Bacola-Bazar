import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import './SelectLocation.css';

const SelectLocation = () => {
    const [modalShow, setModalShow] = useState(false);
    // const [location, setLocation] = useState('Select a Location');

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    return (
        <>
            <div className='select-container' onClick={handleShow}>
                <div>
                    <p>Your Location</p>
                    <h6>Select a Location</h6>
                </div>
                <MdKeyboardArrowDown className='down-arrow-icon' />
            </div>
            {/* MODAL */}
            <Modal show={modalShow} onHide={handleClose} animation={true} centered={true}>
                <Modal.Body className='location-select-modal'>
                    <>
                        <div className='location-select-modal-top'>
                            <div>
                                <h6>Choose your Delivery Location</h6>
                                <p>Enter your address and we will specify the offer for your area.</p>
                            </div>
                            <IoMdClose onClick={handleClose} className='close-modal-icon' />
                        </div>
                        <div className='location-modal-search-container'>
                            <div>
                                <BsSearch className='modal-search-icon' />
                            </div>
                            <input type='text' placeholder='Search your area' />
                        </div>
                        <div className='modal-bottom-container'>
                            <div className='modal-bottom'>
                                <p>Alabama</p>
                                <span>Min: $130</span>
                            </div>
                            <div className='modal-bottom'>
                                <p>Alaska</p>
                                <span>Min: $130</span>
                            </div>
                            <div className='modal-bottom'>
                                <p>Arizona</p>
                                <span>Min: $130</span>
                            </div>
                            <div className='modal-bottom'>
                                <p>California</p>
                                <span>Min: $130</span>
                            </div>
                            <div className='modal-bottom'>
                                <p>Colorado</p>
                                <span>Min: $130</span>
                            </div>
                            <div className='modal-bottom'>
                                <p>Florida</p>
                                <span>Min: $130</span>
                            </div>
                            <div className='modal-bottom'>
                                <p>Georgia</p>
                                <span>Min: $130</span>
                            </div>
                            <div className='modal-bottom'>
                                <p>Kansas</p>
                                <span>Min: $130</span>
                            </div>
                            <div className='modal-bottom'>
                                <p>Minnesota</p>
                                <span>Min: $130</span>
                            </div>
                            <div className='modal-bottom'>
                                <p>New York</p>
                                <span>Min: $130</span>
                            </div>
                            <div className='modal-bottom'>
                                <p>Washington</p>
                                <span>Min: $130</span>
                            </div>
                        </div>
                    </>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SelectLocation;
