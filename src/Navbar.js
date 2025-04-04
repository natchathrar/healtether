// import React from 'react'
// import { Link } from 'react-router-dom';
// import HealthLogo from './Assets/images/Medical-health-logo.png'

// export default function Navbar() {
//     return (
//         <div>
//             <div className='headings container-fluid m-0'>
//                 <h6 className='head_text text-center' style={{ color: 'white' }}>💡 Hear it from our customers, on how to use Paperplane. <span style={{ color: 'rgb(255, 255, 255)', textDecoration: 'underline', cursor: 'pointer' }}>Learn more&gt;&gt;</span></h6>
//             </div>

//             <div className='bg-light menu container-fluid '>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
//                     <div className="container-fluid">
//                         <a className="navbar-brand" href="#"><img src={HealthLogo} style={{ height: '60px', width: '60px' }} className='me-2' /><span style={{ fontSize: '25px', fontFamily: 'cursive' }}>Healtether</span></a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse justify-content-center p-3" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
//                                 <li className="nav-item">
//                                     <Link to='/' className='nav-link text-decoration-none'>Home</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link to='/bnpl' className='nav-link'>Buy Now Pay Later
//                                         <p class="fontTypeMuiTypography-body1" style={{ backgroundColor: 'red', position: 'absolute', padding: '0px 0.5rem', borderRadius: '18px', right: '45rem', top: '1rem', fontSize: '11px', color: 'white', width: 'fit-content' }}>New</p></Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="https://www.youtube.com/channel/UCCIs3vb1mC15PrdPQBwgdjQ" target="_blank">Videos</a>
//                                 </li><li className="nav-item">
//                                     {/* <a className="nav-link" href="">Blogs</a> */}
//                                     <Link to='/blogs' className='nav-link text-decoration-none'>Blogs</Link>
//                                 </li>
//                                 <li className="nav-item">

//                                     <Link className="nav-link" to='/abha'>ABHA
//                                         <p class="fontTypeMuiTypography-body1" style={{ backgroundColor: 'red', position: 'absolute', padding: '0px 0.5rem', borderRadius: '18px', right: '31rem', top: '1rem', fontSize: '11px', color: 'white', width: 'fit-content' }}>New</p>
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link to='/about' className='nav-link text-decoration-none'>About Us</Link>

//                                 </li>
//                             </ul>
//                             <div className="d-flex align-items-center">
//                                 <button
//                                     className="btn text-white me-2"
//                                     style={{ borderRadius: '80px', backgroundImage: 'linear-gradient(to right, rgb(38 93 38), rgb(31 198 31))', width: '150px' }}
//                                     onClick={() => window.open('https://play.google.com/store/apps/details?id=paperplane.health.app&hl=en_GB&gl=IN', '_blank')}
//                                 >
//                                     Download App
//                                 </button>

// <button className="btn text-primary border-primary" style={{ borderRadius: '80px', width: '100px' }}>
//     <a href="/login" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>Login</a>
// </button>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//             </div >
//         </div>
//     )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import HealthLogo from './Assets/images/Medical-health-logo.png';

export default function Navbar() {
    return (
        <div>
            <div className="headings container-fluid m-0 py-2">
                <h6 className="head_text text-center text-white fs-5 fs-lg-6 fs-sm-6">
                    💡 Hear it from our customers, on how to use Paperplane.{' '}
                    <span style={{ color: 'rgb(255, 255, 255)', textDecoration: 'underline', cursor: 'pointer' }}>
                        Learn more&gt;&gt;
                    </span>
                </h6>
            </div>

            <div className="bg-light menu container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={HealthLogo} style={{ height: '60px', width: '60px' }} className="me-2" alt="Health Logo" />
                            <span className="fs-4 fs-lg-3" style={{ fontFamily: 'cursive' }}>
                                Healtether
                            </span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center p-3" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fs-lg-4">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-decoration-none">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/bnpl" className="nav-link position-relative">
                                        Buy Now Pay Later
                                        <p className="fontTypeMuiTypography-body1 bg-danger text-white position-absolute  rounded-pill d-none d-lg-block" style={{ right: '-0.5rem', top: '-0.5rem', fontSize: '11px', width: '40px', textAlign: 'center' }}>
                                            New
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.youtube.com/channel/UCCIs3vb1mC15PrdPQBwgdjQ" target="_blank" rel="noopener noreferrer">
                                        Videos
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blogs" className="nav-link text-decoration-none">
                                        Blogs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link position-relative" to="/abha">
                                        ABHA
                                        <p className="fontTypeMuiTypography-body1 bg-danger text-white position-absolute rounded-pill d-none d-lg-block" style={{ right: '-0.5rem', top: '-0.5rem', fontSize: '11px', width: '40px', textAlign: 'center' }}>
                                            New
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link text-decoration-none">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center">
                                <button
                                    className="btn text-white me-2"
                                    style={{ borderRadius: '80px', backgroundImage: 'linear-gradient(to right, rgb(38 93 38), rgb(31 198 31))', width: '150px' }}
                                    onClick={() => window.open('https://play.google.com/store/apps/details?id=paperplane.health.app&hl=en_GB&gl=IN', '_blank')}
                                >
                                    Download App
                                </button>

                                <button className="btn text-primary border-primary" style={{ borderRadius: '80px', width: '100px' }}>
                                    <a href="/login" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>Login</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
