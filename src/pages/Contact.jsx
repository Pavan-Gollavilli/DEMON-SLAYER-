import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div
     className="min-h-screen bg-black text-white px-6 py- flex flex-col items-center justify-center">
      <div  data-aos="zoom-in"
       className="max-w-2xl w-full">
        <h1 className="text-xl font-bold text-center mb-5 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
          Contact the Demon Slayer Corps
        </h1>
        <form className="space-y-6 bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-xl">
          <div>
            <label className="block mb-2 text-sm font-medium text-yellow-400">Your Name</label>
            <input
              type="text"
              placeholder="Tanjiro Kamado"
              className="w-full px-4 py-3 bg-gray-900 text-yellow-400 rounded-lg border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-yellow-400">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-gray-900 text-yellow-400 rounded-lg border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-yellow-400">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message to the Demon Slayer Corps..."
              className="w-full px-4 py-3 bg-gray-900 text-yellow-400 rounded-lg border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
