import React from 'react';

const Advantages: React.FC = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-between items-center w-full mt-10 px-5 lg:px-0">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h5 className="text-customRed text-center lg:text-left">ADVANTAGES</h5>
          <h2 className="text-2xl lg:text-4xl font-bold mt-3 text-center lg:text-left">Why Choose Ureka?</h2>
          <div className="flex gap-3 mt-5 mb-5 items-baseline align-baseline justify-center lg:justify-start">
            <img src="./Images/Bell.png" alt="Icon" className="w-8 lg:w-10" />
            <h3 className="text-xl lg:text-3xl font-bold">Clever Notifications</h3>
          </div>
          <p className="text-customGray text-center lg:text-left">
            Ureka is a financial planning and budgeting app that helps you make informed financial decisions.
            Ureka is a financial planning and budgeting app that helps you make informed financial decisions.
            Ureka is a financial planning and budgeting app that helps you make informed financial decisions.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="./Images/Frame 4.png"
            alt="Illustration"
            className="w-full lg:w-auto transform transition-transform hover:scale-110 cursor-pointer hidden lg:block"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between items-center w-full mt-10 px-5 lg:px-0">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0">
          <img
            src="./Images/Frame 5.png"
            alt="Illustration"
            className="w-full lg:w-auto transform transition-transform hover:scale-110 cursor-pointer hidden lg:block"
          />
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0">
          <div className="flex gap-3 mt-5 mb-5 items-baseline align-baseline justify-center lg:justify-start">
            <img src="./Images/Star.png" alt="Icon" className="w-8 lg:w-10" />
            <h3 className="text-xl lg:text-3xl font-bold">Fully Customizable</h3>
          </div>
          <p className="text-customGray text-center lg:text-left">
            Ureka is a financial planning and budgeting app that helps you make informed financial decisions.
            Ureka is a financial planning and budgeting app that helps you make informed financial decisions.
            Ureka is a financial planning and budgeting app that helps you make informed financial decisions.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Advantages;
