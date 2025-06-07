import React, { useEffect } from 'react';
import Banner from '/assets/Banner.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {
    AOS.init({ 
      duration: 1500,
      once: true,
    }); 
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-950 text-white px-6 py-12 flex items-center ">
      <div
       className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 ">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-6 tracking-wider font-serif">
            Welcome to the Demon Slayer Universe
          </h1>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed font-thin">
            Follow the journey of Tanjiro Kamado and his allies as they battle
            demons and uncover the mysteries of the Demon Slayer Corps. Dive into
            character lore, stunning visuals, and iconic battles that define this
            legendary anime.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link to="/about">
              <button className="bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-[#7a5719]">
               Join the Journey
                <i className='bx bx-right-top-arrow-circle text-xl'></i>
              </button>
            </Link>
          </div>


        </div>

        {/* Right: Banner Image */}
        <div  data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
         className="flex-1 flex justify-center md:justify-end">
          <img
            src={Banner}
            alt="Demon Slayer Banner"
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
