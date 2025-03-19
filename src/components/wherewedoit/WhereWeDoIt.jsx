// import { useEffect, useState } from "react"

// Import venue images (you'll need to add these to your assets folder)
import langhamImg from "../../assets/images//wherewedoit/1.jpg"
import ritzImg from "../../assets/images//wherewedoit/2.jpg"
import fourSeasonsImg from "../../assets/images//wherewedoit/3.jpg"
import ojaiImg from "../../assets/images//wherewedoit/4.jpg"
import rooseveltImg from "../../assets/images//wherewedoit/5.jpg"
import terraneaImg from "../../assets/images//wherewedoit/6.jpg"
import malibuImg from "../../assets/images//wherewedoit/7.jpg"
import beverlyImg from "../../assets/images//wherewedoit/8.jpg"
import backgroundImg from "../../assets/images/wherewedoit/bg.jpg"

const venues = [
  {
    image: langhamImg,
  },
  {
    image: ritzImg,
  },
  {
    image: fourSeasonsImg,
  },
  {
    image: ojaiImg,
  },
  {
    image: rooseveltImg,
  },
  {
    image: terraneaImg,
  },
  {
    image: malibuImg,
  },
  {
    image: beverlyImg,
  },
]

const WhereWeDoIt = () => {
  return (
    <section className="relative py-16 px-4">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImg}
          alt="Elegant outdoor event setting"
          className="w-full h-full object-cover brightness-[0.65]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-2">Where We Do It</h2>
        </div>

        {/* Venue grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {venues.map((venue, index) => (
            <VenueCard
              key={index}
              name={venue.name}
              location={venue.location}
              image={venue.image}
            />
          ))}
        </div>

        {/* Footer text */}
        <p className="text-white text-center mt-12 text-lg max-w-4xl mx-auto">
          And many other exceptional venues, from intimate to extravagant, that meet our clients&apos; needs.
        </p>
      </div>
    </section>
  )
}

import PropTypes from 'prop-types'

const VenueCard = ({ image, name, location }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg overflow-hidden mb-4 w-full h-[140px] relative bg-white flex justify-center items-center">
        <img 
          src={image} 
          alt={`${name} - ${location}`} 
          className="object-cover w-auto h-full bg-white hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  )
}

VenueCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default WhereWeDoIt