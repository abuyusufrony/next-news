import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='py-12 bg-slate-100'>
            <div className=' px-4 py-5 lg:px-8 grid grid-cols-1 md:grid-cols-2 space-x-2'>
                <div className='space-x-4'>
                    <Image src={'https://www.w2ssolutions.com/blog/wp-content/uploads/2023/09/openai.jpg'} width={600} height={480} className='mt-5 p-3 rounded-sm' alt='openAi'></Image>
                </div>
                <div className='space-y-4 flex flex-col'>
                    <h4 className='text-sm  font-medium text-gray-500'>Technology</h4>
                    <h2 className='text-3xl font-bold'>open ai is growthing fast and brunimg  throw of money</h2>
                    <p>
                        OpenAI recently announced Operator, an AI agent designed to handle web-based tasks on its own. It can handle tasks like booking a table or shopping online, simplifying digital interactions for everyday tasks. <br />

                        However, we think its potential goes beyond convenience—it could empower people who lack computer skills by enabling them to complete tasks like filling out forms or navigating complex websites with ease.
                    </p>
                    <button className='btn-primarry bg-black text-white p-2'>Read More </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;