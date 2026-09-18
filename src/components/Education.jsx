import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/CVData';

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 md:px-12 bg-white dark:bg-neutral-900 relative transition-colors duration-500">
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">My <span className="text-brand">Education</span></h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Academic background that shaped my journey into technology.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {education.map((edu, index) => (
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

                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 shadow-sm dark:shadow-inner mb-8 relative z-10"
                            >
                                <GraduationCap size={28} className="text-brand" />
                            </motion.div>

                            <div className="relative z-10">
                                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2 leading-tight tracking-tight">{edu.degree}</h3>
                                <p className="text-brand font-semibold mb-4">{edu.school}</p>
                                <div className="space-y-2 pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">{edu.affiliation}</p>
                                    <p className="flex items-center gap-2 text-neutral-500 dark:text-neutral-500 text-sm">
                                        <MapPin size={14} className="shrink-0" />
                                        {edu.address}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
