import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUp, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
    t: any;
    className?: string;
    id?: string;
}

// --- SUB-COMPONENT: REAL TIME CLOCK ---
const LocalTime = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'America/Fortaleza',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };
            setTime(now.toLocaleTimeString('en-US', options));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return <span>{time} BRT</span>;
};

// --- SUB-COMPONENT: MAGNETIC BUTTON ---
const MagneticButton = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        x.set(clientX - center.x);
        y.set(clientY - center.y);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className="cursor-pointer relative z-10"
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

// --- MAIN COMPONENT ---
const ContactSection: React.FC<ContactSectionProps> = ({ t, className = "", id }) => {
    const [copied, setCopied] = useState(false);
    const email = "rodrigoplimafreire@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        // ATUALIZADO: bg-[#0a0a0a] -> bg-brand-silver | border-white/10 -> border-neutral-900/5
        <section className={`min-h-[90vh] flex flex-col justify-between py-24 px-6 md:px-12 bg-brand-silver border-t border-neutral-900/5 relative overflow-hidden ${className}`} id={id}>

            {/* Background Glow (Ajustado para ser sutil no fundo claro) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

            {/* TOP BAR */}
            {/* ATUALIZADO: text-neutral-500 mantido (funciona bem no cinza) */}
            <div className="w-full flex justify-between items-start text-xs font-mono uppercase tracking-widest text-neutral-500 relative z-20">
                <div className="flex flex-col gap-2">
                    <span className="text-brand-blue flex items-center gap-2">
                        <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                        Open for Work
                    </span>
                    {/* ATUALIZADO: text-white/50 -> text-neutral-400 */}
                    <span className="text-neutral-400"><LocalTime /></span>
                </div>
                {/* ATUALIZADO: hover:text-white -> hover:text-brand-blue */}
                <button onClick={handleScrollTop} className="group flex items-center gap-2 hover:text-brand-blue transition-colors">
                    Back to Top <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>

            {/* CENTER ACTION (MAGNETIC) */}
            <div className="flex-grow flex flex-col justify-center items-center relative z-20">
                {/* ATUALIZADO: text-white/40 -> text-neutral-400 */}
                <span className="text-sm md:text-base font-light text-neutral-400 mb-8 tracking-widest">
                    {t.contact.idea}
                </span>

                <MagneticButton onClick={handleCopy}>
                    <div className="group relative">
                        <h2 className="text-[12vw] md:text-[10vw] font-serif italic leading-none text-neutral-900 transition-all duration-500 group-hover:text-brand-blue">
                            {copied ? "Copied!" : "Let's Talk"}
                        </h2>

                        {/* Botão Circular Flutuante (Action) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-brand-blue rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 origin-center pointer-events-none shadow-xl">
                            {copied ? (
                                <Check className="w-8 h-8 md:w-10 md:h-10 text-white" />
                            ) : (
                                <div className="flex flex-col items-center">
                                    <Copy className="w-6 h-6 md:w-8 md:h-8 text-white mb-1" />
                                    <span className="text-[10px] uppercase font-bold text-white tracking-widest">Copy Email</span>
                                </div>
                            )}
                        </div>
                    </div>
                </MagneticButton>

                {/* Fallback link */}
                {/* ATUALIZADO: Cores ajustadas para fundo claro. Adicionado 'text-center' para mobile. */}
                <a
                    href={`mailto:${email}`}
                    className="mt-8 text-neutral-400 hover:text-brand-blue transition-colors border-b border-neutral-300 hover:border-brand-blue pb-1 text-sm text-center"
                >
                    or send an email to {email}
                </a>
            </div>

        </section>
    );
};

export default ContactSection;