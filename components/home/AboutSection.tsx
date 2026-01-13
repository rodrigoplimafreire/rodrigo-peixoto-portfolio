import React from 'react';
import { motion } from 'framer-motion';
import { CharReveal } from '../ui/RevealEffects';

interface AboutSectionProps {
    t: any;
    className?: string;
    id?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ t, className = "", id }) => {
    return (
        <section
            // CORRIGIDO: Forçando bg-[#D9D9D9] diretamente
            className={`py-32 px-6 md:px-24 relative z-10 border-t border-neutral-900/5 bg-[#D9D9D9] overflow-hidden ${className}`}
            id={id}
        >

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-12 overflow-hidden">
                    <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        // CORRIGIDO: Forçando text-[#5271FF] (Azul) para o label
                        className="text-[#5271FF] font-mono text-xs block tracking-widest"
                    >
                        {t.about.label}
                    </motion.span>
                </div>

                <div className="text-3xl md:text-6xl font-light leading-[1.3] text-neutral-900">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {t.about.manifesto.map((item: string | { text: string, style: string }, i: number) => {

                            if (typeof item === 'string') {
                                return (
                                    <React.Fragment key={i}>
                                        {item.split(" ").map((word, wIndex) => (
                                            <CharReveal key={`${i}-${wIndex}`} delay={i * 0.1 + (wIndex * 0.05)}>
                                                {word}
                                            </CharReveal>
                                        ))}
                                    </React.Fragment>
                                );
                            }
                            else {
                                let cssClass = "";
                                // Italic mantido escuro para leitura no fundo claro
                                if (item.style === 'italic') cssClass = "font-serif italic text-neutral-900";

                                // CORRIGIDO: Highlight agora usa text-[#5271FF] (Azul)
                                if (item.style === 'highlight') cssClass = "text-[#5271FF] font-medium";

                                return (
                                    <React.Fragment key={i}>
                                        {item.text.split(" ").map((word, wIndex) => (
                                            <CharReveal key={`${i}-${wIndex}`} delay={i * 0.1 + (wIndex * 0.05)} className={cssClass}>
                                                {word}
                                            </CharReveal>
                                        ))}
                                    </React.Fragment>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;