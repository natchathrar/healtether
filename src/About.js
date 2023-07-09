import React from 'react';
import GPhoto from './Assets/images/groupimg.png';
import { FiSearch, FiUser } from 'react-icons/fi';
import './About.css';
import { TiSocialFacebookCircular, TiSocialInstagram, TiSocialInstagramCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular } from "react-icons/ti";
import person1 from './Assets/images/person1.svg'
import person2 from './Assets/images/person2.svg'
import person3 from './Assets/images/person3.svg'
import person4 from './Assets/images/person4.svg'
import { RxMagicWand } from "react-icons/rx";
import { TbRoute } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
function About() {
    return (
        <div>

            <div className='centerformation text-center ' style={{ marginTop: '150px' }}>
                <div className=' mt-5'>
                    <div className='text-center'>
                        <h1 className='text-decoration-underlines  '>Our Vision. <span className='text-primary'>Our Mission</span></h1>
                        <p className='mt-5'>At Paperplane we're building Digital Clinics on WhatsApp for Doctors and Hospital to start and scale their medical practice using everyone's favourite messaging app!</p>
                        <img className='rounded mt-5 img-fluid' src={GPhoto} alt='Company Logo' />

                        <h1 className='mt-5'>Our Core Values</h1>
                        <h4 className='mt-2'>The principles that guide our company strategy and our individual actions.</h4>
                    </div>
                    <div className='justify-content-center mt-2'>
                        <div className='d-flex flex-wrap justify-content-center mt-2'>
                            <div className='cards '>
                                <h3 className='text-primary position-relative' style={{ top: '-10px', right: '40px', fontSize: "200%" }}>
                                    <FiSearch />
                                </h3>
                                <p className='position-relative text-start text-start' style={{ top: '15%' }}>
                                    Obsession to details
                                </p>
                            </div>
                            {/* Repeat the above card div for other cards */}
                            <div className='cards text-center ' id='box1'>
                                <h3 className='text-primary position-relative' style={{ top: '-10px', right: '40px', fontSize: "200%" }}>
                                    <RxMagicWand />
                                </h3>
                                <p className='position-relative text-start' style={{ top: '15%' }}>
                                    Obsession to details
                                </p>
                            </div>
                            <div className='cards text-center' id='box2'>
                                <h3 className='text-primary position-relative' style={{ top: '-10px', right: '40px', fontSize: "200%" }}>
                                    <TbRoute />
                                </h3>
                                <p className='position-relative text-start' style={{ top: '15%' }}>
                                    Obsession to details
                                </p>
                            </div>
                            <div className='cards text-center' id='box3'>
                                <h3 className='text-primary position-relative' style={{ top: '-10px', right: '40px', fontSize: "200%" }}>
                                    <FaUser />
                                </h3>
                                <p className='position-relative text-start' style={{ top: '15%' }}>
                                    Obsession to details
                                </p>
                            </div>
                            <div className='cards text-center' id='box4'>
                                <h3 className='text-primary position-relative' style={{ top: '-10px', right: '40px', fontSize: "200%" }}>
                                    <RiUserHeartLine />
                                </h3>
                                <p className='position-relative text-start' style={{ top: '15%' }}>
                                    Obsession to details
                                </p>
                            </div>
                        </div>

                        <h1 className='mt-4'>Our Team</h1>
                        <div className='row justify-content-center mt-5'>
                            <div className='col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4'>
                                <div className='card-body bg-personcard rounded w-100'>
                                    <img src={person1} className='rounded-circle img-circle img-fluid' alt='Person' style={{ width: '130px', height: '130px', objectFit: 'cover' }} />
                                    <h5 className='card-title mt-5'>John Doe</h5>
                                    <p className='card-text mt-1 text-primary'>COO</p>
                                    <TiSocialLinkedinCircular className='text-primary mt-1' style={{ fontSize: '24px' }} />
                                </div>

                            </div>

                            <div className='col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4'>
                                <div className='card-body bg-personcard rounded w-100'>
                                    <img src={person2} className='rounded-circle img-circle img-fluid' alt='Person' style={{ width: '130px', height: '130px', objectFit: 'cover' }} />

                                    <h5 className='card-title mt-5'>John Doe</h5>
                                    <p className='card-text mt-1 text-primary'>CEO</p>
                                    <TiSocialLinkedinCircular className='text-primary mt-1' style={{ fontSize: '24px' }} />
                                </div>
                            </div>

                            <div className='col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4'>
                                <div className='card-body bg-personcard rounded w-100'>
                                    <img src={person3} className='rounded-circle img-circle img-fluid' alt='Person' style={{ width: '130px', height: '130px', objectFit: 'cover' }} />

                                    <h5 className='card-title mt-5'>John Doe</h5>
                                    <p className='card-text mt-1 text-primary'>CPO</p>
                                    <TiSocialLinkedinCircular className='text-primary mt-1' style={{ fontSize: '24px' }} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4'>
                                <div className='card-body bg-personcard rounded w-100'>
                                    <img src={person4} className='rounded-circle img-circle img-fluid' alt='Person' style={{ width: '130px', height: '130px', objectFit: 'cover' }} />

                                    <h5 className='card-title mt-5'>John Doe</h5>
                                    <p className='card-text mt-1 text-primary'>CTO</p>
                                    <TiSocialLinkedinCircular className='text-primary mt-1' style={{ fontSize: '24px' }} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default About;