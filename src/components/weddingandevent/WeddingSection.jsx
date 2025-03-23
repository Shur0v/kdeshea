// Import your wedding section image
import weddingImage from '../../assets/images/wedding/1.jpg';

const WeddingSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h5 className="text-xl font-medium text-gray-600 tracking-wide uppercase">
                Luxury Celebrations
              </h5>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                WEDDINGS & EVENTS
              </h2>
              <h5 className="text-xl text-gray-700 italic">
                Creating That One-Of-A-Kind Experience
              </h5>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-2xl">
              KDeShea Events is a full service wedding and event planner. We specialize in making your big day
              seamlessly perfect. The owner has created magical and memorable events for an extraordinary
              range of clients. Whether an intimate garden wedding or a large, nonprofit fund raiser, her expertise
              lies in not only planning and executing those weddings and events, but creating that one-of-a-kind
              experience her clients and their guests will always remember.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
              <img
                src={weddingImage}
                alt="Elegant wedding setup"
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gray-100 rounded-full opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gray-100 rounded-full opacity-20"></div>
    </section>
  );
};

export default WeddingSection;
