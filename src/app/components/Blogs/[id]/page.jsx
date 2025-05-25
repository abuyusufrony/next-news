import SingleAr from '@/lib/SingleAr';
import React from 'react';
import Tab from '../../Tab/Tab';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

async function page({ params }) {
    const { id } = params
    const sa = await SingleAr(id)

    return (

        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{sa.title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                        <div className="flex items-center md:space-x-2">

                            <p className="text-sm">{sa.public_reactions_count} Reactions •  Post Date {new Date(sa.published_at).toLocaleDateString()} </p>
                        </div>
                        <p className="flex-shrink-0 mt -3 text-sm md:mt-0">{sa.reading_time_minutes} min read • {sa.comments_count} Comments</p>
                    </div>
                    <Tab></Tab>

                    <div className='max-w mx-auto  group hover:no-underline focus:no-underline dark:bg-gray-50'>
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500 " src={sa.cover_image} />
                        <div className="p-6 space-y-2   ">

                            {/* <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span> */}
                            <div>

                                {/* <ul>
                            {
                                tags.map(t => <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{t}</a>)
                            }
                        </ul> */}
                                <h3 className="text-xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{sa.title}</h3>




                        // In your layout component
                                <div className="max-w-screen-md mx-auto px-4 w-full">
                                    <Markdown rehypePlugins={[rehypeRaw]}>
                                        {sa.body_html}
                                    </Markdown>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </article>
        </div>

    );
};

export default page;