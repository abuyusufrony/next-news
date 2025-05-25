import Allblog from '@/lib/Allblog';
import Link from 'next/link';
import React from 'react';

async function Blogs() {
    const blogs = await Allblog()

    return (
        <div>

            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                            <span className="text-xs dark:text-gray-600">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
                            <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        </div>
                    </a>

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                        {
                            blogs.map((singleb) => <div key={singleb.id} className="className='transition border-2  relative  hover:scale-105 border-primary hover:border-secondary rounded p-3 bg-slate-100">
                                <Link href={`/${singleb.id}`} className="max-w-sm mx-auto  group hover:no-underline focus:no-underline dark:bg-gray-50 ">
                                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500 " src={singleb.cover_image} />
                                    <div className="p-6 space-y-2   ">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{singleb.title}</h3>
                                        <span className="text-xs dark:text-gray-600">{new Date(singleb.published_at).toLocaleDateString()}</span>
                                        <p>{singleb.description}</p>
                                    </div>
                                </Link>

                            </div>)
                        }
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blogs;