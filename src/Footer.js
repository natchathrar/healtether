import React from 'react';
import iso from './Assets/images/iso.png'
import { TiSocialFacebookCircular, TiSocialInstagram, TiSocialInstagramCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular } from "react-icons/ti";
import { FiSearch, FiUser } from 'react-icons/fi';
import HealthLogo from './Assets/images/Medical-health-logo.png'
import Hipaa from './Assets/images/hippa.png'
import Iso from './Assets/images/iso.png'
import { MdOutlineCopyright } from 'react-icons/md';
import './About.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (

        <div
            className=""
            style={{ padding: '3% 8%', bottom: '0px', minHeight: '40vh', background: 'rgb(242, 242, 242)' }}>
            <footer >
                <div className="container-fluid bg-footer">
                    <div className='container '>
                        <div className="row justify-content-between">

                            <div className="col-sm-3 mt-5 ">
                                {/* <img src={HealthLogo} style={{ width: "45px", height: "45px" }} alt="Paper Plane" /> */}
                                <Link className="navbar-brand" to="/">
                                    <img src={HealthLogo} style={{ height: '60px', width: '60px' }} className="me-2" alt="Health Logo" />
                                    <span className="fs-4 fs-lg-3" style={{ fontFamily: 'cursive' }}>
                                        Healtether
                                    </span>
                                </Link>
                                <div className="mt-3">
                                    <img src={Iso} className="me-4" style={{ width: "50px", height: "50px" }} alt="ISO" />
                                    <img src={Hipaa} style={{ width: "50px", height: "50px" }} alt="HIPAA" />
                                </div>
                            </div>
                            <div className="col-sm-9 mt-5">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-4 col-sm-3">
                                        <h5>  About Us</h5>
                                    </div>
                                    <div className="col-4 col-sm-3">
                                        <h5> Cancellation Policy</h5>
                                    </div>
                                    <div className="col-4 col-sm-3">
                                        <h5>  Terms and Conditions</h5>
                                    </div>
                                    <div className="col-4 col-sm-3">
                                        <h5>  Privacy Policy</h5>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='d-flex text-right mt-4'>
                            <p className='text-primary'><span><MdOutlineCopyright /> </span ><span className='text-secondary'>Copyright 2023 Paperplane Communications Pvt. Ltd.    All Rights Reserved</span></p>

                            <h4 className='d-flex ms-auto fs-2 text-primary mb-3' style={{ justifyContent: 'flex-end' }}><TiSocialLinkedinCircular /><TiSocialFacebookCircular /> <TiSocialTwitterCircular /> <TiSocialInstagramCircular /></h4>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
