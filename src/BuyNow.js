import React from 'react';
import visaa from './Assets/images/visa.svg'
import './Homee.css'
import tick from './Assets/images/tick.png'
import camera from './Assets/images/camera.png'
import rupee from './Assets/images/rupee.png'
import blue from './Assets/images/blue.png'

export default function Buynow() {
    return (
        <div>

            <div style={{ padding: '3% 8%' }}>
                <div className=" bnpl MuiGrid-item MuiGrid-grid-xs-12">
                    <div className=" bnpl MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12" style={{ padding: '1rem', borderRadius: '28px', backgroundImage: 'url("https://www.paperplanetech.co/static/media/bgHero.edc64e6179ecb05ea143.png")' }}>
                        <div className=" MuiGrid-item">
                            <h1 className="MuiTypography-root MuiTypography-h1" style={{ fontSize: '2.4rem' }}>Introducing</h1>
                        </div>
                        <div className=" MuiGrid-item MuiGrid-grid-xs-12"></div>
                        <div className=" MuiGrid-item" style={{ marginTop: '10px', marginBottom: '5px' }}>
                            <h1 className="MuiTypography-root MuiTypography-h1" style={{ fontSize: '2.8rem', background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%) text' }}>Buy Now, Pay Later</h1>
                        </div>
                        <div className=" MuiGrid-item MuiGrid-grid-xs-12"></div>
                        <div className=" MuiGrid-item">
                            <h3 className="MuiTypography-root MuiTypography-h3" style={{ justifyContent: 'center', display: 'flex' }}>Instant Credit for your health on a click!</h3>
                        </div>
                        <div className=" MuiGrid-item MuiGrid-grid-xs-12"></div>
                        <div className=" MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ marginTop: '10px' }}>
                            <img src={visaa} alt="ABHA from Paperplane" style={{ objectFit: 'contain', width: '100%' }} />
                        </div>
                    </div>
                    <div className=" bnpl MuiGrid-item MuiGrid-grid-xs-12" style={{ margin: '3rem 0px', padding: '1rem', background: 'rgb(243, 243, 243)', borderRadius: '28px' }}>
                        <div className=" MuiGrid-item MuiGrid-grid-xs-12">
                            <h2 className="MuiTypography-root MuiTypography-h2 MuiTypography-alignCenter" style={{ fontWeight: '700' }}>With Buy Now, Pay Later you get</h2>
                        </div>
                        <div className=" bnpl MuiGrid-item MuiGrid-align-items-xs-baseline MuiGrid-grid-xs-12" style={{ marginTop: '2rem' }}>
                            <div className=" MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
                                <img src={tick} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                                <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>Under 1 Minute approval</h5>
                                <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>By putting your health ahead of paperwork and logistics</h6>
                            </div>
                            <div className=" MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
                                <img src={blue} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                                <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>Repayments via WhatsApp</h5>
                                <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>Pay securely via WhatsApp without downloading or using any application</h6>
                            </div>
                            <div className=" MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
                                <img src={rupee} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                                <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>Flexible Payment Tenure</h5>
                                <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>Now you decide when and how much to pay in installments</h6>
                            </div>
                            <div className=" MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
                                <img src={camera} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                                <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>No Third-party intervention</h5>
                                <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>Seamless transaction through Paperplane</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}