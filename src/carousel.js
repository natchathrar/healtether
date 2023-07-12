import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import quote from './Assets/images/quote.png'
import sing from './Assets/images/sing.png'
import dharman from './Assets/images/drnaman.png'
import mohita from './Assets/images/mohita1.png'
import viral from './Assets/images/Viral.png'

function FeedbackCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className="feedback-carousel-container" style={{ padding: '3% 10%' }}>
            <Slider {...settings}>
                <div>

                    <div style={{ padding: '1rem', marginBottom: '2rem' }}>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-content-xs-space-between" style={{ height: '500px', lineHeight: '35px', padding: '2rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', background: 'rgb(255, 255, 255)', textAlign: 'left', borderRadius: '14px' }}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                <img src={quote} alt="quote" />
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-10">
                                <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary" >
                                    <span style={{ fontSize: '20px' }}>Paperplane WhatsApp Clinic assist me to create my own <span style={{ color: 'rgb(77, 99, 221)', fontWeight: '900' }}>social media brand. </span>I can provide my patients with the best care by sending them<span style={{ color: 'rgb(77, 99, 221)', fontWeight: '900' }}> personalised and automated medicine &amp; follow-up reminders</span> while maintaining a proper patient database on my mobile phone itself.</span>
                                </h6>
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center" style={{ flexWrap: 'nowrap' }}>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <img src={viral} alt="Dr. Mohita Mehrotra" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
                                </div>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <h5 className="MuiTypography-root MuiTypography-h5" >Dr. Paramjit sing Juneja</h5>
                                    <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary" >Growing Smiles, Uttar Pradesh</h6>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabIndex="0" type="button" style={{ background: 'rgb(37, 211, 102)', color: 'white', marginTop: '1rem' }}>
                                        <span className="MuiButton-label">
                                            <span className="MuiButton-startIcon MuiButton-iconSizeSmall"><i className="fa-brands fa-whatsapp"></i></span>TRY NOW !
                                        </span>
                                        <span className="MuiTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>

                    <div style={{ padding: '1rem', marginBottom: '2rem' }}>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-content-xs-space-between" style={{ height: '500px', lineHeight: '35px', padding: '2rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', background: 'rgb(255, 255, 255)', textAlign: 'left', borderRadius: '14px' }}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                <img src={quote} alt="quote" />
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-10">
                                <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary" >
                                    <span>Paperplane WhatsApp Clinic assist me to create my own <span style={{ color: 'rgb(77, 99, 221)', fontWeight: '900' }}>social media brand. </span>I can provide my patients with the best care by sending them<span style={{ color: 'rgb(77, 99, 221)', fontWeight: '900' }}> personalised and automated medicine &amp; follow-up reminders</span> while maintaining a proper patient database on my mobile phone itself.</span>
                                </h6>
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center" style={{ flexWrap: 'nowrap' }}>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <img src={mohita} alt="Dr. Mohita Mehrotra" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
                                </div>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <h5 className="MuiTypography-root MuiTypography-h5" >Dr. Mohita Mehrotra</h5>
                                    <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary" >Growing Smiles, Uttar Pradesh</h6>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabIndex="0" type="button" style={{ background: 'rgb(37, 211, 102)', color: 'white', marginTop: '1rem' }}>
                                        <span className="MuiButton-label">
                                            <span className="MuiButton-startIcon MuiButton-iconSizeSmall"><i className="fa-brands fa-whatsapp"></i></span>TRY NOW !
                                        </span>
                                        <span className="MuiTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>

                    <div style={{ padding: '1rem', marginBottom: '2rem' }}>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-content-xs-space-between" style={{ height: '500px', lineHeight: '35px', padding: '2rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', background: 'rgb(255, 255, 255)', textAlign: 'left', borderRadius: '14px' }}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                <img src={quote} alt="quote" />
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-10">
                                <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary" >
                                    <span>Paperplane WhatsApp Clinic assist me to create my own <span style={{ color: 'rgb(77, 99, 221)', fontWeight: '900' }}>social media brand. </span>I can provide my patients with the best care by sending them<span style={{ color: 'rgb(77, 99, 221)', fontWeight: '900' }}> personalised and automated medicine &amp; follow-up reminders</span> while maintaining a proper patient database on my mobile phone itself.</span>
                                </h6>
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center" style={{ flexWrap: 'nowrap' }}>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <img src={viral} alt="Dr. Mohita Mehrotra" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
                                </div>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <h5 className="MuiTypography-root MuiTypography-h5" >Dr. Viralsinhraj</h5>
                                    <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary" >Growing Smiles, Uttar Pradesh</h6>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabIndex="0" type="button" style={{ background: 'rgb(37, 211, 102)', color: 'white', marginTop: '1rem' }}>
                                        <span className="MuiButton-label">
                                            <span className="MuiButton-startIcon MuiButton-iconSizeSmall"><i className="fa-brands fa-whatsapp"></i></span>TRY NOW !
                                        </span>
                                        <span className="MuiTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>

                    <div style={{ padding: '1rem', marginBottom: '2rem' }}>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-content-xs-space-between" style={{ height: '500px', lineHeight: '35px', padding: '2rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', background: 'rgb(255, 255, 255)', textAlign: 'left', borderRadius: '14px' }}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                <img src={quote} alt="quote" />
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-10">
                                <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary" >
                                    <span>Paperplane WhatsApp Clinic assist me to create my own <span style={{ color: 'rgb(77, 99, 221)', fontWeight: '900' }}>social media brand. </span>I can provide my patients with the best care by sending them<span style={{ color: 'rgb(77, 99, 221)', fontWeight: '900' }}> personalised and automated medicine &amp; follow-up reminders</span> while maintaining a proper patient database on my mobile phone itself.</span>
                                </h6>
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center" style={{ flexWrap: 'nowrap' }}>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <img src={dharman} alt="Dr. Mohita Mehrotra" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
                                </div>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <h5 className="MuiTypography-root MuiTypography-h5" >Dr. Naman Kanodia</h5>
                                    <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary" >Growing Smiles, Uttar Pradesh</h6>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabIndex="0" type="button" style={{ background: 'rgb(37, 211, 102)', color: 'white', marginTop: '1rem' }}>
                                        <span className="MuiButton-label">
                                            <span className="MuiButton-startIcon MuiButton-iconSizeSmall"><i className="fa-brands fa-whatsapp"></i></span>TRY NOW !
                                        </span>
                                        <span className="MuiTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>

                    <div style={{ padding: '1rem', marginBottom: '2rem' }}>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-content-xs-space-between" style={{ height: '500px', lineHeight: '35px', padding: '2rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', background: 'rgb(255, 255, 255)', textAlign: 'left', borderRadius: '14px' }}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                <img src={quote} alt="quote" />
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-10">
                                <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary" >
                                    <span>Paperplane WhatsApp Clinic assist me to create my own <span style={{ color: 'rgb(77, 99, 221)', fontWeight: '900' }}>social media brand. </span>I can provide my patients with the best care by sending them<span style={{ color: 'rgb(77, 99, 221)', fontWeight: '900' }}> personalised and automated medicine &amp; follow-up reminders</span> while maintaining a proper patient database on my mobile phone itself.</span>
                                </h6>
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center" style={{ flexWrap: 'nowrap' }}>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <img src={sing} alt="Dr. Mohita Mehrotra" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
                                </div>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <h5 className="MuiTypography-root MuiTypography-h5" >Dr. Paramjit sing Juneja</h5>
                                    <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary" >Growing Smiles, Uttar Pradesh</h6>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabIndex="0" type="button" style={{ background: 'rgb(37, 211, 102)', color: 'white', marginTop: '1rem' }}>
                                        <span className="MuiButton-label">
                                            <span className="MuiButton-startIcon MuiButton-iconSizeSmall"><i className="fa-brands fa-whatsapp"></i></span>TRY NOW !
                                        </span>
                                        <span className="MuiTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Slider>
        </div>
    );
}

export default FeedbackCarousel;
