import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data';

const Header: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();
    const t = content[language];
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Bloqueia scroll quando menu abre
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    useEffect(() => { setIsOpen(false); }, [location]);

    const handleScrollTo = (id: string) => {
        setIsOpen(false);
        // Pequeno delay para permitir o fechamento do menu antes do scroll
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    const navItems = [
        { id: 'about', label: t.nav.about },
        { id: 'work', label: t.nav.work },
        { id: 'experience', label: t.nav.experience },
        { id: 'contact', label: t.nav.contact },
    ];

    // Configuração da animação de troca de texto
    const textVariants = {
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 10, opacity: 0 },
        transition: { duration: 0.2, ease: "easeInOut" }
    };

    return (
        <>
            {/* HEADER TRANSPARENTE E ADAPTATIVO */}
            <header className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300 mix-blend-difference text-white">
                <div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-[1600px] mx-auto">

                    <Link to="/" className="group z-50 block">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8 font-medium">

                        {/* Botão de Idioma Animado */}
                        <button
                            onClick={toggleLanguage}
                            className="text-[10px] font-bold uppercase tracking-widest border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition-all min-w-[60px] overflow-hidden relative"
                        >
                            <AnimatePresence mode='wait'>
                                <motion.span
                                    key={language}
                                    variants={textVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="block"
                                >
                                    {language === 'en' ? 'PT-BR' : 'EN'}
                                </motion.span>
                            </AnimatePresence>
                        </button>

                        {/* Links de Navegação Animados */}
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScrollTo(item.id)}
                                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden flex items-center justify-center
                                    ${item.id === 'contact'
                                        ? 'bg-white text-[#0a0a0a] px-5 py-2.5 rounded-full hover:bg-[#5271FF] hover:text-white hover:scale-105 shadow-sm hover:shadow-[0_0_20px_rgba(82,113,255,0.4)]'
                                        : 'hover:text-[#5271FF] py-2.5'
                                    }
                                `}
                            >
                                <AnimatePresence mode='wait'>
                                    <motion.span
                                        key={language + item.id}
                                        variants={textVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        className="block"
                                    >
                                        {item.label}
                                    </motion.span>
                                </AnimatePresence>
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button onClick={toggleLanguage} className="text-[10px] font-bold uppercase tracking-widest border border-white px-2 py-1 rounded-full hover:bg-white hover:text-black transition-all min-w-[40px]">
                            <AnimatePresence mode='wait'>
                                <motion.span
                                    key={language}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="block"
                                >
                                    {language === 'en' ? 'PT' : 'EN'}
                                </motion.span>
                            </AnimatePresence>
                        </button>
                        <button onClick={() => setIsOpen(true)} className="p-1 focus:outline-none hover:text-[#5271FF] transition-colors">
                            <Menu className="w-8 h-8" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-neutral-950 z-[60] flex flex-col h-screen w-screen overflow-hidden text-white"
                    >
                        <div className="flex justify-between items-center h-20 px-6 border-b border-white/10 shrink-0">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <button onClick={() => setIsOpen(false)} className="p-1 text-white hover:text-[#5271FF] transition-colors">
                                <X className="w-8 h-8" strokeWidth={1.5} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-grow gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleScrollTo(item.id)}
                                    className={`font-serif text-5xl transition-all duration-300 capitalize 
                                        ${item.id === 'contact'
                                            ? 'bg-white text-[#0a0a0a] px-10 py-4 rounded-full mt-4 hover:bg-[#5271FF] hover:text-white shadow-lg'
                                            : 'text-white hover:text-[#5271FF]'
                                        }
                                    `}
                                >
                                    <AnimatePresence mode='wait'>
                                        <motion.span
                                            key={language + item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="block"
                                        >
                                            {item.label}
                                        </motion.span>
                                    </AnimatePresence>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;