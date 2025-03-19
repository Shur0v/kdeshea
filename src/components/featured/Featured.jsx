import image1 from "../../assets/images/featured/2.png"
import image2 from "../../assets/images/featured/3.png"
import image3 from "../../assets/images/featured/4.png"
import sectionTitle from "../../assets/images/section-title.png"

const Featured = () => {
  const featuredItems = [
    {
      id: 1,
      image: image1
    },
    {
      id: 2,
      image: image2
    },
    {
      id: 3,
      image: image3
    },
    {
      id: 4,
      image: image1
    },
    {
      id: 5,
      image: image2
    }
  ];

  return (
    <div className="w-full bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-teal-600">Featured On</h2>
          <div className="flex items-center justify-center">
            <img 
              src={sectionTitle} 
              alt="Section Divider" 
              className="w-52 h-auto -mt-7"
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="grid grid-cols-5 gap-10">
            {featuredItems.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={`Featured item ${item.id}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Featured;