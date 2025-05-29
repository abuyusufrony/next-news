import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="py-12 bg-slate-100 dark:bg-gray-900">
            <div className="px-4 py-5 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Image
                        src="https://www.w2ssolutions.com/blog/wp-content/uploads/2023/09/openai.jpg"
                        width={600}
                        height={480}
                        alt="openAi"
                        className="rounded-sm p-3"
                    />
                </div>
                <div className="flex flex-col space-y-4 text-gray-900 dark:text-gray-100">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Technology</h4>
                    <h2 className="text-3xl font-bold">
                        OpenAI is growing fast and burning through money
                    </h2>
                    <p>
                        OpenAI recently announced Operator, an AI agent designed to handle web-based tasks on its own.
                        It can handle tasks like booking a table or shopping online, simplifying digital interactions for everyday tasks. <br />
                        However, its potential goes beyond convenience — it could empower people who lack computer skills
                        by enabling them to complete tasks like filling out forms or navigating complex websites with ease.
                    </p>
                    <Link href="/components/Blogs">
                        <button className="inline-block bg-black text-white rounded-lg p-2 text-center dark:bg-white dark:text-black">
                            Read Blogs
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
