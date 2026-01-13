import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { projects } from '../../data';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

interface WorkSectionProps {
    t: any;
    className?: string;
    id?: string;
}

// --- 1. SHUTTER TRANSITION COMPONENT ---
const ShutterTransition: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[100] flex pointer-events-none w-full h-full">
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ height: "100%" }}
                    animate={{ height: "0%" }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        delay: i * 0.05,
                    }}
                    className="w-[10%] bg-neutral-950 border-r border-white/5 last:border-r-0"
                />
            ))}
        </div>
    );
};

// --- 2. INTRO CARD (A Capa "Selected Work") ---
const IntroCard: React.FC = () => {
    return (
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-brand-silver text-neutral-950 z-0">
            <div className="text-center">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-blue mb-4 block">
                    ( PORTFOLIO ARCHIVE )
                </span>
                <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-6 justify-center">
                    <h2 className="text-[12vw] font-serif italic leading-none">
                        Selected
                    </h2>
                    <h2 className="text-[12vw] font-sans font-bold tracking-tighter leading-none uppercase">
                        Work
                    </h2>
                </div>
                <div className="mt-8 animate-bounce">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50">Scroll to Explore</span>
                </div>
            </div>
        </div>
    );
};

// --- 3. PROJECT CARD (STICKY STACKING) ---
// CORREÇÃO: Interface explícita para evitar erro de TS
interface StickyProjectProps {
    project: any;
    index: number;
    total: number;
}

const StickyProject: React.FC<StickyProjectProps> = ({
    project,
    index,
    total
}) => {
    const { language } = useLanguage();
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <div
            ref={cardRef}
            className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center border-t border-white/10 shadow-2xl"
            style={{
                zIndex: index + 1,
                backgroundColor: '#0a0a0a'
            }}
        >
            {/* Imagem de Fundo Full Screen */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src={project.coverImage}
                    alt={project.title[language]}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Conteúdo Centralizado */}
            <div className="relative z-10 text-center mix-blend-difference px-4">
                <motion.div style={{ y: yText }} className="flex flex-col items-center">

                    <span className="font-mono text-sm md:text-base text-brand-blue mb-4 block tracking-widest">
                        PROJECT 0{index + 1} / {total}
                    </span>

                    <h3 className="text-[12vw] leading-[0.8] text-white tracking-tighter uppercase font-sans font-bold">
                        {project.title[language]}
                    </h3>

                    <div className="flex items-center gap-4 mt-2">
                        <span className="font-serif italic text-3xl md:text-5xl text-white/80">
                            {project.category[language]}
                        </span>
                    </div>

                    <Link
                        to={`/work/${project.slug}`}
                        className="mt-12 group flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:bg-brand-blue hover:border-brand-blue transition-all duration-300"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-white">View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 text-white" />
                    </Link>

                </motion.div>
            </div>

            {/* Info Lateral */}
            <div className="absolute bottom-12 left-12 z-20 hidden md:block">
                <p className="text-white/40 text-xs font-mono max-w-xs leading-relaxed">
                    {project.description[language]}
                </p>
            </div>
            <div className="absolute bottom-12 right-12 z-20 hidden md:block">
                <span className="text-white/40 text-xs font-mono uppercase">
                    {project.year} — {project.client}
                </span>
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const WorkSection: React.FC<WorkSectionProps> = ({ t, className = "", id }) => {
    return (
        <section className={`relative bg-neutral-950 ${className}`} id={id}>

            <ShutterTransition />

            <div className="relative w-full">

                <IntroCard />

                {projects.map((project, index) => (
                    <StickyProject
                        key={project.id}
                        project={project}
                        index={index}
                        total={projects.length}
                    />
                ))}
            </div>

        </section>
    );
};

export default WorkSection;