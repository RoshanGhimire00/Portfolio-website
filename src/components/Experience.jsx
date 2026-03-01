import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        title: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2023 - Present",
        description: "Leading the frontend team to build scalable enterprise React applications. Improved performance by 40% and mentored junior developers."
    },
    {
        title: "Full Stack Developer",
        company: "Digital Innovations",
        period: "2021 - 2023",
        description: "Developed and maintained full-stack internal tools using MERN stack. Integrated various third-party APIs and managed MongoDB databases."
    },
    {
        title: "Junior Web Developer",
        company: "Creative Agency",
        period: "2019 - 2021",
        description: "Created responsive landing pages and interactive UI components. Collaborated closely with designers to ensure pixel-perfect implementation."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white"> Professional <span className="text-brand">Experience</span></h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">My journey and professional growth over the years.</p>
                </motion.div>

                <div className="space-y-12 relative">
                    {/* Glowing trail effect */}
                    <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand/0 via-brand/50 to-brand/0 blur-[2px]"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative pl-12 md:pl-0"
                        >
                            <div className={`md:flex items-center justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block w-[45%]"></div>
                                {/* Timeline divider */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[2px] bg-neutral-300 dark:bg-neutral-800 group-hover:bg-brand/80 transition-colors duration-500">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-neutral-950 border-2 border-brand flex items-center justify-center text-brand shadow-[0_0_15px_rgba(100,108,255,0.6)] z-10"
                                    >
                                        <Briefcase size={16} />
                                    </motion.div>
                                </div>
                                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} mt-2 md:mt-0`}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-white/80 dark:bg-neutral-900/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-brand/40 dark:hover:border-brand/40 transition-all duration-300 shadow-xl dark:shadow-2xl hover:shadow-[0_0_30px_rgba(100,108,255,0.15)] relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl"></div>
                                        <span className="text-brand font-mono text-sm uppercase tracking-widest font-bold mb-3 block">{exp.period}</span>
                                        <h3 className="text-2xl md:text-3xl font-extrabold mb-2 text-neutral-900 dark:text-white drop-shadow-sm">{exp.title}</h3>
                                        <h4 className="text-lg text-neutral-700 dark:text-neutral-300 mb-4 font-semibold">{exp.company}</h4>
                                        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">{exp.description}</p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
