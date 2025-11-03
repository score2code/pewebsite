
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
                className="flex items-center text-sm font-semibold p-2 rounded-lg transition duration-150 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
                {/* {IconComponent && <IconComponent className="w-4 h-4 mr-1" />} */}
                <span className="hidden sm:inline">{title}</span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-20">
                    {children}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
