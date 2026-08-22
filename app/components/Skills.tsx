const frontendSkills = ["Next.js", "React.js", "TypeScript", "JavaScript", "TailwindCSS", "Figma"];
const backendSkills = ["Go (Golang)", "PostgreSQL", "Python"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-stone-200 dark:border-stone-900 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 font-mono">
      
      {/* Title - Updated to solid white */}
      <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-10 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-[#C5A029] dark:bg-[#D4AF37] inline-block"></span>
        TECH_STACK
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Client Side Cores */}
        <div className="border border-stone-900 rounded-2xl p-6 bg-stone-900/40 backdrop-blur-md shadow-sm">
          <div className="flex justify-between items-center border-b border-stone-900 pb-3 mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
              CLIENT_SIDE_CORES
            </h3>
            <span className="text-[10px] text-stone-500 font-bold">[ONLINE]</span>
          </div>
          
          {/* Small boxes use the same outer bg: bg-stone-900/40 backdrop-blur-md */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {frontendSkills.map((skill) => (
              <div 
                key={skill}
                className="p-4 border border-stone-900 rounded bg-stone-900/40 backdrop-blur-md hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#C5A029] dark:bg-[#D4AF37] rounded-full animate-pulse"></span>
                  <span className="font-bold text-white text-sm">{skill}</span>
                </div>
                <span className="text-[9px] text-[#C5A029] dark:text-[#D4AF37] font-bold border border-gold-500/20 px-1.5 py-0.5 rounded bg-gold-500/5 uppercase tracking-wider">
                  [ ACTIVE ]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Server Side Cores */}
        <div className="border border-stone-900 rounded-2xl p-6 bg-stone-900/40 backdrop-blur-md shadow-sm">
          <div className="flex justify-between items-center border-b border-stone-900 pb-3 mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
              SERVER_SIDE_CORES
            </h3>
            <span className="text-[10px] text-stone-500 font-bold">[ONLINE]</span>
          </div>

          {/* Small boxes use the same outer bg: bg-stone-900/40 backdrop-blur-md */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {backendSkills.map((skill) => (
              <div 
                key={skill}
                className="p-4 border border-stone-200 dark:border-stone-900 rounded bg-stone-900/40 backdrop-blur-md hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#C5A029] dark:bg-[#D4AF37] rounded-full animate-pulse"></span>
                  <span className="font-bold text-white text-sm">{skill}</span>
                </div>
                <span className="text-[9px] text-[#C5A029] dark:text-[#D4AF37] font-bold border border-gold-500/20 px-1.5 py-0.5 rounded bg-gold-500/5 uppercase tracking-wider">
                  [ ACTIVE ]
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}