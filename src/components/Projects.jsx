import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import foodImage from '../assets/images/FoodAccessManagementSystem.png';
import GroceryImage from '../assets/images/GroceryStore.png';
import PharmacyImage from '../assets/images/Pharmacy.png';

const projects = [
    {
        title: 'Food Access Management System',
        description: 'A website where the donor can donate food and the recipient can request it.',
        image: foodImage,
        tags: ['React', 'Express', 'MongoDB'],
    },
    {
        title: 'Grocery Store',
        description: 'A grocery store website where users can browse and purchase products online.',
        image: GroceryImage,
        tags: ['React', 'Firebase', 'Tailwind'],
    },
    {
        title: 'Pharmacy Website',
        description: 'This website is a simple and reliable website for the pharmacy.',
        image: PharmacyImage,
        tags: ['React', 'Three.js', 'Framer Motion'],
    },
];

const TiltCard = ({ project }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative h-full bg-white dark:bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-brand/50 dark:hover:border-brand/50 transition-colors duration-300 shadow-xl dark:shadow-none"
        >
            <div style={{ transform: "translateZ(50px)" }} className="flex flex-col h-full pointer-events-none">
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-2xl"
                    />
                </div>
                {/* Overlay shadow to emphasize 3d depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950 via-transparent to-transparent opacity-60"></div>

                <div className="p-6 flex flex-col flex-grow relative z-10 pointer-events-auto bg-white/50 dark:bg-transparent">
                    <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white drop-shadow-sm">{project.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6 pointer-events-auto">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-semibold tracking-wider px-3 py-1 bg-brand/10 dark:bg-brand/20 border border-brand/20 dark:border-brand/30 rounded-full text-brand shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center border-t border-neutral-200 dark:border-neutral-800/80 pt-4 pointer-events-auto">
                        <motion.a whileHover={{ y: -2 }} href="#" className="flex items-center text-sm font-bold text-neutral-500 hover:text-brand dark:text-neutral-400 dark:hover:text-brand transition-colors">
                            <Github size={18} className="mr-2" /> Code
                        </motion.a>
                        <motion.a whileHover={{ y: -2 }} href="#" className="flex items-center text-sm font-bold text-neutral-500 hover:text-brand dark:text-neutral-400 dark:hover:text-brand transition-colors">
                            <ExternalLink size={18} className="mr-2" /> Live Demo
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-neutral-100 dark:bg-neutral-900 overflow-hidden perspective-[2000px] transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-neutral-900 dark:text-white">Featured <span className="text-brand">Projects</span></h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 perspective-[2000px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, z: -100, rotateY: 15 }}
                            whileInView={{ opacity: 1, z: 0, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                            style={{ perspective: 1000 }}
                            className="h-full flex flex-col"
                        >
                            <TiltCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
