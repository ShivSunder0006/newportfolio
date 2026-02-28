import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const Hero = () => {
    // 3D Text Animation Variants
    const textVariants = {
        hidden: { opacity: 0, z: -100, rotateX: 20 },
        visible: {
            opacity: 1,
            z: 0,
            rotateX: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
        }
    };

    // Child element variants for staggering
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    // 3D Image Animation Variants
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: -30, rotateZ: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            rotateZ: 0,
            transition: { duration: 1, delay: 0.3, type: "spring", stiffness: 50 }
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 perspective-1000">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    className="space-y-6 z-10"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <motion.h2 variants={itemVariants} className="text-neon-cyan font-semibold tracking-wider uppercase text-sm">
                        Welcome to my universe
                    </motion.h2>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-[4px_4px_0px_rgba(23,37,84,1)]">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-indigo filter drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">Shiv Sunder Pradhan</span>, <br />
                        a Machine Learning Engineer.
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-xl text-slate-400 max-w-lg leading-relaxed">
                        Passionate about developing intelligent systems and solving real-world problems through AI.
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex gap-4 pt-4">
                        <a href="#projects" className="px-8 py-3 bg-card-blue border-2 border-neon-cyan text-neon-cyan font-bold rounded-xl shadow-3d-cyan hover-3d press-effect">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-neon-indigo text-space-blue font-bold rounded-xl shadow-3d-indigo hover-3d press-effect">
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="relative flex justify-center items-center perspective-1000"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-neon-cyan/50 shadow-[0_0_50px_rgba(56,189,248,0.4)] flex items-center justify-center overflow-hidden relative group"
                        whileHover={{ scale: 1.05, rotateZ: 5, boxShadow: "0 0 80px rgba(56,189,248,0.6)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src="/images/avatar.png" alt="Shiv Sunder Pradhan" className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-neon-cyan/10 mix-blend-overlay rounded-full pointer-events-none group-hover:bg-neon-cyan/20 transition-all duration-300"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
