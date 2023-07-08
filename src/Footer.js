import React from 'react';
import iso from './Assets/images/iso.png'
import { TiSocialFacebookCircular, TiSocialInstagram, TiSocialInstagramCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular } from "react-icons/ti";
import { FiSearch, FiUser } from 'react-icons/fi';
import HealthLogo from './Assets/images/Medical-health-logo.png'
import Hipaa from './Assets/images/hippa.png'
import Iso from './Assets/images/iso.png'
import { MdOutlineCopyright } from 'react-icons/md';
const Footer = () => {
    return (
        // <div
        //     className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-space-between"
        //     style={{ padding: '3% 8%', bottom: '0px', minHeight: '40vh', background: 'rgb(242, 242, 242)' }}
        // >
        //     <img src={iso} alt='.' height={'60px'} width={'60px'} />
        //     <div
        //         className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-space-between MuiGrid-grid-xs-12 MuiGrid-grid-md-8"
        //         style={{ marginTop: '1rem' }}
        //     >
        //         <div className="MuiGrid-root MuiGrid-item">
        //             <a className="" href="/vision" style={{ fontFamily: 'Montserrat', textDecoration: 'none', fontSize: '16px', color: 'black', fontWeight: '500' }}>About Us</a>
        //         </div>
        //         <div className="MuiGrid-root MuiGrid-item">
        //             <a className="" href="/cancellationPolicy" style={{ fontFamily: 'Montserrat', textDecoration: 'none', fontSize: '16px', color: 'black', fontWeight: '500' }}>Cancellation Policy</a>
        //         </div>
        //         <div className="MuiGrid-root MuiGrid-item">
        //             <a className="" href="/termsAndConditions" style={{ fontFamily: 'Montserrat', textDecoration: 'none', fontSize: '16px', color: 'black', fontWeight: '500' }}>Terms and Conditions</a>
        //         </div>
        //         <div className="MuiGrid-root MuiGrid-item">
        //             <a className="" href="/privacyPolicy" style={{ fontFamily: 'Montserrat', textDecoration: 'none', fontSize: '16px', color: 'black', fontWeight: '500' }}>Privacy Policy</a>
        //         </div>
        //     </div>
        //     <div
        //         className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6"
        //         style={{ marginTop: '1rem' }}
        //     >
        //         {/* <svg
        //             className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall"
        //             focusable="false"
        //             viewBox="0 0 24 24"
        //             aria-hidden="true"
        //         >
        //             <path d="M11.88 9.14c1.28.06 1.61 1.15 1.63 1.66h1.79c-.08-1.98-1.49-3.19-3.45-3.19C9.64 7.61 8 9 8 12.14c0 1.94.93 4.24 3.84 4.24 2.22 0 3.41-1.65 3.44-2.95h-1.79c-.03.59-.45 1.38-1.63 1.44-1.31-.04-1.86-1.06-1.86-2.73 0-2.89 1.28-2.98 1.88-3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
        //         </svg> */}
        //         <p className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary" style={{ fontFamily: 'Montserrat' }}>
        //             Copyright 2023 Paperplane Communications Pvt. Ltd.<br />All Rights Reserved
        //         </p>
        //     </div>
        // </div>
        <div
            className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-space-between"
            style={{ padding: '3% 8%', bottom: '0px', minHeight: '40vh', background: 'rgb(242, 242, 242)' }}>
            <footer >
                <div className="container-fluid bg-footer">
                    <div className='container '>
                        <div className="row ">
                            <div className="col-sm-3 mt-5 ">
                                <img src={HealthLogo} style={{ width: "150px", height: "35px" }} alt="Paper Plane" />
                                <div className="mt-3">
                                    <img src={Iso} className="me-4" style={{ width: "50px", height: "50px" }} alt="ISO" />
                                    <img src={Hipaa} style={{ width: "50px", height: "50px" }} alt="HIPAA" />
                                </div>
                            </div>
                            <div className="col-sm-9 mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-4 col-sm-3">
                                        <h5>  About Us</h5>
                                    </div>
                                    <div className="col-4 col-sm-3">
                                        <h5> Cancellation Policy</h5>
                                    </div>
                                    <div className="col-4 col-sm-3">
                                        <h5>  Terms and Conditions</h5>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-4'>
                            <p className='text-primary'><span><MdOutlineCopyright /> </span ><span className='text-secondary'>Copyright 2023 Paperplane Communications Pvt. Ltd.    All Rights Reserved</span></p>

                            <h4 className='d-flex text-end ms-auto fs-2 text-primary mb-3'><TiSocialLinkedinCircular /><TiSocialFacebookCircular /> <TiSocialTwitterCircular /> <TiSocialInstagramCircular /></h4>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
