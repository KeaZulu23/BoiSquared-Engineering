import React from 'react';

const CTA = ({ title, description, buttonText }) => {
  return (
    <div className="bg-orange-500 py-12 px-6 text-center">
      <h2 className="text-3xl font-semibold text-white mb-4">{title}</h2>
      <p className="text-lg text-white mb-6">{description}</p>
      <a href='/contact'>
        <button className="bg-white text-orange-500 py-2 px-6 rounded-full font-semibold hover:bg-orange-700 hover:text-white transition duration-300 ease-in-out">
            {buttonText}
        </button>
        </a>
    </div>
  );
};

export default CTA;
