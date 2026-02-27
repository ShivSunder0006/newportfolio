import { BrainCircuit, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            name: 'PyTorch for Deep Learning (Coursera)',
            link: 'https://drive.google.com/file/d/1yto-qycOYYwOl5CNipr8Cc9hZ4vwYma5/view?usp=drive_link'
        },
        {
            name: 'Certified Entry-Level Data Analyst with Python',
            link: 'https://drive.google.com/file/d/1Hfpp-dZZDry6kHU4KyzevV0W1Sg1Fl5F/view'
        }
    ];

    return (
        <section id="certifications" className="py-20 max-w-6xl mx-auto px-6 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                Certifications
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {certs.map((cert, i) => (
                    <div key={i} className="bg-gradient-to-b from-card-blue to-space-blue p-[2px] rounded-xl shadow-3d-cyan hover-3d press-effect group">
                        <div className="bg-space-blue rounded-xl px-6 py-5 h-full flex flex-col items-center justify-center gap-4 sm:min-w-[320px]">
                            <div className="flex items-center gap-3">
                                <BrainCircuit className="text-neon-cyan w-6 h-6 flex-shrink-0" />
                                <span className="text-sm font-medium text-slate-200 text-center">{cert.name}</span>
                            </div>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-semibold text-space-blue bg-neon-cyan hover:bg-white transition-colors px-4 py-2 rounded-lg mt-1 w-full justify-center shadow-lg hover:shadow-cyan-500/50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink className="w-3.5 h-3.5" />
                                View Certification
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
