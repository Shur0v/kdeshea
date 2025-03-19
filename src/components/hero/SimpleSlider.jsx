import Slider from "react-slick";
// Import slick-carousel CSS from node_modules
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from 'prop-types';

// Import your images
import slide1 from '../../assets/images/SimpleSlider/1.jpg';
import slide2 from '../../assets/images/SimpleSlider/2.jpg';
import slide3 from '../../assets/images/SimpleSlider/3.jpg';
import decorImage from '../../assets/images/SimpleSlider/1.png';

// Custom arrow components
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-prev" onClick={onClick}>
      <IoIosArrowBack className="arrow-icon" />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-next" onClick={onClick}>
      <IoIosArrowForward className="arrow-icon" />
    </button>
  );
};

// Add PropTypes
PrevArrow.propTypes = {
  onClick: PropTypes.func
};

NextArrow.propTypes = {
  onClick: PropTypes.func
};

// Add default props
PrevArrow.defaultProps = {
  onClick: () => {}
};

NextArrow.defaultProps = {
  onClick: () => {}
};

const SimpleSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    fade: true,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  const slides = [
    {
      subtitle: "WERE GETTING MARRIED",
      title: "Save Our Date",
      date: "25 December 2019",
      image: slide1
    },
    {
      subtitle: "It's,",
      title: "Kdeshea Events",
      date: "23 jun 2021",
      image: slide2
    },
    {
      subtitle: "It's,",
      title: "Kdeshea Events",
      date: "19 September 2023",
      image: slide3
    }
  ];

  return (
    <div className="slider-container">
      <div className="particleWrapper" />
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-wrapper">
            <div 
              className="slide-item"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="container">
                <div className="slide-content" style={{ backgroundImage: `url(${decorImage})` }}>
                  <div className="slide-subtitle">
                    <h4>{slide.subtitle}</h4>
                  </div>
                  <div className="slide-title">
                    <h2>{slide.title}</h2>
                  </div>
                  <div className="slide-text -mt-[4px]">
                    <p>{slide.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;