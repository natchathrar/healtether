import React, { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card p-3 my-3 shadow-sm bg-light ${expanded ? 'expanded' : ''}`}>
      <div className="card-header bg-light" onClick={toggleAccordion}>
        <div className="d-flex align-items-center justify-content-between">
          <p className={`mb-0 ${expanded ? 'expanded-question' : ''}`}>{question}</p>
          <span>
            {expanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)', transition: 'transform 0.3s' }}>
                <path d="M7 10l5 5 5-5z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                <path d="M7 10l5 5 5-5z" />
              </svg>
            )}
          </span>
        </div>
      </div>
      {expanded && (
        <div className="card-body">
          <p className="text-secondary" style={{ marginTop: '0.5rem', whiteSpace: 'break-spaces' }}>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQAccordion = () => {
  return (
    <div className="accordion-container my-5">
      <div className="container">
        <h1 className="text-center mb-4 fw-bold">Frequently asked questions</h1>
        <div className="row d-flex flex-column text-secondary" style={{ textAlign: 'left' }}>
          <div className="col">
            <Accordion question="How are we different from other Healthcare providers?" answer="Paperplane is a healthcare platform with an integrated EMR solution completely built on top of WhatsApp that enables doctors to connect with their patients on their favorite messaging app." />
          </div>
          <div className="col">
            <Accordion question="How will I be getting new patients via Paperplane?" answer="Paperplane offers the doctor the ability to establish their own brand and attract new patients via a variety of channels, including their website, organic search results on Google Search (via Google My Business), advertisements on a variety of social media platforms, along with WhatsApp Marketing." />
          </div>
          <div className="col">
            <Accordion question="Does Paperplane support WhatsApp Broadcasting?" answer="Yes, Paperplane offers a complete marketing suite for doctors, which enables them to distribute informative posters on a variety of social media platforms, run advertisements via their own portfolio website, and even broadcast their own branded template messages and posters." />
          </div>
          <div className="col">
            <Accordion question="Is Paperplane for Individual Doctors or Hospitals?" answer="We have two product offerings, Paperplane Lite which is for individual practitioners, and Paperplane Enterprise which is a complete whitelabeled solution for Hospitals and Polyclinics." />
          </div>
          <div className="col">
            <Accordion question="How secure is Paperplane?" answer="Our product is HIPPA Compliant as well as ISO Certified, so all the data of the client is stored in encrypted format on the cloud which is completely secure. To read our privacy policy, please visit https://www.paperplane.health/privacyPolicy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
