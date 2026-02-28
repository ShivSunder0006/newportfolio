import { Code2, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    const projects = [
        {
            title: 'MultiModal RAG System',
            image: '/images/projects/rag.png',
            desc: 'A Retrieval-Augmented Generation system combining text and image data for enhanced responses. Uses Hybrid IR, Dense Vectors, and Neural Reranking.',
            tags: ['Python', 'LangChain', 'FAISS', 'Transformers', 'Cohere'],
            liveDemo: 'https://huggingface.co/spaces/shivsunder0006/MultiModalRAG'
        },
        {
            title: 'Footfall Counter',
            image: '/images/projects/footfall.png',
            desc: 'Real-time crowd counting application capable of performing analytics on live video streams, deployed on Hugging Face.',
            tags: ['YOLOv8', 'OpenCV', 'Python', 'Streamlit']
        },
        {
            title: 'AniRecs AI',
            image: '/images/projects/anirecs.png',
            desc: 'Anime recommendation system leveraging NLP embeddings and semantic similarity to provide highly personalized content matching.',
            tags: ['Transformers', 'Gradio', 'Python', 'Hugging Face'],
            liveDemo: 'https://huggingface.co/spaces/shivsunder0006/AniRecs_Ai'
        },
        {
            title: 'License Plate Detection',
            image: '/images/projects/license.png',
            desc: 'A real-time Automatic Number Plate Recognition (ANPR) system processing vehicle images using object detection and OCR algorithms.',
            tags: ['TensorFlow', 'YOLO', 'OCR', 'Python'],
            liveDemo: 'https://huggingface.co/spaces/shivsunder0006/npds'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    return (
        <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4"
            >
                <span className="w-16 h-1 bg-neon-cyan hidden md:block rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
                Featured Projects
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-1000"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {projects.map((p, i) => (
                    <motion.div key={i} variants={cardVariants} style={{ zIndex: projects.length - i }}>
                        <Tilt
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            perspective={1000}
                            transitionSpeed={1000}
                            scale={1.02}
                            gyroscope={true}
                            className="h-full"
                        >
                            <div className="bg-card-blue border border-slate-700/50 rounded-2xl overflow-hidden shadow-3d-dark flex flex-col group h-full transform-style-3d">
                                <div className="h-56 w-full relative border-b border-slate-700/50 overflow-hidden transform-style-3d" style={{ transform: "translateZ(40px)" }}>
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-space-blue/60 group-hover:bg-transparent transition-all duration-300 flex items-center justify-center">
                                        <Code2 className="w-16 h-16 text-white/50 group-hover:text-neon-cyan transition-all duration-500 group-hover:scale-125 drop-shadow-md" style={{ transform: "translateZ(60px)" }} />
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
                                    <div className="flex gap-4 mt-auto" style={{ transform: "translateZ(25px)" }}>
                                        <button className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white press-effect">
                                            <Github className="w-4 h-4" /> Code
                                        </button>
                                        {p.liveDemo ? (
                                            <a href={p.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-neon-indigo hover:text-white press-effect ml-auto">
                                                Live Demo <ExternalLink className="w-4 h-4" />
                                            </a>
                                        ) : (
                                            <button className="flex items-center gap-2 text-sm font-semibold text-neon-indigo hover:text-white press-effect ml-auto cursor-not-allowed opacity-50">
                                                Live Demo <ExternalLink className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
