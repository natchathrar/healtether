// import React from 'react'
// import iD from './Assets/images/ID.png'
// import folder from './Assets/images/folder.png'
// import access from './Assets/images/access.png'
// import sign from './Assets/images/sign.png'
// import card from './Assets/images/abhaCard.png'
// import ablogo from './Assets/images/abdmLogo.png'
// import icons from './Assets/images/abhaF icons.png'
// import './switch.css'

// export default function ABHA() {
//     return (
//         <div>
//             <div style={{ padding: '3% 8%' }} className='d-flex flex-row'>

//                 <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3" style={{ textAlign: 'left' }} x>
//                     <img src={card} alt="ABHA from Paperplane"
//                         style={{ objectFit: 'contain', width: '300px' }} />
//                 </div>
//                 <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12 MuiGrid-grid-md-9"
//                     style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 11px 32px', padding: '1rem', borderRadius: '27px' }}>
//                     <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8"
//                         style={{ textAlign: 'center' }}>
//                         <h1 className="MuiTypography-root MuiTypography-h1">Creating India's Digital Health Ecosystem</h1>
//                         <h4 className="MuiTypography-root MuiTypography-h4" style={{ fontWeight: '500' }}>ABHA - Ayushman Bharat
//                             Health Account</h4>
//                         <h5 className="MuiTypography-root MuiTypography-h5" style={{ fontWeight: '300' }}>Get control of your
//                             health data and documents using WhatsApp</h5>
//                     </div>
//                     <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12 MuiGrid-grid-md-8"
//                         style={{ marginTop: '2rem', textAlign: 'left' }}>
//                         <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-5"
//                             style={{ marginBottom: '0px' }}>
//                             <img src={ablogo}
//                                 style={{ objectFit: 'contain', width: '200px' }} />
//                         </div>
//                         <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7">
//                             <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
//                                 <img
//                                     src={icons}
//                                     style={{ objectFit: 'contain', width: '300px' }} />
//                             </div>
//                             <button
//                                 className="MuiButtonBase-root MuiButton-root MuiButton-text btn" tabIndex="0" type="button"
//                                 style={{ background: 'rgb(117, 191, 99)', color: 'white', fontFamily: 'Inter', marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '25px', fontWeight: 'lighter' }}><span
//                                     className="MuiButton-label">Create abha id now &gt;</span><span
//                                         className="MuiTouchRipple-root"></span></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div style={{ padding: '3% 8%' }} className='d-flex flex-row'>

//                 <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12" style={{ margin: '3rem 0px', padding: '1rem', background: 'rgb(243, 243, 243)', borderRadius: '28px' }}>
//                     <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
//                         <h2 className="MuiTypography-root MuiTypography-h2 MuiTypography-alignCenter" style={{ fontWeight: '700' }}>Benefits of ABHA number</h2>
//                     </div>
//                     <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-baseline MuiGrid-grid-xs-12" style={{ marginTop: '2rem' }}>
//                         <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
//                             <img src={iD} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
//                             <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>Under 1 Minute approval</h5>
//                             <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>By putting your health ahead of paperwork and logistics</h6>
//                         </div>
//                         <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
//                             <img src={folder} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
//                             <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>Repayments via WhatsApp</h5>
//                             <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>Pay securely via WhatsApp without downloading or using any application</h6>
//                         </div>
//                         <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
//                             <img src={access} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
//                             <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>Flexible Payment Tenure</h5>
//                             <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>Now you decide when and how much to pay in installments</h6>
//                         </div>
//                         <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
//                             <img src={sign} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
//                             <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>No Third-party intervention</h5>
//                             <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>Seamless transaction through Paperplane</h6>
//                         </div>
//                     </div>
//                     <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{ textAlign: 'center' }}>
//                         <button
//                             className="MuiButtonBase-root MuiButton-root MuiButton-text btn" tabIndex="0" type="button"
//                             style={{ background: 'rgb(117, 191, 99)', color: 'white', fontFamily: 'Inter', marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '25px', fontSize: '23px', fontWeight: 'lighter' }}><span
//                                 className="MuiButton-label">Create abha id now &gt;</span><span
//                                     className="MuiTouchRipple-root"></span></button>
//                     </div>
//                 </div></div>

//         </div >
//     )
// }
import React from 'react';
import iD from './Assets/images/ID.png';
import folder from './Assets/images/folder.png';
import access from './Assets/images/access.png';
import sign from './Assets/images/sign.png';
import card from './Assets/images/abhaCard.png';
import ablogo from './Assets/images/abdmLogo.png';
import icons from './Assets/images/abhaF icons.png';
import './switch.css';
import bghero from './Assets/images/bgHero.png'

export default function ABHA() {
    return (
        <div className="container-padding">
            <div className="row justify-content-center align-items-center" style={{ backgroundImage: `url(${bghero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="col-md-3">
                    <img src={card} alt="ABHA from Paperplane" style={{ objectFit: 'contain', width: '300px' }} />
                </div>
                <div className="col-md-9 p-5" style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 11px 32px', padding: '1rem', borderRadius: '27px' }}>
                    <div className="row">
                        <div className="col-md-8 text-center">
                            <p className="fw-bold fs-1">Creating India's Digital Health Ecosystem</p>
                            <h4 className="" style={{ fontWeight: '500' }}>ABHA - Ayushman Bharat Health Account</h4>
                            <h5 className="fw-light text-center" style={{ fontWeight: '300' }}>Get control of your health data and documents using WhatsApp</h5>
                        </div>

                    </div>
                    <div className="row mt-4 ">
                        <div className="col-md-4 mb-4">
                            <img src={ablogo} className="img-fluid" style={{ objectFit: 'contain', width: '200px' }} />
                        </div>
                        <div className="col-md-5">
                            <img src={icons} className="img-fluid" style={{ objectFit: 'contain', width: '100%' }} />
                            <button className="btn rounded-pill abha" tabIndex="0" type="button" style={{ marginTop: '2rem', backgroundColor: '#139713' }}>
                                <span className="text-white me-2" style={{ fontWeight: 'bold' }} onClick={() => window.open('/start', '_blank')}>
                                    Create abha id now
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="p-3 d-flex flex-row">
                <div className="col-md-12" style={{ margin: '3rem 0px', padding: '1rem', background: 'rgb(243, 243, 243)', borderRadius: '28px' }}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 style={{ fontWeight: '700' }}>Benefits of ABHA number</h2>
                        </div>
                        <div className="col-md-6 font-sm-12  col-sm-12 text-center" style={{ padding: '1rem' }}>
                            <img src={iD} className="img-fluid" alt="Unique Identity" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <h5 style={{ marginTop: '1rem', fontWeight: '600' }}>Unique & Trustable Identity</h5>
                            <h6 className='type6'>Establish unique identity across different healthcare providers within the healthcare ecosystem</h6>
                        </div>
                        <div className="col-md-6 text-center" >
                            <img src={folder} className="img-fluid" alt="Unified Benefits" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <h5 style={{ marginTop: '1rem', fontWeight: '600' }}>Unified Benefits</h5>
                            <h6>Link all healthcare benefits ranging from public health programmes to insurance schemes to your unique ABHA number</h6>
                        </div>
                        <div className="col-md-6 text-center" >
                            <img src={access} className="img-fluid" alt="Hassle-free Access" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <h5 style={{ marginTop: '1rem', fontWeight: '600' }}>Hassle-free Access</h5>
                            <h6>Avoid long lines for registration in healthcare facilities across the country</h6>
                        </div>
                        <div className="col-md-6 text-center" >
                            <img src={sign} className="img-fluid" alt="Easy PHR Sign Up " style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <h5 style={{ marginTop: '1rem', fontWeight: '600' }}>Easy PHR Sign Up</h5>
                            <h6>Seamless sign up for PHR (Personal Health Records) applications such as ABDM ABHA application for Health data sharing</h6>
                        </div>
                        <div className="col-md-12 text-center">
                            <button className="btn rounded-pill mt-3" style={{ backgroundColor: '#21c221' }}>Create abha id now &gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
