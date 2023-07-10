import React, { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="MuiPaper-root MuiAccordion-root MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded" style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(227, 227, 227)', padding: '1rem', margin: '0.5rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 10px', borderRadius: '14px' }}>
      <div className={`MuiAccordionSummary-root ${expanded ? 'Mui-expanded' : ''}`} onClick={toggleAccordion}>
        <div className="MuiAccordionSummary-content">
          <p className={`MuiTypography-root MuiTypography-body1 MuiTypography-colorInherit ${expanded ? 'Mui-expanded-question' : ''}`} style={{ marginBottom: '0', display: 'inline' }}>{question}</p>
          <span style={{ marginLeft: '1rem' }}>
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
        <div className="MuiCollapse-root MuiCollapse-expanded" style={{ minHeight: '0px' }}>
          <div className="MuiCollapse-wrapper">
            <div className="MuiCollapse-wrapperInner">
              <div id="panel1a-content" role="region">
                <div className="MuiAccordionDetails-root">
                  <p className="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary" style={{ marginTop: '0.5rem', whiteSpace: 'break-spaces' }}>{answer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FAQAccordion = () => {
  return (
    <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-align-items-xs-center" style={{ margin: '3rem 0px', justifyContent: 'center' }}>
      <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-alignCenter" style={{ margin: '1rem 0px' }}>Frequently asked questions</h1>
      <div className="MuiGrid-root MuiGrid-item aos-init aos-animate" data-aos="fade-right" data-aos-once="true" data-aos-delay="50" style={{ width: '90%', textAlign: 'left' }}>
        <Accordion question="How are we different from other Healthcare providers?" answer="Paperplane is a healthcare platform with an integrated EMR solution completely built on top of WhatsApp that enables doctors to connect with their patients on their favorite messaging app." />
      </div>
      <div className="MuiGrid-root MuiGrid-item aos-init aos-animate" data-aos="fade-right" data-aos-once="true" data-aos-delay="50" style={{ width: '90%', textAlign: 'left' }}>
        <Accordion question="How will I be getting new patients via Paperplane?" answer="Paperplane offers the doctor the ability to establish their own brand and attract new patients via a variety of channels, including their website, organic search results on Google Search (via Google My Business), advertisements on a variety of social media platforms, along with WhatsApp Marketing." />
      </div>
      <div className="MuiGrid-root MuiGrid-item aos-init aos-animate" data-aos="fade-right" data-aos-once="true" data-aos-delay="50" style={{ width: '90%', textAlign: 'left' }}>
        <Accordion question="Does Paperplane support WhatsApp Broadcasting?" answer="Yes, Paperplane offers a complete marketing suite for doctors, which enables them to distribute informative posters on a variety of social media platforms, run advertisements via their own portfolio website, and even broadcast their own branded template messages and posters." />
      </div>
      <div className="MuiGrid-root MuiGrid-item aos-init aos-animate" data-aos="fade-right" data-aos-once="true" data-aos-delay="50" style={{ width: '90%', textAlign: 'left' }}>
        <Accordion question="Is Paperplane for Individual Doctors or Hospitals?" answer="We have two product offerings, Paperplane Lite which is for individual practitioners, and Paperplane Enterprise which is a complete whitelabeled solution for Hospitals and Polyclinics." />
      </div>
      <div className="MuiGrid-root MuiGrid-item aos-init aos-animate" data-aos="fade-right" data-aos-once="true" data-aos-delay="50" style={{ width: '90%', textAlign: 'left' }}>
        <Accordion question="How secure is Paperplane?" answer="Our product is HIPPA Compliant as well as ISO Certified, so all the data of the client is stored in encrypted format on the cloud which is completely secure. To read our privacy policy, please visit https://www.paperplane.health/privacyPolicy" />
      </div>
    </div>
  );
};

export default FAQAccordion;

