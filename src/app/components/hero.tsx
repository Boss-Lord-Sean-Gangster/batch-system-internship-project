import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row justify-between items-center w-full mt-10 px-5 lg:px-0">
      <div className="relative lg:w-1/2 w-full lg:text-left mt-10 lg:mt-0 lg:static lg:order-none order-2">
        <h1 className="text-4xl lg:text-6xl font-bold hidden lg:block">Make The Best Financial Decisions</h1>
        <p className="text-customGray mt-4 lg:mt-2 hidden lg:block">Ureka is a financial planning and budgeting app that helps you make informed financial decisions.</p>
        <div className=" flex-col lg:flex-row gap-5 mt-10 justify-center lg:justify-start hidden lg:flex">
          <button className="bg-black hover:bg-customRed text-white py-2 px-4 rounded transition duration-300">Get Started</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded transition duration-300">Watch Video</button>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2">
        <img 
          src="./Images/Frame 1.png" 
          alt="Illustration" 
          className="w-full lg:w-full transform transition-transform hover:scale-110 cursor-pointer opacity-50 lg:opacity-100"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center lg:hidden">
          <h1 className="text-4xl font-bold ">Make The Best Financial Decisions</h1>
          <p className="text-customGray mt-4">Ureka is a financial planning and budgeting app that helps you make informed financial decisions.</p>
          <div className="flex flex-col gap-5 mt-10">
            <button className="bg-black hover:bg-customRed text-white py-2 px-4 rounded transition duration-300">Get Started</button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded transition duration-300">Watch Video</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
