import Link from 'next/link';
import React from 'react';


const Message = () => {
    return (
        <div className=' h-screen w-screen flex flex-col justify-center '>
            <div className=' flex justify-center'>
                <h2 className='text-2xl font-bold'>📭 No Bookmarks Here... Yet!. Add Bookmark From Blog.</h2>

            </div>
            <div className='flex justify-center'>
                <Link href={'/'} > <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100 bg-primary text-white cursor-pointer mt-5"> Browse Blogs</button></Link>
            </div>
        </div>
    );
};

export default Message;