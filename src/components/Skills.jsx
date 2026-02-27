const Skills = () => {
    const skills = [
        'Python', 'C++', 'SQL', 'HTML/CSS', 'JavaScript',
        'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision',
        'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'OpenCV',
        'LangChain', 'Transformers', 'Docker', 'AWS', 'Google Cloud'
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
                        className="px-6 py-3 bg-card-blue text-slate-200 font-semibold rounded-full border border-slate-700 shadow-3d-dark hover-3d press-effect cursor-default select-none group relative overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-cyan/20 to-neon-indigo/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
                        <span className="relative z-10">{skill}</span>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
