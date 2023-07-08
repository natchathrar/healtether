import React, { useState } from 'react';
import hospital from './Assets/images/hospital.png'
import polyclinic from './Assets/images/polyclinic.png'
import pharmacy from './Assets/images/pharmacy.png'
import independent from './Assets/images/independent.png'
import Clinic from './Assets/images/clinic.png'
import './Home.css'
import phone from './Assets/Svg/Mockup.svg'
import call from './Assets/Svg/Vid call.svg'
import group from './Assets/images/Group.png'
import appoint from './Assets/images/appoint.png'
import whatsapp from './Assets/images/whatsapp.png'
import card from './Assets/images/abhaCard.png'
import ablogo from './Assets/images/abdmLogo.png'
import icons from './Assets/images/abhaF icons.png'

const Toggle = ({ leftLabel, rightLabel }) => {
    const [toggle, setToggle] = useState(false);

    const toggleState = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <div>
                <button
                    className={`toggle-button ${toggle ? 'active' : ''}`}
                    onClick={() => toggleState()}
                >
                    {leftLabel}
                </button>
                <button
                    className={`toggle-button ${!toggle ? 'active' : ''}`}
                    onClick={() => toggleState()}
                >
                    {rightLabel}
                </button>
            </div>

            {toggle ? (
                <div className="content-clinics">
                    <div className="MuiGrid-root MuiGrid-item mt-5">
                        <div className=' d-block'>
                            <div className='' style={{ marginLeft: '-600px' }}>
                                <h5 className="MuiTypography-root MuiTypography-h5" style={{ fontWeight: '500', fontFamily: 'Montserrat' }}><span style={{ fontWeight: '600' }}>Paperplane</span>
                                    <span style={{ padding: '0.5rem', background: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', color: 'rgb(255, 255, 255)', marginLeft: '0.5rem', borderRadius: '11px', lineHeight: '10px' }}>Enterprise</span><br />Right for 👉</h5>
                                <div className='mb-5'>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabindex="0" type="button" style={{ margin: '2rem 0rem', height: '50px' }}>
                                        <span className="MuiButton-label fw-bold p-2 ms-3 me-2 text-white" >Book a demo</span><span className="MuiTouchRipple-root"></span></button></div>
                            </div>
                            <div className='d-flex justify-content-center' style={{ marginTop: '-253px', marginLeft: '300px' }}>
                                <div style={{ width: '200px', height: '200px', margin: '1.6rem 0.4rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.18) 0px 4px 20px', borderRadius: '18px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ background: 'rgba(161, 176, 255, 0.5)', textAlign: 'center', borderRadius: '18px 18px 0px 0px', padding: '1rem' }}>
                                        <img src={hospital} alt='.' height={'120px'} width={'120px'} style={{ padding: '10px' }} />

                                    </div>
                                    <div style={{ padding: '0.5rem', height: 'inherit', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                        <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-alignCenter" style={{ fontWeight: '700' }}>Hospital</h6>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ width: '200px', height: '200px', margin: '1.6rem 0.4rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.18) 0px 4px 20px', borderRadius: '18px', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ background: 'rgba(161, 176, 255, 0.5)', textAlign: 'center', borderRadius: '18px 18px 0px 0px', padding: '1rem' }}>
                                            <img src={polyclinic} alt='.' height={'120px'} width={'120px'} style={{ padding: '10px' }} />

                                        </div>
                                        <div style={{ padding: '0.5rem', height: 'inherit', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                            <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-alignCenter" style={{ fontWeight: '700' }}>Polyclinic</h6>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ width: '200px', height: '200px', margin: '1.6rem 0.4rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.18) 0px 4px 20px', borderRadius: '18px', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ background: 'rgba(161, 176, 255, 0.5)', textAlign: 'center', borderRadius: '18px 18px 0px 0px', padding: '1rem' }}>
                                            <img src={pharmacy} alt='.' height={'120px'} width={'120px'} style={{ padding: '10px' }} />

                                        </div>
                                        <div style={{ padding: '0.5rem', height: 'inherit', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                            <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-alignCenter" style={{ fontWeight: '700' }}>Pharmacy</h6>
                                        </div></div>
                                </div>
                            </div>
                        </div>
                        <div className='row ' style={{ padding: '50px' }}>
                            <div className='col-md-6 col-sm-6' style={{ textAlign: 'left', paddingLeft: '100px' }}>
                                <h1 class="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '2rem', fontWeight: '500' }}>
                                    <span style={{ backgroundImage: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundColor: 'initial', color: 'white', padding: '0.2rem', borderRadius: '4px' }}>WhatsApp Clinic</span> that's open 24/7 🏪</h1>

                                <div class="MuiGrid-root MuiGrid-item" style={{ textAlign: 'left' }}>
                                    <h5 class="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary">
                                        <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                            <li>Allow patients to<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>book appointments</span>
                                            </li>
                                            <li>Send E-Rx along with<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>medicine &amp; follow-up</span>reminders
                                            </li>
                                            <li>Collect<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>medical data</span></li>
                                        </ul>
                                    </h5>
                                </div>
                                <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                    <span className="MuiButton-label text-white ms-3 me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}>Start Now</span>
                                    <span class="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                            <div className='col-sm-6 col-md-6'>
                                <img src={phone} alt='.' height={'400px'} width={'400px'} />
                            </div>

                        </div>
                        <div className='row mt-5' style={{ padding: '0px 50px' }}>
                            <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center" >
                                <div className='col-md-6 col-sm-6' >
                                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-once="true" data-aos-delay="200" style={{ textAlign: 'left' }}>
                                        <img src={call} alt="[object Object]" height={'500px'} width={'500px'} style={{ objectFit: 'contain', width: '90%;' }} />
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-6'>

                                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                                        <h1 class="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '2rem', fontWeight: '700' }}>Power of both
                                            <span style={{ backgroundImage: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundColor: 'initial', color: 'white', padding: '0.2rem', borderRadius: '4px' }}>online &amp; offline</span> in a single app 💪
                                        </h1>
                                        <div class="MuiGrid-root MuiGrid-item" style={{ textAlign: 'left' }}>
                                            <h5 class="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary">
                                                <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                                    <li>Book &amp; manage<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>offline appointments</span>
                                                    </li>
                                                    <li>Take<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>online consultations </span></li>
                                                    <li>Write
                                                        <span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>digital prescriptions </span>
                                                    </li>
                                                    <li>Manage
                                                        <span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}> your schedule</span>
                                                    </li>
                                                </ul>
                                            </h5>
                                        </div>
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                            <span className="MuiButton-label text-white ms-3 me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}>Start Now</span>
                                            <span class="MuiTouchRipple-root"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-5' style={{ padding: '0px 70px' }}>
                            <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center" style={{ margin: '3rem 0px' }}>
                                <div className='col-md-6 col-sm-6'>
                                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                                        <h1 class="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '2rem', fontWeight: '700' }}>Type less and
                                            <span style={{ backgroundImage: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundColor: 'initial', color: 'white', padding: '0.2rem', borderRadius: '4px', marginLeft: '0.5rem' }}>write faster</span> prescriptions with AI 🤖
                                        </h1>
                                        <div class="MuiGrid-root MuiGrid-item" style={{ textAlign: 'left' }}>
                                            <h5 class="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary">
                                                <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                                    <li>AI that<span>learns and grows</span>with you
                                                    </li>
                                                    <li>AI based suggestions for
                                                        <span>drugs, tests &amp; much more</span>
                                                    </li>
                                                </ul>
                                            </h5>
                                        </div>
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                            <span className="MuiButton-label text-white ms-3 me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}>Start Now</span>
                                            <span class="MuiTouchRipple-root"></span>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-6'>
                                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'right' }}>
                                        <img src={group} alt="[object Object]" height={'500px'} width={'500px'} style={{ objectFit: 'contain', width: '90%;' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-5' style={{ padding: '0px 70px' }}>

                            <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center" style={{ margin: '3rem 0px' }}>
                                <div className='col-md-6 col-sm-6'>
                                    <div class="MuiGrid-root  aos-init aos-animate" data-aos="fade-right" data-aos-once="true" data-aos-delay="200" style={{ textAlign: 'left' }}>
                                        <img src={appoint} alt="[object Object]" height={'500px'} width={'500px'} style={{ objectFit: 'contain', width: '90%;' }} />
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-6'>
                                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                                        <h1 class="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '2rem', fontWeight: '700' }}>Build your own <span style={{ backgroundImage: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundColor: 'initial', color: 'white', padding: '0.2rem', borderRadius: '4px', marginLeft: '0.5rem' }}>clinic brand</span> 📣</h1>
                                        <div class="MuiGrid-root MuiGrid-item" style={{ textAlign: 'left' }}>
                                            <h5 class="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary">
                                                <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                                    <li>Personalised<span > clinic website</span>with <span >WhatsApp &amp; Google Maps integration</span>
                                                    </li>
                                                    <li>Personally curated<span >marketing content &amp; posters</span>
                                                    </li>
                                                    <li>Digital marketing support on<span >Instagram, Facebook &amp; Google</span>
                                                    </li>
                                                </ul>
                                            </h5>
                                        </div>
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                            <span className="MuiButton-label text-white ms-3 me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}>Start Now</span>
                                            <span class="MuiTouchRipple-root"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-5' style={{ padding: '0px 70px' }}>
                            <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center" style={{ margin: '3rem 0px' }}>
                                <div className='col-md-6 col-sm-6'>
                                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                                        <h1 class="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '2rem', fontWeight: '700' }}>Connect with your patients through our <span style={{ backgroundImage: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundColor: 'initial', color: 'white', padding: '0.2rem', borderRadius: '4px', marginLeft: '0.5rem' }}>integrated WhatsApp solution</span> 💬
                                        </h1>
                                        <div class="MuiGrid-root MuiGrid-item" style={{ textAlign: 'left' }}>
                                            <h5 class="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary">
                                                <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                                    <li><span >Chat</span>with patients </li>
                                                    <li>Send<span >prescriptions </span>
                                                    </li>
                                                    <li>Receive<span >online payments </span>
                                                    </li>
                                                    <li>Automatic<span >WhatsApp reminders</span>
                                                    </li>
                                                </ul>
                                            </h5>
                                        </div>
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                            <span className="MuiButton-label text-white ms-3 me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}>Start Now</span>
                                            <span class="MuiTouchRipple-root"></span>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-6'>
                                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'right' }}>
                                        <img src={whatsapp} alt="[object Object]" height={'500px'} width={'500px'} style={{ objectFit: 'contain', width: '90%;' }} />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ margin: '10rem 0px 3rem', padding: '3% 8%' }} className='d-flex flex-row'>

                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3" style={{ textAlign: 'left' }} x>
                                <img src={card} alt="ABHA from Paperplane"
                                    style={{ objectFit: 'contain', width: '300px' }} />
                            </div>
                            <div class="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12 MuiGrid-grid-md-9"
                                style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 11px 32px', padding: '1rem', borderRadius: '27px' }}>
                                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8"
                                    style={{ textAlign: 'center' }}>
                                    <h1 class="MuiTypography-root MuiTypography-h1">Creating India's Digital Health Ecosystem</h1>
                                    <h4 class="MuiTypography-root MuiTypography-h4" style={{ fontWeight: '500' }}>ABHA - Ayushman Bharat
                                        Health Account</h4>
                                    <h5 class="MuiTypography-root MuiTypography-h5" style={{ fontWeight: '300' }}>Get control of your
                                        health data and documents using WhatsApp</h5>
                                </div>
                                <div class="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12 MuiGrid-grid-md-8"
                                    style={{ marginTop: '2rem', textAlign: 'left' }}>
                                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-5"
                                        style={{ marginBottom: '0px' }}>
                                        <img src={ablogo}
                                            style={{ objectFit: 'contain', width: '200px' }} />
                                    </div>
                                    <div class="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7">
                                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                            <img
                                                src={icons}
                                                style={{ objectFit: 'contain', width: '300px' }} />
                                        </div>
                                        <button
                                            class="MuiButtonBase-root MuiButton-root MuiButton-text btn" tabindex="0" type="button"
                                            style={{ background: 'rgb(117, 191, 99)', color: 'white', fontFamily: 'Inter', marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '25px', fontWeight: 'lighter' }}><span
                                                class="MuiButton-label">Create abha id now &gt;</span><span
                                                    class="MuiTouchRipple-root"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12" style={{ margin: '4rem 0px' }}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-alignCenter">
                                    Boost your{' '}
                                    <span style={{ backgroundImage: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundColor: 'initial', color: 'white', padding: '0.3rem', borderRadius: '4px' }}>
                                        personal brand, patient retention &amp; revenue
                                    </span>
                                </h1>
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12" style={{ marginTop: '2rem' }}>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3" style={{ padding: '2rem' }}>
                                    <div style={{ borderRadius: '18px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', columnGap: '1rem' }}>
                                        <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-colorPrimary" style={{ fontSize: '60px', background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitTextFillColor: 'transparent' }}>
                                            8/10
                                        </h1>
                                        <br />
                                        <h6 className="MuiTypography-root MuiTypography-h6">patients feel more connected to clinics they can message.</h6>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3" style={{ padding: '2rem' }}>
                                    <div style={{ borderRadius: '18px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', columnGap: '1rem' }}>
                                        <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-colorPrimary" style={{ fontSize: '60px', background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitTextFillColor: 'transparent' }}>
                                            65%
                                        </h1>
                                        <br />
                                        <h6 className="MuiTypography-root MuiTypography-h6">prefer messaging on WhatsApp over email or phone calls</h6>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3" style={{ padding: '2rem' }}>
                                    <div style={{ borderRadius: '18px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', columnGap: '1rem' }}>
                                        <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-colorPrimary" style={{ fontSize: '60px', background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitTextFillColor: 'transparent' }}>
                                            25%
                                        </h1>
                                        <br />
                                        <h6 className="MuiTypography-root MuiTypography-h6">increase in repeat consultations over WhatsApp</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="content-business">
                    <div className="MuiGrid-root MuiGrid-item ms-5 mt-5">
                        <div className=' ms-5 d-block'>
                            <div className='' style={{ marginLeft: '-400px' }}>
                                <h5 className="MuiTypography-root MuiTypography-h5" style={{ fontWeight: '500', fontFamily: 'Montserrat' }}>
                                    <span style={{ fontWeight: '600' }}>Paperplane</span>
                                    <span style={{ padding: '0.5rem', background: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', color: 'rgb(255, 255, 255)', marginLeft: '0.5rem', borderRadius: '11px' }}>Enterprise</span><br />Right for 👉</h5>
                                <div className='mb-5'>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabindex="0" type="button" style={{ margin: '2rem 0rem', height: '50px' }}>
                                        <span className="MuiButton-label fw-bold p-2 ms-3 me-2 text-white" >Book a demo</span><span className="MuiTouchRipple-root"></span></button></div>
                            </div>
                            <div className='d-flex justify-content-center' style={{ marginTop: '-253px', marginLeft: '300px' }}>
                                <div style={{ width: '200px', height: '200px', margin: '1.6rem 0.4rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.18) 0px 4px 20px', borderRadius: '18px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ background: 'rgba(161, 176, 255, 0.5)', textAlign: 'center', borderRadius: '18px 18px 0px 0px', padding: '1rem' }}>
                                        <img src={Clinic} alt='.' height={'120px'} width={'120px'} style={{ padding: '10px' }} />

                                    </div>
                                    <div style={{ padding: '0.5rem', height: 'inherit', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                        <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-alignCenter" style={{ fontWeight: '700' }}>Small Clinic</h6>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ width: '200px', height: '200px', margin: '1.6rem 0.4rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.18) 0px 4px 20px', borderRadius: '18px', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ background: 'rgba(161, 176, 255, 0.5)', textAlign: 'center', borderRadius: '18px 18px 0px 0px', padding: '1rem' }}>
                                            <img src={independent} alt='.' height={'120px'} width={'120px'} style={{ padding: '10px' }} />

                                        </div>
                                        <div style={{ padding: '0.5rem', height: 'inherit', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                            <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-alignCenter" style={{ fontWeight: '700' }}>Independent Practitioner</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )
            }
        </div >
    );
};

export default Toggle;
