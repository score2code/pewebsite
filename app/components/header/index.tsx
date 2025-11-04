'use client';

import React, { useState } from 'react';
import { Home, BarChart3, BookOpen, Goal, Star, TrendingUp, Trophy, Menu, X } from 'lucide-react';
import Link from 'next/link';
import DropdownMenu from '@/app/components/ui/dropdown-menu';
import { ThemeSwitcher } from '@/app/components/theme-switcher';

interface DropdownItem {
    name: string;
    path: string;
}

interface LinkNavItem {
    name: string;
    path: string;
    icon: string;
    type: 'link';
}

interface DropdownNavItem {
    name: string;
    icon: string;
    type: 'dropdown';
    items: DropdownItem[];
}

type NavItem = LinkNavItem | DropdownNavItem;

const Header = ({ currentPath = '/' }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Define os itens do menu e as rotas
    const navItems: NavItem[] = [
        { name: 'Início', path: '/', icon: 'Home', type: 'link' },
        {
            name: 'Palpites', icon: 'Goal', type: 'dropdown', items: [
                { name: 'Futebol', path: '/futebol' },
                { name: 'Futebol Americano', path: '/futebol-americano' },
            ]
        },
        {
            name: 'Conteúdo', icon: 'BookOpen', type: 'dropdown', items: [
                { name: 'Guias', path: '/guias' },
                { name: 'Reviews', path: '/reviews' },
            ]
        },
        {
            name: 'Ferramentas', icon: 'BarChart3', type: 'dropdown', items: [
                { name: 'Odds', path: '/odds' },
                { name: 'Estatísticas', path: '/estatisticas' },
            ]
        },
        {
            name: 'Campeonatos', icon: 'Trophy', type: 'dropdown', items: [
                // Brasil
                { name: 'Brasileirão Série A', path: '/campeonatos/brasileirao-serie-a' },
                { name: 'Brasileirão Série B', path: '/campeonatos/brasileirao-serie-b' },
                { name: 'Copa do Brasil', path: '/campeonatos/copa-do-brasil' },
                // Europa
                { name: 'Champions League', path: '/campeonatos/champions-league' },
                { name: 'Premier League', path: '/campeonatos/premier-league' },
                { name: 'La Liga', path: '/campeonatos/la-liga' },
                { name: 'Bundesliga', path: '/campeonatos/bundesliga' },
                { name: 'Serie A', path: '/campeonatos/serie-a' },
                // América do Sul
                { name: 'Copa Libertadores', path: '/campeonatos/libertadores' },
                { name: 'Copa Sul-Americana', path: '/campeonatos/sul-americana' },
            ]
        }
    ];

    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'Home': return <Home className="w-4 h-4 mr-1" />;
            case 'BarChart3': return <BarChart3 className="w-4 h-4 mr-1" />;
            case 'BookOpen': return <BookOpen className="w-4 h-4 mr-1" />;
            case 'Goal': return <Goal className="w-4 h-4 mr-1" />;
            case 'Star': return <Star className="w-4 h-4 mr-1" />;
            case 'TrendingUp': return <TrendingUp className="w-4 h-4 mr-1" />;
            case 'Trophy': return <Trophy className="w-4 h-4 mr-1" />;
            default: return null;
        }
    };

    return (
        <nav className="bg-light-50/80 dark:bg-dark-800/80 backdrop-blur-lg border-b border-light-300 dark:border-dark-600 sticky top-0 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo/Título Principal */}
                <Link
                    href="/"
                    className="text-2xl font-black text-purple-600 dark:text-purple-400 cursor-pointer hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                >
                    Palpites do dia
                </Link>

                {/* Menu de Navegação Desktop */}
                <div className="hidden md:flex items-center space-x-2 md:space-x-4">
                    {navItems.map((item, index) => {
                        if (item.type === 'link') {
                            const isActive = currentPath === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`flex items-center text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300
                                        ${isActive
                                            ? 'bg-purple-600 text-white dark:bg-purple-500 dark:text-white shadow-lg'
                                            : 'text-dark-900 dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-700'}`
                                    }
                                >
                                    {renderIcon(item.icon)}
                                    <span className="hidden sm:inline">{item.name}</span>
                                </Link>
                            );
                        } else if (item.type === 'dropdown') {
                            return (
                                <DropdownMenu key={item.name} title={item.name}>
                                    {item.items?.map(subItem => (
                                        <Link key={subItem.path} href={subItem.path}>
                                            <span className="block px-4 py-2 text-sm text-dark-900 dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-700 transition-colors duration-300">
                                                {subItem.name}
                                            </span>
                                        </Link>
                                    ))}
                                </DropdownMenu>
                            );
                        }
                        return null;
                    })}
                    <div className="border-l border-light-300 dark:border-dark-600 pl-2 md:pl-4">
                        <ThemeSwitcher />
                    </div>
                </div>

                {/* Botão do Menu Mobile */}
                <div className="md:hidden flex items-center">
                    <ThemeSwitcher />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="ml-2 p-2 rounded-md text-dark-900 dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Menu Mobile Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[64px] left-0 w-full bg-light-50/95 dark:bg-dark-800/95 backdrop-blur-lg border-b border-light-300 dark:border-dark-600 pb-4 shadow-lg">
                    <div className="flex flex-col items-start px-4 py-2 space-y-2">
                        {navItems.map((item) => {
                            if (item.type === 'link') {
                                const isActive = currentPath === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={`flex items-center w-full text-base font-semibold px-3 py-2 rounded-lg transition-all duration-300
                                            ${isActive
                                                ? 'bg-purple-600 text-white dark:bg-purple-500 dark:text-white shadow-lg'
                                                : 'text-dark-900 dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-700'}`
                                        }
                                        onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar
                                    >
                                        {renderIcon(item.icon)}
                                        <span>{item.name}</span>
                                    </Link>
                                );
                            } else if (item.type === 'dropdown') {
                                return (
                                    <div key={item.name} className="w-full">
                                        <DropdownMenu title={item.name} isMobile={true} closeMobileMenu={() => setIsMobileMenuOpen(false)}>
                                            {item.items?.map(subItem => (
                                                <Link key={subItem.path} href={subItem.path}>
                                                    <span
                                                        className="block px-4 py-2 text-sm text-dark-900 dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-700 transition-colors duration-300"
                                                        onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar
                                                    >
                                                        {subItem.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </DropdownMenu>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
