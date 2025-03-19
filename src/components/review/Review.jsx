import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import PropTypes from 'prop-types'
import sectionTitle from "../../assets/images/section-title.png"

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button className="slick-prev" onClick={onClick}>
    <IoIosArrowBack className="arrow-icon" />
  </button>
)

const NextArrow = ({ onClick }) => (
  <button className="slick-next" onClick={onClick}>
    <IoIosArrowForward className="arrow-icon" />
  </button>
)

PrevArrow.propTypes = {
  onClick: PropTypes.func
}

NextArrow.propTypes = {
  onClick: PropTypes.func
}

const reviews = [
  {
    text: "Natalie and her team went above and beyond to make our wedding day absolutely perfect. Every detail was thoughtfully planned and executed flawlessly.",
    author: "Sarah & Michael",
    role: "Wedding Couple"
  },
  {
    text: "Working with Kdeshea Events for our corporate gala was a game-changer. Their attention to detail and professional approach made the event a huge success.",
    author: "John Anderson",
    role: "Corporate Client"
  },
  {
    text: "Our destination wedding was a dream come true thanks to Natalie's expertise. She handled everything with grace and made the planning process stress-free.",
    author: "Emily & David",
    role: "Destination Wedding"
  },
  {
    text: "The team's creativity and dedication to our charity event helped us exceed our fundraising goals. They truly understand how to create meaningful experiences.",
    author: "Lisa Thompson",
    role: "Nonprofit Director"
  }
]

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-light text-teal-600">Inspired by You</h2>
          <div className="flex items-center justify-center">
            <img 
              src={sectionTitle} 
              alt="Section Divider" 
              className="w-52 h-auto -mt-7"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="outline-none">
                <div className="text-center px-8 py-12">
                  <p className="text-xl text-gray-700 italic mb-8">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <h4 className="text-teal-600 font-medium text-lg mb-2">
                    {review.author}
                  </h4>
                  <p className="text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Review;