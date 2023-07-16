import React, { useState } from 'react';
import independent from './Assets/images/independent.png'
import Clinic from './Assets/images/clinic.png'
// import './Home.css'
import './Homee.css'
import phone from './Assets/Svg/Mockup.svg'
import call from './Assets/Svg/Vid call.svg'
import group from './Assets/images/Group.png'
import appoint from './Assets/images/appoint.png'
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
import Business from './Business2';
import './switch.css'
import bghero from './Assets/images/bgHero.png'
import FeedbackCarousel from './carousel';

const Toggle = ({ leftLabel, rightLabel }) => {
    const [toggle, setToggle] = useState(false);

    const toggleState = () => {
        setToggle(!toggle);
    };

    return (
        <div >
            <div className='mt-4'>
                <ul className="radio-switch">
                    <li className="radio-switch__item">
                        <input
                            className="radio-switch__input ri5-sr-only"
                            type="radio"
                            name="radio-switch-name"
                            id="radio-1"
                            onClick={() => toggleState()}
                        />
                        <label className="radio-switch__label" htmlFor="radio-1">
                            {leftLabel}
                        </label>
                    </li>

                    <li className="radio-switch__item">
                        <input
                            className="radio-switch__input ri5-sr-only"
                            type="radio"
                            name="radio-switch-name"
                            id="radio-2"
                            onClick={() => toggleState()}
                        />
                        <label className="radio-switch__label" htmlFor="radio-2">
                            {rightLabel}
                        </label>
                        <div aria-hidden="true" className="radio-switch__marker"></div>
                    </li>
                </ul>
            </div>

            {toggle ? (
                <div className="content-clinics" style={{ padding: '3% 8%' }}>
                    <div className="MuiGrid-root MuiGrid-item mt-5">
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
                                                    onClick={() => window.open('/start', '_blank')}
                                                >Start Now</span>
                                                <span className=""></span>
                                            </button>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>

                                <div className="col-sm-7 d-flex justify-content-center">
                                    <div className="d-flex cardimg ">
                                        <div className=" mb-3" style={{ width: '200px', height: '200px', margin: '1.6rem 0.4rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.18) 0px 4px 20px', borderRadius: '18px', display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ background: 'rgba(161, 176, 255, 0.5)', textAlign: 'center', borderRadius: '18px 18px 0px 0px', padding: '1rem' }}>
                                                <img src={Clinic} alt='.' height={'120px'} width={'120px'} style={{ padding: '10px' }} />
                                            </div>
                                            <div style={{ padding: '0.5rem', height: 'inherit', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                                <h6 className="fw-700 text-center">Clinic</h6>
                                            </div>
                                        </div>
                                        <div className="imgcard mb-3" style={{ width: '200px', height: '200px', margin: '1.6rem 0.4rem', background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.18) 0px 4px 20px', borderRadius: '18px', display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ background: 'rgba(161, 176, 255, 0.5)', textAlign: 'center', borderRadius: '18px 18px 0px 0px', padding: '1rem' }}>
                                                <img src={independent} alt='.' height={'120px'} width={'120px'} style={{ padding: '10px' }} />
                                            </div>
                                            <div style={{ padding: '0.5rem', height: 'inherit', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                                <h6 className="fw-700 text-center">Independent Practitioner</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="container">
                                <div className="row p-3 mt-5">
                                    <div className="col-md-6 order-md-last">
                                        <img src={phone} alt="." className="img-fluid" style={{ maxWidth: '100%', height: '400px', marginBottom: '1rem' }} />
                                    </div>
                                    <div className="col-md-6 order-md-first" style={{ textAlign: 'left' }}>
                                        <h1 className="fw-500" >
                                            <span className='badges' style={{ marginBottom: '2rem' }}>WhatsApp Clinic </span>
                                            that's open 24/7 🏪
                                        </h1>
                                        <h5 className="type6">
                                            <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                                <li>Allow patients to <span className="text-primary">book appointments</span></li>
                                                <li>Send E-Rx along with <span className="text-primary">medicine &amp; follow-up</span> reminders</li>
                                                <li>Collect <span className="text-primary">medical data</span></li>
                                            </ul>
                                        </h5>
                                        <button className="btn green_button fw-bold" style={{ marginTop: '2rem', padding: '10px', width: '180px' }} onClick={() => window.open('/start', '_blank')}>
                                            Start Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5" >
                                <div className="col-md-6">
                                    <div className="" data-aos="fade-right" data-aos-once="true" data-aos-delay="200" style={{ textAlign: 'left' }}>
                                        <img src={call} alt="[object Object]" style={{ objectFit: 'contain', maxWidth: '100%', height: '400px', }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                                        <h1 className="fw-700" style={{ marginBottom: '2rem' }}>
                                            Power of both <span className="ms-1 p-1 badges ">online &amp; offline</span> in a single app 💪
                                        </h1>
                                        <h5 className="type6">
                                            <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                                <li>Book &amp; manage <span className="text-primary">offline appointments</span></li>
                                                <li>Take <span className="text-primary">online consultations</span></li>
                                                <li>Write <span className="text-primary">digital prescriptions</span></li>
                                                <li>Manage <span className="text-primary">your schedule</span></li>
                                            </ul>
                                        </h5>
                                        <button className="btn green_button" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                            Start Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5" >
                                <div className="col-md-6 order-md-last">
                                    <div className="" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'right' }}>
                                        <img src={group} alt="[object Object]" style={{ objectFit: 'contain', maxWidth: '100%', height: '400px', }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="" data-aos="fade-right" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                                        <h1 className="fw-700" style={{ marginBottom: '2rem' }}>
                                            Type less and <span className="ms-1 p-1 badges" >write faster</span> prescriptions with AI 🤖
                                        </h1>
                                        <h5 className="type6">
                                            <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', paddingInlineStart: '1.5rem' }}>
                                                <li>AI that <span className="text-primary">learns and grows</span> with you</li>
                                                <li>AI-based suggestions for <span className="text-primary">drugs, tests &amp; much more</span></li>
                                            </ul>
                                        </h5>
                                        <button className="btn green_button fw-bold" style={{ marginTop: '2rem', padding: '10px', width: '180px' }}>
                                            Start Now
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="container">
                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <div className="aos-init aos-animate" data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
                                        <img src={appoint} alt="[object Object]" className="img-fluid" style={{ maxWidth: '100%', height: '400px', }} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
                                        <h1 className="fw-700" style={{ marginBottom: '2rem' }}>Build your own <span className="badges">clinic brand</span> 📣</h1>
                                        <div className="type6" style={{ textAlign: 'left' }}>
                                            <ul className="" style={{ paddingLeft: '1.5rem' }}>
                                                <li>Personalised <span className="text-primary">clinic website </span> with <span className="text-primary">WhatsApp </span> &amp; <span className="text-primary">Google Maps integration</span></li>
                                                <li>Personally curated<span className="text-primary"> marketing content &amp; posters</span></li>
                                                <li>Digital marketing support on<span className="text-primary"> Instagram, Facebook &amp; Google</span></li>
                                            </ul>
                                        </div>
                                        <button className="btn green_button fw-bold mt-4" style={{ width: '180px', padding: '10px' }}>
                                            <span className="fw-bold fs-5">Start Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-lg-6 order-md-last">
                                    <div className="aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
                                        <img src={whatsapp} alt="[object Object]" className="img-fluid" style={{ objectFit: 'contain', maxWidth: '100%', height: '400px', }} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="aos-init aos-animate" data-aos="fade-right" data-aos-delay="200" data-aos-once="true" style={{ textAlign: 'left' }}>
                                        <h1 className="fw-700" style={{ marginBottom: '2rem' }}>Connect with your patients through our <span className="badges">integrated WhatsApp solution</span> 💬</h1>
                                        <div className="type6">
                                            <ul className="" style={{ paddingLeft: '1.5rem' }}>
                                                <li><span className="text-primary">Chat</span> with patients</li>
                                                <li>Send <span className="text-primary">prescriptions</span></li>
                                                <li>Receive<span className="text-primary"> online payments</span></li>
                                                <li>Automatic<span className="text-primary">WhatsApp reminders</span></li>
                                            </ul>
                                        </div>
                                        <button className="btn green_button fw-bold mt-4" style={{ width: '180px', padding: '10px' }}>
                                            <span className="fw-bold fs-5">Start Now</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row justify-content-center align-items-center mt-5" style={{ backgroundImage: `url(${bghero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                                            <span className="text-white me-2" style={{ fontWeight: 'bold', fontSize: '28px' }} onClick={() => window.open('/start', '_blank')}>
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

            ) : (
                <Business />
            )
            }
        </div >
    );
};

export default Toggle;

{/* <div className="container">
                            <div className="row" style={{ height: "100vh", alignItems: "center", margin: "0 8% 0 0" }}>
                                <div className="col-md-6">
                                    <div className="bg-white shadow-sm rounded" style={{ position: "relative" }}>
                                        <div className="p-3  card bg-white">
                                            <h1 className="fw-bold mb-3">Get started now</h1>
                                            <div className="mb-3">
                                                <h6 className="text-secondary">For any queries enter your Phone Number and we will get back to you</h6>
                                            </div>
                                            <div className="mb-3">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Your phone number" maxLength="10" />
                                                    <button className="btn btn-primary" style={{ borderRadius: "29px" }}>Connect</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bg-primary  card" style={{ height: "100%", padding: "0 0 0 8rem" }}>
                                        <div className="p-3">
                                            <h3 className="text-light fw-normal mb-4">The Paperplane app is now</h3>
                                            <h3 className="text-light fw-bold">Available on Android &amp; iOS!</h3>
                                            <div className="d-flex mt-4">
                                                <img src="https://link.paperplanetech.co/app" alt="" style={{ cursor: "pointer", height: "40px", objectFit: "contain", marginRight: "0.5rem" }} />
                                                <img src="https://link.paperplanetech.co/app" alt="" style={{ cursor: "pointer", height: "40px", objectFit: "contain" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <img src={vectary} alt="appMockup" className="img-fluid" style={{ position: "absolute", top: "2rem", height: "auto", objectFit: "contain", right: "2rem" }} />
                                </div>
                            </div>
                        </div> */}

