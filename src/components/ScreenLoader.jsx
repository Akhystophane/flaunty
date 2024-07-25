import React from 'react';
import circle from '../assets/svg/spinning-circles.svg';
import CircularProgressWithLabel from './design/CircularProgressWithLabel'


const ScreenLoader = ({ progress }) => {
  if (progress === 100) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 overflow-hidden z-50"
    style={{overflow:"hidden"}}>
      {/* <img src={circle} alt="Loading" className="w-16 h-16" /> */}
      <CircularProgressWithLabel progress={progress}/>
    </div>
  );
};

export default ScreenLoader;