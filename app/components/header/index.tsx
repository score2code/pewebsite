import React from 'react';
import { Home, BarChart3, BookOpen, Goal, Star, TrendingUp, Trophy } from 'lucide-react';
import Link from 'next/link';
import DropdownMenu from '@/app/components/ui/dropdown-menu';
import { ThemeSwitcher } from '@/app/components/theme-switcher';

const Header = ({ currentPath = '/' }) => {
    // Define os itens do menu e as rotas
    const navItems = [
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
        { name: 'Campeonatos', path: '/campeonatos/brasileirao-serie-a', icon: 'Trophy', type: 'link' }, // Example for a specific league
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
        <nav className="bg-white dark:bg-gray-800 p-4 shadow-xl sticky top-0 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center">

                {/* Logo/Título Principal */}
                <Link
                    href="/"
                    className="text-2xl font-black text-green-500 cursor-pointer hover:text-green-400 transition"
                >
                    Palpite Esportivo
                </Link>

                {/* Menu de Navegação */}
                <div className="flex space-x-4">
                    {navItems.map((item, index) => {
                        if (item.type === 'link') {
                            const isActive = currentPath === item.path; // Verifica se a rota é a atual
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`flex items-center text-sm font-semibold p-2 rounded-lg transition duration-150
                                        ${isActive
                                            ? 'bg-green-600 text-white shadow-md'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}`
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
                                            <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                                                {subItem.name}
                                            </span>
                                        </Link>
                                    ))}
                                </DropdownMenu>
                            );
                        }
                        return null;
                    })}
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
};

export default Header;
