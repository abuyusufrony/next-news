import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";


const Mobilemenu = () => {
    const [menu, setmenu] = useState(false)
    const toggl = () => {
        setmenu(!menu)
    }
    return (

        <div className='lg:hidden'>
            <button onClick={toggl} className='btn bg-black text-white font-bold rounded-sm p-2'>

                {
                    menu ? (<RxCross2></RxCross2>) : (<MdMenu></MdMenu>)
                }

            </button>


        </div>
    );
};

export default Mobilemenu;