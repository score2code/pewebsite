import React from 'react';
import { Home, BarChart3, BookOpen, Goal, Star, TrendingUp, Trophy } from 'lucide-react';
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
        <nav className="bg-light-50/80 dark:bg-dark-800/80 backdrop-blur-lg border-b border-light-300 dark:border-dark-600 sticky top-0 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo/Título Principal */}
                <Link
                    href="/"
                    className="text-2xl font-black text-purple-600 dark:text-purple-400 cursor-pointer hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                >
                    Palpites do dia
                </Link>

                {/* Menu de Navegação */}
                <div className="flex items-center space-x-2 md:space-x-4">
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
            </div>
        </nav>
    );
};

export default Header;
