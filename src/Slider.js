import React from 'react';
import Slider from 'react-slick';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="" alt="quote" />
      </div>
      <div>
        <img src="/static/media/drnaman-min_11zon.19b7689bd0e66b195f98.19b7689bd0e66b195f98.png" alt="Dr. Naman Kanodia" style={{ height: '100px', width: '100px', borderRadius: '50%', marginRight: '1rem' }} />
        <h5 className="MuiTypography-root MuiTypography-h5" style={{ fontFamily: 'Montserrat' }}> Dr. Naman Kanodia</h5>
        <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary" style={{ fontFamily: 'Montserrat' }}> SS Pedia Ortho Centre, Uttar Pradesh</h6>
        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabIndex="0" type="button" style={{ background: 'rgb(37, 211, 102)', color: 'white', marginTop: '1rem' }}>
          <span className="MuiButton-label"><span className="MuiButton-startIcon MuiButton-iconSizeSmall"><i className="fa-brands fa-whatsapp"></i></span>TRY NOW !</span>
          <span className="MuiTouchRipple-root"></span>
        </button>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default SliderComponent;
