'use client';

import React, { useState, useEffect } from 'react';
import logo from '@/public/zakat.svg';
import Image from 'next/image';

interface NavItem {
    name: string;
    href: string;
    subItems?: NavItem[];
}

const navItems: NavItem[] = [
    { name: 'Wallet', href: '/' },
    { name: 'What We Do', href: '/about' },
    {
        name: 'Outreach',
        href: '/outreach',
        subItems: [
            { name: 'Membership', href: '/join/membership' },
            { name: 'Volunteer', href: '/join/volunteer' },
        ],
    },
    {
        name: 'Community',
        href: '/tournaments',
        subItems: [
            { name: 'Upcoming', href: '/tournaments/upcoming' },
            { name: 'Past', href: '/tournaments/past' },
        ],
    },
];

export const NavBar: React.FC = () => {
    const [active, setActive] = useState<string>('');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [openSublist, setOpenSublist] = useState<string | null>(null);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const currentItem = navItems.find((item) => item.href === currentPath);
        if (currentItem) setActive(currentItem.name);
    }, []);

    const handleNavClick = (href: string, name: string) => {
        setActive(name);
        window.location.href = href;
    };

    const toggleSublist = (name: string) => {
        setOpenSublist((prev) => (prev === name ? null : name));
    };

    return (
        <nav className="w-full text-white p-4 lg:px-12 flex justify-between items-center">
            <Image
                src={logo.src}
                alt="The Wordsmiths"
                className="cursor-pointer"
                onClick={() => handleNavClick('/', 'Home')}
                height={150}
                width={150}
            />

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-8 items-center">
                {navItems.map((item) => (
                    <li key={item.name} className="relative group">
                        <div
                            className={`cursor-pointer ${
                                active === item.name ? 'underline underline-offset-4' : ''
                            }`}
                            onClick={() => handleNavClick(item.href, item.name)}
                        >
                            {item.name}
                        </div>
                        {item.subItems && (
                            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-lg shadow-lg p-4">
                                {item.subItems.map((subItem) => (
                                    <li
                                        key={subItem.name}
                                        className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => handleNavClick(subItem.href, subItem.name)}
                                    >
                                        {subItem.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            <button className='bg-orange-500' onClick={
                () => handleNavClick('/donate', 'Donate')
            }>
                Donate Now
            </button>

            {/* Mobile Nav Toggle */}
            <button
                className="md:hidden focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#7B0000] p-6 rounded-lg z-10">
                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <li key={item.name} className="relative">
                                <div
                                    className={`cursor-pointer ${
                                        active === item.name ? 'underline underline-offset-4' : ''
                                    }`}
                                    onClick={() => handleNavClick(item.href, item.name)}
                                >
                                    {item.name}
                                </div>
                                {item.subItems && (
                                    <>
                                        <button
                                            className="ml-2"
                                            onClick={() => toggleSublist(item.name)}
                                        >
                                            {openSublist === item.name ? '-' : '+'}
                                        </button>
                                        <ul
                                            className={`pl-4 mt-2 ${
                                                openSublist === item.name ? '' : 'hidden'
                                            }`}
                                        >
                                            {item.subItems.map((subItem) => (
                                                <li
                                                    key={subItem.name}
                                                    className="py-2 cursor-pointer hover:bg-orange-100"
                                                    onClick={() =>
                                                        handleNavClick(subItem.href, subItem.name)
                                                    }
                                                >
                                                    {subItem.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};
