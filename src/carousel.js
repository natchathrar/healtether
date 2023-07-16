import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import quote from './Assets/images/quote.png'
import sing from './Assets/images/sing.png'
import dharman from './Assets/images/drnaman.png'
import mohita from './Assets/images/mohita1.png'
import viral from './Assets/images/Viral.png'

function FeedbackCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="feedback-carousel-container" >
            <Slider {...settings}>
                <div className='caru'>
                    <div className="p-3 mb-2">
                        <div className="row p-3 d-flex  align-items-center" style={{ minHeight: '500px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', background: 'rgb(255, 255, 255)', textAlign: 'left', borderRadius: '14px' }}>
                            <div className="col-12 col-sm-12">
                                <img src={quote} alt="quote" />
                            </div>
                            <div className="col-12 col-sm-12">
                                <h6 className="type6" style={{ lineHeight: '' }}>
                                    Paperplane WhatsApp Clinic assist me to create my own{' '}
                                    <span className="text-primary">social media brand.</span> I can provide my
                                    patients with the best care by sending them{' '}
                                    <span className="text-primary">personalised and automated medicine &amp; follow-up reminders</span> while maintaining a proper patient database on my mobile phone itself.
                                </h6>
                            </div>
                            <div className="col-12 ">
                                <div className="d-flex align-items-center">
                                    <img src={viral} alt="Dr. Paramjit Singh Juneja" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
                                    <div>
                                        <h5 className="font-weight-bold">Dr. Paramjit Singh Juneja</h5>
                                        <h6 className="type6">Growing Smiles, Uttar Pradesh</h6>
                                        <button className="btn btn-success  rounded-pill btn-sm mt-3">
                                            <i className="fab fa-whatsapp mr-1"></i>TRY NOW !
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='caru'>
                    <div className="p-3 mb-2">
                        <div className="row p-3 d-flex flex-row align-items-center" style={{ minHeight: '500px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', background: 'rgb(255, 255, 255)', textAlign: 'left', borderRadius: '14px' }}>
                            <div className="col-12 ">
                                <img src={quote} alt="quote" />
                            </div>
                            <div className="col-12 ">

                                <h6 className="type6" style={{ lineHeight: '' }}>
                                    Paperplane provides a{' '}
                                    <span className="text-primary">smooth digital prescription writing</span>interface and I can directly share all those{' '}
                                    <span className="text-primary">prescriptions over WhatsApp </span> to give my patients a
                                    <span className="text-primary">seamless consultation experience!</span>
                                </h6>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-center">
                                    <img src={dharman} alt="Dr. Paramjit Singh Juneja" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
                                    <div>
                                        <h5 className="font-weight-bold">Dr. Naman Kanodia</h5>
                                        <h6 className="type6">Growing Smiles, Uttar Pradesh</h6>
                                        <button className="btn btn-success  rounded-pill btn-sm mt-3">
                                            <i className="fab fa-whatsapp mr-1"></i>TRY NOW !
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='caru'>
                    <div className="p-3 mb-2">
                        <div className="row p-3 d-flex flex-row align-items-center" style={{ minHeight: '500px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', background: 'rgb(255, 255, 255)', textAlign: 'left', borderRadius: '14px' }}>
                            <div className="col-12 ">
                                <img src={quote} alt="quote" />
                            </div>
                            <div className="col-12 ">
                                <h6 className="type6" style={{ lineHeight: '' }}>
                                    Paperplane WhatsApp Clinic assist me to create my own{' '}
                                    <span className="text-primary">social media brand.</span> I can provide my
                                    patients with the best care by sending them{' '}
                                    <span className="text-primary">personalised and automated medicine &amp; follow-up reminders</span> while maintaining a proper patient database on my mobile phone itself.
                                </h6>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-center">
                                    <img src={mohita} alt="Dr. Paramjit Singh Juneja" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
                                    <div>
                                        <h5 className="font-weight-bold">Dr. Mohita Mehrotra</h5>
                                        <h6 className="type6">Growing Smiles, Uttar Pradesh</h6>
                                        <button className="btn btn-success  rounded-pill btn-sm mt-3">
                                            <i className="fab fa-whatsapp mr-1"></i>TRY NOW !
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='caru'>
                    <div className="p-3 mb-2">
                        <div className="row p-3 d-flex flex-row align-items-center" style={{ minHeight: '500px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', background: 'rgb(255, 255, 255)', textAlign: 'left', borderRadius: '14px' }}>
                            <div className="col-12 ">
                                <img src={quote} alt="quote" />
                            </div>
                            <div className="col-12 ">

                                <h6 className="type6" style={{ lineHeight: '' }}>{' '}
                                    <span className="text-primary">Website delivery was super fast</span>adding on to which my{' '}
                                    <span className="text-primary">Paperplane's WhatsApp Assistant</span> never forgets to send follow up reminders to my patients so they never miss out on any vaccination.
                                </h6>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-center">
                                    <img src={viral} alt="Dr. Paramjit Singh Juneja" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
                                    <div>
                                        <h5 className="font-weight-bold">Dr. Viralsinhraj</h5>
                                        <h6 className="type6">Growing Smiles, Uttar Pradesh</h6>
                                        <button className="btn btn-success  rounded-pill btn-sm mt-3">
                                            <i className="fab fa-whatsapp mr-1"></i>TRY NOW !
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='caru'>
                    <div className="p-3 mb-2">
                        <div className="row p-3 d-flex flex-row align-items-center" style={{ minHeight: '500px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', background: 'rgb(255, 255, 255)', textAlign: 'left', borderRadius: '14px' }}>
                            <div className="col-12 ">
                                <img src={quote} alt="quote" />
                            </div>
                            <div className="col-12 ">

                                <h6 className="type6" style={{ lineHeight: '' }}>
                                    Paperplane provides a{' '}
                                    <span className="text-primary">smooth digital prescription writing</span>interface and I can directly share all those{' '}
                                    <span className="text-primary">prescriptions over WhatsApp </span> to give my patients a
                                    <span className="text-primary">seamless consultation experience!</span>
                                </h6>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-center">
                                    <img src={dharman} alt="Dr. Paramjit Singh Juneja" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
                                    <div>
                                        <h5 className="font-weight-bold">Dr. Naman Kanodia</h5>
                                        <h6 className="type6">Growing Smiles, Uttar Pradesh</h6>
                                        <button className="btn btn-success  rounded-pill btn-sm mt-3">
                                            <i className="fab fa-whatsapp mr-1"></i>TRY NOW !
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='caru'>
                    <div className="p-3 mb-2">
                        <div className="row p-3 d-flex flex-row align-items-center" style={{ minHeight: '500px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px', background: 'rgb(255, 255, 255)', textAlign: 'left', borderRadius: '14px' }}>
                            <div className="col-12 ">
                                <img src={quote} alt="quote" />
                            </div>
                            <div className="col-12 ">

                                <h6 className="type6" style={{ lineHeight: '' }}>
                                    I can manage patients from{' '}
                                    <span className="text-primary">multiple offline clinics</span>through Paperplane WhatsApp Clinic and also{' '}
                                    <span className="text-primary">start my own teleconsultation  &amp; follow-up reminders</span> service for reaching out to patients<span className="text-primary">Pan India.</span>
                                </h6>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-center">
                                    <img src={sing} alt="Dr. Paramjit Singh Juneja" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
                                    <div>
                                        <h5 className="font-weight-bold">Dr. Paramjit sing Juneja</h5>
                                        <h6 className="type6">Growing Smiles, Uttar Pradesh</h6>
                                        <button className="btn btn-success  rounded-pill btn-sm mt-3">
                                            <i className="fab fa-whatsapp mr-1"></i>TRY NOW !
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider >
        </div >
    );
}

export default FeedbackCarousel;
