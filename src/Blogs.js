import React from 'react'
import './Blogs.css'

export default function Blogs() {
    return (

        <div style={{ padding: '1% 5%' }}>
            <div>
                <h1 className='fw-bold text-center' >Blogs</h1>
                <p className=' text-center' style={{ fontSize: '25px', letterSpacing: '1px' }}>Grow your medical practice with guides & articles from the best in business</p>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-sm-10 col-md-5 col-lg-4 mb-4">
                    {/* <div class=" col-md-4 mt-3 col-sm-10"> */}
                    <div class="card1 card p-4 h-100 text-center" style={{ padding: '2rem' }}>
                        <div className='d-flex justify-content-center'>
                            <img
                                src='https://www.paperplanetech.co/static/media/thumbnail1.a73053b54f875cdb7d19.png'
                                alt="" className="" height={'100px'} width={'230px'} />
                        </div>

                        <div>
                            <p className='mt-4' style={{
                                fontSize: '28px',
                                fontWeight: '350', lineHeight: '43px', letterSpacing: '1px',
                            }}>How to set up your digital clinic in 7 minutes?</p>
                        </div>
                        <div className=''>
                            <button className='btn text-success border-success mt-5 fs-4 p-1' style={{ borderRadius: '20px', textAlign: 'center', width: '150px' }}>Read More</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-5 col-lg-4 mb-4">
                    <div class="card1 card p-4 h-100 text-center">
                        <div className='d-flex justify-content-center'>
                            <img
                                src='https://www.paperplanetech.co/static/media/thumbnail1.a73053b54f875cdb7d19.png'
                                alt="" class="" height={'100px'} width={'230px'} />
                        </div>
                        <div >
                            <p className='mt-1' style={{
                                fontSize: '28px',
                                fontWeight: '350', lineHeight: '43px', letterSpacing: '1px'
                            }}>How to set up your Google Business Profile (GMB) for your clinic ?</p>
                        </div>
                        <div className='text-center'>
                            <button className='btn text-success fs-4 p-1 mt-3 mb-2 border-success' style={{ borderRadius: '20px', textAlign: 'center', width: '150px' }}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
