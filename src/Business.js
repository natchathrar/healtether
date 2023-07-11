import React from 'react';
import hospital from './Assets/images/hospital.png'
import polyclinic from './Assets/images/polyclinic.png'
import pharmacy from './Assets/images/pharmacy.png'
import './Home.css'
import whatsapp from './Assets/images/whatsapp.png'
import card from './Assets/images/abhaCard.png'
import ablogo from './Assets/images/abdmLogo.png'
import icons from './Assets/images/abhaF icons.png'
import Blogs from './Blogs';
import whatsapp1 from './Assets/images/whatsappImg.png'
import other from './Assets/images/other.png'
import website from './Assets/images/web.png'
import document from './Assets/images/documents.png'
import web from './Assets/images/website icon.png'
import Erx from './Assets/images/E Rx.png'
import rupee from './Assets/images/rupee.png'
import patient from './Assets/images/Patient.png'
import worldwide from './Assets/images/worldwide.png'
import vectary from './Assets/images/Vectary.png'
import economic from './Assets/images/economic.png'
import ENT from './Assets/images/ENT-India-Logo.svg'
import yourstory from './Assets/images/yourStory.svg'
import corner from './Assets/images/cornerstone.png'
import venture from './Assets/images/venture.png'
import mongo from './Assets/images/MongoDB.png'
import hunx from './Assets/images/100x.png'
import aws from './Assets/images/AWS.png'
import Slider from 'react-slick';
import FAQAccordion from './Accordion';
import prescription from './Assets/images/prescrip.png'
import group1 from './Assets/images/Group1.png'
import Group3 from './Assets/images/Group3.png'
import frame from './Assets/images/Frame.png'
import group4 from './Assets/images/Group4.png'

function Business() {
    return (
        <div>
            <div className="content-business">
                <div className="MuiGrid-root MuiGrid-item ms-5 mt-5">
                    <div className=' d-block'>
                        <div className='' style={{ marginLeft: '-600px' }}>
                            <h5 className="MuiTypography-root MuiTypography-h5" style={{ fontWeight: '500', fontFamily: 'Montserrat' }}><span style={{ fontWeight: '600' }}>Paperplane</span>
                                <span style={{ padding: '0.5rem', background: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', color: 'rgb(255, 255, 255)', marginLeft: '0.5rem', borderRadius: '11px', lineHeight: '10px' }}>Enterprise</span><br />Right for 👉</h5>
                            <div className='mb-5'>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ margin: '2rem 0rem', height: '50px' }}>
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
                    <div className='row p-3'>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center" style={{ margin: '3rem 0px' }}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                                <h1 className="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '2rem', fontWeight: 700 }}>
                                    Provide seamless patient experience &amp;
                                    <span style={{ backgroundImage: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundColor: 'initial', color: 'white', padding: '0.3rem', borderRadius: '4px', marginLeft: '0.5rem' }}>
                                        improve retention
                                    </span>
                                </h1>
                                <div className="MuiGrid-root MuiGrid-item" style={{ textAlign: 'left' }}>
                                    <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary">
                                        <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                            <li>Send E-Rx along with<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>medicine &amp; follow-up</span>reminders</li>
                                            <li>Collect<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>medical data</span></li>
                                            <li>Receive<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>online payments</span></li>
                                        </ul>
                                    </h5>
                                </div>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', width: '200px' }}>
                                    <span className="MuiButton-label text-white p-2">Book a demo</span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'right' }}>
                                <img src={prescription} alt="[object Object]" style={{ objectFit: 'contain', width: '90%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center" style={{ margin: '3rem 0px' }}>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-once="true" data-aos-delay="200" style={{ textAlign: 'left' }}>
                            <img src={group1} alt="[object Object]" style={{ objectFit: 'contain', width: '90%' }} />
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                            <h1 className="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '2rem', fontWeight: 700 }}>
                                <span style={{ background: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', color: 'white', padding: '0.3rem', borderRadius: '4px' }}>
                                    Go paperless
                                </span>
                                and optimise your services further!
                            </h1>
                            <div className="MuiGrid-root MuiGrid-item" style={{ textAlign: 'left' }}>
                                <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary">
                                    <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                        <li>Generate branded &amp; clear<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>prescriptions within seconds</span>on WhatsApp</li>
                                        <li>Receive<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>online payments</span></li>
                                    </ul>
                                </h5>
                            </div>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', width: '200px' }}>
                                <span className="MuiButton-label text-white p-2">Book a demo</span>
                                <span className="MuiTouchRipple-root"></span>
                            </button>
                        </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center" style={{ margin: '3rem 0px' }}>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-once="true" data-aos-delay="200" style={{ textAlign: 'left' }}>
                            <h1 className="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '2rem', fontWeight: 700 }}>
                                <span style={{ background: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', color: 'white', padding: '0.3rem', borderRadius: '4px' }}>
                                    Boost sales
                                </span>
                                for both your virtual and offline services
                            </h1>
                            <div className="MuiGrid-root MuiGrid-item" style={{ textAlign: 'left' }}>
                                <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary">
                                    <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                        <li><span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>Regional language</span>support</li>
                                        <li>Accept<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>online payments</span></li>
                                        <li>Send E-Rx along with<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>medicine &amp; follow-up</span>reminders</li>
                                    </ul>
                                </h5>
                            </div>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', width: '200px' }}>
                                <span className="MuiButton-label text-white p-2">Book a demo</span>
                                <span className="MuiTouchRipple-root"></span>
                            </button>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'right' }}>
                            <img src={Group3} alt="[object Object]" style={{ objectFit: 'contain', width: '90%' }} />
                        </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center" style={{ margin: '3rem 0px' }}>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-once="true" data-aos-delay="200" style={{ textAlign: 'left' }}>
                            <img src={frame} alt="[object Object]" style={{ objectFit: 'contain', width: '90%' }} />
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                            <h1 className="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '2rem', fontWeight: 700 }}>
                                <span style={{ background: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', color: 'white', padding: '0.3rem', borderRadius: '4px' }}>
                                    Access your data
                                </span>
                                anytime &amp; anywhere
                            </h1>
                            <div className="MuiGrid-root MuiGrid-item" style={{ textAlign: 'left' }}>
                                <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary">
                                    <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                        <li>Access your dashboard from anywhere<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>within seconds</span></li>
                                        <li>Dedicated<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>app &amp; dashboard</span>support</li>
                                    </ul>
                                </h5>
                            </div>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', width: '200px' }}>
                                <span className="MuiButton-label text-white p-2">Book a demo</span>
                                <span className="MuiTouchRipple-root"></span>
                            </button>
                        </div>
                    </div>
                    <div className='row p-3'>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center" style={{ margin: '3rem 0px' }}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                                <h1 className="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '2rem', fontWeight: 700 }}>
                                    <span style={{ background: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', color: 'white', padding: '0.3rem', borderRadius: '4px' }}>
                                        Manage multiple locations
                                    </span>
                                    and profiles on a single platform
                                </h1>
                                <div className="MuiGrid-root MuiGrid-item" style={{ textAlign: 'left' }}>
                                    <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary">
                                        <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                            <li>Manage<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>multiple doctors</span></li>
                                            <li>Provide selective access to<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>staff members</span>reminders</li>
                                            <li>Manage<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>multiple locations</span>from one single app</li>
                                        </ul>
                                    </h5>
                                </div>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', width: '200px' }}>
                                    <span className="MuiButton-label text-white p-2">Book a demo</span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'right' }}>
                                <img src={group4} alt="[object Object]" style={{ objectFit: 'contain', width: '90%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center" style={{ margin: '3rem 0px' }}>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-once="true" data-aos-delay="200" style={{ textAlign: 'left' }}>
                            <img src={whatsapp} alt="[object Object]" style={{ objectFit: 'contain', width: '90%' }} />
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                            <h1 className="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '2rem', fontWeight: 700 }}>
                                Connect with your patients through our
                                <span style={{ background: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', color: 'white', padding: '0.3rem', borderRadius: '4px', marginRight: '0.5rem' }}>
                                    integrated WhatsApp solution
                                </span>
                            </h1>
                            <div className="MuiGrid-root MuiGrid-item" style={{ textAlign: 'left' }}>
                                <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary">
                                    <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                        <li>Customer<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>chat & management</span></li>
                                        <li>Broadcast<span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>marketing posters</span>on WhatsApp</li>
                                    </ul>
                                </h5>
                            </div>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', width: '200px' }}>
                                <span className="MuiButton-label text-white p-2">Book a demo</span>
                                <span className="MuiTouchRipple-root"></span>
                            </button>
                        </div>
                    </div>
                    <div>


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
                                            class="MuiButtonBase-root MuiButton-root MuiButton-text btn" tabIndex="0" type="button"
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
                                        <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-colorPrimary" style={{
                                            fontSize: '60px',
                                            background: 'linear-gradient(to right, rgb(38, 93, 38), rgb(31, 198, 31))',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            textFillColor: 'transparent',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            8/10
                                        </h1>
                                        <br />
                                        <h6 className="MuiTypography-root MuiTypography-h6">patients feel more connected to clinics they can message.</h6>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3" style={{ padding: '2rem' }}>
                                    <div style={{ borderRadius: '18px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', columnGap: '1rem' }}>
                                        <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-colorPrimary" style={{
                                            fontSize: '60px',
                                            background: 'linear-gradient(to right, rgb(38, 93, 38), rgb(31, 198, 31))',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            textFillColor: 'transparent',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            65%
                                        </h1>

                                        <br />
                                        <h6 className="MuiTypography-root MuiTypography-h6">prefer messaging on WhatsApp over email or phone calls</h6>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3" style={{ padding: '2rem' }}>
                                    <div style={{ borderRadius: '18px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', columnGap: '1rem' }}>
                                        <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-colorPrimary" style={{
                                            fontSize: '60px',
                                            background: 'linear-gradient(to right, rgb(38, 93, 38), rgb(31, 198, 31))',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            textFillColor: 'transparent',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            25%
                                        </h1>
                                        <br />
                                        <h6 className="MuiTypography-root MuiTypography-h6">increase in repeat consultations over WhatsApp</h6>
                                    </div>
                                </div>
                            </div>
                            <Blogs />
                        </div>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12" style={{ margin: '5rem 0px' }}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-alignCenter">Features & Services</h1>
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12" style={{ marginTop: '2rem' }}>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4" style={{ padding: '0.5rem' }}>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ padding: '1.1rem', textAlign: 'center' }}>
                                        <img src={whatsapp1} style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="WhatsApp Assistant" />
                                        <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem', fontWeight: '600', color: 'grey' }}>Your own WhatsApp Assistant</h6>
                                        <p className="MuiTypography-root MuiTypography-body1" style={{ marginTop: '1rem' }}>Automatically get appointments and stay in touch with your patients using WhatsApp</p>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4" style={{ padding: '0.5rem' }}>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ padding: '1.1rem', textAlign: 'center' }}>
                                        <img src={other} style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="All in 1 Practice Management Tool" />
                                        <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem', fontWeight: '600', color: 'grey' }}>All in 1 Practice Management Tool</h6>
                                        <p className="MuiTypography-root MuiTypography-body1" style={{ marginTop: '1rem' }}>Digitize your practice within minutes. One platform for staff, doctors and admin to manage your clinic.</p>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4" style={{ padding: '0.5rem' }}>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ padding: '1.1rem', textAlign: 'center' }}>
                                        <img src={website} style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="Get Free website" />
                                        <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem', fontWeight: '600', color: 'grey' }}>Get Free website</h6>
                                        <p className="MuiTypography-root MuiTypography-body1" style={{ marginTop: '1rem' }}>Grow your digital presence. Get your own personalised website in less than 5 minutes.</p>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4" style={{ padding: '0.5rem' }}>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ padding: '1.1rem', textAlign: 'center' }}>
                                        <img src={document} style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="No more paperwork" />
                                        <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem', fontWeight: '600', color: 'grey' }}>No more paperwork</h6>
                                        <p className="MuiTypography-root MuiTypography-body1" style={{ marginTop: '1rem' }}>Get all the information on your fingertips - Patient history, Appointment details, payments and much more</p>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4" style={{ padding: '0.5rem' }}>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ padding: '1.1rem', textAlign: 'center' }}>
                                        <img src={web} style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="Custom Domain" />
                                        <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem', fontWeight: '600', color: 'grey' }}>Custom Domain</h6>
                                        <p className="MuiTypography-root MuiTypography-body1" style={{ marginTop: '1rem' }}>Make your profile unique by getting your own custom domain name that is easy to remember</p>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4" style={{ padding: '0.5rem' }}>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ padding: '1.1rem', textAlign: 'center' }}>
                                        <img src={rupee} style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="Online payments" />
                                        <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem', fontWeight: '600', color: 'grey' }}>Online payments</h6>
                                        <p className="MuiTypography-root MuiTypography-body1" style={{ marginTop: '1rem' }}>Get more sales, by offering seamless and easy payment options on your WhatsApp Clinic.</p>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4" style={{ padding: '0.5rem' }}>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ padding: '1.1rem', textAlign: 'center' }}>
                                        <img src={worldwide} style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="Create a Global Brand" />
                                        <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem', fontWeight: '600', color: 'grey' }}>Create a Global Brand</h6>
                                        <p className="MuiTypography-root MuiTypography-body1" style={{ marginTop: '1rem' }}>Create & Grow your personal brand digitally. Expand your practice globally under your own brand.</p>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4" style={{ padding: '0.5rem' }}>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ padding: '1.1rem', textAlign: 'center' }}>
                                        <img src={patient} style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="Stay connected to patients" />
                                        <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem', fontWeight: '600', color: 'grey' }}>Stay connected to patients</h6>
                                        <p className="MuiTypography-root MuiTypography-body1" style={{ marginTop: '1rem' }}>Send medicine reminders, Follow-up reminders, medical advice and documents on WhatsApp</p>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4" style={{ padding: '0.5rem' }}>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ padding: '1.1rem', textAlign: 'center' }}>
                                        <img src={Erx} style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="Beautiful & Quick Digital Rx" />
                                        <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem', fontWeight: '600', color: 'grey' }}>Beautiful & Quick Digital Rx</h6>
                                        <p className="MuiTypography-root MuiTypography-body1" style={{ marginTop: '1rem' }}>Generate and share AI Powered digital Prescriptions via your phone or laptop in &lt;30 seconds</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row mt-3 p-5'>

                        <div
                            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12"
                            style={{
                                height: '100vh',
                                display: 'flex',
                                alignItems: 'center',
                                margin: '0px 8% 0px 0px'
                            }}
                        >
                            <div
                                style={{
                                    background: 'rgb(255, 255, 255)',
                                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px',
                                    borderRadius: '18px',
                                    position: 'relative'
                                }}
                            >
                                <div className="MuiGrid-root MuiGrid-container">
                                    <div
                                        className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-grid-xs-12 MuiGrid-grid-md-6"
                                        style={{ padding: '3rem' }}
                                    >
                                        <div className='col-md-6 col-sm-6'>

                                            <div
                                                className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-direction-xs-column MuiGrid-grid-xs-12"
                                                style={{ textAlign: 'left' }}
                                            >
                                                <h1 className="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '0.5rem' }}>
                                                    Get started now
                                                </h1>
                                            </div>
                                            <div className="MuiGrid-root MuiGrid-container MuiGrid-grid-xs-12" style={{ marginTop: '2rem' }}>
                                                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12">
                                                    <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary">
                                                        For any queries enter your Phone Number and we will get back to you
                                                    </h6>
                                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth" style={{ marginTop: '1.5rem' }}>
                                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd" style={{ borderRadius: '33px' }}>
                                                            <input
                                                                aria-invalid="false"
                                                                placeholder="Your phone number"
                                                                type="text"
                                                                maxLength="10"
                                                                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
                                                                value=""
                                                            />
                                                            <div>
                                                                <p
                                                                    className="MuiTypography-root MuiTypography-body2"
                                                                    style={{
                                                                        cursor: 'pointer',
                                                                        color: 'rgb(255, 255, 255)',
                                                                        background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)',
                                                                        padding: '0.75rem 1rem',
                                                                        borderRadius: '29px'
                                                                    }}
                                                                >
                                                                    Connect
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6 col-sm-6'>

                                                            <fieldset aria-hidden="true" className="jss8 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}>
                                                                <legend className="jss9" style={{ width: '0.01px' }}>
                                                                    <span>​</span>
                                                                </legend>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-grid-xs-12 MuiGrid-grid-md-6"
                                        style={{ background: 'rgb(255, 255, 255)', borderRadius: '0px', marginTop: '0px' }}
                                    >
                                        <div
                                            className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-grid-xs-7 MuiGrid-grid-md-12"
                                            style={{ background: 'rgb(77, 99, 221)', height: '100%', padding: '0px 0px 0px 8rem' }}
                                        >
                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7">
                                                <h3
                                                    className="MuiTypography-root MuiTypography-h3"
                                                    style={{
                                                        color: 'rgba(255, 255, 255, 0.85)',
                                                        zIndex: 200,
                                                        lineHeight: 'inherit',
                                                        fontWeight: 'normal'
                                                    }}
                                                >
                                                    The Paperplane app is now <br />
                                                    <span style={{ fontWeight: '700', color: 'rgb(255, 255, 255)', paddingTop: '2rem' }}>
                                                        Available on Android & iOS!
                                                    </span>
                                                </h3>
                                                <img src={vectary} alt="appMockup" style={{ width: '28%', position: 'absolute', top: '-4rem', height: '500px', objectFit: 'contain', right: '-8rem' }}></img>
                                                {/* <img src={vectary} alt="Paperplane app" height={'400px'} width={'400px'} /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12" style={{ background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', textAlign: 'center', margin: '5rem 0px', padding: '2rem', borderRadius: '18px', width: '80%', marginLeft: '150px' }}>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                            <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-alignCenter" style={{ color: 'white' }}>Watch Paperplane in action 🎬</h1>
                        </div>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-item MuiGrid-grid-xs-12" style={{ margin: '2rem 0px' }}>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12 MuiGrid-grid-md-12">
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-direction-xs-column MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <h2 className="MuiTypography-root MuiTypography-h2" style={{ color: 'white', margin: '1rem 0px' }}>View Demo as</h2>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12" style={{ justifyContent: 'center' }}>
                                        <div className="MuiFormGroup-root MuiFormGroup-row" role="radiogroup" aria-label="gender" style={{ color: 'white', marginBottom: '1rem' }}>
                                            <label className="MuiFormControlLabel-root">
                                                <span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss13 Mui-checked MuiIconButton-colorSecondary" aria-disabled="false">
                                                    <span className="MuiIconButton-label">
                                                        <input className="jss15" name="gender1" type="radio" value="doctor" />
                                                        {/* <div className="jss16 jss18">
                                                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                                                </svg>
                                                                <svg className="MuiSvgIcon-root jss17" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                    <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
                                                                </svg>
                                                            </div> */}
                                                    </span>
                                                    <span className="MuiTouchRipple-root"></span>
                                                </span>
                                                <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Doctor</span>
                                            </label>
                                            <label className="MuiFormControlLabel-root">
                                                <span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                                    <span className="MuiIconButton-label">
                                                        <input className="jss15" name="gender1" type="radio" value="patient" />
                                                        {/* <div className="jss16">
                                                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                                                </svg>
                                                                <svg className="MuiSvgIcon-root jss17" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                    <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
                                                                </svg>
                                                            </div> */}
                                                    </span>
                                                    <span className="MuiTouchRipple-root"></span>
                                                </span>
                                                <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Patient</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained" tabIndex="0" type="button" style={{ color: 'white', background: 'rgba(0, 0, 0, 0.4)' }}>
                                            <span className="MuiButton-label">Launch Demo</span>
                                            <span className="MuiTouchRipple-root"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8" style={{ marginTop: 0 }}></div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-content-xs-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-once="true" style={{ margin: '2rem 0px' }}>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                            <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-alignCenter">About Us</h1>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 MuiGrid-grid-md-6" style={{ marginTop: '2rem' }}>
                            <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary MuiTypography-alignCenter">
                                At Paperplane we're building Digital Clinics on WhatsApp for Doctors and Hospital to start and scale their medical practice using everyone's favourite messaging app!
                            </h5>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                <span className="MuiButton-label text-white ms-3 me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}>Know More</span>
                                <span class="MuiTouchRipple-root"></span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <h1 class="MuiTypography-root MuiTypography-h1 MuiTypography-alignCenter">As seen on! 📰</h1>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12" style={{ margin: '1.5rem 0px' }}>
                            <div className="MuiGrid-root logo MuiGrid-item" style={{ padding: '2rem', margin: '2rem', borderRadius: '20px', position: 'relative' }}>

                                <img src={yourstory} alt="https://yourstory.com/2022/04/bengaluru-healthtech-startup-paperplane-digital-clinics-whatsapp/amp" style={{ width: '200px', height: '150px', objectFit: 'contain', cursor: 'pointer' }} />
                                <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeSmall" tabIndex="0" type="button" style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                                    <span className="MuiIconButton-label">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                            <div className="MuiGrid-root logo MuiGrid-item" style={{ padding: '2rem', margin: '2rem', borderRadius: '20px', position: 'relative' }}>
                                <img src={economic} style={{ width: '200px', height: '150px', objectFit: 'contain', cursor: 'pointer' }} />
                                <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeSmall" tabIndex="0" type="button" style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} >
                                    <span className="MuiIconButton-label">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                            <div className="MuiGrid-root logo MuiGrid-item" style={{ padding: '2rem', margin: '2rem', borderRadius: '20px', position: 'relative' }}>
                                <img src={ENT} alt="https://www.entrepreneur.com/article/423344" style={{ width: '200px', height: '150px', objectFit: 'contain', cursor: 'pointer' }} />
                                <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeSmall" tabIndex="0" type="button" style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                                    <span className="MuiIconButton-label">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="MuiGrid-root jss19 MuiGrid-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ margin: '2rem 0px 1rem' }}>
                            <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-alignCenter">Backed by the best! 🤟🏽</h1>
                        </div>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-center" style={{ padding: '1rem' }}>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={corner} alt="logo" className="logo" style={{ cursor: 'pointer', width: '200px', padding: '1rem', marginTop: '1rem', objectFit: 'contain' }} />
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={hunx} alt="logo" className="logo" style={{ cursor: 'pointer', width: '200px', padding: '1rem', marginTop: '1rem', objectFit: 'contain' }} />
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={venture} alt="logo" className="logo" style={{ cursor: 'pointer', width: '200px', padding: '1rem', marginTop: '1rem', objectFit: 'contain' }} />
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={aws} alt="logo" className="logo" style={{ cursor: 'pointer', width: '200px', padding: '1rem', marginTop: '1rem', objectFit: 'contain' }} />
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={mongo} alt="logo" className="logo" style={{ cursor: 'pointer', width: '200px', padding: '1rem', marginTop: '1rem', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '80%', justifyContent: 'center', marginLeft: '150px' }}>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-content-xs-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-once="true" style={{ marginTop: '2rem' }}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-11">
                                <div style={{ padding: '2rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', borderRadius: '18px' }}>
                                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-content-xs-center">
                                        <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-direction-xs-column MuiGrid-align-items-xs-flex-start MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
                                            <h1 className="MuiTypography-root MuiTypography-h1" style={{ marginBottom: '0.5rem' }}>Contact Us</h1>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'inherit', margin: '0.25rem 0px' }}>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{ paddingRight: '0.5rem' }}>
                                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                                                </svg>
                                                <a href="mailto:support@paperplanetech.co" style={{ textDecoration: 'none' }}>
                                                    <p className="MuiTypography-root MuiTypography-body1 MuiTypography-colorPrimary">support@paperplanetech.co</p>
                                                </a>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'inherit', margin: '0.25rem 0px' }}>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{ paddingRight: '0.5rem' }}>
                                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                                                </svg>
                                                <a href="tel:+91 9140827602" style={{ textDecoration: 'none' }}>
                                                    <p className="MuiTypography-root MuiTypography-body1 MuiTypography-colorPrimary">+91 9140827602</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-flex-end MuiGrid-grid-xs-12 MuiGrid-grid-md-5">
                                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12">
                                                <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary">For any queries enter your Phone Number and we will get back to you</h6>
                                                <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth" style={{ marginTop: '1.5rem' }}>
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd" style={{ borderRadius: '33px' }}>
                                                        <input aria-invalid="false" placeholder="Your phone number" type="text" maxLength="10" className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd" value="" />
                                                        <div>
                                                            <p className="MuiTypography-root MuiTypography-body2" style={{ cursor: 'pointer', color: 'rgb(255, 255, 255)', background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', padding: '0.75rem 1rem', borderRadius: '29px' }}>Connect</p>
                                                        </div>
                                                        <fieldset aria-hidden="true" className="jss8 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}>
                                                            <legend className="jss9" style={{ width: '0.01px' }}>
                                                                <span>​</span>
                                                            </legend>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FAQAccordion />
                    {/* </div> */}
                    <div>
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Business;


