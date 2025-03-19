// import { useState } from "react"
// Import images - you'll need to add these images to your assets
import processImg from "../../assets/images/howwedoit/1.jpg"
import sectionTitle from "../../assets/images/section-title.png"

const HowWeDoIt = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-teal-600">How We Do It</h2>
          <div className="flex items-center justify-center">
            <img 
              src={sectionTitle} 
              alt="Section Divider" 
              className="w-52 h-auto -mt-7"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left column - Image */}
          <div className="lg:col-span-5 h-full">
            <div className="rounded-lg overflow-hidden w-full h-full">
              <img
                src={processImg}
                alt="Event planning process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-gray-700 text-lg">
              Whether you&apos;re planning a wedding or corporate event for 10 guests or 1,000, the process can be
              complicated as well as stressful—there are dozens, often hundreds of choices to be made and a budget that
              must be considered. Natalie&apos;s job is to help ease that burden so that when the day arrives, the event can
              happen as simply and as stress-free as possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Overall Event Design & Conceptualization
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Brand Strategy & Product Integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Budget Development & Management
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Venue Scouting & Selection
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Catering & Menu Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Custom Fabrication
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Rentals & Tenting
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Lighting & Sound
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Graphic Design & Signage
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Entertainment & Talent Bookings
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Photography & Videography
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Production Schedules & Event Timelines
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    On-Site Execution & Event Staffing
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Insurance, Permits & Security
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Transportation & Parking Logistics
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Gift Bag Creation
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Personal Styling
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Hair & Make Up
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeDoIt