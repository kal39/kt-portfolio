import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // ThemeToggle import has been removed

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'KT_SYSTEMS - Kalkidan Tasew',
  description: 'Fullstack developer portfolio of Kalkidan Tasew, Electrical and Computer Engineering student.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* Keeping 'dark' class active permanently for global utility support */
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} ${mono.variable} min-h-screen relative overflow-x-hidden transition-colors duration-300 font-mono bg-[#080809] text-[#f3f4f6] bg-[radial-gradient(#1c1c1f_1.5px,transparent_1.5px)] bg-[size:24px_24px]`}
      >
        
        {/* Soft Ambient Radial Terminal Sapphire Blurs */}
        <div className="absolute top-0 left-0 right-0 h-[1000px] -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[500px] rounded-full bg-blue-300/10 dark:from-[#D4AF37]/5 dark:to-transparent blur-[120px]" />
          <div className="absolute top-[15%] right-[-5%] w-[45%] h-[500px] rounded-full bg-indigo-300/10 dark:from-[#C5A029]/5 dark:to-transparent blur-[120px]" />
        </div>

        {/* Full-Screen Navigation Header (ThemeToggle completely removed) */}
        <header className="sticky top-0 bg-[#D4AF37]/20 backdrop-blur-md border-b border-[#D4AF37]/50 z-50 transition-colors shadow-[0_4px_30px_rgba(212,175,55,0.05)]">
          <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-4">
              <span className="p-2 border border-stone-200 dark:border-stone-900 rounded font-bold text-[#C5A029] dark:text-[#D4AF37]">
                KT_Portfolio
              </span>
            </div>
            
            {/* Navigation Categories & Toggles */}
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-stone-400">
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
                <a href="#skills" className="hover:text-[#D4AF37] transition-colors">Skills</a>
                <a href="#projects" className="hover:text-[#D4AF37] transition-colors">Projects</a>
              </div>
              
              <div className="flex items-center gap-4">
                {/* ThemeToggle has been removed from here */}
                
                {/* Download CV Button */}
                <a 
                  href="/Kalkidan_Tasew_CV.pdf" 
                  download="Kalkidan_Tasew_CV.pdf"
                  className="px-4 py-2 border border-stone-200 dark:border-stone-900 rounded text-xs font-bold text-stone-950 dark:text-white hover:border-[#D4AF37] hover:text-[#D4AF37] dark:hover:border-[#D4AF37] dark:hover:text-[#D4AF37] transition-all duration-300"
                >
                  DOWNLOAD_CV ⤓
                </a>
              </div>
            </div>

          </div>
        </header>
        
        {children}
        
        {/* Spacious Architectural Contact Footer */}
        <footer className="pt-24 pb-16 mt-28 border-t border-stone-200 dark:border-stone-900 relative z-10 font-mono w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: Identity and Location */}
            <div className="md:col-span-4 space-y-3">
              <span className="font-extrabold text-sm text-[#C5A029] dark:text-[#D4AF37]">
                KT_Portfolio
              </span>
              <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                Computer Systems Engineering & Fullstack Web Implementations. Addis Ababa, Ethiopia.
              </p>
            </div>

            {/* Column 2: Direct Communications */}
            <div className="md:col-span-4 space-y-3">
              <span className="text-[10px] text-stone-400 dark:text-stone-600 font-bold uppercase tracking-wider block">
                [ DIRECT_COMMUNICATIONS ]
              </span>
              <div className="flex flex-col gap-2.5 text-xs font-semibold text-stone-400">
                <a href="mailto:tasewkalkidan@gmail.com" className="hover:text-[#D4AF37] transition-colors break-all">
                  tasewkalkidan@gmail.com
                </a>
                <a href="tel:+251939393075" className="hover:text-[#D4AF37] transition-colors">
                  +251 939 393 075
                </a>
              </div>
            </div>

            {/* Column 3: Portals & Repositories */}
            <div className="md:col-span-4 space-y-3">
              <span className="text-[10px] text-stone-400 dark:text-stone-600 font-bold uppercase tracking-wider block">
                [ CHANNELS_&_REPOS ]
              </span>
              <div className="flex flex-col gap-2.5 text-xs font-semibold text-stone-400">
                <a href="https://github.com/kal39" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                  GITHUB // kal39 &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Strip */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-stone-200 dark:border-stone-900 mt-16 pt-8 text-[11px] text-stone-500">
            <p>© {new Date().getFullYear()} Kalkidan Tasew. ALL_RIGHTS_RESERVED.</p>
            <p className="text-[9px] text-stone-700 select-none">[ GIN_PORT_8080 ]</p>
          </div>
        </footer>

      </body>
    </html>
  );
}