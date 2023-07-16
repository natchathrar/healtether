// import React from 'react';

// const DemoForm = () => {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
//                     <h3 className="text-center">Book a demo for <br /><strong>Paperplane Enterprise</strong></h3>
//                     <div className="text-center mb-4">
//                         <img src="/static/media/Group 36918.4eca9170b6674a383d16.png" alt="Paperplane Enterprise" style={{ width: '300px' }} />
//                     </div>
//                     <div className="row justify-content-around">
//                         <div className="col-md-4">
//                             <div className="text-center bg-light rounded p-4">
//                                 <h1 className="h1 text-transparent" style={{ background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitBackgroundClip: 'text' }}>25+</h1>
//                                 <p className="text-center">Businesses trust Paperplane Clinic</p>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="text-center bg-light rounded p-4">
//                                 <h1 className="h1 text-transparent" style={{ background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitBackgroundClip: 'text' }}>50%</h1>
//                                 <p className="text-center">Increase OPD occupancy by 50%</p>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="text-center bg-light rounded p-4">
//                                 <h1 className="h1 text-transparent" style={{ background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitBackgroundClip: 'text' }}>40%</h1>
//                                 <p className="text-center">Increase patient retention by 40%</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-6 bg-white rounded p-4">
//                     <div className="mb-2">
//                         <p className="font-weight-bold">Enter your name</p>
//                         <input type="text" className="form-control" placeholder="Your Name" />
//                     </div>
//                     <div className="mb-2">
//                         <p className="font-weight-bold">Enter your phone number</p>
//                         <input type="text" className="form-control" placeholder="Your Phone Number" />
//                     </div>
//                     <div className="mb-2">
//                         <p className="font-weight-bold">Please specify your business type</p>
//                         <select className="form-control">
//                             {/* Add options for business types here */}
//                         </select>
//                     </div>
//                     <div className="mb-2">
//                         <p className="font-weight-bold">How many doctors does your business have?</p>
//                         <select className="form-control">
//                             {/* Add options for number of doctors here */}
//                         </select>
//                     </div>
//                     <div className="mb-2">
//                         <p className="font-weight-bold">What is your daily patient inbound? <span className="small">(Optional)</span></p>
//                         <select className="form-control">
//                             {/* Add options for daily patient inbound here */}
//                         </select>
//                     </div>
//                     <div className="text-left">
//                         <button className="btn btn-primary">Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DemoForm;
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DemoForm = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleShow = () => {
        setShowModal(true);
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Open Demo Form
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Book a demo for <br /><strong>Paperplane Enterprise</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h3 className="text-center">Book a demo for <br /><strong>Paperplane Enterprise</strong></h3>
                                <div className="text-center mb-4">
                                    <img src="/static/media/Group 36918.4eca9170b6674a383d16.png" alt="Paperplane Enterprise" style={{ width: '300px' }} />
                                </div>
                                <div className="row justify-content-around">
                                    <div className="col-md-4">
                                        <div className="text-center bg-light rounded p-4">
                                            <h1 className="h1 text-transparent" style={{ background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitBackgroundClip: 'text' }}>25+</h1>
                                            <p className="text-center">Businesses trust Paperplane Clinic</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-center bg-light rounded p-4">
                                            <h1 className="h1 text-transparent" style={{ background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitBackgroundClip: 'text' }}>50%</h1>
                                            <p className="text-center">Increase OPD occupancy by 50%</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-center bg-light rounded p-4">
                                            <h1 className="h1 text-transparent" style={{ background: 'linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)', WebkitBackgroundClip: 'text' }}>40%</h1>
                                            <p className="text-center">Increase patient retention by 40%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 bg-white rounded p-4">
                                <div className="mb-2">
                                    <p className="font-weight-bold">Enter your name</p>
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="mb-2">
                                    <p className="font-weight-bold">Enter your phone number</p>
                                    <input type="text" className="form-control" placeholder="Your Phone Number" />
                                </div>
                                <div className="mb-2">
                                    <p className="font-weight-bold">Please specify your business type</p>
                                    <select className="form-control">
                                        {/* Add options for business types here */}
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <p className="font-weight-bold">How many doctors does your business have?</p>
                                    <select className="form-control">
                                        {/* Add options for number of doctors here */}
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <p className="font-weight-bold">What is your daily patient inbound? <span className="small">(Optional)</span></p>
                                    <select className="form-control">
                                        {/* Add options for daily patient inbound here */}
                                    </select>
                                </div>
                                <div className="text-left">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DemoForm;

