import React from 'react';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/page.jsx';


const page = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="relative w-full mb-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            📰 Latest News
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">
            Stay updated with what's new
          </span>
        </div>
      </div>
      <Blogs></Blogs>


    </div>
  );
};

export default page;