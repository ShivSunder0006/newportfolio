import { Database, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

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

    const timelineVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50, rotateY: -15 },
        visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: { duration: 0.8, type: "spring", stiffness: 80 }
        }
    };

    return (
        <section id="experience" className="py-20 max-w-5xl mx-auto px-6 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4"
            >
                <span className="w-16 h-1 bg-neon-indigo hidden md:block rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]"></span>
                Work Experience
            </motion.h2>

            <motion.div
                className="relative space-y-8 before:-left-4 md:before:left-1/2 before:absolute before:top-0 before:w-1 before:h-full before:bg-card-blue before:-translate-x-1/2 rounded-full perspective-1000"
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className={`relative flex flex-col md:flex-row items-center justify-between md:justify-normal md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:self-start' : 'md:pl-12 md:self-end md:ml-auto'} group`}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="absolute left-[-2rem] md:left-auto md:right-[-20px] w-10 h-10 rounded-full bg-space-blue border-4 border-neon-cyan z-10 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.6)]">
                            <div className="w-3 h-3 bg-neon-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        </div>
                        {i % 2 !== 0 && <div className="hidden md:block absolute left-[-20px] w-10 h-10 rounded-full bg-space-blue border-4 border-neon-indigo z-10 flex items-center justify-center shadow-[0_0_15px_rgba(129,140,248,0.6)]">
                            <div className="w-3 h-3 bg-neon-indigo rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        </div>}

                        <Tilt
                            tiltMaxAngleX={8}
                            tiltMaxAngleY={8}
                            perspective={1000}
                            transitionSpeed={1000}
                            scale={1.02}
                            gyroscope={true}
                            className={`w-full ${i % 2 === 0 ? '' : 'ml-4 md:ml-0'}`}
                        >
                            <div className="w-full bg-card-blue border border-slate-700/50 p-6 rounded-2xl shadow-3d-dark transform-style-3d group-hover:border-neon-cyan/50 transition-colors">
                                <div className="flex items-center gap-3 mb-2" style={{ transform: "translateZ(30px)" }}>
                                    <div className="p-2 bg-space-blue rounded-lg shadow-inner">
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <h4 className="text-neon-cyan text-sm">{exp.company}</h4>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 mb-4" style={{ transform: "translateZ(10px)" }}>{exp.duration}</p>
                                <p className="text-slate-400 text-sm leading-relaxed" style={{ transform: "translateZ(20px)" }}>
                                    {exp.desc}
                                </p>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;
