import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { MaskedText } from '../ui/RevealEffects';

interface ServicesSectionProps {
    t: any;
    className?: string;
    id?: string;
}

// Componente Individual do Serviço (Accordion Item)
const ServiceItem = ({ item, index, isOpen, onClick }: any) => {
    return (
        <div
            onClick={onClick}
            className="group border-t border-white/10 cursor-pointer relative overflow-hidden transition-colors duration-500 hover:bg-white/5"
        >
            {/* Linha de progresso no hover (Barra Azul) */}
            <motion.div
                className="absolute top-0 left-0 h-[1px] bg-[#5271FF] w-full origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: "circOut" }}
            />

            <div className="py-12 px-4 md:px-0 flex flex-col md:flex-row md:items-center justify-between gap-8">

                {/* Cabeçalho do Item (Sempre Visível) */}
                <div className="flex items-baseline gap-8 md:gap-16">
                    <span className={`font-mono text-sm transition-colors duration-300 ${isOpen ? 'text-[#5271FF]' : 'text-white/30 group-hover:text-white'}`}>
                        0{index + 1}
                    </span>
                    <h3 className={`text-4xl md:text-6xl font-bold tracking-tighter transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                        {item.title}
                    </h3>
                </div>

                {/* Ícone de Controle (+ / -) */}
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#5271FF] border-[#5271FF] text-white rotate-180' : 'border-white/20 text-white/50 group-hover:border-white group-hover:text-white'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </div>

            {/* Conteúdo Expandido (Detalhes) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-12 md:pl-[calc(2rem+16px)] lg:pl-[calc(4rem+16px)] flex flex-col md:flex-row gap-12">

                            {/* Descrição */}
                            <div className="md:w-1/2">
                                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-md">
                                    {item.description}
                                </p>
                            </div>

                            {/* Lista de Tags (Grid) */}
                            <div className="md:w-1/2">
                                <span className="block text-xs font-mono text-white/30 mb-6 uppercase tracking-widest">Core skills</span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {item.details.map((detail: string, i: number) => (
                                        <div key={i} className="flex items-center gap-3 group/tag">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/tag:bg-[#5271FF] transition-colors" />
                                            <span className="text-sm text-white/80 group-hover/tag:text-white transition-colors">
                                                {detail}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ t, className = "", id }) => {
    // Estado para controlar qual item está aberto (null = nenhum)
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`py-32 px-6 md:px-12 bg-[#0a0a0a] ${className}`} id={id}>
            <div className="max-w-[1600px] mx-auto">

                {/* Cabeçalho da Seção */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[#5271FF] font-mono text-xs mb-6 block tracking-widest">
                            {t.services.label}
                        </span>
                        <MaskedText className="font-serif italic text-5xl md:text-7xl text-white leading-[1.2]">
                            {t.services.title}
                        </MaskedText>
                    </div>
                    <p className="text-white/50 text-sm md:text-base max-w-xs font-mono leading-relaxed text-right md:text-left self-end">
                        {t.services.intro}
                    </p>
                </div>

                {/* Lista Interativa */}
                <div className="flex flex-col">
                    {t.services.items.map((item: any, i: number) => (
                        <ServiceItem
                            key={i}
                            item={item}
                            index={i}
                            isOpen={openIndex === i}
                            onClick={() => handleToggle(i)}
                        />
                    ))}
                    {/* Linha final para fechar a tabela visualmente */}
                    <div className="border-t border-white/10" />
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;