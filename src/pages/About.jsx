import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutImage from '../../public/assets/About Page.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
      AOS.init({ 
        duration: 1000,
        once: true,
      }); 
      AOS.refresh();
    }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
      
      <div data-aos="fade-right"
           data-aos-duration="1000"

       className="flex-shrink-0 w-full max-w-md md:w-auto justify-start">
        {/* About image */}
        <img
          src={AboutImage}
          alt="Demon Slayer About"
          className="rounded-lg shadow-lg w-full object-cover h-auto"
        />
      </div>
      
      <div data-aos="zoom-in"
       className="max-w-xl text-center md:text-left">
        {/* About text */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider text-transparent bg-clip-text bg-gradient-to-t from-blue-900 via-cyan-500 to-blue-300">
           Demon Slayer: Kimetsu no Yaiba
        </h1>
        <p className="mb-8 text-base md:text-lg leading-relaxed font-thin text-gray-300 tracking-wider">
          is a thrilling anime and manga series created by Koyoharu Gotouge. Set in Taisho-era Japan, it follows Tanjiro Kamado, a kind-hearted young boy who becomes a Demon Slayer after his family is slaughtered by demons, and his sister Nezuko is turned into one. Determined to save Nezuko and avenge his family, Tanjiro joins the Demon Slayer Corps, a group of skilled warriors dedicated to eradicating demons.
        </p>
        <div className='flex justify-center md:justify-start'>
            <Link to="/characters">
                  <button className="bg-gradient-to-r from-pink-700 via-rose-400 to-gray-900 text-white font-mono py-3 px-6 rounded-lg flex items-center gap-2 tracking-wider">
                    Explore Characters <i className='bx bx-right-top-arrow-circle text-xl'></i>
                  </button>
            </Link>
        </div>
      </div >

    </div>
  );
};

export default About;
