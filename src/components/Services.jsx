import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import collage from '../assets/photo-collage.png';

export default function Services() {
  return (
    <div className="w-full h-auto  ">
      {/* Top Section with Background */}
      <div
        className="relative py-48 md:py-64 px-4 text-center text-white bg-black"
        style={{
          backgroundImage: `url(${collage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10">
          <p className="font-semibold text-sm text-[#d2bfa3] tracking-widest">SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">WHAT WE OFFER</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
          Unlock exceptional services in car sales, car rentals, and real estate, delivering tailored options for your vehicle and property needs with unmatched quality.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white pb-10">
        {/* Cards Section - Pulled up to overlap */}
        <div className="container mx-auto px-4 transform -translate-y-52">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg text-center">
              <img src={card1} alt="Residential Design" className="w-full h-80 object-cover"/>
              <div className="p-12">
                <h3 className="text-2xl font-bold mb-2 text-black font-lato">Top-tier Auto Purchases</h3>
                <p className="text-gray-600 mb-6">
                Invest in premium cars for sale, featuring the latest models and top-notch quality for discerning buyers.
                </p>
                <button className="bg-black text-white px-6 py-2">LEARN MORE</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg text-center">
              <img src={card2} alt="Corporate Design" className="w-full h-80 object-cover"/>
              <div className="p-12">
                <h3 className="text-2xl font-bold mb-2 text-black font-lato">Esay Drive Rentals</h3>
                <p className="text-gray-600 mb-6">
                Experience hassle-free car rentals with a wide selection, perfect for short trips or long adventures.
                </p>
                <button className="bg-black text-white px-6 py-2">LEARN MORE</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg text-center">
              <img src={card3} alt="Restaurant Design" className="w-full h-80 object-cover"/>
              <div className="p-12">
                <h3 className="text-2xl font-bold mb-2 text-black font-lato">Ideal Home Options</h3>
                <p className="text-gray-600 mb-6">
                Choose from a variety of homes to rent or purchase, offering comfort and value for every family size.
                </p>
                <button className="bg-black text-white px-6 py-2">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 text-center -mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            <div>
              <p className="text-3xl font-bold text-black font-lato">6 +</p>
              <p className="text-gray-500">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black font-lato">80 +</p>
              <p className="text-gray-500">Deals Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black font-lato">10 +</p>
              <p className="text-gray-500">Awards Winning</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black font-lato">15 +</p>
              <p className="text-gray-500">Professional Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 