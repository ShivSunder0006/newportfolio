import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
            <div className="bg-card-blue border border-neon-cyan/30 rounded-3xl p-8 md:p-12 shadow-3d-cyan relative overflow-hidden">
                {/* Subtle background element */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-indigo/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-white mb-4">Let's Connect</h2>
                    <p className="text-slate-400">Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                </div>

                <form className="relative z-10 max-w-xl mx-auto space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-space-blue border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
                            <input type="email" placeholder="john@example.com" className="w-full bg-space-blue border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300 ml-1">Message</label>
                        <textarea rows="4" placeholder="Hello..." className="w-full bg-space-blue border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all"></textarea>
                    </div>
                    <button type="button" className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-indigo text-space-blue font-extrabold text-lg rounded-xl shadow-3d-cyan hover-3d press-effect flex items-center justify-center gap-2">
                        Send Message <ChevronRight className="w-5 h-5" />
                    </button>
                </form>

                <div className="relative z-10 flex justify-center gap-6 mt-12 pt-8 border-t border-slate-700/50">
                    <a href="https://github.com/ShivSunder0006" target="_blank" rel="noopener noreferrer" className="p-4 bg-space-blue text-slate-300 rounded-2xl border border-slate-700 shadow-3d-dark hover-3d press-effect hover:text-neon-cyan hover:border-neon-cyan transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/shiv-sunder-pradhan-1a0a81194/" target="_blank" rel="noopener noreferrer" className="p-4 bg-space-blue text-slate-300 rounded-2xl border border-slate-700 shadow-3d-dark hover-3d press-effect hover:text-neon-indigo hover:border-neon-indigo transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:shivsunder46@gmail.com" className="p-4 bg-space-blue text-slate-300 rounded-2xl border border-slate-700 shadow-3d-dark hover-3d press-effect hover:text-neon-cyan hover:border-neon-cyan transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
