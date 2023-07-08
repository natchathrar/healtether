import React from 'react'
import tick from './Assets/images/tick.png'
import final from './Assets/images/final.svg'

export default function BuyNow() {
    return (
        <div>
            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12">
                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12" style={{ padding: '1rem', borderRadius: '28px', backgroundImage: 'url("/static/media/bgHero.edc64e6179ecb05ea143.png")' }}>
                    <div className="MuiGrid-root MuiGrid-item">
                        <h1 className="MuiTypography-root MuiTypography-h1" style={{ fontSize: '2.4rem' }}>Introducing</h1>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"></div>
                    <div className="MuiGrid-root MuiGrid-item" style={{ marginTop: '10px', marginBottom: '5px' }}>
                        <h1 className="MuiTypography-root MuiTypography-h1" style={{ fontSize: '2.8rem', background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitTextFillColor: 'transparent' }}>Buy Now, Pay Later</h1>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"></div>
                    <div className="MuiGrid-root MuiGrid-item">
                        <h3 className="MuiTypography-root MuiTypography-h3" style={{ justifyContent: 'center', display: 'flex' }}>Instant Credit for your health on a click!</h3>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"></div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ marginTop: '10px' }}>
                        <img src="/static/media/final card design.bcb055ca02a80776812f94ae6e7d3b2a.svg" alt="ABHA from Paperplane" style={{ objectFit: 'contain', width: '100%' }} />
                    </div>
                </div>
                <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12" style={{ margin: '3rem 0px', padding: '1rem', background: 'rgb(243, 243, 243)', borderRadius: '28px' }}>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                        <h2 className="MuiTypography-root MuiTypography-h2 MuiTypography-alignCenter" style={{ fontWeight: '700' }}>With Buy Now, Pay Later you get</h2>
                    </div>
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-baseline MuiGrid-grid-xs-12" style={{ marginTop: '2rem' }}>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
                            <img src={final} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>Under 1 Minute approval</h5>
                            <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>By putting your health ahead of paperwork and logistics</h6>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
                            <img src={tick} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>Repayments via WhatsApp</h5>
                            <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>Pay securely via WhatsApp without downloading or using any application</h6>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
                            <img src="/static/media/fl_rupee.4bad1db344ed947e538e.png" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>Flexible Payment Tenure</h5>
                            <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>Now you decide when and how much to pay in installments</h6>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6" style={{ padding: '1rem 6rem', textAlign: 'center' }}>
                            <img src="/static/media/web-page.35d94c81446e7bf635bb.png" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <h5 className="MuiTypography-root MuiTypography-h5" style={{ marginTop: '1rem', fontWeight: '600' }}>No Third-party intervention</h5>
                            <h6 className="MuiTypography-root MuiTypography-h6" style={{ marginTop: '1rem' }}>Seamless transaction through Paperplane</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
