import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../../data';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { ProjectDomain } from '../../types';

interface WorkSectionProps {
    t: any;
    className?: string;
    id?: string;
}

// --- 1. SHUTTER TRANSITION ---
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

// --- 2. FILTER DOCK (Componente de UI Puro) ---
interface FilterDockProps {
    currentFilter: 'all' | ProjectDomain;
    setFilter: (filter: 'all' | ProjectDomain) => void;
    filters: { key: string; label: string }[];
}

const FilterDock: React.FC<FilterDockProps> = ({ currentFilter, setFilter, filters }) => {
    return (
        <div className="pointer-events-auto bg-[#E5E5E5] p-1.5 rounded-full shadow-xl border border-white/20 backdrop-blur-sm flex flex-wrap justify-center gap-1 md:gap-2 max-w-[90vw]">
            {filters.map((f) => (
                <button
                    key={f.key}
                    onClick={() => setFilter(f.key as any)}
                    className={`
                        relative px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-widest transition-all duration-300
                        ${currentFilter === f.key
                            ? 'text-white'
                            : 'text-neutral-500 hover:text-neutral-900'
                        }
                    `}
                >
                    {/* Fundo Preto Ativo */}
                    {currentFilter === f.key && (
                        <motion.div
                            layoutId="activePill"
                            className="absolute inset-0 bg-neutral-950 rounded-full shadow-md"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}

                    <span className="relative z-10 font-bold whitespace-nowrap">
                        {f.label}
                    </span>
                </button>
            ))}
        </div>
    );
};

// --- 3. INTRO CARD (Capa com Filtros Integrados) ---
interface IntroCardProps {
    currentFilter: 'all' | ProjectDomain;
    setFilter: (filter: 'all' | ProjectDomain) => void;
    filters: { key: string; label: string }[];
}

const IntroCard: React.FC<IntroCardProps> = ({ currentFilter, setFilter, filters }) => {
    return (
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-brand-silver text-neutral-950 z-0 px-4">
            <div className="text-center w-full flex flex-col items-center">

                {/* Label Superior */}
                <span className="font-mono text-xs uppercase tracking-widest text-brand-blue mb-8 block">
                    ( PORTFOLIO ARCHIVE )
                </span>

                {/* Título Gigante */}
                <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-6 justify-center mb-16">
                    <h2 className="text-[12vw] font-serif italic leading-none">
                        Selected
                    </h2>
                    <h2 className="text-[12vw] font-sans font-bold tracking-tighter leading-none uppercase">
                        Work
                    </h2>
                </div>

                {/* Barra de Filtros */}
                <div className="mt-4">
                    <FilterDock
                        currentFilter={currentFilter}
                        setFilter={setFilter}
                        filters={filters}
                    />
                </div>

            </div>
        </div>
    );
};

// --- 4. PROJECT CARD (Sticky Stacking) ---
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
            {/* Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src={project.coverImage}
                    alt={project.title[language]}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                    style={project.coverImagePosition ? { objectPosition: project.coverImagePosition } : undefined}
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 text-center mix-blend-difference px-4 w-full max-w-4xl mx-auto">
                <motion.div style={{ y: yText }} className="flex flex-col items-center">

                    <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-mono uppercase tracking-widest mb-6 border border-white/10">
                        {project.category[language]}
                    </span>

                    <span className="font-mono text-sm md:text-base text-brand-blue mb-4 block tracking-widest">
                        PROJECT 0{index + 1}
                    </span>

                    <h3 className="text-[10vw] md:text-[8vw] leading-[0.9] text-white tracking-tighter uppercase font-sans font-bold mb-2">
                        {project.title[language]}
                    </h3>

                    <p className="font-serif italic text-xl md:text-3xl text-white/80 max-w-xl mx-auto leading-relaxed hidden md:block">
                        {project.services[language]}
                    </p>

                    <Link
                        to={`/work/${project.slug}`}
                        className="mt-12 group flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:bg-brand-blue hover:border-brand-blue transition-all duration-300 bg-black/20 backdrop-blur-sm"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-white">
                            {language === 'en' ? 'View Project' : 'Ver Projeto'}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white" />
                    </Link>

                </motion.div>
            </div>

            {/* Infos Laterais */}
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
    const [filter, setFilter] = useState<'all' | ProjectDomain>('all');

    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true;
        return project.domain === filter;
    });

    // Filtros reordenados para priorizar UX
    const filters = [
        { key: 'all', label: t.work.filters.all },
        { key: 'ux', label: t.work.filters.ux },
        { key: 'dev', label: t.work.filters.dev },
        { key: 'art', label: t.work.filters.art },
    ];

    return (
        <section className={`relative bg-neutral-950 ${className}`} id={id}>
            <ShutterTransition />

            <div className="relative w-full">

                <IntroCard
                    currentFilter={filter}
                    setFilter={setFilter}
                    filters={filters}
                />

                <div className="relative">
                    {filteredProjects.length === 0 && (
                        <div className="h-screen sticky top-0 flex items-center justify-center bg-[#0a0a0a] z-10 border-t border-white/10">
                            <span className="text-neutral-500 font-mono uppercase tracking-widest px-4 text-center">
                                No projects found in this category.
                            </span>
                        </div>
                    )}

                    {filteredProjects.map((project, index) => (
                        <StickyProject
                            key={project.id}
                            project={project}
                            index={index}
                            total={filteredProjects.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkSection;