import React from 'react';
import circle from '../assets/svg/spinning-circles.svg';

const ScreenLoader = ({ progress }) => {
  if (progress === 100) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <img src={circle} alt="Loading" className="w-16 h-16" />
    </div>
  );
};

export default ScreenLoader;