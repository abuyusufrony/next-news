import SingleAr from '@/lib/SingleAr';
import React from 'react';

async function page({ params }) {
    const { id } = params
    const sa = await SingleAr(id)

    return (
        <h2>
            this are dynamic page
            <h2>title : {sa.title} </h2>
        </h2>
    );
};

export default page;