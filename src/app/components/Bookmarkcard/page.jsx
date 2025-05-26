"use client";
import { store } from "@/lib/Local";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getStore = store();
        setBlogs(getStore);
    }, []);

    return (
        <div>
            {blogs.length === 0 ? (
                <p className="text-center">No bookmarks found.</p>
            ) : (
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((singleb) => (
                        <div
                            key={singleb.id}
                            className="transition border-2 relative hover:scale-105 border-primary hover:border-secondary rounded p-3 bg-slate-100"
                        >
                            <Link href={`/blogs/${singleb.id}`}>
                                <img
                                    role="presentation"
                                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                    src={singleb.cover_image}
                                    alt={singleb.title}
                                />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold">{singleb.title}</h3>
                                    <span className="text-xs dark:text-gray-600">
                                        {new Date(singleb.published_at).toLocaleDateString()}
                                    </span>
                                    <p>{singleb.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;
