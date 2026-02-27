import {
    Code2, Database, Terminal, GitBranch, Github, Boxes,
    BrainCircuit, Cpu, Network, LineChart, FileText, Camera, ScanText, FileJson
} from 'lucide-react';

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

    return (
        <section id="skills" className="py-20 max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center justify-end gap-4">
                My Arsenal
                <span className="w-16 h-1 bg-neon-indigo hidden md:block rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]"></span>
            </h2>
            <div className="flex flex-wrap gap-4 justify-end">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="px-5 py-2.5 bg-card-blue text-slate-300 text-sm font-semibold rounded-full border border-slate-700/80 shadow-3d-dark hover-3d press-effect cursor-default select-none group relative overflow-hidden flex items-center gap-2 hover:border-neon-cyan/50 hover:text-white transition-colors"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-cyan/10 to-neon-indigo/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
                        <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                        </div>
                        <span className="relative z-10">{skill.name}</span>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
