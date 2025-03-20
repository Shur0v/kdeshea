import sectionTitle from "../../assets/images/section-title.png"
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true)
      
      const templateParams = {
        to_name: "KDeshea",
        name: data.name,
        email: data.email,
        guests: data.guests,
        attending: data.attending,
        message: data.message || "No message provided",
        reply_to: data.email,
        time: new Date().toLocaleString()
      }

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      if (response.status === 200) {
        toast.success('Message sent successfully!', {
          duration: 4000,
          position: 'bottom-center',
          style: {
            background: '#663399',
            color: '#fff',
            padding: '16px',
            borderRadius: '10px',
          },
          icon: '👋',
        })
        reset()
      }
    } catch (error) {
      console.error('Error details:', error)
      toast.error('Error sending message!', {
        duration: 4000,
        position: 'bottom-center',
        style: {
          background: '#ff4b4b',
          color: '#fff',
        },
        icon: '❌',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 px-4">
      <Toaster />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light [var(--primary-purple)]">Contact Us</h2>
          <div className="flex items-center justify-center">
            <img 
              src={sectionTitle} 
              alt="Section Divider" 
              className="w-52 h-auto mt-2 opacity-75"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Consultation Info */}
          <div className="md:w-1/2">
            <div className="bg-white h-full flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-light [var(--primary-purple)] mb-8 text-left">
                  Complimentary Consultation
                </h3>

                <p className="mb-5 text-gray-700 text-lg leading-relaxed">
                  I offer a complimentary consultation, either in person or over the phone, so I can learn what you&apos;re looking
                  to accomplish, and to take you through the planning process to see how we might work together to create the
                  wedding or event you desire.
                </p>

                <p className="mb-5 text-gray-700 text-lg leading-relaxed">
                  So, please, don&apos;t hesitate to contact me by phone or email and I&apos;ll be in touch.
                </p>

                <p className="mb-0 text-gray-700 text-lg leading-relaxed">
                  We provide a complimentary consultation to learn what you&apos;re looking to accomplish and to see how we might work together. We look forward to hearing what your dream wedding or event looks like and how we can facilitate bringing it to fruition.
                </p>
              </div>

              <div className="mt-5">
                <p className="mb-3 text-gray-800 text-lg">
                  <span className="font-semibold">Phone:</span> 910-745-0508
                </p>
                <p className="text-gray-800 text-lg">
                  <span className="font-semibold">Email:</span> kdesheatravels@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="md:w-1/2">
            <div className="bg-[#f2f3f1] p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-3xl font-light [var(--primary-purple)] mb-6 text-center">
                Be Our Guest
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-md bg-white`}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email*"
                      className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-md bg-white`}
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      className={`w-full p-3 border ${errors.guests ? 'border-red-500' : 'border-gray-200'} rounded-md bg-white appearance-none`}
                      {...register("guests", { required: "Please select number of guests" })}
                      style={{paddingRight: '40px'}}
                    >
                      <option value="">Number Of Guests*</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3-5">3-5 Guests</option>
                      <option value="6+">6+ Guests</option>
                    </select>
                    {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      className={`w-full p-3 border ${errors.attending ? 'border-red-500' : 'border-gray-200'} rounded-md bg-white appearance-none`}
                      {...register("attending", { required: "Please select event type" })}
                      style={{paddingRight: '40px'}}
                    >
                      <option value="">I Am Attending*</option>
                      <option value="wedding">Wedding ceremony</option>
                      <option value="reception">Reception party</option>
                      <option value="corporate">Corporate event</option>
                      <option value="social">Social celebration</option>
                    </select>
                    {errors.attending && <p className="text-red-500 text-sm mt-1">{errors.attending.message}</p>}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <textarea
                  placeholder="Message"
                  className="w-full p-3 border border-gray-200 rounded-md min-h-[120px] bg-white"
                  {...register("message")}
                />

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[var(--primary-purple)] hover:[var(--deep-purple)] text-white px-8 py-3 rounded-md transition-colors duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact