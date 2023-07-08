import React from 'react'
import './Blogs.css'

export default function Blogs() {
    return (

        <div>
            <div>
                <h1 className=' text-center' style={{ marginTop: '200px' }}>Blogs</h1>
                <p className=' text-center' style={{ fontSize: '25px', letterSpacing: '2px' }}>Grow your medical practice with guides & articles from the best in business</p>
            </div>
            <div class="row mb-5 mt-5">
                <div class="col-md-4"></div>
                {/* <div class=" col-md-4 mt-3 col-sm-10"> */}
                <div class="card p-4" style={{ maxWidth: '230px', height: '100vh' }}>
                    <div className='d-flex justify-content-center'>
                        <img
                            src='https://www.paperplanetech.co/static/media/thumbnail1.a73053b54f875cdb7d19.png'
                            alt="" class="" height={'100px'} width={'170px'} />
                    </div>

                    <div>
                        <p className='mt-4' style={{
                            fontSize: '28px',
                            fontWeight: '350', lineHeight: '43px', letterSpacing: '1px',
                        }}>How to set up your digital clinic in 7 minutes?</p>
                    </div>
                    <div className=''>
                        <button className='btn btn-outline-success mt-5 fs-4 p-3' style={{ borderRadius: '20px', textAlign: 'center' }}>Read More</button>
                    </div>
                </div>
                {/* </div> */}
                {/* <div class=" col-md-4 mt-3 col-sm-10"> */}
                <div class="card p-4 ms-5 " style={{ maxWidth: '230px', height: '100vh' }}>
                    <div className='d-flex justify-content-center'>
                        <img
                            src='https://www.paperplanetech.co/static/media/thumbnail1.a73053b54f875cdb7d19.png'
                            alt="" class="" height={'100px'} width={'170px'} />
                    </div>
                    <div >
                        <p className='mt-4' style={{
                            fontSize: '28px',
                            fontWeight: '350', lineHeight: '43px', letterSpacing: '1px'
                        }}>How to set up your Google Business Profile (GMB) for your clinic ?</p>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-outline-success fs-4 p-3 mt-3 mb-2' style={{ borderRadius: '20px', textAlign: 'center' }}>Read More</button>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )

}
