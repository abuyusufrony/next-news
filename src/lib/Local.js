import React from 'react';
import toast from 'react-hot-toast';


export const store = () => {
    let makeItem = []

    const storeItem = localStorage.getItem('blogs')
    if (storeItem) {
        makeItem = JSON.parse(storeItem)

    }
    return makeItem;
}

export const saveLocal = (blgpost) => {
    let blgPosts = store();
    const isExit = blgPosts.find(b => b.id === blgpost.id)
    if (isExit) {
        return toast.error('Allready Added ')

    }
    blgPosts.push(blgpost)
    localStorage.setItem('blogs', JSON.stringify(blgPosts))
    toast.success('Added in Book marks')
}
export const DltLocal = (id) => {
    let dltblg = store()
    const remaing = dltblg.filter(d => d.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaing))
    toast.success('Remove From Bookmark')

}

