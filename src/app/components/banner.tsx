import React from 'react';

interface BannerProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Banner: React.FC<BannerProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <section className={`flex justify-between items-center w-full ${darkMode ? 'bg-gray-800' : 'bg-black'} rounded text-white mt-10 px-5 lg:px-0`}>
      <div className="p-5 lg:p-10">
        <h1 className="text-xl lg:text-3xl font-bold">Ready To Get Started?</h1>
        <p className="text-xs lg:text-sm mt-3 lg:mt-5">Ureka is a financial planning and budgeting app that helps you make informed financial decisions.</p>
        <button className="bg-white px-3 lg:px-6 py-1 lg:py-2 text-black mt-5 lg:mt-10 hover:bg-customRed hover:text-white rounded transition duration-300 text-xs lg:text-sm">Download App</button>
      </div>
      <img src="./Images/Frame 6.png" alt="Illustration" className="w-1/2 lg:w-auto" />
    </section>
  );
}

export default Banner;
