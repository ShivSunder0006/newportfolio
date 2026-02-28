import {
    Code2, Database, Terminal, GitBranch, Github, Boxes,
    BrainCircuit, Cpu, Network, LineChart, FileText, Camera, ScanText, FileJson
} from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    // Mapping skills to appropriate, monochrome Lucide icons that fit the theme
    const skills = [
        { name: 'C', icon: <Code2 className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'C++', icon: <Code2 className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'SQL', icon: <Database className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'Python', icon: <Terminal className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'TensorFlow', icon: <Cpu className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'PyTorch', icon: <Cpu className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'NLTK', icon: <FileText className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'Git', icon: <GitBranch className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'GitHub', icon: <Github className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'ReactJs', icon: <Boxes className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'Transformers', icon: <Network className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'LangChain', icon: <Network className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'LangGraph', icon: <Network className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'Machine Learning', icon: <BrainCircuit className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'Deep Learning', icon: <BrainCircuit className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'RAG', icon: <Database className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'MLOps', icon: <Terminal className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'GAN', icon: <BrainCircuit className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'Computer Vision', icon: <Camera className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'Natural Language Processing', icon: <FileText className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'Time Series', icon: <LineChart className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'YOLO', icon: <Camera className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'OCR', icon: <ScanText className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'Embeddings', icon: <Database className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'Gradio', icon: <Boxes className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'Unstructured', icon: <FileJson className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'CNN', icon: <Network className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'EasyOCR', icon: <ScanText className="w-4 h-4 text-neon-cyan/70" /> },
        { name: 'FAISS', icon: <Database className="w-4 h-4 text-neon-indigo/70" /> },
        { name: 'BM25', icon: <Database className="w-4 h-4 text-neon-cyan/70" /> }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.5, z: -50, rotateX: 45 },
        visible: {
            opacity: 1,
            scale: 1,
            z: 0,
            rotateX: 0,
            transition: { type: "spring", stiffness: 150, damping: 10 }
        }
    };

    return (
        <section id="skills" className="py-20 max-w-5xl mx-auto px-6 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center justify-end gap-4"
            >
                My Arsenal
                <span className="w-16 h-1 bg-neon-indigo hidden md:block rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]"></span>
            </motion.h2>
            <motion.div
                className="flex flex-wrap gap-4 justify-end perspective-1000"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {skills.map((skill, i) => (
                    <motion.div key={i} variants={itemVariants} style={{ transformStyle: "preserve-3d" }}>
                        <Tilt
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={800}
                            transitionSpeed={1500}
                            scale={1.1}
                            gyroscope={true}
                        >
                            <span
                                className="px-5 py-2.5 bg-card-blue text-slate-300 text-sm font-semibold rounded-full border border-slate-700/80 shadow-3d-dark hover-3d press-effect cursor-default select-none group relative overflow-hidden flex items-center gap-2 hover:border-neon-cyan/50 hover:text-white transition-colors transform-style-3d bg-opacity-80 backdrop-blur-sm"
                                style={{ transform: "translateZ(20px)" }}
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-cyan/20 to-neon-indigo/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
                                <div className="relative z-10 group-hover:scale-110 transition-transform duration-300" style={{ transform: "translateZ(30px)" }}>
                                    {skill.icon}
                                </div>
                                <span className="relative z-10" style={{ transform: "translateZ(10px)" }}>{skill.name}</span>
                            </span>
                        </Tilt>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
