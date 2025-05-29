"use client"
import Link from 'next/link';
import React, { useContext } from 'react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { usePathname } from 'next/navigation';
import Mobilemenu from '../Mobilemenu/Mobilemenu';
import { ThemeContext } from '@/context/themeConext';


const Nav = () => {
    const pathname = usePathname();

    // Get dark mode state and toggle function from context
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error("ThemeContext must be used within a ThemeProvider");
    }
    const { isDarkMode, toggleTheme } = themeContext;

    return (
        <header className='shadow-sm max-w-7xl mx-auto py-4'>
            <nav className='max-w-7xl px-4 md:px-6 lg:px-8 flex justify-between items-center'>
                <div className='font-bold text-xl'>
                    <Link href={'/'}>
                        <p className="text-gray-900 dark:text-gray-100">Next News</p>
                    </Link>
                </div>

                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem className='flex items-center space-x-8'>
                            <NavigationMenuLink
                                href={'/components/Blogs'}
                                className={`${pathname === '/components/Blogs' ? 'text-blue-500 font-semibold' : ''} hover:text-red-500 dark:hover:text-red-400 dark:text-gray-300`}
                            >
                                News
                            </NavigationMenuLink>

                            <NavigationMenuTrigger
                                href='/service'
                                className={`${pathname === '/service' ? 'text-blue-500' : ''} hover:text-red-500 dark:hover:text-red-400 dark:text-gray-300`}
                            >
                                Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className='text-gray-600 dark:text-gray-300 px-5 py-4 space-y-2 shadow-md bg-white dark:bg-gray-800 rounded'>
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
                            <NavigationMenuLink className='hover:text-red-500 dark:hover:text-red-400 dark:text-gray-300' href='/components/Bookmarkcard'>
                                Bookmark
                            </NavigationMenuLink>
                            <NavigationMenuLink className='hover:text-red-500 dark:hover:text-red-400 dark:text-gray-300' href='/contract'>
                                Contract
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className='hidden lg:flex space-x-2'>
                    <div className='flex items-center'>
                        <span className='mr-4 text-gray-900 dark:text-gray-100'>Dark Mode</span>
                        {/* Connect Switch to dark mode toggle */}
                        <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
                    </div>
                    <button className='btn bg-black text-white font-bold rounded-sm p-2'>Login</button>
                </div>

                <Mobilemenu />
            </nav>
        </header>
    );
};

export default Nav;
