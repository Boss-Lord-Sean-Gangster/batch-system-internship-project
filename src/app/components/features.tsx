import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full mt-10 px-5 lg:px-0">
      <div className="hidden lg:flex lg:w-1/2 w-full justify-center lg:justify-start mb-10 lg:mb-0">
        <img 
          src="./Images/Frame 3.png" 
          alt="Illustration" 
          className="w-full lg:w-auto transform transition-transform hover:scale-110 cursor-pointer" 
        />
      </div>
      <div className="lg:w-1/2 w-full lg:text-left text-center">
        <h4 className="text-customRed">FEATURES</h4>
        <h2 className="text-4xl font-bold mt-4 lg:mt-0">Ureka Premium</h2>
        <ul className="mt-10 space-y-8">
          <li>
            <h5 className="font-bold">Budgeting Intervals</h5>
            <p className="text-customGray">Choose between weekly, monthly, or yearly budgeting. Ureka will help you stay on track.</p>
          </li>
          <li>
            <h5 className="font-bold">Expense Tracking</h5>
            <p className="text-customGray">Track your expenses with ease and see where your money is going.</p>
          </li>
          <li>
            <h5 className="font-bold">Financial Insights</h5>
            <p className="text-customGray">Get insights into your spending habits and make informed financial decisions.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
