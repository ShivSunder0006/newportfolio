import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const About = () => {
    return (
        <section id="about" className="py-20 max-w-5xl mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-10 text-white flex items-center gap-4"
            >
                <span className="w-16 h-1 bg-neon-cyan hidden md:block rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
                About Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                style={{ perspective: 1000 }}
            >
                <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={1000}
                    transitionSpeed={1000}
                    scale={1.01}
                    gyroscope={true}
                >
                    <div className="bg-card-blue/50 backdrop-blur-lg border border-neon-indigo/30 rounded-2xl p-8 md:p-12 shadow-3d-dark hover:shadow-3d-indigo transition-all duration-500 transform hover:-translate-y-2 group">
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light transform-style-3d" style={{ transform: "translateZ(30px)" }}>
                            A proud graduate of <strong className="text-neon-cyan font-semibold">NIT Rourkela</strong>, I have built a solid foundation in Competitive Programming, Data Structures & Algorithms, and Web Development.
                            I am deeply passionate about <strong className="text-neon-cyan font-semibold">Artificial Intelligence</strong> and <strong className="text-neon-cyan font-semibold">Machine Learning</strong>.
                            <br /><br />
                            Whether I am building computer vision models, NLP systems, or analyzing complex time series, my true strength lies in being a quick learner and an effective problem-solver. I thrive on translating theoretical AI concepts into practical, impactful solutions.
                        </p>
                    </div>
                </Tilt>
            </motion.div>
        </section>
    );
};

export default About;
