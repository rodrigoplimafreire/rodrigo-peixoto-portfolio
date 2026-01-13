import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <footer className="w-full bg-[#0a0a0a] border-t border-white/10 px-6 md:px-12 py-12 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">

                {/* Socials */}
                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/50">
                    <a href="https://www.linkedin.com/in/rodrigoplimafreire/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue hover:-translate-y-1 transition-all duration-300">LinkedIn</a>
                    <a href="https://www.instagram.com/rodrigopeixotolf/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue hover:-translate-y-1 transition-all duration-300">Instagram</a>
                    <a href="https://github.com/rodrigoplimafreire" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue hover:-translate-y-1 transition-all duration-300">GitHub</a>
                </div>

                {/* Credits */}
                <div className="text-left md:text-right">
                    <p className="text-white/30 text-[10px] md:text-xs leading-relaxed font-mono">
                        {t.contact.credits} <br />
                        © {new Date().getFullYear()} Rodrigo Peixoto. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;