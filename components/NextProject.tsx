import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { projects } from '../data';
import { ArrowRight } from 'lucide-react';

interface NextProjectProps {
  currentSlug: string;
}

const NextProject: React.FC<NextProjectProps> = ({ currentSlug }) => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <Link to={`/work/${nextProject.slug}`} className="block group w-full">
      <div className="bg-brand-black text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center relative overflow-hidden transition-colors duration-500 hover:bg-neutral-900">

        <div className="z-10 flex flex-col gap-4">
          <span className="text-sm uppercase tracking-widest text-neutral-400">Next Project</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl group-hover:text-brand-lime transition-colors duration-300">
            {nextProject.title}
          </h2>
        </div>

        <div className="mt-8 md:mt-0 z-10">
          <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-lime group-hover:border-brand-lime group-hover:scale-110 transition-all duration-300">
            <ArrowRight className="w-6 h-6 text-white group-hover:text-brand-black transition-colors" />
          </div>
        </div>

      </div>
    </Link>
  );
};

export default NextProject;