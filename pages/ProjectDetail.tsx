import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown, Hammer, ArrowLeft } from 'lucide-react';
import { projects } from '../data';
import { useLanguage } from '../context/LanguageContext';
import SmoothScroll from '../components/SmoothScroll';
import { ProjectContentItem } from '../types';

// --- SUB-COMPONENT: PARALLAX IMAGE ---
const ParallaxImage = ({ src, alt, className = "", imgStyle = {} }: { src: string, alt: string, className?: string, imgStyle?: React.CSSProperties }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-[120%] -mt-[10%] relative">
        <img src={src} alt={alt} className="w-full h-full object-cover" style={imgStyle} />
      </motion.div>
    </div>
  );
};

// --- SUB-COMPONENT: MAGNETIC CTA ---
const MagneticCTA = ({ link }: { link?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  if (!link) return null;

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    setPosition({ x: (clientX - center.x) / 3, y: (clientY - center.y) / 3 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="relative group flex items-center justify-center w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#0a0a0a] text-white overflow-hidden z-20"
      >
        <div className="relative z-10 flex flex-col items-center gap-2 mix-blend-difference">
          <span className="text-xs uppercase tracking-widest font-bold">View Site</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </div>
        <div className="absolute inset-0 bg-[#5271FF] scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 ease-out origin-center" />
      </motion.button>
    </a>
  );
};

// --- SUB-COMPONENT: COMING SOON BLOCK ---
const ComingSoonBlock = ({ language }: { language: 'en' | 'pt' }) => {
  const texts = {
    en: {
      title: "Case Study in Progress",
      subtitle: "We are currently crafting the storytelling for this project.",
      cta: "Back to Home"
    },
    pt: {
      title: "Case em Construção",
      subtitle: "Estamos finalizando a narrativa e os detalhes deste projeto.",
      cta: "Voltar ao Início"
    }
  };

  const t = texts[language];

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 py-24 border-t border-dashed border-neutral-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="w-16 h-16 rounded-full bg-neutral-200 flex items-center justify-center mb-4">
          <Hammer className="w-6 h-6 text-neutral-400 animate-pulse" />
        </div>

        <h3 className="text-4xl md:text-6xl font-serif italic text-neutral-400">
          {t.title}
        </h3>

        <p className="text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest max-w-md">
          ( {t.subtitle} )
        </p>

        <Link
          to="/"
          className="mt-8 px-8 py-3 rounded-full border border-neutral-300 text-neutral-500 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 text-xs font-bold uppercase tracking-widest flex items-center gap-2"
        >
          <ArrowLeft className="w-3 h-3" />
          {t.cta}
        </Link>
      </motion.div>
    </div>
  );
};

// --- SUB-COMPONENT: EDITORIAL TEXT BLOCK ---
const TextBlock: React.FC<{ content: any, language: 'en' | 'pt' }> = ({ content, language }) => {
  const text = typeof content === 'string' ? content : content[language];

  const titleMatch = text.match(/^([A-Z\s&]+):/);
  const hasTitle = !!titleMatch;

  const title = hasTitle ? titleMatch[1] : null;
  const bodyText = hasTitle ? text.replace(/^([A-Z\s&]+):/, '').trim() : text;
  const paragraphs = bodyText.split('\n');

  return (
    <div className="py-12 md:py-24 relative group">
      {hasTitle && (
        <div className="mb-12 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-serif italic text-[#0a0a0a] border-b border-[#0a0a0a]/10 pb-6 inline-block"
          >
            {title}
          </motion.h3>
        </div>
      )}

      <div className={`space-y-6 text-lg md:text-xl font-light text-[#0a0a0a]/80 leading-relaxed max-w-2xl ${hasTitle ? 'ml-auto' : 'mx-auto'}`}>
        {paragraphs.map((p: string, i: number) => (
          p.trim() && <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) return <div className="h-screen flex items-center justify-center bg-[#0a0a0a] text-white">Loading...</div>;

  const hasContent = project.content && project.content.length > 0;

  return (
    <SmoothScroll>
      <div className="bg-[#0a0a0a] min-h-screen text-[#D9D9D9] selection:bg-[#5271FF] selection:text-white">

        <div className="fixed top-0 left-0 w-full h-32 z-50 pointer-events-none bg-gradient-to-b from-[#0a0a0a] to-transparent" />

        <div className="relative z-10 mb-[80vh] bg-[#D9D9D9] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] pb-32">

          {/* 1. HERO SECTION */}
          <header className="relative px-6 md:px-12 pt-40 pb-20 bg-[#0a0a0a] text-[#D9D9D9]">
            <div className="max-w-[90vw] mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[13vw] leading-[0.8] font-sans font-bold tracking-tighter text-white uppercase break-words mb-12"
              >
                {project.title[language]}
              </motion.h1>

              {/* Info Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8 mb-24">
                <div>
                  <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Client</span>
                  <span className="block text-sm md:text-base text-white font-medium">{project.client}</span>
                </div>
                <div>
                  <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Role</span>
                  <span className="block text-sm md:text-base text-white font-medium">{project.role[language]}</span>
                </div>
                <div>
                  <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Services</span>
                  <span className="block text-sm md:text-base text-white font-medium">{project.services[language]}</span>
                </div>
                <div>
                  <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Year</span>
                  <span className="block text-sm md:text-base text-white font-medium">{project.year}</span>
                </div>
              </div>

              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="w-full aspect-video md:aspect-[2.35/1] overflow-hidden rounded-sm mb-0 shadow-2xl"
              >
                <ParallaxImage
                  src={project.coverImage}
                  alt="Cover"
                  className="w-full h-full"
                  imgStyle={project.coverImagePosition ? { objectPosition: project.coverImagePosition } : undefined}
                />
              </motion.div>
            </div>
          </header>

          {/* 2. CONDITIONAL CONTENT RENDER */}
          {hasContent ? (
            <section className="px-6 md:px-12 max-w-[1600px] mx-auto pt-32">
              {/* Intro Statement */}
              <div className="max-w-4xl mx-auto text-center mb-32 md:mb-48">
                <h2 className="text-3xl md:text-6xl font-serif italic leading-tight text-[#0a0a0a] mb-8">
                  "{project.description[language]}"
                </h2>
                <ArrowDown className="w-6 h-6 mx-auto text-[#0a0a0a]/50 animate-bounce" />
              </div>

              {/* Content Loop */}
              <div className="flex flex-col gap-12 md:gap-32">
                {project.content.map((block: ProjectContentItem, index: number) => {
                  // TEXT
                  if (block.type === 'text') {
                    return <TextBlock key={index} content={block.content} language={language} />;
                  }

                  // IMAGE FULL
                  if (block.type === 'image-full') {
                    return (
                      <div key={index} className="w-full md:w-[110%] md:-ml-[5%] relative group">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.8 }}
                          className="w-full aspect-video md:aspect-[21/9] rounded-sm overflow-hidden shadow-xl"
                        >
                          <ParallaxImage src={block.content} alt="" className="w-full h-full" />
                        </motion.div>
                        {block.caption && (
                          <div className="absolute -bottom-8 right-0 md:right-12 max-w-xs text-right">
                            <p className="text-[10px] font-mono text-[#0a0a0a] uppercase tracking-widest bg-white/80 backdrop-blur-sm p-2 inline-block shadow-sm">
                              {block.caption[language]}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // IMAGE DIAGRAM
                  if (block.type === 'image-diagram') {
                    return (
                      <div key={index} className="w-full relative group my-8">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.8 }}
                          className="w-full rounded-sm overflow-hidden"
                        >
                          <img
                            src={block.content}
                            alt={block.caption?.[language] || ''}
                            className="w-full h-auto object-contain"
                          />
                        </motion.div>
                        {block.caption && (
                          <div className="mt-4 text-center">
                            <p className="text-[10px] font-mono text-[#0a0a0a]/60 uppercase tracking-widest inline-block">
                              ( {block.caption[language]} )
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // VIDEO (SINGLE)
                  if (block.type === 'video') {
                    return (
                      <div key={index} className="w-full relative group my-12">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.8 }}
                          className="w-full rounded-sm overflow-hidden shadow-xl bg-black"
                        >
                          <video
                            src={block.content}
                            className="w-full h-auto"
                            controls
                            playsInline
                            loop
                            autoPlay={(block as any).autoPlay}
                            muted={(block as any).autoPlay}
                          />
                        </motion.div>
                        {block.caption && (
                          <div className="mt-4 text-center">
                            <p className="text-[10px] font-mono text-[#0a0a0a]/60 uppercase tracking-widest inline-block">
                              ( {block.caption[language]} )
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // --- NOVO: VIDEO GRID ---
                  if (block.type === 'video-grid') {
                    const gridOrientation = (block as any).orientation || 'vertical';
                    // No sistema de "grid" que criamos, 'vertical' significa lado-a-lado (2 colunas) em Desktop
                    const isHorizontal = gridOrientation === 'horizontal';

                    return (
                      <div key={index} className="w-full">
                        <div className={`grid gap-8 md:gap-16 items-start ${isHorizontal ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                          {block.content.map((videoUrl: string, i: number) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-10%" }}
                              transition={{ duration: 0.8, delay: i * 0.2 }}
                              className="w-full rounded-sm overflow-hidden shadow-lg bg-black aspect-video"
                            >
                              <video
                                src={videoUrl}
                                className="w-full h-full object-cover"
                                controls
                                playsInline
                                loop
                                muted={(block as any).autoPlay}
                                autoPlay={(block as any).autoPlay}
                              />
                            </motion.div>
                          ))}
                        </div>
                        {block.caption && (
                          <p className="mt-12 text-center text-xs font-mono text-[#0a0a0a]/60 uppercase tracking-widest">
                            ( {block.caption[language]} )
                          </p>
                        )}
                      </div>
                    );
                  }

                  // IMAGE GRID
                  if (block.type === 'image-grid') {
                    const gridOrientation = (block as any).orientation || 'vertical';
                    const isHorizontal = gridOrientation === 'horizontal';

                    return (
                      <div key={index} className="w-full">
                        <div className={`grid gap-8 md:gap-16 items-center ${isHorizontal ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                          {block.content.map((img: string, i: number) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-10%" }}
                              transition={{ duration: 0.8, delay: i * 0.2 }}
                              className={`w-full rounded-sm overflow-hidden shadow-lg 
                                                                                        ${isHorizontal ? 'aspect-auto' : 'aspect-[3/4]'} 
                                                                                        ${!isHorizontal && i % 2 !== 0 ? 'md:translate-y-24' : ''}
                                                                                    `}
                            >
                              <img
                                src={img}
                                alt=""
                                className={`w-full h-full object-cover transition-all duration-700 ${isHorizontal ? '' : 'grayscale hover:grayscale-0'}`}
                              />
                            </motion.div>
                          ))}
                        </div>
                        {block.caption && (
                          <p className="mt-24 text-center text-xs font-mono text-[#0a0a0a]/60 uppercase tracking-widest">
                            ( {block.caption[language]} )
                          </p>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* CTA Final */}
              <div className="mt-40 md:mt-60 flex justify-center">
                <MagneticCTA link={project.website} />
              </div>
            </section>
          ) : (
            <ComingSoonBlock language={language} />
          )}
        </div>

        {/* 4. FOOTER REVEAL */}
        <div className="fixed bottom-0 left-0 w-full h-[80vh] bg-[#0a0a0a] z-0 flex items-center justify-center text-white">
          <Link to={`/work/${nextProject.slug}`} className="group text-center w-full h-full flex flex-col items-center justify-center cursor-pointer relative">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <img src={nextProject.coverImage} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />

            <div className="relative z-10 mix-blend-difference">
              <span className="block text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#5271FF]">Next Case</span>
              <h2 className="text-[10vw] font-serif italic leading-none group-hover:translate-x-4 transition-transform duration-500 text-white">
                {nextProject.title[language]}
              </h2>
              <div className="mt-8 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-sm font-bold uppercase tracking-widest text-white">View Project</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </Link>
        </div>

      </div>
    </SmoothScroll>
  );
};

export default ProjectDetail;