import React from 'react';
import { motion } from 'framer-motion';

// Interface para componentes que aceitam filhos genéricos (ReactNode)
interface BaseRevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

// Interface específica para o CharReveal que precisa de texto (string) para quebrar
interface CharRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

// 1. Texto com Máscara Simples
export const MaskedText: React.FC<BaseRevealProps> = ({ children, delay = 0, className = "" }) => {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    );
};

// 2. Char Reveal (Efeito "Aust" REAL: Letra por Letra)
export const CharReveal: React.FC<CharRevealProps> = ({ children, className = "", delay = 0 }) => {
    // Garante que children seja string antes de dar split
    const text = typeof children === 'string' ? children : String(children);
    const chars = text.split("");

    return (
        <span className={`inline-block whitespace-nowrap ${className}`}>
            {chars.map((char, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                    <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: delay + (i * 0.015),
                            ease: [0.33, 1, 0.68, 1]
                        }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

// 3. Efeito de Imagem "Fatiada" (Sliced)
export const SlicedImage: React.FC = () => {
    const slices = 12;
    return (
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-25 pointer-events-none">
            <div className="relative w-full h-full hidden md:flex">
                {[...Array(slices)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: i % 2 === 0 ? "-100%" : "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 1.5, delay: 0.2 + (i * 0.05), ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 h-full overflow-hidden relative border-r border-white/5 last:border-r-0"
                    >
                        <img
                            src="/hero-portrait.jpg"
                            className="absolute w-[100vw] max-w-none h-full object-cover grayscale"
                            style={{ left: `calc(-${i} * (100vw / ${slices}))` }}
                            alt="Background Portrait"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};