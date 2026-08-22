export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 py-16 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 font-mono">
      
      {/* Left Side: Ultra-Minimalist Identity Block */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center items-start">
        <span className="text-[10px] text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-4">
          [ SYSTEM_IDENTITY_CARD ]
        </span>
        
        {/* Dominant Typographic Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none whitespace-nowrap uppercase text-[#C5A029] dark:text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.05)] mb-8">
          KALKIDAN TASEW
        </h1>
        
        {/* Clean, Structured Credentials */}
        <div className="space-y-3.5 text-xs sm:text-sm border-l-2 border-[#C5A029] dark:border-[#D4AF37] pl-5">
          <p className="font-extrabold uppercase tracking-wider text-white">
            Electrical & Computer Engineering Student
          </p>
          <p className="text-stone-400">
            Addis Ababa University // 5th Year
          </p>
          <p className="font-bold text-blue-400 uppercase tracking-widest">
            Full-Stack Developer
          </p>
        </div>
      </div>

      {/* Right Side: Single Elegant Vertical Oval Portrait Frame */}
      <div className="w-full lg:w-5/12 flex justify-center items-center relative group">
        
        {/* Floating Gold Aura Behind the Oval */}
        <div className="absolute w-72 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10 group-hover:scale-105 transition-all duration-500"></div>

        {/* 
          Single Elegant Oval Image Container 
          (Removed the secondary offset border outline)
        */}
        <div className="w-64 h-80 rounded-full overflow-hidden border border-stone-200 dark:border-stone-900 bg-white/40 dark:bg-stone-950/20 p-1.5 shadow-xl transition-all duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.06)]">
          <div className="w-full h-full rounded-full overflow-hidden bg-stone-100 dark:bg-stone-900 border border-slate-200/50 dark:border-slate-800/50">
            <img 
              src="/profile.jpg" 
              alt="Kalkidan Tasew" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
      
    </section>
  );
}