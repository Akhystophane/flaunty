import React from 'react';
import circle from '../assets/svg/spinning-circles.svg';
import CircularProgressWithLabel from './design/CircularProgressWithLabel'


const ScreenLoader = ({ progress }) => {
  if (progress === 100) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 overflow-hidden z-50"
    style={{overflow:"hidden"}}>
      {/* <img src={circle} alt="Loading" className="w-16 h-16" /> */}
      {/* <CircularProgressWithLabel progress={progress}/> */}
      {console.log('progress', progress)}
      {/* <progress value={progress} /> */}
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${progress}%`}}> {progress}%</div>
      </div>
    </div>
  );
};

export default ScreenLoader;