import React from 'react';
import AppBuild from "../assets/AppBuild.png"
const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Coming Soon</h1>
        <img src={AppBuild} className='max-w-[200px] max-h-[200px] flex flex-1' />
        <p className="text-gray-600 text-center">Stay tuned for exciting updates!</p>
      </div>
    </div>
  );
};

export default ComingSoon;
