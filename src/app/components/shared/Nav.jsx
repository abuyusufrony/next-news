"use client"
import Link from 'next/link';
import React from 'react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,


} from "@/components/ui/navigation-menu"
import { Switch } from "@/components/ui/switch"
import { MdMenu } from "react-icons/md";
import { usePathname } from 'next/navigation';
import Mobilemenu from '../Mobilemenu/Mobilemenu';



const Nav = () => {
    const pathname = usePathname()
    return (
        <header className='shadow-sm max-w-7xl mx-auto py-4'>

            <nav className='max-w-7xl px-4  md:px-6 lg:px-8 flex justify-between items-center '>

                <div className='font-bold text-xl'>
                    <Link href={'/'}>Next News</Link>
                </div>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>

                        <NavigationMenuItem className='flex items-center space-x-8'>
                            <NavigationMenuLink href='/news' className={`${pathname === '/news' ? 'text-blue-500  font-semibold ' : ''}hover:text-red-500`} >
                                News
                            </NavigationMenuLink>

                            <NavigationMenuTrigger href='/service' className={`${pathname === '/service' ? 'text-blue-500 ' : ''}hover:text-red-500`}>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className='text-gray-600 px-5 py-4  space-y-2 shadow-md'>
                                    <li>
                                        <NavigationMenuLink href='/services/seo'>seo</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href='/services/web development'>Web development</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href='/services/mobile app'>Mobile app</NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                            <NavigationMenuLink className='hover:text-red-500' href='/about'>
                                About
                            </NavigationMenuLink>
                            <NavigationMenuLink className='hover:text-red-500' href='/contract'>
                                contract
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className=' hidden lg:flex space-x-2  '>
                    <div className='flex items-center  '>
                        <span className='mr-4'>Dark Mode</span>
                        <Switch></Switch>
                    </div>
                    <button className='btn bg-black text-white font-bold rounded-sm p-2'>Login</button>
                </div>

                <Mobilemenu></Mobilemenu>
            </nav>

        </header >
    );
};

export default Nav;