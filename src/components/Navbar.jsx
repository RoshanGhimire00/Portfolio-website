import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Certifications', href: '#certifications', id: 'certifications' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        navLinks.forEach(link => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md py-4 shadow-lg border-b border-neutral-200 dark:border-neutral-800' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="text-2xl font-bold tracking-tighter text-neutral-900 dark:text-white transition-colors duration-300">
                    PORT<span className="text-brand">FOLIO</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors text-sm uppercase tracking-widest font-medium ${activeSection === link.id ? 'text-brand underline underline-offset-4 decoration-2' : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Theme Toggle & Social Links */}
                    <div className="flex items-center space-x-4 pl-4 border-l border-neutral-300 dark:border-neutral-700">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="text-neutral-500 hover:text-brand dark:text-neutral-400 dark:hover:text-brand transition-colors p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <a href="https://github.com/RoshanGhimire00" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors p-1">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/ghimireroshan" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors p-1">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-neutral-800 dark:text-white p-1"
                    >
                        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <button
                        className="text-neutral-800 dark:text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-xl md:hidden"
                    >
                        <div className="flex flex-col px-6 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-neutral-800 hover:text-brand dark:text-neutral-200 dark:hover:text-white text-lg font-medium tracking-wide ${activeSection === link.id ? 'text-brand underline underline-offset-4 decoration-2' : ''}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                                <a href="https://github.com" className="text-neutral-600 hover:text-brand dark:text-neutral-400 dark:hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com" className="text-neutral-600 hover:text-brand dark:text-neutral-400 dark:hover:text-white">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:email@example.com" className="text-neutral-600 hover:text-brand dark:text-neutral-400 dark:hover:text-white">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
