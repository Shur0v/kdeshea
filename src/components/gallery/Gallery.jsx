import { useState, useEffect } from "react"

// Import images (you'll need to add these to your assets folder)
import image1 from "../../assets/images/gallery/1.png"
import image2 from "../../assets/images/gallery/2.png"
import image3 from "../../assets/images/gallery/3.png"
import image4 from "../../assets/images/gallery/4.png"
import image5 from "../../assets/images/gallery/5.png"
import image6 from "../../assets/images/gallery/6.png"
import image7 from "../../assets/images/gallery/7.png"
import image8 from "../../assets/images/gallery/8.png"
import image9 from "../../assets/images/gallery/9.png"
import image10 from "../../assets/images/gallery/10.png"
import image11 from "../../assets/images/gallery/11.jpg"
import image12 from "../../assets/images/gallery/12.jpg"
import image13 from "../../assets/images/gallery/13.jpg"
import image14 from "../../assets/images/gallery/14.jpg"
import image15 from "../../assets/images/gallery/15.jpg"
import image16 from "../../assets/images/gallery/16.jpg"
import image17 from "../../assets/images/gallery/17.jpg"
import image18 from "../../assets/images/gallery/18.jpg"
import image19 from "../../assets/images/gallery/19.jpg"
import image20 from "../../assets/images/gallery/20.jpg"
import image21 from "../../assets/images/gallery/21.jpg"
import image22 from "../../assets/images/gallery/22.jpg"
import sectionTitle from "../../assets/images/section-title.png"

// Gallery data
const galleryImages = [
  {
    id: 1,
    src: image1,
    alt: "Colorful street with bicycle",
    category: ["all", "events"],
    size: "horizontal",
  },
  {
    id: 2,
    src: image2,
    alt: "Wedding couple",
    category: ["all", "wedding"],
    size: "vertical",
  },
  {
    id: 3,
    src: image3,
    alt: "Birthday celebration",
    category: ["all", "events"],
    size: "square",
  },
  {
    id: 4,
    src: image4,
    alt: "Wedding ceremony",
    category: ["all", "wedding"],
    size: "horizontal",
  },
  {
    id: 5,
    src: image5,
    alt: "Corporate event",
    category: ["all", "events"],
    size: "vertical",
  },
  {
    id: 6,
    src: image6,
    alt: "Wedding reception",
    category: ["all", "wedding"],
    size: "square",
  },
  {
    id: 7,
    src: image7,
    alt: "Graduation party",
    category: ["all", "events"],
    size: "horizontal",
  },
  {
    id: 8,
    src: image8,
    alt: "Wedding details",
    category: ["all", "wedding"],
    size: "vertical",
  },
  {
    id: 9,
    src: image9,
    alt: "Concert event",
    category: ["all", "events"],
    size: "square",
  },
  {
    id: 10,
    src: image10,
    alt: "Wedding portraits",
    category: ["all", "wedding"],
    size: "horizontal",
  },
  {
    id: 11,
    src: image11,
    alt: "Conference meeting",
    category: ["all", "events"],
    size: "vertical",
  },
  {
    id: 12,
    src: image12,
    alt: "Wedding venue",
    category: ["all", "wedding"],
    size: "square",
  },
  {
    id: 13,
    src: image13,
    alt: "Charity gala",
    category: ["all", "events"],
    size: "horizontal",
  },
  {
    id: 14,
    src: image14,
    alt: "Wedding dance",
    category: ["all", "wedding"],
    size: "vertical",
  },
  {
    id: 15,
    src: image15,
    alt: "Product launch",
    category: ["all", "events"],
    size: "square",
  },
  {
    id: 16,
    src: image16,
    alt: "Wedding preparation",
    category: ["all", "wedding"],
    size: "horizontal",
  },
  {
    id: 17,
    src: image17,
    alt: "Award ceremony",
    category: ["all", "events"],
    size: "vertical",
  },
  {
    id: 18,
    src: image18,
    alt: "Wedding guests",
    category: ["all", "wedding"],
    size: "square",
  },
  {
    id: 19,
    src: image19,
    alt: "Fashion show",
    category: ["all", "events"],
    size: "horizontal",
  },
  {
    id: 20,
    src: image20,
    alt: "Wedding bouquet",
    category: ["all", "wedding"],
    size: "vertical",
  },
  {
    id: 21,
    src: image21,
    alt: "Colorful street with bicycle",
    category: ["all", "events"],
    size: "horizontal",
  },
  {
    id: 22,
    src: image22,
    alt: "Wedding couple",
    category: ["all", "wedding"],
    size: "vertical",
  }
]

const IMAGES_PER_PAGE = 8

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [filteredImages, setFilteredImages] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [visibleImages, setVisibleImages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredImages(galleryImages)
    } else {
      setFilteredImages(galleryImages.filter((image) => image.category.includes(activeTab)))
    }
    // Reset pagination when changing tabs
    setCurrentPage(1)
  }, [activeTab])

  useEffect(() => {
    // Update visible images based on current page
    setVisibleImages(filteredImages.slice(0, currentPage * IMAGES_PER_PAGE))
  }, [currentPage, filteredImages])

  useEffect(() => {
    setLoaded(true)
  }, [])

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1)
  }

  return (
    <section className="py-16 px-4 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-teal-600">The Outcome</h2>
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
                onClick={() => setActiveTab("all")}
                className={`text-lg font-light px-8 py-2 flex-1 transition-all duration-200 
                  ${activeTab === "all" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500"}`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("wedding")}
                className={`text-lg font-light px-8 py-2 flex-1 transition-all duration-200 
                  ${activeTab === "wedding" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500"}`}
              >
                Wedding
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {visibleImages.map((image) => (
              <GalleryCard
                key={image.id}
                image={image}
                loaded={loaded}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleImages.length < filteredImages.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

import PropTypes from 'prop-types'

const GalleryCard = ({ image, loaded }) => {
  return (
    <div 
      className={`flex flex-col items-center transition-all duration-500 ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ animationDelay: `${image.id * 100}ms` }}
    >
      <div className="rounded-lg overflow-hidden mb-4 w-full aspect-square relative group">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="object-cover w-full h-full rounded-lg hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end">
          <div className="p-4 w-full text-white">
            <h3 className="text-lg font-medium">{image.alt}</h3>
            <p className="text-sm opacity-80 capitalize">
              {image.category.filter((cat) => cat !== "all").join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

GalleryCard.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    size: PropTypes.string.isRequired,
  }).isRequired,
  loaded: PropTypes.bool.isRequired,
}

export default Gallery