import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen w-screen left-0 flex flex-col  bg-black/60"
      style={{
        backgroundImage: `url(${images[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {/* Top Bar */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-2 text-[10px] sm:text-xs text-[#d2bfa3] bg-black/60 font-heebo gap-1 md:gap-0">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-center md:text-left">
          <span>📍 Jl. Raya Ubud No.88, Bali 80571</span>
          <span>📞 (+62) 81 2345 1234</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-center md:text-right">
          <span>🕒 Opening : Mon-Fri 08:00 – 17:00</span>
        </div>
      </div>
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 py-4 md:py-6 gap-3 md:gap-0  bg-black/60">
        <div className="text-white text-2xl sm:text-3xl font-bold tracking-widest font-lato">OOLGROUP</div>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-10 text-white font-heebo text-xs sm:text-sm tracking-wide">
          <li><a href="#" className="text-white hover:text-[#d2bfa3]">HOME</a></li>
          <li><a href="#" className="text-white hover:text-[#d2bfa3]">ABOUT US</a></li>
          <li><a href="#" className="text-white hover:text-[#d2bfa3]">SERVICES</a></li>
          <li><a href="#" className="text-white hover:text-[#d2bfa3]">PROJECTS</a></li>
          <li><a href="#" className="text-white hover:text-[#d2bfa3]">CONTACT</a></li>
        </ul>
      </nav>
      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center bg-black/60 px-2 sm:px-8">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lato font-bold text-[#d2bfa3] mb-2 tracking-wide leading-tight">OOL GROUP</h2>
        <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lato font-bold text-white mb-8 tracking-wide leading-tight">OF COMPANIES</h3>
        <button className="px-6 sm:px-10 py-2 sm:py-3 border border-white text-xs sm:text-base text-white font-heebo tracking-widest bg-transparent hover:bg-white hover:text-black transition-all duration-300">VIEW PORTFOLIO</button>
      </div>
    </div>
  );
} 