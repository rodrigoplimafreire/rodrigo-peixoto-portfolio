import React from 'react';
import { motion } from 'framer-motion';
import { MaskedText } from '../ui/RevealEffects';

interface ExperienceSectionProps {
    t: any;
    className?: string;
    id?: string;
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const ExperienceItem = ({ item, index }: { item: any; index: number }) => (
    <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="group border-t border-white/10 py-10 md:py-12 transition-colors duration-500 hover:border-[#5271FF]/40"
    >
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">

            {/* Coluna Meta: Período */}
            <div className="md:w-1/4 shrink-0">
                <span className="font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-[#5271FF] transition-colors duration-300">
                    {item.period}
                </span>
            </div>

            {/* Coluna Conteúdo */}
            <div className="md:w-3/4">
                <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-white/90 group-hover:text-white transition-colors duration-300">
                    {item.role}
                    <span className="text-[#5271FF]"> · {item.company}</span>
                </h3>

                <p className="mt-3 text-sm md:text-base font-light text-white/40">
                    {item.context}
                </p>

                <ul className="mt-8 flex flex-col gap-4 max-w-3xl">
                    {item.bullets.map((bullet: string, i: number) => (
                        <li key={i} className="flex gap-4">
                            <span className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 group-hover:bg-[#5271FF] transition-colors duration-300" />
                            <span className="text-base md:text-lg font-light leading-relaxed text-white/60">
                                {bullet}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </motion.article>
);

const CredentialBlock = ({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) => (
    <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-white/10 pt-8"
    >
        <h4 className="font-mono text-xs uppercase tracking-widest text-[#5271FF] mb-6">
            {title}
        </h4>
        {children}
    </motion.div>
);

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ t, className = "", id }) => {
    const { experience, credentials } = t;

    return (
        <section
            className={`py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] text-white border-t border-white/10 relative z-10 ${className}`}
            id={id}
        >
            <div className="max-w-[1600px] mx-auto">

                {/* --- CABEÇALHO --- */}
                <div className="mb-16 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="font-mono text-xs uppercase tracking-widest text-[#5271FF] mb-8 block"
                    >
                        {experience.label}
                    </motion.span>

                    <MaskedText className="font-sans font-bold text-4xl md:text-6xl leading-tight tracking-tighter uppercase text-white">
                        {experience.title}
                    </MaskedText>
                </div>

                {/* --- TIMELINE DE EXPERIÊNCIA --- */}
                <div className="mb-24 md:mb-32">
                    {experience.items.map((item: any, index: number) => (
                        <ExperienceItem key={`${item.company}-${index}`} item={item} index={index} />
                    ))}
                </div>

                {/* --- CREDENCIAIS --- */}
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="font-mono text-xs uppercase tracking-widest text-[#5271FF] mb-12 block"
                >
                    {credentials.label}
                </motion.span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">

                    {/* Ensino e Mentoria */}
                    <CredentialBlock title={credentials.teachingTitle}>
                        <div className="flex flex-col gap-6">
                            {credentials.teaching.map((entry: string, i: number) => (
                                <p key={i} className="text-sm md:text-base font-light leading-relaxed text-white/60">
                                    {entry}
                                </p>
                            ))}
                        </div>
                    </CredentialBlock>

                    {/* Formação */}
                    <CredentialBlock title={credentials.educationTitle} delay={0.1}>
                        <ul className="flex flex-col gap-5">
                            {credentials.education.map((entry: { degree: string; school: string }, i: number) => (
                                <li key={i}>
                                    <span className="block text-sm md:text-base font-medium text-white/80">
                                        {entry.degree}
                                    </span>
                                    <span className="block text-xs md:text-sm font-light text-white/40 mt-1">
                                        {entry.school}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CredentialBlock>

                    {/* Certificações */}
                    <CredentialBlock title={credentials.certificationsTitle} delay={0.2}>
                        <ul className="flex flex-col gap-4">
                            {credentials.certifications.map((entry: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 group/cert">
                                    <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 group-hover/cert:bg-[#5271FF] transition-colors" />
                                    <span className="text-sm md:text-base font-light text-white/60">
                                        {entry}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CredentialBlock>

                    {/* Idiomas */}
                    <CredentialBlock title={credentials.languagesTitle} delay={0.3}>
                        <ul className="flex flex-col gap-5">
                            {credentials.languages.map((entry: { name: string; level: string }, i: number) => (
                                <li key={i}>
                                    <span className="block text-sm md:text-base font-medium text-white/80">
                                        {entry.name}
                                    </span>
                                    <span className="block text-xs md:text-sm font-light text-white/40 mt-1">
                                        {entry.level}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CredentialBlock>

                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
