import React from 'react';
import characterData from './characterdata.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const skillColorMap = {
  'Water Breathing': 'bg-gradient-to-tr from-blue-800 to-cyan-600',
  'Blood Demon Art': 'bg-gradient-to-r from-pink-700 via-rose-400 to-gray-900',
  'Beast Breathing': 'bg-gradient-to-r from-gray-700 to-yellow-600',
  'Thunder Breathing': 'bg-gradient-to-t from-yellow-600 to-yellow-900',
  'Sun Breathing': 'bg-gradient-to-bl from-orange-700 to-red-900',
  'Flame Breathing': 'bg-gradient-to-tl from-red-700 to-orange-600',
  'Insect Breathing': 'bg-gradient-to-b from-green-600 to-emerald-500',
  'Sound Breathing': 'bg-gradient-to-br from-purple-900 to-pink-600',
  'Love Breathing': 'bg-gradient-to-br from-pink-400 to-pink-200',
  'Stone Breathing': 'bg-gradient-to-tr from-gray-700 to-stone-400',
  'Destructive Death': 'bg-gradient-to-t from-red-600 to-red-900',
  'Moon Breathing': 'bg-gradient-to-bl from-gray-900 to-indigo-600'
};


 // Get background color by first matched skill
 const getBgColorFromSkills = (skills) => {
  for (const skill of skills) {
   if (Object.prototype.hasOwnProperty.call(skillColorMap, skill)) return skillColorMap[skill];
  }
  return 'bg-gradient-to-br from-gray-800 to-gray-950'; // Default fallback
 };

 const Character = () => {
  
  useEffect(() => {
   AOS.init({
    duration: 1000,
    once: true,
   });
   AOS.refresh();
  }, []);

  return (
   <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-inter tracking-wider">
    <h1 className="text-5xl font-extrabold text-center pt-16 pb-12 tracking-wide">
     Demon Slayer Characters
    </h1>

    <div className="flex flex-col items-center space-y-20 px-4 md:px-8 lg:px-16 pb-16">
     {characterData.map((char, index) => {
      // Always use getBgColorFromSkills, ensuring skillColorMap applies to all.
      // This will override any 'bgColor' directly set in characterData.json
      // if you intend for skills to be the primary source of color.
      const bgColorClass = getBgColorFromSkills(char.skills);
      const flexOrderClass = index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';

      return (
       <div 
        key={char.id}
        className={`w-full max-w-7xl mx-auto flex flex-col md:flex ${flexOrderClass} items-center justify-center gap-8 md:gap-12 lg:gap-16 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl ${bgColorClass} transform transition-transform duration-500 hover:scale-[1.01]`}
       >
        {/* Text Content */}
        <div data-aos="zoom-in"
         className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left px-4 md:px-0">
         <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-md">
          {char.name}
         </h2>
         <div>
          <h3 className="text-2xl font-semibold underline mb-3 text-gray-200">About</h3>
          <p className="text-lg leading-relaxed text-gray-100 font-['Roboto'] ">
           {char.text}
          </p>
         </div>
         <div>
          <h3 className="text-2xl font-semibold underline mb-3 text-gray-200">Skills</h3>
          <ul className="list-disc list-inside text-lg text-gray-100 space-y-1 font-['Roboto']">
           {char.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
           ))}
          </ul>
         </div>
         <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg self-center md:self-start">
          View Details &nbsp; &rarr;
         </button>
        </div>

        {/* Image Content */}
        <div
        data-aos="fade-up"
     data-aos-duration="3000"
        className="w-full md:w-1/2 flex justify-center items-end p-0 m-0">
         <img
          src={char.image}
          alt={char.name}
          className="w-auto h-[500px] object-contain pointer-events-none" // Removed mix-blend-multiply
          onError={(e) => {
           e.target.onerror = null;
           e.target.src = `https://placehold.co/400x500/808080/FFFFFF?text=${encodeURIComponent(char.name).replace(/\s/g, '+')}`;
          }}
         />
        </div>
       </div>
      );
     })}
    </div>
   </div>
  );
 };

 export default Character;
