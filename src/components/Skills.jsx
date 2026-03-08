import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React', level: 95, color: '#61DAFB' },
    { name: 'Node.js', level: 75, color: '#339933' },
    { name: 'TypeScript', level: 70, color: '#3178C6' },
    { name: 'Next.js', level: 60, color: '#000000' },
    { name: 'Tailwind CSS', level: 90, color: '#06B6D4' },
    { name: 'MongoDB', level: 80, color: '#47A248' },
    { name: 'PostgreSQL', level: 75, color: '#336791' },
    { name: 'GraphQL', level: 82, color: '#E10098' },
];

const SkillNode = ({ skill, index }) => {

    const randomY = [
        Math.random() * -20 - 10,
        Math.random() * 20 + 10,
        Math.random() * -20 - 10,
    ];
    const randomX = [
        Math.random() * -10,
        Math.random() * 10,
        Math.random() * -10,
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.1,
                duration: 0.8,
                type: 'spring',
                stiffness: 100
            }}
            className="relative flex flex-col items-center justify-center p-6 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:border-brand dark:hover:border-brand/50 transition-colors z-10 group"
        >
            <motion.div
                animate={{ y: randomY, x: randomX }}
                transition={{
                    duration: Math.random() * 3 + 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="flex flex-col items-center"
            >
                <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle
                            cx="48"
                            cy="48"
                            r="40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="6"
                            className="text-neutral-100 dark:text-neutral-800"
                        />
                        <motion.circle
                            initial={{ strokeDasharray: 251, strokeDashoffset: 251 }}
                            whileInView={{ strokeDashoffset: 251 - (251 * skill.level) / 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                            cx="48"
                            cy="48"
                            r="40"
                            fill="none"
                            stroke={skill.color}
                            strokeWidth="6"
                            strokeLinecap="round"
                            className="drop-shadow-md"
                        />
                    </svg>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl font-black text-neutral-800 dark:text-white"
                    >
                        {skill.level}%
                    </motion.div>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 dark:text-white group-hover:text-brand transition-colors">{skill.name}</h3>
            </motion.div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 md:px-12 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden transition-colors duration-500">
            {/* Decorative background grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">Technical <span className="text-brand">Skills</span></h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
                    {skills.map((skill, index) => (
                        <SkillNode key={index} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
