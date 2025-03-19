// import { useState } from "react"
// Import images - you'll need to add these images to your assets
import processImg from "../../assets/images/howwedoit/1.jpg"
import sectionTitle from "../../assets/images/section-title.png"

const HowWeDoIt = () => {
  const services = [
    "Overall Event Design & Conceptualization",
    "Brand Strategy & Product Integration",
    "Budget Development & Management",
    "Venue Scouting & Selection",
    "Catering & Menu Development",
    "Custom Fabrication",
    "Rentals & Tenting",
    "Lighting & Sound",
    "Graphic Design & Signage",
    "Entertainment & Talent Bookings",
    "Photography & Videography",
    "Production Schedules & Event Timelines",
    "On-Site Execution & Event Staffing",
    "Insurance, Permits & Security",
    "Transportation & Parking Logistics",
    "Gift Bag Creation",
    "Personal Styling",
    "Hair & Make Up"
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-[var(--primary-purple)]">How We Do It</h2>
          <div className="flex items-center justify-center">
            <img 
              src={sectionTitle} 
              alt="Section Divider" 
              className="w-52 h-auto mt-2 opacity-75"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
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
              {[0, 1].map((colIndex) => (
                <div key={colIndex}>
                  <ul className="space-y-2 text-gray-700">
                    {services
                      .slice(colIndex * 9, (colIndex + 1) * 9)
                      .map((service, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-[var(--primary-purple)] mr-2">•</span>
                          {service}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeDoIt