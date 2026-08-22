export default function About() {
  return (
    <section id="about" className="py-24 border-t border-stone-200 dark:border-stone-900 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 font-mono relative">
      
      {/* Background Highlight */}
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl -z-10"></div>

      <div className="flex items-center gap-4 mb-14">
        {/* Updated header to solid white */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          About Me
        </h2>
        <div className="h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent flex-grow"></div>
      </div>
      
      {/* 2-Column Full Width Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-stone-300">
        
        {/* Left: Biography - Updated to include and motivate your entire skill stack */}
        <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm leading-relaxed">
          <p>
            I am currently in my final (5th) year of studying <span className="text-[#D4AF37] font-semibold">Electrical and Computer Engineering</span> at Addis Ababa University. 
            Driven by my passion for software engineering, I have built a solid foundation as a self-made full-stack coder.
          </p>
          <p>
            My academic focus on computer architecture, hardware systems, and signal processing gives me a low-level perspective on how software interacts with physical hardware. I apply these engineering fundamentals to optimize system performance, minimize latency, and write lightweight, structured code.
          </p>
          <p>
            On the client side, I create responsive, type-safe user interfaces. I leverage <span className="text-white font-medium">React.js</span> and <span className="text-white font-medium">Next.js</span> using <span className="text-white font-medium">TypeScript</span> and <span className="text-white font-medium">JavaScript</span> to build stable frontend architectures. By using <span className="text-white font-medium">TailwindCSS</span>, I bring designs directly from <span className="text-white font-medium">Figma</span> into highly interactive web platforms.
          </p>
          <p>
            For backends and data management, I architect high-concurrency APIs with <span className="text-white font-medium">Go (Golang)</span> and design relational schemas using <span className="text-white font-medium">PostgreSQL</span>. I also utilize <span className="text-white font-medium">Python</span> for scripting and automation, alongside <span className="text-white font-medium">Java</span> for object-oriented systems design, enabling me to solve diverse technical challenges.
          </p>
        </div>
        
        {/* Right: The 4 Grid Cards - Matches outside box backgrounds */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          
          <div className="p-6 rounded-xl bg-stone-900/40 backdrop-blur-md border border-stone-900 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-sm">
            <span className="text-lg font-bold text-[#D4AF37] block mb-1">AAU</span>
            <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block">ECE Student</span>
            <p className="text-[10px] text-stone-500 mt-1">Computer focus.</p>
          </div>

          <div className="p-6 rounded-xl bg-stone-900/40 backdrop-blur-md border border-stone-900 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-sm">
            <span className="text-lg font-bold text-[#D4AF37] block mb-1">Self-Made</span>
            <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block">Developer</span>
            <p className="text-[10px] text-stone-500 mt-1">Hands-on projects.</p>
          </div>

          <div className="p-6 rounded-xl bg-stone-900/40 backdrop-blur-md border border-stone-900 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-sm">
            <span className="text-lg font-bold text-[#D4AF37] block mb-1">Fast</span>
            <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block">Learner</span>
            <p className="text-[10px] text-stone-500 mt-1">Adapts quickly.</p>
          </div>

          <div className="p-6 rounded-xl bg-stone-900/40 backdrop-blur-md border border-stone-900 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-sm">
            <span className="text-lg font-bold text-[#D4AF37] block mb-1">Team</span>
            <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block">Spirit</span>
            <p className="text-[10px] text-stone-500 mt-1">Clear communicator.</p>
          </div>

        </div>

      </div>
    </section>
  );
}