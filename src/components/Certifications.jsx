import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Award, ExternalLink } from 'lucide-react';
import Skeleton from './Skeleton';

const CertSkeleton = () => (
    <div className="bg-card-blue/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-3d-dark flex flex-col h-full transform-style-3d group">
        <div className="flex items-start gap-6">
            <Skeleton className="w-16 h-16 rounded-2xl" />
            <div className="flex-1">
                <Skeleton className="h-7 w-3/4 mb-3" />
                <Skeleton className="h-4 w-1/2" />
            </div>
        </div>
        <div className="mt-auto pt-8">
            <Skeleton className="w-full h-12 rounded-xl" />
        </div>
    </div>
);

const Certifications = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const certs = [
        {
            name: 'PyTorch for Deep Learning',
            issuer: 'Coursera',
            link: 'https://drive.google.com/file/d/1yto-qycOYYwOl5CNipr8Cc9hZ4vwYma5/view?usp=drive_link',
            icon: <Award className="w-12 h-12 text-neon-cyan drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
        },
        {
            name: 'Certified Entry-Level Data Analyst with Python',
            issuer: 'Professional Certification',
            link: 'https://drive.google.com/file/d/1Hfpp-dZZDry6kHU4KyzevV0W1Sg1Fl5F/view',
            icon: <Award className="w-12 h-12 text-neon-indigo drop-shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
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
        hidden: { opacity: 0, scale: 0.8, y: 50, rotateX: -20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section id="certifications" className="py-20 max-w-6xl mx-auto px-6 overflow-hidden relative">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-16 text-white flex items-center justify-center gap-4 relative z-10"
            >
                <span className="w-16 h-1 bg-neon-cyan hidden md:block rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
                Certifications
                <span className="w-16 h-1 bg-neon-indigo hidden md:block rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]"></span>
            </motion.h2>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-1000 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {loading ? (
                    Array(2).fill(0).map((_, i) => (
                        <motion.div key={`skeleton-${i}`} variants={cardVariants} className="h-full">
                            <CertSkeleton />
                        </motion.div>
                    ))
                ) : (
                    certs.map((cert, i) => (
                        <motion.div key={i} variants={cardVariants} className="h-full">
                            <Tilt
                                tiltMaxAngleX={5}
                                tiltMaxAngleY={5}
                                perspective={1000}
                                transitionSpeed={1000}
                                scale={1.02}
                                gyroscope={true}
                                className="h-full"
                            >
                                <div className="bg-card-blue/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-3d-dark flex flex-col h-full transform-style-3d group hover:border-neon-cyan/50 transition-colors duration-500 relative overflow-hidden">
                                    {/* Ambient Light Leak */}
                                    <div className={`absolute -inset-20 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 pointer-events-none ${i % 2 === 0 ? 'bg-neon-cyan' : 'bg-neon-indigo'}`}></div>

                                    <div className="flex items-start gap-6 relative z-10" style={{ transform: "translateZ(30px)" }}>
                                        <div className="p-3 bg-space-blue rounded-2xl border border-slate-700/50 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                            {cert.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors line-clamp-2">
                                                {cert.name}
                                            </h3>
                                            {cert.issuer && (
                                                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
                                                    {cert.issuer}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-8 relative z-50" style={{ transform: "translateZ(40px)" }}>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 text-sm font-bold w-full bg-space-blue border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan shadow-[0_0_15px_rgba(56,189,248,0.1)] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] px-6 py-3.5 rounded-xl transition-all duration-300 press-effect"
                                        >
                                            View Credential <ExternalLink className="w-4 h-4 ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))
                )}
            </motion.div>
        </section>
    );
};

export default Certifications;
