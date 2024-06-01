import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between w-full mt-20 mb-20 items-baseline">
      <div className="w-full lg:w-auto mb-10 lg:mb-0">
        <div className='flex gap-2 items-center mb-5'>
          <img src="./Images/Logo.png" alt="Logo" className='h-8' />
          <h2 className="text-2xl font-bold">Ureka</h2>
        </div>
        <ul>
          <li className="mb-3">Help@ureka.com</li>
          <li className="mb-3">+1234-456-6789</li>
        </ul>
      </div>
      <div className="w-full lg:w-auto mb-10 lg:mb-0">
        <h2 className="text-2xl font-medium mb-5">Links</h2>
        <ul>
          <li className="mb-3">Home</li>
          <li className="mb-3">About Us</li>
          <li className="mb-3">Bookings</li>
          <li className="mb-3">Blogs</li>
        </ul>
      </div>
      <div className="w-full lg:w-auto mb-10 lg:mb-0">
        <h2 className="text-2xl font-medium mb-5">Legal</h2>
        <ul>
          <li className="mb-3">Terms of Use</li>
          <li className="mb-3">Privacy Policy</li>
          <li className="mb-3">Cookies Policy</li>
        </ul>
      </div>
      <div className="w-full lg:w-auto mb-10 lg:mb-0">
        <h2 className="text-2xl font-medium mb-5">Product</h2>
        <ul>
          <li className="mb-3">Take Tour</li>
          <li className="mb-3">Live Chat</li>
          <li className="mb-3">Reviews</li>
        </ul>
      </div>
      <div className="w-full lg:w-auto mb-10 lg:mb-0">
        <h2 className="text-2xl font-medium mb-5">Newsletter</h2>
        <ul>
          <li className="mb-3">Stay Up To Date</li>
        </ul>
        <input type="text" placeholder="Enter Email" className="border-2 border-white rounded px-3 py-1 bg-transparent" />
        <button type="submit" className="bg-black px-8 py-3 text-white mt-3 lg:mt-10 rounded ml-3">Subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;
