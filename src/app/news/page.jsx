
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='py-12'>
            <h2 className='text-2xl font-bold mb-8'>Leastest News</h2>
            <nav className='space-x-4 mb-4'>
                <Link href={'/news/sports'} >Sports</Link>
                <Link href={'/news/health'}>Health</Link>
            </nav>
            <div className='flex justify-between'>
                <div className='bg-slate-100 h-96 flex justify-center  items-center w-4/5'>
                    All News
                </div>
                <div className='w-1/5 bg-slate-200  h-96 '>
                    <h2>Side news section </h2>
                    <h2>Fetch side section news</h2>
                </div>
            </div>
        </div>
    );
};

export default page;