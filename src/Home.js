// import React, { useState } from 'react'
// import './Home.css'
// import { FaWhatsapp } from 'react-icons/fa';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Toggle from './toggle';
// import rocket from './Assets/images/rocket.png'


// export default function Home() {


//     const images = [
//         'https://www.paperplanetech.co/static/media/client2.5604d158cce6000f455e.png',
//         'https://www.paperplanetech.co/static/media/client1.f833de81e2387b215a3d.png',
//         'https://www.paperplanetech.co/static/media/client3.4fe8b764dae8d4574e43.png',
//         'https://www.paperplanetech.co/static/media/client4.d852c15a7032cde064c8.png',
//         'https://www.paperplanetech.co/static/media/client5.98017aa34e119c58e644.png',
//         'https://www.paperplanetech.co/static/media/client6.7418e655bd6a6c2f0b34.png',
//         'https://www.paperplanetech.co/static/media/client7.5a7a7b981e3e2cfb594f.png',
//         'https://www.paperplanetech.co/static/media/client8.fdaee9618e9dcc976fea.png',
//         'https://www.paperplanetech.co/static/media/client9.31b8abdf380d8f43d95e.png',
//         'https://www.paperplanetech.co/static/media/client10.3d877261fd897c77041e.png',
//         'https://www.paperplanetech.co/static/media/client5.98017aa34e119c58e644.png',
//         'https://www.paperplanetech.co/static/media/client6.7418e655bd6a6c2f0b34.png',
//         'https://www.paperplanetech.co/static/media/client7.5a7a7b981e3e2cfb594f.png',
//         'https://www.paperplanetech.co/static/media/client8.fdaee9618e9dcc976fea.png',
//         'https://www.paperplanetech.co/static/media/client9.31b8abdf380d8f43d95e.png',
//         'https://www.paperplanetech.co/static/media/client10.3d877261fd897c77041e.png',
//     ];
//     const settings = {
//         infinite: true,
//         speed: 3000,
//         slidesToShow: images.length >= 4 ? 4 : images.length,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 0, // Adjust the value to control the speed of the slide transitions
//         cssEase: 'linear',
//         swipe: false,
//         pauseOnHover: false,
//         initialSlide: 0,
//         arrows: false,
//     };


//     return (
//         <div>



//             <div className='row first d-flex' >
//                 <div className='col-sm-6 col-md-6'>
//                     <div className='MuiTypography-h1' style={{ wordBreak: 'break-word', padding: '10px' }}>
//                         <h1>Get your own <span style={{
//                             color: 'rgb(25, 188, 204)',

//                         }}>Digital Clinic</span> on Whatsapp <FaWhatsapp size={25} className="animated-whatsapp-icon me-2" /><br />
//                             <span style={{
//                                 color: 'rgb(25, 188, 204)',

//                             }}>in less than 7 minutes!</span><img src={rocket} style={{ height: '40px', width: '40px' }} className='ms-2' /></h1>
//                     </div>
//                     <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-flex-start MuiGrid-grid-xs-12" style={{ justifyContent: 'flex-start', marginTop: '3rem' }}>
//                         <div className="MuiGrid-root MuiGrid-item">
//                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary p-2" tabIndex="0" type="button" style={{ width: '300px', fontSize: '25px' }} >
//                                 <span className="MuiButton-label text-white me-3" style={{ fontWeight: 'bold' }}>Start 15-days trial now</span>
//                                 <span className="MuiTouchRipple-root"></span></button><p className="MuiTypography-root MuiTypography-body1" style={{ marginTop: '0.5rem', marginLeft: '1.4rem' }}>Takes less than 60s ⚡</p></div>
//                         <div className="MuiGrid-root MuiGrid-item">
//                             <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary btn border-success p-2" tabIndex="0" type="button" style={{ marginLeft: '1rem', marginTop: '0px', width: '200px', borderRadius: '50px' }}>
//                                 <span className="MuiButton-label text-success me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}>Book a demo</span><span className="MuiTouchRipple-root"></span></button></div></div>
//                 </div>
//                 <div className='col-sm-6 col-md-6'>
//                     <img className='imgstyle' src='https://www.paperplanetech.co/static/media/hero-image.2f231d9891424705d6d5129e181acf92.svg' alt='alter' />
//                 </div>
//             </div>

//             <div className="slider-container container-fluid" style={{ maxWidth: '200%', overflowX: 'auto', padding: '10px' }}>
//                 <div className="slider">
//                     <div className="slide-track">
//                         <Slider {...settings}>
//                             {images.map((image, index) => (
//                                 <div key={index} className="slide">
//                                     <img
//                                         src={image}
//                                         alt={`Slide ${index + 1}`}
//                                         style={{ objectFit: 'contain', width: '200px', height: '150px', marginRight: '10px' }}
//                                     />
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <h2 class="MuiTypography-root MuiTypography-h2 MuiTypography-alignCenter text-center">Trusted by 1000+ Clinics &amp; Hospitals</h2>
//                 <div className='d-flex flex-wrap justify-content-around align-items-center mt-5' >
//                     <div className='doc-card d-flex flex-column align-items-center justify-content-center'>
//                         <p class="MuiTypography-root MuiTypography-body1 " style={{ fontWeight: 'bold', fontSize: '55px' }}><span class="counterSpan">600,000+</span></p>
//                         <h3 class="MuiTypography-root MuiTypography-h3 text-center" style={{ fontWeight: 'lighter' }}>Patients </h3>
//                     </div>
//                     <div className='doc-card d-flex flex-column align-items-center justify-content-center'>
//                         <p class="MuiTypography-root MuiTypography-body1" style={{ fontWeight: 'bold', fontSize: '55px' }}><span class="counterSpan">3,000+</span></p>
//                         <h3 class="MuiTypography-root MuiTypography-h3" style={{ fontWeight: 'lighter' }}>Patients </h3>
//                     </div>
//                     <div className='doc-card d-flex flex-column align-items-center justify-content-center'>
//                         <p class="MuiTypography-root MuiTypography-body1" style={{ fontWeight: 'bold', fontSize: '55px' }}><span class="counterSpan">100,000+</span></p>
//                         <h3 class="MuiTypography-root MuiTypography-h3" style={{ fontWeight: 'lighter' }}>Patients </h3>
//                     </div>
//                 </div>
//             </div>
//             <div className='text-center mt-4'>
//                 <a className="navbar-brand" href="#">
//                     <img src='https://image.similarpng.com/very-thumbnail/2022/01/Medical-health-logo-design-on-transparent-background-PNG.png' style={{ height: '60px', width: '60px' }} className='me-2' alt='.' /><span style={{ fontSize: '25px', fontFamily: 'cursive' }}>Healtether</span></a>

//                 <Toggle leftLabel="Clinics" rightLabel="Business" />

//             </div>

//         </div >

//     )
// }

import React, { useState } from 'react';
import './Home.css';
import './Homee.css';
import { FaWhatsapp } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Toggle from './toggle';
import rocket from './Assets/images/rocket.png';

export default function Home() {
    const images = [
        'https://www.paperplanetech.co/static/media/client2.5604d158cce6000f455e.png',
        'https://www.paperplanetech.co/static/media/client1.f833de81e2387b215a3d.png',
        'https://www.paperplanetech.co/static/media/client3.4fe8b764dae8d4574e43.png',
        'https://www.paperplanetech.co/static/media/client4.d852c15a7032cde064c8.png',
        'https://www.paperplanetech.co/static/media/client5.98017aa34e119c58e644.png',
        'https://www.paperplanetech.co/static/media/client6.7418e655bd6a6c2f0b34.png',
        'https://www.paperplanetech.co/static/media/client7.5a7a7b981e3e2cfb594f.png',
        'https://www.paperplanetech.co/static/media/client8.fdaee9618e9dcc976fea.png',
        'https://www.paperplanetech.co/static/media/client9.31b8abdf380d8f43d95e.png',
        'https://www.paperplanetech.co/static/media/client10.3d877261fd897c77041e.png',
        'https://www.paperplanetech.co/static/media/client5.98017aa34e119c58e644.png',
        'https://www.paperplanetech.co/static/media/client6.7418e655bd6a6c2f0b34.png',
        'https://www.paperplanetech.co/static/media/client7.5a7a7b981e3e2cfb594f.png',
        'https://www.paperplanetech.co/static/media/client8.fdaee9618e9dcc976fea.png',
        'https://www.paperplanetech.co/static/media/client9.31b8abdf380d8f43d95e.png',
        'https://www.paperplanetech.co/static/media/client10.3d877261fd897c77041e.png',
    ];

    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: images.length >= 4 ? 4 : images.length,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Adjust the value to control the speed of the slide transitions
        cssEase: 'linear',
        swipe: false,
        pauseOnHover: false,
        initialSlide: 0,
        arrows: false,
    };

    return (
        <div>
            <div className='row first d-flex' style={{ padding: '3% 8%' }}>
                <div className='col-sm-6 col-md-6 order-md-last '>
                    <img className='imgstyle' src='https://www.paperplanetech.co/static/media/hero-image.2f231d9891424705d6d5129e181acf92.svg' alt='alter' />
                </div>
                <div className='col-sm-6 col-md-6'>
                    <div className='h1' style={{ wordBreak: 'break-word', padding: '10px' }}>
                        <h1>
                            Get your own{' '}
                            <span style={{ color: 'rgb(25, 188, 204)' }}>Digital Clinic</span> on Whatsapp{' '}
                            <FaWhatsapp size={25} className="animated-whatsapp-icon me-2" />
                            <br />
                            <span style={{ color: 'rgb(25, 188, 204)' }}>in less than 7 minutes!</span>
                            <img src={rocket} style={{ height: '40px', width: '40px' }} className='ms-2' alt='rocket' />
                        </h1>
                    </div>
                    <div className="d-flex flex-column justify-content-start mt-3">
                        <button className="btn me-2 green_button free" >
                            Start 15-days trial now
                        </button><br />
                        <p className="ms-3">Takes less than 60s ⚡</p>


                        <button className="btn text-success border-success fs-4 btn-lg me-2" style={{ width: '200px', borderRadius: '50px' }}>
                            Book a demo
                        </button>
                    </div>

                </div>

            </div>

            <div className="slider-container container-fluid" >
                <div className="slider">
                    <div className="slide-track">
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index} className="slide">
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="img-fluid"
                                        style={{ objectFit: 'contain', maxWidth: '100%', width: '250px', height: '200px', marginRight: '5px' }}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>


            <div>
                <h2 className="text-center">Trusted by 1000+ Clinics & Hospitals</h2>
                <div className='d-flex flex-wrap justify-content-around align-items-center mt-5'>
                    <div className='doc-card d-flex flex-column align-items-center justify-content-center'>
                        <p className="counterSpan " style={{ fontSize: '60px' }}>600,000+</p>
                        <h3 className="text-center">Patients</h3>
                    </div>
                    <div className='doc-card d-flex flex-column align-items-center justify-content-center'>
                        <p className="counterSpan " style={{ fontSize: '60px' }}>3,000+</p>
                        <h3 className="text-center">Patients</h3>
                    </div>
                    <div className='doc-card d-flex flex-column align-items-center justify-content-center'>
                        <p className="counterSpan " style={{ fontSize: '60px' }}>100,000+</p>
                        <h3 className="text-center">Patients</h3>
                    </div>
                </div>
            </div>

            <div className='text-center mt-4'>
                <a className="navbar-brand" href="#">
                    <img src='https://image.similarpng.com/very-thumbnail/2022/01/Medical-health-logo-design-on-transparent-background-PNG.png' style={{ height: '60px', width: '60px' }} className='me-2' alt='logo' />
                    <span style={{ fontSize: '25px', fontFamily: 'cursive' }}>Healtether</span>
                </a>
                <Toggle
                    leftLabel="Clinics"
                    rightLabel="Business"
                    className="custom-toggle"
                />
            </div>
        </div>
    );
}
