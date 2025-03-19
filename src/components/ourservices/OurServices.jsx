import { useState } from "react"
// Import images
import fullServiceImg from "../../assets/images/ourservices/1.jpg" // You'll need to add these images
import destinationImg from "../../assets/images/ourservices/2.jpg"
import weddingDesignImg from "../../assets/images/ourservices/3.jpg"
import coordinationImg from "../../assets/images/ourservices/4.jpg"
import corporateImg from "../../assets/images/ourservices/5.jpg"
import socialImg from "../../assets/images/ourservices/6.jpg"
import charityImg from "../../assets/images/ourservices/7.jpg"
import privateImg from "../../assets/images/ourservices/8.jpg"
import sectionTitle from "../../assets/images/section-title.png"

// Create a services data object
const servicesData = {
  weddings: [
    {
      image: fullServiceImg,
      title: "FULL SERVICE PLANNING",
      description: "Having an advocate allows you to breath and enjoy the experience of being a bride from the moment the decision is made until the last guest goes home."
    },
    {
      image: destinationImg,
      title: "DESTINATION WEDDINGS",
      description: "We specialize in creating unforgettable destination wedding experiences that capture the essence of your chosen location while reflecting your personal style."
    },
    {
      image: weddingDesignImg,
      title: "WEDDING DESIGN",
      description: "Our design team creates stunning visual experiences that transform your venue into a personalized reflection of your love story and aesthetic vision."
    },
    {
      image: coordinationImg,
      title: "DAY-OF COORDINATION",
      description: "Enjoy your special day while we handle all the details, ensuring a seamless experience for you and your guests from start to finish."
    }
  ],
  events: [
    {
      image: corporateImg,
      title: "CORPORATE EVENTS",
      description: "From product launches to annual galas, we create memorable corporate events that align with your company's vision and goals."
    },
    {
      image: socialImg,
      title: "SOCIAL CELEBRATIONS",
      description: "Whether it's a milestone birthday or anniversary, we design social events that reflect your personal style and create lasting memories."
    },
    {
      image: charityImg,
      title: "CHARITY GALAS",
      description: "We help nonprofit organizations create impactful fundraising events that inspire generosity while showcasing their important mission."
    },
    {
      image: privateImg,
      title: "PRIVATE PARTIES",
      description: "From intimate gatherings to extravagant celebrations, we handle every detail to ensure your private event exceeds expectations."
    }
  ]
}

const OurServices = () => {
  const [activeTab, setActiveTab] = useState("weddings")

  return (
    <section className="py-16 px-4 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-teal-600">Our Services</h2>
          <div className="flex items-center justify-center">
            <img 
              src={sectionTitle} 
              alt="Section Divider" 
              className="w-52 h-auto -mt-7"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-center mb-8">
            <div className="bg-transparent border-b border-teal-200 w-full max-w-md flex">
              <button
                onClick={() => setActiveTab("weddings")}
                className={`text-lg font-light px-8 py-2 flex-1 transition-all duration-200 
                  ${activeTab === "weddings" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500"}`}
              >
                Weddings
              </button>
              <button
                onClick={() => setActiveTab("events")}
                className={`text-lg font-light px-8 py-2 flex-1 transition-all duration-200 
                  ${activeTab === "events" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500"}`}
              >
                Events
              </button>
            </div>
          </div>

          <div className="mt-8">
            {activeTab === "weddings" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {servicesData.weddings.map((service, index) => (
                  <ServiceCard
                    key={index}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {servicesData.events.map((service, index) => (
                  <ServiceCard
                    key={index}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

import PropTypes from 'prop-types'

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg overflow-hidden mb-4 w-full aspect-square relative">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-teal-600 text-base font-medium mb-2 text-center">{title}</h3>
      <p className="text-gray-700 text-center text-sm">{description}</p>
    </div>
  )
}

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default OurServices