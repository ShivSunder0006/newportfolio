import { Database, Terminal } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'Machine Learning Engineer Intern',
            company: 'Quantiphi',
            duration: 'July 2025 - September 2025',
            desc: 'Gained hands-on training across various ML domains and implemented real-world use cases. Developed a mock end-to-end project on real-time Paytm logo detection on streaming video using YOLOv8, AWS Kinesis, and Flask.',
            icon: <Database className="text-neon-cyan w-6 h-6" />
        },
        {
            role: 'System Engineer Intern',
            company: 'Mahanadi Coalfields Limited (MCL)',
            duration: 'May 2024 - July 2024',
            desc: 'Assisted in system performance analysis and troubleshooting. Supported the IT team in maintaining enterprise applications and network infrastructure. Studied under the guidance of senior engineers to enter into the machine learning domain.',
            icon: <Terminal className="text-neon-indigo w-6 h-6" />
        }
    ];

    return (
        <section id="experience" className="py-20 max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4">
                <span className="w-16 h-1 bg-neon-indigo hidden md:block rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]"></span>
                Work Experience
            </h2>
            <div className="relative space-y-8 before:-left-4 md:before:left-1/2 before:absolute before:top-0 before:w-1 before:h-full before:bg-card-blue before:-translate-x-1/2 rounded-full">
                {experiences.map((exp, i) => (
                    <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between md:justify-normal md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:self-start' : 'md:pl-12 md:self-end md:ml-auto'} group`}>
                        <div className="absolute left-[-2rem] md:left-auto md:right-[-20px] w-10 h-10 rounded-full bg-space-blue border-4 border-neon-cyan z-10 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.6)]">
                            <div className="w-3 h-3 bg-neon-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        </div>
                        {i % 2 !== 0 && <div className="hidden md:block absolute left-[-20px] w-10 h-10 rounded-full bg-space-blue border-4 border-neon-indigo z-10 flex items-center justify-center shadow-[0_0_15px_rgba(129,140,248,0.6)]">
                            <div className="w-3 h-3 bg-neon-indigo rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        </div>}

                        <div className="w-full bg-card-blue border border-slate-700/50 p-6 rounded-2xl shadow-3d-dark hover-3d group-hover:border-neon-cyan/50 transition-colors ml-4 md:ml-0">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-space-blue rounded-lg shadow-inner">
                                    {exp.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <h4 className="text-neon-cyan text-sm">{exp.company}</h4>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mb-4">{exp.duration}</p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {exp.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
