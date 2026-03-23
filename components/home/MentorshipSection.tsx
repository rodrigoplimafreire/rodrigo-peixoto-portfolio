import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const MentorshipSection: React.FC = () => {
    const { language } = useLanguage();

    const texts = {
        en: {
            label: "( MENTORSHIP & COMMUNITY )",
            statement: "IN A WORLD FILLED WITH GENERIC INTERFACES, I HELP *IMG1* DESIGNERS UNCOVER THEIR POTENTIAL AND SCALE THEIR CAREERS WITH CODE, EMPATHY *IMG2* AND STRATEGY.",
        },
        pt: {
            label: "( MENTORIA & COMUNIDADE )",
            statement: "EM UM MUNDO CHEIO DE INTERFACES GENÉRICAS, EU AJUDO *IMG1* DESIGNERS A DESCOBRIR SEU POTENCIAL E ESCALAR SUAS CARREIRAS COM CÓDIGO, EMPATIA *IMG2* E ESTRATÉGIA.",
        }
    };

    const t = texts[language];
    const words = t.statement.split(' ');

    // --- Animações do Framer Motion Refinadas ---
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 }
        }
    };

    const wordAnim = {
        hidden: { opacity: 0, y: 50, rotate: 3 },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="relative w-full py-24 lg:py-40 bg-[#0a0a0a] text-white border-t border-white/10 z-10 overflow-hidden">

            {/* Container Principal Dividido em 2 Colunas */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                {/* COLUNA ESQUERDA: Tipografia Animada */}
                <div className="lg:col-span-7">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="font-mono text-xs uppercase tracking-widest text-[#5271FF] mb-8 block"
                    >
                        {t.label}
                    </motion.span>

                    <motion.h2
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-[10vw] md:text-[6vw] lg:text-[3.5vw] font-sans font-bold leading-[1.2] tracking-tighter uppercase"
                    >
                        {words.map((word, index) => {
                            if (word === '*IMG1*') {
                                return (
                                    <motion.span
                                        key={index}
                                        variants={wordAnim}
                                        whileHover={{ scale: 1.15, rotate: -2, transition: { duration: 0.3 } }}
                                        className="inline-block align-middle overflow-hidden rounded-full w-[14vw] h-[7vw] md:w-[8vw] md:h-[4vw] lg:w-[6vw] lg:h-[3vw] bg-gradient-to-r from-[#5271FF] to-purple-600 shadow-lg mx-2 mb-2 lg:mb-3 cursor-pointer group"
                                    >
                                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="UX Mentorship" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300" />
                                    </motion.span>
                                );
                            }
                            if (word === '*IMG2*') {
                                return (
                                    <motion.span
                                        key={index}
                                        variants={wordAnim}
                                        whileHover={{ scale: 1.15, rotate: 2, transition: { duration: 0.3 } }}
                                        className="inline-block align-middle overflow-hidden rounded-full w-[14vw] h-[7vw] md:w-[8vw] md:h-[4vw] lg:w-[6vw] lg:h-[3vw] bg-neutral-800 shadow-lg mx-2 mb-2 lg:mb-3 border border-white/20 cursor-pointer group"
                                    >
                                        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" alt="Strategy" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.span>
                                );
                            }
                            return (
                                <motion.span key={index} variants={wordAnim} className="inline-block mr-[2%] mb-2 lg:mb-3 text-[#D9D9D9]">
                                    {word}
                                </motion.span>
                            );
                        })}
                    </motion.h2>
                </div>

                {/* COLUNA DIREITA: Widget ADPList (Glassmorphism) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full max-w-[500px] h-[496px] p-1.5 bg-white/5 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(82,113,255,0.15)] border border-white/10 overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative z-10">
                            <iframe
                                src="https://adplist.org/widgets/reviews?src=rodrigo-peixoto"
                                title="ADPList Reviews"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                className="border-0 w-full h-full"
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default MentorshipSection;