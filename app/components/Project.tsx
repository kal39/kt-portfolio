'use client';

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  imageUrl: string;
  category: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    title: "Hotel Management System",
    description: "A full-stack booking and administration platform. Features real-time room availability tracking, billing management, and client check-in/check-out services.",
    techStack: ["Go", "PostgreSQL", "Next.js"],
    githubLink: "https://github.com/kal39/hotel-management-system",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    category: "Go & Backend",
    liveLink: "https://hotel-frontend-lmyw.onrender.com"
  },
  {
    title: "Smart Musical Instrument",
    description: "An ECE hardware-software integration project. Combines custom sensor arrays with a software layer to process signals and synthesize audio parameters in real time.",
    techStack: ["Python", "React", "C++"],
    githubLink: "https://github.com/kal39/smart-musical-instrument",
    imageUrl: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=600&q=80",
    category: "Python & Hardware",
    liveLink: "https://smart-instrument-frontend.onrender.com"
  },
  {
    title: "Digital Ekub",
    description: "A digital adaptation of the traditional Ethiopian rotating savings association (Ekub). Includes automated lottery scheduling, contribution tracking, and member verification.",
    techStack: ["Go", "PostgreSQL", "Next.js"],
    githubLink: "https://github.com/kal39/digital-ekub",
    imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80",
    category: "Go & Backend",
    liveLink: "https://digital-ekub-frontend.onrender.com"
  },
  {
    title: "Aura Fitness Center",
    description: "A dynamic membership portal for gyms. Includes workout tracking, slot booking, customized schedules, and an intuitive panel for instructors to manage clients.",
    techStack: ["Next.js", "Python", "PostgreSQL"],
    githubLink: "https://github.com/kal39/aura-fitness-center",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    category: "Next.js & Fullstack",
    liveLink: "https://aura-gold-frontend.onrender.com"
  },
  {
    title: "KT Burgerzone",
    description: "An online food ordering platform. Includes category filtering, real-time cart state management, checkout processes, and a dynamic backend for order fulfillments.",
    techStack: ["Next.js", "Python", "PostgreSQL"],
    githubLink: "https://github.com/kal39/kt-burgerzone",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    category: "Next.js & Fullstack",
    liveLink: "https://kt-burgerzone-frontend.onrender.com"
  },
  {
    title: "Movie Dashboard",
    description: "An analytics interface displaying movie statistics, ratings, and media categorization. Fetches and parses dynamic payload datasets with client-side filtering.",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    githubLink: "https://github.com/kal39/movie-dashboard",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    category: "Frontend & UI",
    liveLink: "https://movie-flix-0ibw.onrender.com"
  }
];

export default function Projects() {
  // Track expanded state for each project card independently
  const [expandedStates, setExpandedStates] = useState<{ [key: number]: boolean }>({});

  const toggleDetails = (index: number) => {
    setExpandedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="projects" className="py-24 border-t border-stone-200 dark:border-stone-900 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 font-mono">
      
      {/* Title block with explanatory note */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 max-w-4xl mx-auto">
        <div>
          {/* Header explicitly in white */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">
            Projects
          </h2>
          <p className="text-stone-500 dark:text-stone-600 text-xs font-mono">
            [CATALOG_DATA_GRID] // This is a curated showcase of some of my featured projects.
          </p>
        </div>
      </div>
      
      {/* 
        Sleek, Compact, 2-Column Grid system 
        Arranges horizontal, split-row cards side-by-side on larger screens
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
        {projects.map((project, index) => {
          const isExpanded = !!expandedStates[index];
          
          return (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden flex flex-col sm:flex-row border transition-all duration-300 min-h-[180px]
                bg-stone-900/40 backdrop-blur-md border-stone-200 dark:border-stone-900 hover:border-[#D4AF37]
                hover:shadow-[0_0_20px_rgba(212,175,55,0.06)]"
            >
              {/* Left Side: Unconditional Horizontal Image Split */}
              <div className="w-28 sm:w-44 flex-shrink-0 h-full relative border-r border-stone-200 dark:border-stone-900 bg-stone-100 dark:bg-stone-950">
                <span className="absolute top-2 left-2 bg-[#D4AF37] text-black px-1.5 py-0.5 text-[8px] font-bold tracking-wider z-20">
                  [ {project.category.toUpperCase()} ]
                </span>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[30%] dark:grayscale-[50%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Right Side: Project Details */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                <div>
                  {/* Updated to stay solid white even on hover */}
                  <h3 className="text-lg font-bold mb-1.5 text-white">
                    {project.title}
                  </h3>
                  
                  {/* Toggle Description Button */}
                  <button 
                    onClick={() => toggleDetails(index)}
                    className="text-[9px] font-bold text-stone-400 dark:text-stone-555 hover:text-[#D4AF37] mb-4 flex items-center gap-1 transition-colors uppercase cursor-pointer"
                  >
                    {isExpanded ? "[ COLLAPSE ▲ ]" : "[ DETAILS ▼ ]"}
                  </button>

                  {/* Smooth Expanded Description Box */}
                  {isExpanded && (
                    <div className="border-t border-stone-200/50 dark:border-stone-900 pt-2 mb-4 animate-fade-in text-[10px] sm:text-xs leading-relaxed text-stone-400 font-mono">
                      <span className="text-[#D4AF37] font-bold mr-1">&gt;</span>
                      {project.description}
                    </div>
                  )}
                </div>
                
                {/* Tech Tags and Source Code Target */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 bg-stone-900/40 backdrop-blur-md text-stone-400 text-[8px] sm:text-[10px] font-semibold rounded border border-stone-850"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Slim side-by-side action buttons */}
                  <div className="flex gap-2">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 bg-[#D4AF37] text-black rounded text-[9px] sm:text-xs font-bold hover:bg-[#C5A029] transition-all duration-300 uppercase text-center"
                    >
                      VIEW_LIVE ▷
                    </a>

                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 border border-[#D4AF37] rounded text-[9px] sm:text-xs font-bold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 uppercase text-center"
                    >
                      VIEW_SOURCE ↗
                    </a>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Directory Call-to-Action Terminal Block */}
      <div className="mt-16 text-center border border-stone-200 dark:border-stone-900 rounded-2xl p-6 bg-white/10 dark:bg-stone-950/20 backdrop-blur-sm max-w-2xl mx-auto shadow-sm">
        {/* Updated explicitly to solid white text */}
        <p className="text-xs sm:text-sm text-white leading-relaxed font-mono">
          &gt; These featured systems represent only a selected preview of my work; I invite you to explore my broader directory of full-stack projects, hardware integrations, and active repositories on GitHub:
        </p>
        <a 
          href="https://github.com/kal39"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-xs font-bold text-[#C5A029] dark:text-[#D4AF37] hover:underline uppercase"
        >
          Explore Complete GitHub Directory &rarr;
        </a>
      </div>

    </section>
  );
}