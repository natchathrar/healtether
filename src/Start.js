// import React from 'react'

// export default function Start() {
//     return (
//         <div className='d-flex justify-content-center align-item-center'>

//             <div className="MuiBox-root jss2">
//                 <div className="MuiBackdrop-root jss1" aria-hidden="true" style={{ opacity: 0, transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', visibility: 'hidden' }}>
//                     <div title="" role="button" aria-label="animation" tabIndex="0" style={{ width: '250px', height: '250px', overflow: 'hidden', margin: '0px auto', outline: 'none' }}></div>
//                 </div>
//                 <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12" style={{ padding: '2rem 0.5rem' }}>
//                     <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12" style={{ padding: '0.5rem', borderRadius: '18px' }}>
//                         {/* <div className="MuiGrid-root MuiGrid-container MuiGrid-item" justifyconent="center">
//                             <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12" style={{ cursor: 'pointer', flexWrap: 'nowrap', verticalAlign: 'middle', marginBottom: '1rem' }}>
//                                 <img alt="Clinic Logo" src="/static/media/Logo Light.3fe0039f27d19f47fae0.png" style={{ objectFit: 'contain', width: '200px' }} />
//                             </div>
//                         </div> */}
//                         <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12" style={{ padding: '1rem 0.5rem' }}>
//                             <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12" style={{ padding: '2rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '18px', background: 'ghostwhite' }}>
//                                 <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
//                                     <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
//                                         <h2 className="MuiTypography-root MuiTypography-h2 MuiTypography-alignCenter">Create an account</h2>
//                                     </div>
//                                     <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
//                                         <div title="" role="button" aria-label="animation" tabIndex="0" style={{ width: '150px', height: '150px', overflow: 'hidden', margin: '0px auto', outline: 'none' }}></div>
//                                     </div>
//                                     <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-baseline">
//                                         <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
//                                             <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12" style={{ overflowY: 'visible', marginTop: '0.5rem' }}>
//                                                 <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
//                                                     <h3 className="MuiTypography-root MuiTypography-h3" style={{ fontWeight: 500, marginLeft: '0.9rem' }}>Phone number</h3>
//                                                 </div>
//                                                 <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
//                                                     <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
//                                                         <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart">
//                                                             +91-
//                                                             <input aria-invalid="false" placeholder="" type="text" className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart" value="" />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

import React from 'react';
import login from './Assets/images/LoginArt.svg';
// import phone from './Assets/Svg/phone.svg'
import phone from './Assets/Svg/phnmsg.svg'


const MyComponent = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card d-flex flex-row justify-content-center align-items-center">
                <div className="container">
                    <div className="row justify-content-center" style={{ padding: '1rem 6rem' }}>
                        <div className="col-md-6">
                            <img src={login} alt="loginArt" style={{ width: '400px', height: '400px' }} />
                        </div>
                        <div className="col-md-6 p-5">
                            <div className="text-center">
                                <h2>Create an account</h2>
                            </div>
                            <div>
                                <img src={phone} alt='svg' height={'150px'} width={'150px'} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        {/* <span className="input-group-text rounded-pill">+91</span> */}
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control rounded-pill"
                                        id="phoneNumber"
                                        value="+91"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>
                            <div className="text-left">
                                <button className="btn btn-success rounded-pill" style={{ width: '100px' }}>Send OTP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
