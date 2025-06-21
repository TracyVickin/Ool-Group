import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import collage from '../assets/photo-collage.png';

export default function Services() {
  return (
    <div className="w-full h-auto" id="services">
      {/* Top Section with Background */}
      <div
        className="relative py-24 md:py-48 px-4 text-center text-white bg-black"
        style={{
          backgroundImage: `url(${collage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 pb-8 md:pb-12">
          <p className="font-semibold text-sm text-[#d2bfa3] tracking-widest">SERVICES</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-10 font-lato text-white">WHAT WE OFFER</h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-300">
          Unlock exceptional services in car sales, car rentals, and real estate, delivering tailored options for your vehicle and property needs with unmatched quality.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white pb-10">
        {/* Cards Section - Pulled up to overlap */}
        <div className="container mx-auto px-4 transform -translate-y-20 md:-translate-y-40 lg:-translate-y-52">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg text-center">
              <img src={card1} alt="Top-tier Auto Purchases" className="w-full h-64 sm:h-80 object-cover"/>
              <div className="p-8 md:p-12">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-black font-lato">Top-tier Auto Purchases</h3>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                Invest in premium cars for sale, featuring the latest models and top-notch quality for discerning buyers.
                </p>
                <button className="bg-black text-white px-6 py-2 hover:bg-white hover:text-black border border-black transition-all duration-300 focus:outline-none">LEARN MORE</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg text-center">
              <img src={card2} alt="Esay Drive Rentals" className="w-full h-64 sm:h-80 object-cover"/>
              <div className="p-8 md:p-12">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-black font-lato">Esay Drive Rentals</h3>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                Experience hassle-free car rentals with a wide selection, perfect for short trips or long adventures.
                </p>
                <button className="bg-black text-white px-6 py-2 hover:bg-white hover:text-black border border-black transition-all duration-300 focus:outline-none">LEARN MORE</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg text-center">
              <img src={card3} alt="Ideal Home Options" className="w-full h-64 sm:h-80 object-cover"/>
              <div className="p-8 md:p-12">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-black font-lato">Ideal Home Options</h3>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                Choose from a variety of homes to rent or purchase, offering comfort and value for every family size.
                </p>
                <button className="bg-black text-white px-6 py-2 hover:bg-white hover:text-black border border-black transition-all duration-300 focus:outline-none">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 text-center -mt-8 md:-mt-16 lg:-mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-black font-lato">6 +</p>
              <p className="text-gray-500 text-sm">Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-black font-lato">80 +</p>
              <p className="text-gray-500 text-sm">Deals Completed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-black font-lato">10 +</p>
              <p className="text-gray-500 text-sm">Awards Winning</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-black font-lato">15 +</p>
              <p className="text-gray-500 text-sm">Professional Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 