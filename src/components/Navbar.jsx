import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = ['About', 'Experience', 'Projects', 'Certifications', 'Skills', 'Contact'];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-card-blue bg-space-blue/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-neon-cyan tracking-wider drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                        SSP.
                    </span>
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-card-blue focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-card-blue rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {links.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className="block py-2 px-3 text-slate-300 hover:text-neon-cyan transition-colors duration-300 rounded md:bg-transparent md:p-0 press-effect"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
