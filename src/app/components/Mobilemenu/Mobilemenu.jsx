"use client";
import React, { useState, useContext } from 'react';
import { MdMenu } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import { ThemeContext } from '@/context/themeConext';

const Mobilemenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const themeContext = useContext(ThemeContext);
    const { isDarkMode, toggleTheme } = themeContext;

    return (
        <div className="lg:hidden relative z-50">
            {/* Toggle Button */}
            <button
                onClick={toggleMenu}
                className="btn bg-black text-white font-bold rounded-sm p-2"
                aria-label="Toggle mobile menu"
            >
                {menuOpen ? <RxCross2 size={24} /> : <MdMenu size={24} />}
            </button>

            {/* Menu Panel */}
            {menuOpen && (
                <div className="fixed top-16 left-4 right-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-6 shadow-xl rounded-xl flex flex-col space-y-6 transition-all duration-300">
                    <Link
                        href="/components/Blogs"
                        onClick={toggleMenu}
                        className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        News
                    </Link>

                    <Link
                        href="/service"
                        onClick={toggleMenu}
                        className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        Services
                    </Link>

                    <Link
                        href="/about"
                        onClick={toggleMenu}
                        className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        About
                    </Link>

                    <Link
                        href="/contract"
                        onClick={toggleMenu}
                        className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        Contract
                    </Link>

                    {/* Dark Mode Toggle */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-700">
                        <span className="text-sm font-medium">Dark Mode</span>
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            className="accent-black dark:accent-white scale-125"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mobilemenu;
