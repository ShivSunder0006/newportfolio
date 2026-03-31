import { BookOpen, Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';

const PaperVisualizations = () => {
    const [showAllPapers, setShowAllPapers] = useState(false);

    const papers = [
        {
            title: 'ResNet 18 Architecture',
            image: '/images/projects/resnet_paper.png',
            desc: 'An interactive replication of Deep Residual Learning for Image Recognition, demonstrating identity shortcut connections.',
            tags: ['Computer Vision', 'PyTorch', 'CNN', 'Deep Learning'],
            liveDemo: 'https://huggingface.co/spaces/shivsunder0006/ResNet18',
            git: 'https://github.com/ShivSunder0006/ResNet18'
        },
        {
            title: 'Attention Is All You Need',
            image: '/images/projects/attention_paper.png',
            desc: 'Interactive visualization of the Transformer architecture, showcasing the multi-head self-attention mechanisms and encoder-decoder stack.',
            tags: ['NLP', 'Transformers', 'PyTorch', 'Attention'],
            liveDemo: 'https://huggingface.co/spaces/shivsunder0006/AIAYN',
            git: 'https://github.com/ShivSunder0006/AttentionIsAllYouNeed'
        },
        {
            title: 'LoRA: Low-Rank Adaptation',
            image: '/images/projects/resnet_paper.png', // Placeholder, please update
            desc: 'Interactive visualization and implementation of Low-Rank Adaptation of Large Language Models.',
            tags: ['LLM', 'Fine-Tuning', 'Transformers'],
            liveDemo: 'https://huggingface.co/spaces/shivsunder0006/LoRA',
            git: 'https://github.com/ShivSunder0006/loRA'
        }
    ];

    const displayedPapers = showAllPapers ? papers : papers.slice(0, 2);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -15, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.2 }
        }
    };

    return (
        <section id="paper-visualizations" className="py-20 max-w-6xl mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4"
            >
                <span className="w-16 h-1 bg-neon-cyan hidden md:block rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
                Paper Visualizations
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-1000"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                layout
            >
                <AnimatePresence mode="popLayout">
                {displayedPapers.map((p, i) => (
                    <motion.div 
                        key={p.title + i} 
                        variants={cardVariants} 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                        style={{ zIndex: papers.length - i }}
                    >
                        <Tilt
                            tiltMaxAngleX={1}
                            tiltMaxAngleY={1}
                            perspective={1000}
                            transitionSpeed={1000}
                            scale={1.01}
                            gyroscope={false}
                            className="h-full"
                        >
                            <div className="bg-card-blue border border-slate-700/50 rounded-2xl overflow-hidden shadow-3d-dark flex flex-col group h-full transform-style-3d">
                                <div className="h-56 w-full relative border-b border-slate-700/50 overflow-hidden transform-style-3d" style={{ transform: "translateZ(40px)" }}>
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-space-blue/60 group-hover:bg-transparent transition-all duration-300 flex items-center justify-center">
                                        <BookOpen className="w-16 h-16 text-white/50 group-hover:text-neon-cyan transition-all duration-500 group-hover:scale-125 drop-shadow-md" style={{ transform: "translateZ(60px)" }} />
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col transform-style-3d" style={{ transform: "translateZ(30px)" }}>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors" style={{ transform: "translateZ(20px)" }}>{p.title}</h3>
                                    <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                                        {p.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6" style={{ transform: "translateZ(15px)" }}>
                                        {p.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-space-blue border border-neon-cyan/20 rounded-md text-xs text-neon-cyan shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 mt-auto pt-4 relative z-50 pointer-events-auto">
                                        {p.git ? (
                                            <a href={p.git} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-neon-cyan bg-slate-800/40 hover:bg-slate-700/60 px-4 py-2.5 rounded-xl transition-all duration-300 press-effect border border-slate-700/50 hover:border-neon-cyan/50 shadow-lg">
                                                <Github className="w-4 h-4" /> Code
                                            </a>
                                        ) : (
                                            <button className="flex items-center gap-2 text-sm font-semibold text-slate-300 bg-slate-800/40 px-4 py-2.5 rounded-xl transition-all duration-300 press-effect cursor-not-allowed opacity-50 border border-slate-700/50 shadow-lg">
                                                <Github className="w-4 h-4" /> Code
                                            </button>
                                        )}
                                        {p.liveDemo ? (
                                            <a href={p.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-neon-indigo hover:text-white bg-neon-indigo/10 hover:bg-neon-indigo/20 px-4 py-2.5 rounded-xl transition-all duration-300 press-effect ml-auto border border-neon-indigo/20 hover:border-neon-indigo/50 shadow-lg">
                                                Live Demo <ExternalLink className="w-4 h-4" />
                                            </a>
                                        ) : (
                                            <button className="flex items-center gap-2 text-sm font-semibold text-neon-indigo bg-neon-indigo/10 px-4 py-2.5 rounded-xl transition-all duration-300 press-effect ml-auto cursor-not-allowed opacity-50 border border-neon-indigo/20 shadow-lg">
                                                Live Demo <ExternalLink className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
                </AnimatePresence>
            </motion.div>

            {papers.length > 2 && (
                <motion.div 
                    layout
                    className="mt-16 flex justify-center"
                >
                    <button
                        onClick={() => setShowAllPapers(!showAllPapers)}
                        className="group relative px-8 py-3 rounded-full bg-space-blue/50 border border-neon-cyan/50 text-neon-cyan font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] flex items-center gap-2"
                    >
                        <div className="absolute inset-0 bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors"></div>
                        <span className="relative z-10">{showAllPapers ? "Show Less" : "Show More"}</span>
                        {showAllPapers ? <ChevronUp className="relative z-10 w-5 h-5 group-hover:-translate-y-1 transition-transform" /> : <ChevronDown className="relative z-10 w-5 h-5 group-hover:translate-y-1 transition-transform" />}
                    </button>
                </motion.div>
            )}
        </section>
    );
};

export default PaperVisualizations;
