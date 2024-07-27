import React, { useState, useEffect } from 'react';
import CircularProgressWithLabel from './design/CircularProgressWithLabel';

const ScreenLoader = ({ progress }) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) return;

    const startTime = Date.now();
    const maxDuration = 5000; // 5 seconds
    const maxDisplayProgress = 80; // Max progress to show before real progress reaches 100

    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const timeBasedProgress = Math.min((elapsedTime / maxDuration) * maxDisplayProgress, maxDisplayProgress);
      const finalProgress = Math.max(timeBasedProgress, progress);

      setDisplayProgress(Math.round(finalProgress));

      if (progress < 100 && finalProgress < maxDisplayProgress) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [progress]);

  if (progress >= 100) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
      style={{overflow: "hidden"}}
    >
      {console.log('fake one: ', displayProgress)}
      <div className="w-4/5 max-w-md">
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div 
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full transition-all duration-300 ease-out"
            style={{width: `${displayProgress}%`}}
          >
            {displayProgress}%
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ScreenLoader;