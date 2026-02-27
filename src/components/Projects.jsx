import { Code2, Github, ExternalLink } from 'lucide-react';

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

    return (
        <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4">
                <span className="w-16 h-1 bg-neon-cyan hidden md:block rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((p, i) => (
                    <div key={i} className="bg-card-blue border border-slate-700/50 rounded-2xl overflow-hidden shadow-3d-dark hover-3d flex flex-col group">
                        <div className="h-56 w-full relative border-b border-slate-700/50 overflow-hidden">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-space-blue/60 group-hover:bg-transparent transition-all duration-300 flex items-center justify-center">
                                <Code2 className="w-16 h-16 text-white/50 group-hover:text-neon-cyan transition-all duration-500 group-hover:scale-125 drop-shadow-md" />
                            </div>
                        </div>                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{p.title}</h3>
                            <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                                {p.desc}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {p.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-space-blue border border-neon-cyan/20 rounded-md text-xs text-neon-cyan shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-auto">
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
                ))}
            </div>
        </section>
    );
};

export default Projects;
