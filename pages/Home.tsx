import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { content } from '../data';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

// Importação das Seções Separadas
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import MissionSection from '../components/home/MissionSection';
import WorkSection from '../components/home/WorkSection';
import ServicesSection from '../components/home/ServicesSection';
import ExperienceSection from '../components/home/ExperienceSection';
import MentorshipSection from '../components/home/MentorshipSection'; // <-- Import adicionado aqui
import ContactSection from '../components/home/ContactSection';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];
  const containerRef = useRef(null);

  // Hook de scroll necessário para animações globais
  useScroll({ target: containerRef });

  return (
    <div className="w-full bg-[#0a0a0a] text-[#f4f4f5] min-h-screen font-sans selection:bg-[#5271FF] selection:text-white cursor-default" ref={containerRef}>

      <SEO
        title={language === 'en' ? 'Senior Product Designer & Design Engineer' : 'Senior Product Designer & Design Engineer'}
        description={language === 'en'
          ? 'Product Designer and Design Engineer with 10+ years on the border between design systems and frontend. Three-layer token architecture, Figma to React and Storybook, WCAG 2.1 AA from the start.'
          : 'Product Designer e Design Engineer com mais de 10 anos na fronteira entre design system e frontend. Arquitetura de tokens em 3 camadas, de Figma a React e Storybook, WCAG 2.1 AA desde o início.'}
      />

      {/* Grid Lines Background */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 md:px-12 opacity-[0.03]">
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white hidden md:block"></div>
        <div className="w-px h-full bg-white hidden md:block"></div>
        <div className="w-px h-full bg-white"></div>
      </div>

      <HeroSection t={t} className="bg-[#0a0a0a]" />

      <AboutSection t={t} className="bg-brand-silver" id="about" />

      <MissionSection t={t} className="bg-brand-silver" />

      <WorkSection t={t} className="bg-[#0a0a0a]" id="work" />

      <ServicesSection t={t} className="bg-[#0a0a0a]" id="services" />

      {/* --- EXPERIÊNCIA, FORMAÇÃO E CREDENCIAIS --- */}
      <ExperienceSection t={t} id="experience" />

      {/* --- NOVA SEÇÃO DE MENTORIA --- */}
      <MentorshipSection />

      <ContactSection t={t} className="bg-[#0a0a0a]" id="contact" />

    </div>
  );
};

export default Home;