import React from 'react';
import { motion } from 'framer-motion';
import { MaskedText, SlicedImage } from '../ui/RevealEffects';

interface HeroSectionProps {
    t: any;
    className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ t, className = "" }) => {
    return (
        <section className={`h-screen w-full relative overflow-hidden flex flex-col justify-center items-center z-10 border-b border-white/5 ${className}`}>

            {/* BACKGROUND DESKTOP: Mantém o efeito SlicedImage */}
            <div className="hidden md:block absolute inset-0 z-0">
                <SlicedImage />
            </div>

            {/* BACKGROUND MOBILE: Imagem estática com tratamento */}
            <div className="md:hidden absolute inset-0 z-0">
                <img
                    src="/hero-portrait.jpg"
                    alt="Rodrigo Peixoto Background"
                    className="w-full h-full object-cover opacity-50 grayscale"
                />
                {/* Overlay para garantir legibilidade do texto branco */}
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/50 to-neutral-950/80" />
            </div>

            <div className="relative z-20 text-center flex flex-col items-center justify-center mix-blend-exclusion">
                <MaskedText delay={0.1}>
                    <h1 className="font-sans font-black text-[18vw] leading-[1.2] tracking-tighter text-white uppercase">
                        {t.hero.lastName}
                    </h1>
                </MaskedText>
                <div className="relative w-full -mt-[2vw] md:-mt-[4vw]">
                    <MaskedText delay={0.3}>
                        <h2 className="font-serif italic font-light text-[8vw] leading-[1.3] text-white text-right pr-[10%]">
                            {t.hero.firstName}
                        </h2>
                    </MaskedText>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
                {/* FORÇANDO A COR AZUL COM HEXADECIMAL DIRETO */}
                <span className="text-[10px] uppercase tracking-widest text-[#5271FF] mb-2 font-bold whitespace-pre-line text-center">
                    {t.hero.role}
                </span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-[9px] uppercase tracking-widest text-white/30">{t.hero.scroll}</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;