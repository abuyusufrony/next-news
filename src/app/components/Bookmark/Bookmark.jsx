'use client';
import { getSingleArticle } from '@/lib/Bookmarksingle';
import { saveLocal } from '@/lib/Local';
import React from 'react';

const Bookmark = ({ id }) => {
    const handlebook = async () => {

        try {
            const blog = await getSingleArticle(id);
            saveLocal(blog)

            console.log(blog); // ✅ This now logs the correct blog
        } catch (err) {
            console.error("Error fetching article:", err);
        }
    };

    return (
        <div>
            <button
                onClick={handlebook}
                className='bg-primary text-white pl-3 ml-5 rounded-lg hover:scale-105 hover:bg-opacity-30 bg-opacity-20 p-1'
            >
                Bookmark
            </button>
        </div>
    );
};

export default Bookmark;
