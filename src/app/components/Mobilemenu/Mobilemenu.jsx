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
                className="p-2 rounded-md bg-black dark:bg-white text-white dark:text-black focus:outline-none"
                aria-label="Toggle mobile menu"
            >
                {menuOpen ? <RxCross2 size={24} /> : <MdMenu size={24} />}
            </button>

            {/* Slide-down Menu */}
            {menuOpen && (
                <div className="fixed top-16 left-4 right-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-2xl rounded-xl px-6 py-6 space-y-6 animate-slideDown">
                    <nav className="flex flex-col space-y-4">
                        {[
                            { href: "/components/Blogs", label: "📰 News" },
                            { href: "/service", label: "🛠 Services" },
                            { href: "/about", label: "👤 About" },
                            { href: "/contract", label: "✉️ Contact" },
                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={toggleMenu}
                                className="text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Dark Mode Toggle */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-700">
                        <span className="text-sm font-medium">🌙 Dark Mode</span>
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
