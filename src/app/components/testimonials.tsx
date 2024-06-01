import React, { useEffect, useState } from 'react';
import data from '../data/data';

const Testimonials = () => {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviews]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="flex flex-col items-center w-full mt-10">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-center">What People Are Saying</h2>
      </div>
      <div className="relative w-full flex flex-col-reverse lg:flex-row">
        {/* Conditional rendering for large image */}
        <img
          src="../Images/Frame 7.png"
          alt=""
          className="w-full lg:w-1/2 object-cover hidden lg:block"
        />
        <div className="overflow-hidden w-full lg:w-1/2">
          <div className="flex transition-transform duration-700 ease-in-out transform" style={{ transform: `translateX(-${index * 100}%)` }}>
            {reviews.map((item, personIndex) => {
              const { id, image, name, heading, review, rating } = item;
              return (
                <article className="min-w-full flex flex-col items-center justify-center p-5 text-center" key={id}>
                  <img src={image} alt={name} className="rounded-full w-24 h-24 mb-4 object-cover" />
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <h4 className="text-lg font-medium mb-2">{heading}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{review}</p>
                  <div className="flex">
                    {Array.from({ length: rating }, (_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.522 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.98 2.893a1 1 0 00-.364 1.118l1.52 4.673c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.98 2.893c-.784.57-1.838-.197-1.54-1.118l1.52-4.673a1 1 0 00-.364-1.118L2.655 9.1c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.522-4.674z" />
                      </svg>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
