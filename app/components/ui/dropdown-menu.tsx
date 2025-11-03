
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownMenuProps {
    title: string;
    children: React.ReactNode;
    // iconName?: string; // Name of the Lucide icon component as a string
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    // const IconComponent = iconName ? iconMap[iconName as keyof typeof iconMap] : null;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300
                    text-dark-900 dark:text-light-100
                    hover:bg-light-200 dark:hover:bg-dark-700
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
                <span className="hidden sm:inline">{title}</span>
                <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}
                    text-purple-600 dark:text-purple-400`}
                />
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-light-50 dark:bg-dark-800
                    rounded-lg border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-lg
                    py-2 z-20 transform origin-top-left transition-all duration-200">
                    {children}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
