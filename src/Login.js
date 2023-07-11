import React, { useState } from 'react'
import loginart from './Assets/images/LoginArt.svg'
import './login.css'
import HealthLogo from './Assets/images/Medical-health-logo.png'


export default function Login() {
    const [passwordType, setPasswordType] = useState('password');

    const togglePassword = () => {
        setPasswordType(prevType => (prevType === 'password' ? 'text' : 'password'));
    };
    return (
        <div>
            <div className="main-content">
                <div style={{ overflow: 'hidden' }}>
                    <div className="row">
                        <div className="col-sm-1 col-md-5" style={{ height: '100vh', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '3rem' }}>
                            <div className="container">
                                <img src={HealthLogo} alt="logo" className="m-5" style={{ width: '100px', height: '100px', backdropFilter: 'initial' }} />
                                <span style={{ fontSize: '25px', marginLeft: '-20px', fontFamily: 'cursive' }}>Healtether</span>
                            </div>
                            <center>
                                <img src={loginart} alt="art" style={{ alignItems: 'center', marginLeft: '2rem', overflow: 'visible', width: '85%', paddingTop: '4vh' }} />
                            </center>
                        </div>
                        <div className="col-md-1" style={{ backgroundColor: 'rgb(249, 249, 255)' }}></div>
                        <div className="col-md-6" style={{ backgroundColor: 'rgb(249, 249, 255)' }}>
                            <div style={{ paddingTop: '10rem', padding: '25px' }}>
                                <div className="pl-5 mt-4">
                                    <h1 className="display-2 mb-0" style={{ fontWeight: '500' }}>Sign In</h1>
                                    <p className='text-muted'>Login with your Phone number or Email</p>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <form role="form" className="">
                                                <div className="mb-3 form-group">
                                                    <div className="input-group-merge input-group-alternative input-group">
                                                        <input id="emailInput" placeholder="Phone/Email" type="email" className="form-control-flush p-3  form-control" />
                                                    </div>
                                                </div>
                                                <div className="input-group">
                                                    <div className="input-with-icon input-group-merge input-group-alternative input-group">
                                                        <input type={passwordType} id="txtPassword" placeholder='Password' className="form-control" name="txtPassword" />
                                                        <button type="button" id="btnToggle" className="toggle" onClick={togglePassword}>
                                                            <i id="eyeIcon" className={passwordType === 'password' ? 'bx bx-hide' : 'bx bx-show'}></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* <div className="form-group">
                                                    <div className="input-group-merge input-group-alternative input-group">
                                                        <input
                                                            placeholder="Password"
                                                            id="passwordField"
                                                            type={showPassword ? 'text' : 'password'}
                                                            className="form-control-flush p-3 passwordField form-control"
                                                            value=""
                                                        />
                                                        <div className="input-group-append">
                                                            <button
                                                                className="MuiButtonBase-root MuiIconButton-root"
                                                                tabIndex="0"
                                                                type="button"
                                                                onClick={togglePassword}
                                                            >
                                                                <span className="MuiIconButton-label">
                                                                    <i className={showPassword ? 'bx bx-hide' : 'bx bx-show'} aria-hidden="true"></i>
                                                                </span>
                                                                <span className="MuiTouchRipple-root"></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div> */}

                                                {/* <div className="form-group">
                                                    <div className="input-group-merge input-group-alternative input-group">
                                                        <input
                                                            placeholder="Password"
                                                            id="passwordField"
                                                            type={showPassword ? 'text' : 'password'}
                                                            className="form-control-flush p-3 passwordField form-control"
                                                            value=""
                                                        />
                                                        <button
                                                            className="MuiButtonBase-root MuiIconButton-root"
                                                            tabIndex="0"
                                                            type="button"
                                                            onClick={togglePasswordVisibility}
                                                        >
                                                            <span className="MuiIconButton-label">
                                                                {showPassword ? <EyeOff /> : <Eye />}
                                                            </span>
                                                            <span className="MuiTouchRipple-root"></span>
                                                        </button>
                                                    </div>
                                                </div> */}
                                                {/* <div className="input-group">
                                                    <label htmlFor="txtPassword">Password</label>
                                                    <input
                                                        type={passwordVisible ? 'text' : 'password'}
                                                        id="txtPassword"
                                                        className="form-control"
                                                        name="txtPassword"
                                                    />
                                                    <button type="button" className="toggle" onClick={togglePassword}>
                                                        <i className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} id="eyeIcon"></i>
                                                    </button>
                                                </div> */}
                                                <div className="text-center">
                                                    <button type="button " className="my-4 p-3 btn btn-primary btn-block form-control">Login</button>
                                                </div>
                                            </form>
                                            <div>
                                                <a href="/auth/forgotPassword " className='text-decoration-none'> Forgot Password?</a>
                                            </div>
                                            <div>
                                                <span className="text-dark">Don’t have an account? &nbsp;</span>
                                                <a href="https://website.paperplane.clinic" alt="register" target="_blank" className='text-decoration-none'>Sign up</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
