import React, { useState } from 'react';
import hospital from './Assets/images/hospital.png'
import polyclinic from './Assets/images/polyclinic.png'
import pharmacy from './Assets/images/pharmacy.png'
import './Homee.css'
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
import bghero from './Assets/images/bgHero.png'
import book from './Assets/images/book.png'
import FeedbackCarousel from './carousel';
import { Modal, Form } from 'react-bootstrap';

function Business() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleShow = () => {
        setShowModal(true);
    };

    return (
        <div>
            <div className="content-business " style={{ padding: '3% 8%' }}>
                <div className="MuiGrid-root MuiGrid-item  mt-5">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-3 ">
                                {/* <div className="d-block"> */}
                                <div className="mb-3 mt-3">
                                    <h5 className="fw-bold" style={{ fontWeight: 500 }}>
                                        <span style={{ fontWeight: 600 }}>Paperplane</span>
                                        <span className="p-2" style={{ background: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', color: 'rgb(255, 255, 255)', borderRadius: '11px', lineHeight: '2' }}>Enterprise</span>
                                        <br />
                                        Right for 👉
                                    </h5>
                                    <div className="mb-3">
                                        <button className="btn book_button" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                            <span className="text-white me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}
                                                onClick={handleShow}
                                            >Book a demo</span>
                                            <span className=""></span>
                                        </button>
                                        <Modal show={showModal} onHide={handleClose} size='xl' centered >
                                            <Modal.Body style={{ maxHeight: 'calc(100vh - 70px)', overflowY: 'auto' }}>
                                                <div className="container bg-light">
                                                    <div className="row justify-content-center ">
                                                        <div className="col-md-6">
                                                            <h3 className="text-center">Book a demo for <br /><strong>Paperplane Enterprise</strong></h3>
                                                            <div className="text-center mb-4">
                                                                <img src={book} alt="Paperplane Enterprise" style={{ width: '300px' }} />
                                                            </div>
                                                            <div className="row justify-content-around">
                                                                <div className="col-md-4">
                                                                    <div className="text-center bg-white rounded-3 p-4">
                                                                        <h1 className="h1 text-transparent" style={{ background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitBackgroundClip: 'text' }}>25+</h1>
                                                                        <p className="text-center">Businesses trust Paperplane Clinic</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="text-center bg-white rounded-3 p-4">
                                                                        <h1 className="h1 text-transparent" style={{ background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitBackgroundClip: 'text' }}>50%</h1>
                                                                        <p className="text-center">Increase OPD occupancy by 50%</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="text-center bg-white rounded-3 p-4">
                                                                        <h1 className="h1 text-transparent" style={{ background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitBackgroundClip: 'text' }}>40%</h1>
                                                                        <p className="text-center">Increase patient retention by 40%</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6  rounded p-4 ">
                                                            <div className='row bg-white p-5' style={{ borderRadius: '40px' }}>
                                                                <div className="col-md-6 mb-2">
                                                                    <p className="font-weight-bold">Enter your name</p>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                                <div className=" col-md-6 mb-2">
                                                                    <p className="font-weight-bold">Enter your phone number</p>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                                <div className="col-md-6 mb-2">
                                                                    <p className="font-weight-bold">Please specify your business type</p>
                                                                    <Form.Control as="select" className='form-select'>
                                                                        <option value=""></option>
                                                                        <option value="PolyClinic">PolyClinic</option>
                                                                        <option value="Hospital">Hospital</option>
                                                                        <option value="Individual Clinic">Individual Clinic</option>
                                                                        <option value="Diagnostic Centre">Diagnostic Centre</option>
                                                                        <option value="Pharmacy Chain">Pharmacy Chain</option>
                                                                        <option value="IVF Centre">IVF Centre</option>
                                                                        <option value="Nursing Home">Nursing Home</option>
                                                                    </Form.Control>
                                                                </div>
                                                                <div className="col-md-6 mb-2">
                                                                    <p className="font-weight-bold">How many doctors does your business have?</p>
                                                                    <Form.Control as="select" className='form-select'>
                                                                        <option value=""></option>
                                                                        <option value="0-10">0-10</option>
                                                                        <option value="10-25">10-25</option>
                                                                        <option value="25-50">25-50</option>
                                                                        <option value="50-100">50-100</option>
                                                                        <option value="100+">100+</option>
                                                                    </Form.Control>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <p className="font-weight-bold">What is your daily patient inbound? <span className="small">(Optional)</span></p>
                                                                    <Form.Control as="select" className='form-select'>
                                                                        <option value=""></option>
                                                                        <option value="25-50">25-50</option>
                                                                        <option value="50-100">50-100</option>
                                                                        <option value="100-500">100-500</option>
                                                                        <option value="500+">500+</option>
                                                                    </Form.Control>
                                                                </div>
                                                                <div className="text-left mt-4">
                                                                    <button className="btn green_button" style={{ width: '120px' }}>Submit</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal.Body>

                                        </Modal>

                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                            <div className="col-sm-7 d-flex justify-content-center">
                                <div className="d-flex flex-colun align-items-center cardimg ">
                                    <div className=" mb-3" style={{ width: '200px', height: '200px', margin: '1.6rem 0.4rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.18) 0px 4px 20px', borderRadius: '18px', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ background: 'rgba(161, 176, 255, 0.5)', textAlign: 'center', borderRadius: '18px 18px 0px 0px', padding: '1rem' }}>
                                            <img src={hospital} alt='.' height={'120px'} width={'120px'} style={{ padding: '10px' }} />
                                        </div>
                                        <div style={{ padding: '0.5rem', height: 'inherit', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                            <h6 className="fw-700 text-center">Hospital</h6>
                                        </div>
                                    </div>
                                    <div className=" mb-3" style={{ width: '200px', height: '200px', margin: '1.6rem 0.4rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.18) 0px 4px 20px', borderRadius: '18px', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ background: 'rgba(161, 176, 255, 0.5)', textAlign: 'center', borderRadius: '18px 18px 0px 0px', padding: '1rem' }}>
                                            <img src={polyclinic} alt='.' height={'120px'} width={'120px'} style={{ padding: '10px' }} />
                                        </div>
                                        <div style={{ padding: '0.5rem', height: 'inherit', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                            <h6 className="fw-700 text-center">Polyclinic</h6>
                                        </div>
                                    </div>
                                    <div className="imgcard mb-3" style={{ width: '200px', height: '200px', margin: '1.6rem 0.4rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.18) 0px 4px 20px', borderRadius: '18px', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ background: 'rgba(161, 176, 255, 0.5)', textAlign: 'center', borderRadius: '18px 18px 0px 0px', padding: '1rem' }}>
                                            <img src={pharmacy} alt='.' height={'120px'} width={'120px'} style={{ padding: '10px' }} />
                                        </div>
                                        <div style={{ padding: '0.5rem', height: 'inherit', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                            <h6 className="fw-700 text-center">Pharmacy</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row p-3 mt-2">
                            <div className="col-md-6 order-md-last">
                                <img src={prescription} alt="[object Object]" className="img-fluid" style={{ objectFit: 'contain', width: '90%' }} />
                            </div>
                            <div className="col-md-6" style={{ textAlign: 'left' }}>
                                <h1 className="fw-bold" style={{ fontWeight: 700, marginBottom: '2rem', lineHeight: '55px' }}>
                                    Provide seamless patient experience &amp;
                                    <span style={{ backgroundImage: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundColor: 'initial', color: 'white', padding: '0.3rem', borderRadius: '4px', marginLeft: '0.5rem' }}>
                                        improve retention
                                    </span>
                                </h1>
                                <div className='type6' >
                                    <ul className="font1" style={{ paddingInlineStart: '1.5rem', }}>
                                        <li>Send E-Rx along with <span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>medicine &amp; follow-up</span> reminders</li>
                                        <li>Collect <span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>medical data</span></li>
                                        <li>Receive <span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>online payments</span></li>
                                    </ul>
                                </div>
                                <button className="btn book_button" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                    <span className="text-white me-2" style={{ fontWeight: 'bold', fontSize: '25px' }} onClick={handleShow}>
                                        Book a demo
                                    </span>
                                    <span className=""></span>
                                </button>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <img src={group1} alt="[object Object]" className="img-fluid" style={{ objectFit: 'contain', width: '90%' }} />
                            </div>
                            <div className="col-md-6" style={{ textAlign: 'left' }}>
                                <h1 className="fw-bold" style={{ marginBottom: '2rem' }}>
                                    <span className='badges'>
                                        Go paperless
                                    </span>and optimise your services further!
                                </h1>
                                <div className='type6'>
                                    <ul className="font1" style={{ paddingInlineStart: '1.5rem' }}>
                                        <li>Generate branded &amp; clear <span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>prescriptions within seconds</span> on WhatsApp</li>
                                        <li>Receive <span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>online payments</span></li>
                                    </ul>
                                </div>
                                {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                    <span className="MuiButton-label text-white me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}
                                         onClick={handleShow}
                                    >Book a demo</span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button> */}
                                <button className="btn book_button" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                    <span className="text-white me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}
                                        onClick={handleShow}
                                    >Book a demo</span>
                                    <span className=""></span>
                                </button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 order-md-last">
                                <img
                                    src={Group3}
                                    alt="[object Object]"
                                    className="img-fluid"
                                    style={{ objectFit: 'contain', width: '90%' }}
                                />
                            </div>
                            <div className="col-md-6" style={{ textAlign: 'left' }}>
                                <div>
                                    <h1 className="fw-bold" style={{ marginBottom: '2rem' }}>
                                        <span className='badges'> Boost sales</span> for both your virtual and offline services
                                    </h1>
                                    <div className='type6'>
                                        <ul className="" style={{ paddingInlineStart: '1.5rem' }}>
                                            <li>
                                                <span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>
                                                    Regional language
                                                </span>{' '}
                                                support
                                            </li>
                                            <li>
                                                Accept{' '}
                                                <span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>
                                                    online payments
                                                </span>
                                            </li>
                                            <li>
                                                Send E-Rx along with{' '}
                                                <span style={{ color: 'rgb(77, 99, 221)', margin: '0px 0.3rem' }}>
                                                    medicine &amp; follow-up
                                                </span>{' '}
                                                reminders
                                            </li>
                                        </ul>
                                    </div>
                                    <button
                                        className="btn book_button"
                                        tabIndex="0"
                                        type="button"
                                        style={{ marginTop: '2rem', padding: '10px', width: '180px' }}
                                    >
                                        <span
                                            className="text-white me-2"
                                            style={{ fontWeight: 'bold', fontSize: '25px' }}
                                            onClick={handleShow}
                                        >
                                            Book a demo
                                        </span>
                                        <span className=""></span>
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div className="row mt-3">
                            <div className="col-md-6">
                                <img src={frame} alt="[object Object]" className="img-fluid" style={{ objectFit: 'contain', width: '90%' }} />
                            </div>
                            <div className="col-md-6 mt-3">
                                <h1 className="fw-bold" style={{ marginBottom: '2rem', fontWeight: 700 }}>
                                    <span className=" badges p-2">
                                        Access your data
                                    </span>
                                    anytime &amp; anywhere
                                </h1>
                                <div className="col-md-8 type6" style={{ textAlign: 'left' }}>
                                    <h5 className="fw-bold">
                                        <ul className="" style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                            <li>Access your dashboard from anywhere<span style={{ color: 'rgb(77, 99, 221)', marginLeft: '0.3rem' }}>within seconds</span></li>
                                            <li>Dedicated<span style={{ color: 'rgb(77, 99, 221)', marginLeft: '0.3rem' }}>app &amp; dashboard</span>support</li>
                                        </ul>
                                    </h5>
                                </div>
                                <button className="btn book_button" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                    <span className="text-white me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}
                                        onClick={handleShow}
                                    >Book a demo</span>
                                    <span className=""></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row p-3 mt-4">
                        <div className="col-md-6 order-md-last" >
                            <img src={group4} alt="[object Object]" className="img-fluid" style={{ objectFit: 'contain', width: '90%' }} />
                        </div>
                        <div className="col-md-6 mt-4">
                            <h1 className="fw-bold" style={{ marginBottom: '2rem', fontWeight: 700 }}>
                                <span className=" badges p-2" >
                                    Manage multiple locations
                                </span>
                                and profiles on a single platform
                            </h1>
                            <div className="col-md-8 type6" style={{ textAlign: 'left' }}>
                                <h5 className="fw-bold">
                                    <ul className="" style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                        <li>Manage<span style={{ color: 'rgb(77, 99, 221)', marginLeft: '0.3rem' }}>multiple doctors</span></li>
                                        <li>Provide selective access to<span style={{ color: 'rgb(77, 99, 221)', marginLeft: '0.3rem' }}>staff members</span>reminders</li>
                                        <li>Manage<span style={{ color: 'rgb(77, 99, 221)', marginLeft: '0.3rem' }}>multiple locations</span>from one single app</li>
                                    </ul>
                                </h5>
                            </div>
                            <button className="btn book_button" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                <span className="text-white me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}
                                    onClick={handleShow}
                                >Book a demo</span>
                                <span className=""></span>
                            </button>
                        </div>
                    </div>


                    <div className="row mt-4">
                        <div className="col-md-6">
                            <img src={whatsapp} alt="[object Object]" className="img-fluid" style={{ objectFit: 'contain', width: '90%' }} />
                        </div>
                        <div className="col-md-6 mt-4">
                            <h1 className="fw-bold" style={{ marginBottom: '2rem', fontWeight: 700 }}>
                                Connect with your patients through our
                                <span className="badges p-2" style={{ marginRight: '0.5rem' }}>
                                    integrated WhatsApp solution
                                </span>
                            </h1>
                            <div className="col-md-8 type6" style={{ textAlign: 'left' }}>
                                <h5 className="fw-bold">
                                    <ul className="" style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                        <li>Customer<span style={{ color: 'rgb(77, 99, 221)', marginLeft: '0.3rem' }}>chat & management</span></li>
                                        <li>Broadcast<span style={{ color: 'rgb(77, 99, 221)', marginLeft: '0.3rem' }}>marketing posters</span>on WhatsApp</li>
                                    </ul>
                                </h5>
                            </div>
                            <button className="btn book_button" tabIndex="0" type="button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                <span className="text-white me-2" style={{ fontWeight: 'bold', fontSize: '25px' }}
                                    onClick={handleShow}
                                >Book a demo</span>
                                <span className=""></span>
                            </button>
                        </div>
                    </div>

                    {/* friday */}
                    <div className="row justify-content-center align-items-center" style={{ backgroundImage: `url(${bghero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="col-md-3">
                            <img src={card} alt="ABHA from Paperplane" style={{ objectFit: 'contain', width: '300px' }} />
                        </div>
                        <div className="col-md-9" style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 11px 32px', padding: '1rem', borderRadius: '27px' }}>
                            <div className="row">
                                <div className="col-md-8 text-center">
                                    <p className="fw-bold fs-1">Creating India's Digital Health Ecosystem</p>
                                    <h4 className="" style={{ fontWeight: '500' }}>ABHA - Ayushman Bharat Health Account</h4>
                                    <h5 className="fw-light text-center" style={{ fontWeight: '300' }}>Get control of your health data and documents using WhatsApp</h5>
                                </div>

                            </div>
                            <div className="row mt-4">
                                <div className="col-md-4 mb-4">
                                    <img src={ablogo} className="img-fluid" style={{ objectFit: 'contain', width: '200px' }} />
                                </div>
                                <div className="col-md-5">
                                    <img src={icons} className="img-fluid" style={{ objectFit: 'contain', width: '100%' }} />
                                    <button className="btn rounded-pill abha" tabIndex="0" type="button" style={{ marginTop: '2rem', backgroundColor: '#139713' }}>
                                        <span className="text-white me-2" style={{ fontWeight: 'bold', fontSize: '28px' }} onClick={handleShow}>
                                            Create abha id now
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <h1 className="fw-bold text-center">
                                Boost your{' '}
                                <span className="p-2" style={{ background: 'linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)', color: 'white', borderRadius: '4px', lineHeight: '2' }}>
                                    personal brand, patient retention &amp; revenue
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center" style={{ marginTop: '2rem' }}>
                        <div className="col-md-3" style={{ padding: '2rem' }}>
                            <div style={{ borderRadius: '18px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', columnGap: '1rem' }}>
                                <h1 className="fw-bold text-primary" style={{
                                    fontSize: '70px',
                                    background: 'linear-gradient(to right, rgb(38, 93, 38), rgb(31, 198, 31))',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    8/10
                                </h1>
                                <br />
                                <h6 className="type6">patients feel more connected to clinics they can message.</h6>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ padding: '2rem' }}>
                            <div style={{ borderRadius: '18px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', columnGap: '1rem' }}>
                                <h1 className="fw-bold text-primary" style={{
                                    fontSize: '70px',
                                    background: 'linear-gradient(to right, rgb(38, 93, 38), rgb(31, 198, 31))',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    65%
                                </h1>
                                <br />
                                <h6 className="type6">prefer messaging on WhatsApp over email or phone calls</h6>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ padding: '2rem' }}>
                            <div style={{ borderRadius: '18px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', columnGap: '1rem' }}>
                                <h1 className="fw-bold text-primary" style={{
                                    fontSize: '70px',
                                    background: 'linear-gradient(to right, rgb(38, 93, 38), rgb(31, 198, 31))',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    25%
                                </h1>
                                <br />
                                <h6 className="type6">increase in repeat consultations over WhatsApp</h6>
                            </div>
                        </div>
                    </div>
                    <Blogs />


                    <div className="container" style={{ margin: '5rem 0px' }}>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center fw-bold">Features & Services</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center" style={{ marginTop: '2rem', textAlign: 'left' }}>
                            <div className="col-12 col-md-4" style={{ padding: '1rem' }}>
                                <div className="features p-3">
                                    <img src={whatsapp1} className="img-fluid" style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="WhatsApp Assistant" />
                                    <h6 className="mt-3 font-weight-bold" style={{ color: 'grey' }}>Your own WhatsApp Assistant</h6>
                                    <p className="mt-3">Automatically get appointments and stay in touch with your patients using WhatsApp</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4" style={{ padding: '1rem' }}>
                                <div className="features p-3">
                                    <img src={other} className="img-fluid" style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="All in 1 Practice Management Tool" />
                                    <h6 className="mt-3 font-weight-bold" style={{ color: 'grey' }}>All in 1 Practice Management Tool</h6>
                                    <p className="mt-3">Digitize your practice within minutes. One platform for staff, doctors and admin to manage your clinic.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4" style={{ padding: '1rem' }}>
                                <div className="features p-3">
                                    <img src={website} className="img-fluid" style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="Get Free website" />
                                    <h6 className="mt-3 font-weight-bold" style={{ color: 'grey' }}>Get Free website</h6>
                                    <p className="mt-3">Grow your digital presence. Get your own personalised website in less than 5 minutes.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4" style={{ padding: '1rem' }}>
                                <div className="features p-3">
                                    <img src={document} className="img-fluid" style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="WhatsApp Assistant" />
                                    <h6 className="mt-3 font-weight-bold" style={{ color: 'grey' }}>No more paperwork</h6>
                                    <p className="mt-3">Get all the information on your fingertips - Patient history, Appointment details, payments and much more</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4" style={{ padding: '1rem' }}>
                                <div className="features p-3">
                                    <img src={web} className="img-fluid" style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="All in 1 Practice Management Tool" />
                                    <h6 className="mt-3 font-weight-bold" style={{ color: 'grey' }}>Custom Domain</h6>
                                    <p className="mt-3">Make your profile unique by getting your own custom domain name that is easy to remember</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4" style={{ padding: '1rem' }}>
                                <div className="features p-3">
                                    <img src={rupee} className="img-fluid" style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="Get Free website" />
                                    <h6 className="mt-3 font-weight-bold" style={{ color: 'grey' }}>Online payments</h6>
                                    <p className="mt-3">Get more sales, by offering seamless and easy payment options on your WhatsApp Clinic.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4" style={{ padding: '1rem' }}>
                                <div className="features p-3">
                                    <img src={worldwide} className="img-fluid" style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="WhatsApp Assistant" />
                                    <h6 className="mt-3 font-weight-bold" style={{ color: 'grey' }}>Create a Global Brand</h6>
                                    <p className="mt-3">Create & Grow your personal brand digitally. Expand your practice globally under your own brand.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4" style={{ padding: '1rem' }}>
                                <div className="features p-3">
                                    <img src={patient} className="img-fluid" style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="All in 1 Practice Management Tool" />
                                    <h6 className="mt-3 font-weight-bold" style={{ color: 'grey' }}>Stay connected to patients</h6>
                                    <p className="mt-3">Send medicine reminders, Follow-up reminders, medical advice and documents on WhatsApp</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4" style={{ padding: '1rem' }}>
                                <div className="features p-3">
                                    <img src={Erx} className="img-fluid" style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="Get Free website" />
                                    <h6 className="mt-3 font-weight-bold" style={{ color: 'grey' }}>Beautiful & Quick Digital Rx</h6>
                                    <p className="mt-3">Generate and share AI Powered digital Prescriptions via your phone or laptop in 30 seconds</p>
                                </div>
                            </div>
                            {/* Add the remaining feature cards here */}
                        </div>
                    </div>


                    <div className="card  text-center mt-5 p-3" style={{ background: 'linear-gradient(to right, rgb(75 213 89), rgb(103 223 103))' }}>
                        <div className="container mt-3 mb-5">
                            <div className="row">
                                <div className="col-12 fw-bold fs-1 text-white">
                                    <p>Watch Paperplane in action 🎬</p>
                                </div>
                            </div>
                            <div className="row mt-4" style={{ margin: '2rem 0px' }}>
                                <div className="col-12">
                                    <h2 className="text-white">View Demo as</h2>
                                </div>
                                <div className="row justify-content-center">

                                    <div class="example mt-3">
                                        <label className="radio-button text-white fs-5">
                                            <input type="radio" className="radio-button__input" id="choice1-1" name="choice1" />
                                            <span className="radio-button__control"></span>
                                            <span className="radio-button__label">Doctor</span>
                                        </label>
                                        <label className="radio-button text-white fs-5 ">
                                            <input type="radio" className="radio-button__input" id="choice1-2" name="choice1" />
                                            <span className="radio-button__control"></span>
                                            <span className="radio-button__label">Patient</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12">
                                    <button className="btn launch rounded-pill">Launch Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="fw-bold">About Us</h1>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-xs-10 col-md-6">
                                <h5 className="type6 about">
                                    At Paperplane we're building Digital Clinics on WhatsApp for Doctors and Hospital to start and scale their medical practice using everyone's favourite messaging app!
                                </h5>
                            </div>
                            <div className="col-12 mt-3 text-center">
                                <button className="btn book_button text-white">Know More</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container" style={{ margin: '5rem 0px' }}>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center fw-bold">As seen on! 📰</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center" style={{ margin: '1.8rem 0px' }}>
                        <div className="col-12 col-md-4 zoom" style={{ padding: '2rem', borderRadius: '20px', position: 'relative' }}>
                            <a href="https://yourstory.com/2022/04/bengaluru-healthtech-startup-paperplane-digital-clinics-whatsapp/amp" target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>
                                <img src={yourstory} alt="YourStory" className="img-fluid" style={{ width: '200px', height: '150px', objectFit: 'contain', cursor: 'pointer', color: 'red' }} />
                            </a>
                            <a href="https://yourstory.com/2022/04/bengaluru-healthtech-startup-paperplane-digital-clinics-whatsapp/amp" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-primary btn-sm" style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                                    <i className="fas fa-arrow-up-right-from-square"></i>
                                </button>
                            </a>
                        </div>
                        <div className="col-12 col-md-4 zoom" style={{ padding: '2rem', borderRadius: '20px', position: 'relative' }}>
                            <img src={economic} alt="Economic Times" className="img-fluid" style={{ width: '200px', height: '150px', objectFit: 'contain', cursor: 'pointer' }} />
                            <button className="btn btn-primary btn-sm" style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                                <i className="fas fa-arrow-up-right-from-square"></i>
                            </button>
                        </div>
                        <div className="col-12 col-md-4 zoom" style={{ padding: '2rem', borderRadius: '20px', position: 'relative' }}>
                            <a href="https://www.entrepreneur.com/article/423344" target="_blank" rel="noopener noreferrer">
                                <img src={ENT} alt="Entrepreneur" className="img-fluid" style={{ width: '200px', height: '150px', objectFit: 'contain', cursor: 'pointer' }} />
                            </a>
                            <a href="https://www.entrepreneur.com/article/423344" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-primary btn-sm" style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                                    <i className="fas fa-arrow-up-right-from-square"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center fw-bold">Backed by the best! 🤟🏽</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center" style={{ padding: '1rem' }}>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-5 text-center">
                            <img src={corner} alt="Corner" className="img-fluid logo zoom1" style={{ cursor: 'pointer', width: '200px', padding: '1rem', marginTop: '1rem', objectFit: 'contain' }} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 text-center ">
                            <img src={hunx} alt="Hunx" className="img-fluid logo zoom1" style={{ cursor: 'pointer', width: '200px', height: '70px', padding: '1rem', marginTop: '1rem', objectFit: 'contain' }} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 text-center">
                            <img src={venture} alt="Venture" className="img-fluid logo zoom1" style={{ cursor: 'pointer', width: '200px', padding: '1rem', marginTop: '1rem', objectFit: 'contain' }} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center">
                            <img src={aws} alt="AWS" className="img-fluid logo zoom1" style={{ cursor: 'pointer', width: '200px', padding: '1rem', marginTop: '1rem', objectFit: 'contain' }} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center">
                            <img src={mongo} alt="MongoDB" className="img-fluid logo zoom1" style={{ cursor: 'pointer', width: '200px', padding: '1rem', marginTop: '1rem', objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>

                <FeedbackCarousel />
                <div className="container">
                    <div className="row justify-content-center" style={{ marginTop: '2rem' }}>
                        <div className="col-12 col-md-8 col-lg-11">
                            <div style={{ padding: '3rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', borderRadius: '18px', textAlign: 'left' }}>
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6">
                                        <h1 style={{ marginBottom: '0.5rem' }} className='fw-bold'>Contact Us</h1>
                                        <div className='d-flex text-primary'>

                                            <i class='bx bxs-envelope'></i>
                                            <a href="mailto:support@paperplanetech.co" className='text-decoration-none'>
                                                <p>support@paperplanetech.co</p>
                                            </a>
                                        </div>
                                        <div className='d-flex text-primary'>

                                            <i class='bx bxs-phone'></i>
                                            <a href="tel:+91 9140827602" style={{ textDecoration: 'none' }}>
                                                <p>+91 9140827602</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h6 className='type6'>For any queries, enter your phone number and we will get back to you</h6>
                                        <div className="input-group" style={{ marginTop: '1.5rem', position: 'relative' }}>
                                            <input type="text" className="form-control rounded-pill" placeholder="Your phone number" maxLength="10" />
                                            <button className="btn rounded-pill book_button m-1 align-items-center text-white" type="button" style={{ position: 'absolute', right: '0', top: '0', bottom: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '1', marginRight: '7px' }}>Connect</button>
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
        // </div >
        // </div>
    );
}

export default Business;


{/* <div className="col-md-6">
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <div className="card mb-3">
                                            <div className="card-body text-center">
                                                <img src={hospital} alt="." className="card-img-top" height="120" width="120" style={{ padding: '10px' }} />
                                                <h6 className="fw-bold">Hospital</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card mb-3">
                                            <div className="card-body text-center">
                                                <img src={polyclinic} alt="." className="card-img-top" height="120" width="120" style={{ padding: '10px' }} />
                                                <h6 className="fw-bold">Polyclinic</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card mb-3">
                                            <div className="card-body text-center">
                                                <img src={pharmacy} alt="." className="card-img-top" height="120" width="120" style={{ padding: '10px' }} />
                                                <h6 className="fw-bold">Pharmacy</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}