"use client";
import { useState, useEffect } from 'react';
import Nav from '../app/components/nav'
import Hero from '../app/components/hero'
import reviews from './data/data';
import Features from '../app/components/features'
import Advantages from '../app/components/advantages';
import Banner from '../app/components/banner';
import Testimonials from '../app/components/testimonials';
import Questions from '../app/components/questions';
import Footer from '../app/components/footer'
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <main className="relative max-w-7xl mx-auto p-10">
      <button onClick={toggleDarkMode} className=" absolute top-10 right-5  p-2  rounded-full bg-gray-500 hover:bg-gray-700 text-white transition duration-300 ">
              {darkMode ? '☀️' : '🌙'}
            </button>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero/>
      <Features/>
      <Advantages/>
      <Testimonials/>
      <Questions/>
      <Banner darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Footer/>
      </main>
    </div>
  );
}
