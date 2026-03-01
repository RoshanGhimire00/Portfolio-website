import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
    {
        title: "AWS Certified Developer - Associate",
        issuer: "Amazon Web Services",
        date: "2023",
        icon: "☁️",
        url: "#"
    },
    {
        title: "Meta Front-End Developer Professional",
        issuer: "Coursera",
        date: "2022",
        icon: "⚛️",
        url: "#"
    },
    {
        title: "MongoDB Certified Developer",
        issuer: "MongoDB Inc.",
        date: "2021",
        icon: "🍃",
        url: "#"
    }
];

const Certification = () => {
    return (
        <section id="certifications" className="py-24 px-6 md:px-12 bg-white dark:bg-neutral-900 relative transition-colors duration-500">
            {/* Background Details */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 relative"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white"> Licenses & <span className="text-brand">Certifications</span></h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Official recognitions of my technical skills and achievements.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', bounce: 0.4 }}
                            whileHover={{ y: -10 }}
                            className="bg-neutral-50 dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-brand/50 dark:hover:border-brand/50 transition-all duration-300 relative group overflow-hidden shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(100,108,255,0.3)] dark:shadow-2xl"
                        >
                            {/* Decorative background blur */}
                            <div className="absolute -right-16 -top-16 w-48 h-48 bg-brand/10 rounded-full blur-3xl group-hover:bg-brand/20 transition-colors duration-500"></div>

                            <div className="flex items-start justify-between mb-8 relative z-10">
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center p-2 border border-neutral-200 dark:border-neutral-700 shadow-sm dark:shadow-inner"
                                >
                                    <span className="text-3xl filter drop-shadow-md dark:drop-shadow-lg">{cert.icon}</span>
                                </motion.div>
                                <a href={cert.url} className="text-neutral-400 hover:text-brand dark:text-neutral-500 dark:hover:text-brand transition-colors p-3 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full shadow-sm">
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-3 leading-tight tracking-tight">{cert.title}</h3>
                                <div className="flex justify-between items-center mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
                                    <span className="text-neutral-600 dark:text-neutral-400 font-semibold">{cert.issuer}</span>
                                    <span className="text-brand text-sm font-black bg-brand/10 border border-brand/20 px-4 py-1.5 rounded-full shadow-sm">
                                        {cert.date}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certification;
