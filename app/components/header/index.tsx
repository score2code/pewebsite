import React from 'react';
import { Home, BarChart3, BookOpen, Goal } from 'lucide-react';

const Header = ({ currentPath = '/' }) => {
    // Define os itens do menu e as rotas
    const navItems = [
        { name: 'Início', path: '/', icon: Home },
        { name: 'Futebol', path: '/futebol', icon: Goal },
        { name: 'Tênis', path: '/tenis', icon: BarChart3 },
        { name: 'Guias', path: '/guias', icon: BookOpen },
    ];

    return (
        <nav className="bg-gray-800 p-4 shadow-xl sticky top-0 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center">

                {/* Logo/Título Principal */}
                {/* Em Next.js: <Link href="/">...</Link> */}
                <a
                    href="/"
                    className="text-2xl font-black text-green-500 cursor-pointer hover:text-green-400 transition"
                >
                    Apostas.net
                </a>

                {/* Menu de Navegação */}
                <div className="flex space-x-4">
                    {navItems.map(item => {
                        const Icon = item.icon;
                        const isActive = currentPath === item.path; // Verifica se a rota é a atual

                        return (
                            // Em Next.js: <Link key={item.path} href={item.path}>...</Link>
                            <a
                                key={item.path}
                                href={item.path}
                                className={`flex items-center text-sm font-semibold p-2 rounded-lg transition duration-150
                                    ${isActive
                                        ? 'bg-green-600 text-white shadow-md'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                                }
                            >
                                <Icon className="w-4 h-4 mr-1" />
                                <span className="hidden sm:inline">{item.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Header;
