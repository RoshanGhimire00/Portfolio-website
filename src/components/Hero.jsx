import React from 'react';
import { motion } from 'framer-motion';
import ShapesCanvas from './canvas/Shapes';
import MyPhoto from '../assets/photos/AboutMe.jpg';

const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen mx-auto overflow-hidden">
            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0">
                <ShapesCanvas />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col md:flex-row-reverse items-center justify-center pointer-events-none px-6 md:px-12 gap-8 md:gap-16">

                {/* Hero Add-on: Profile Image with Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="pointer-events-auto relative mt-20 md:mt-0"
                >
                    {/* Floating animation wrapper */}
                    <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-48 h-48 md:w-80 md:h-80 rounded-full border-4 border-brand/30 p-2 shadow-[0_0_40px_rgba(100,108,255,0.3)] bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md"
                    >
                        {/* Actual Image */}
                        <div className="w-full h-full rounded-full overflow-hidden absolute inset-0 m-auto" style={{ width: 'calc(100% - 16px)', height: 'calc(100% - 16px)' }}>
                            <img
                                src={MyPhoto}
                                alt="Roshan - Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative animated ring */}
                        <div className="absolute inset-0 rounded-full border-t-2 border-brand/80 animate-[spin_5s_linear_infinite]"></div>
                        <div className="absolute inset-[-10px] rounded-full border-b-2 border-purple-500/50 animate-[spin_8s_linear_infinite_reverse]"></div>
                    </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-center md:text-left pointer-events-auto max-w-xl"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-2xl">
                        Hi, I'm <span className="text-blue-800">Roshan Ghimire</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 drop-shadow-lg font-light">
                        A tech enthusiast documenting my journey into web development.
                    </p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-brand text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand/90 transition-colors shadow-[0_0_20px_rgba(100,108,255,0.4)] hover:shadow-[0_0_30px_rgba(100,108,255,0.6)] text-center"
                        >
                            View Projects
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
