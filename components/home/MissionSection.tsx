import React from 'react';
import { motion } from 'framer-motion';
import { MaskedText } from '../ui/RevealEffects';

interface MissionSectionProps {
    t: any;
    className?: string;
    id?: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({ t, className = "", id }) => {
    return (
        <section className={`py-24 md:py-32 px-6 md:px-24 bg-brand-silver text-neutral-900 ${className}`} id={id}>

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

                {/* Coluna Esquerda - Título Sticky */}
                <div className="md:col-span-4 relative">
                    <div className="sticky top-32">
                        <MaskedText className="font-sans font-bold text-4xl md:text-5xl leading-tight tracking-tighter uppercase text-neutral-950 mb-8">
                            {t.mission.title}
                        </MaskedText>

                        {/* Linha decorativa */}
                        <div className="w-12 h-1 bg-brand-blue mt-2 hidden md:block"></div>
                    </div>
                </div>

                {/* Coluna Direita - Texto Corrido */}
                <div className="md:col-span-8 flex flex-col gap-12">
                    {t.mission.paragraphs.map((paragraph: string, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            {/* Primeiro parágrafo como "Lead" (maior destaque) */}
                            <p className={`
                                ${index === 0
                                    ? "text-2xl md:text-4xl font-light leading-snug text-neutral-900"
                                    : "text-lg md:text-xl font-normal leading-relaxed text-neutral-700 max-w-3xl"
                                }
                            `}>
                                {paragraph}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default MissionSection;