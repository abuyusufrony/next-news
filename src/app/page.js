import React from 'react';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/page.jsx';


const page = () => {
  return (
    <div>
      <Banner></Banner>

      <div>
        <h2 className='font bold text-2xl mb-8'> Leastest News</h2>


      </div>
      <Blogs></Blogs>


    </div>
  );
};

export default page;