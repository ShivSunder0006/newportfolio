import { BrainCircuit } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 w-full">
                <div className="space-y-6 z-10">
                    <h2 className="text-neon-cyan font-semibold tracking-wider uppercase text-sm">
                        Welcome to my universe
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-[4px_4px_0px_rgba(23,37,84,1)]">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-indigo filter drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">Shiv Sunder Pradhan</span>, <br />
                        a Machine Learning Engineer.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                        Passionate about developing intelligent systems and solving real-world problems through AI.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <a href="#projects" className="px-8 py-3 bg-card-blue border-2 border-neon-cyan text-neon-cyan font-bold rounded-xl shadow-3d-cyan hover-3d press-effect">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-neon-indigo text-space-blue font-bold rounded-xl shadow-3d-indigo hover-3d press-effect">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="relative flex justify-center items-center perspective-1000">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-neon-cyan/50 shadow-[0_0_50px_rgba(56,189,248,0.4)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden relative group">
                        <img src="/images/avatar.png" alt="Shiv Sunder Pradhan" className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-neon-cyan/10 mix-blend-overlay rounded-full pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
