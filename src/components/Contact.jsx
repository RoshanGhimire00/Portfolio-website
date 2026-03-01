import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-neutral-100 dark:bg-neutral-950 transition-colors duration-500">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-neutral-900 dark:text-white">Get In <span className="text-brand">Touch</span></h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-white">Let's connect</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                                <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center mr-4 text-brand shadow-sm">
                                    <Mail size={20} />
                                </div>
                                <span>ghimireroshan00@gmail.com</span>
                            </div>
                            <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                                <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center mr-4 text-brand shadow-sm">
                                    <Phone size={20} />
                                </div>
                                <span>+977 9842676002</span>
                            </div>
                            <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                                <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center mr-4 text-brand shadow-sm">
                                    <MapPin size={20} />
                                </div>
                                <span>Kathmandu, Nepal</span>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 shadow-sm"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 shadow-sm"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 resize-none shadow-sm"
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="w-full bg-brand text-white font-bold py-4 rounded-lg hover:bg-brand/90 transition-colors shadow-[0_4px_14px_0_rgba(100,108,255,0.39)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-24 text-center border-t border-neutral-200 dark:border-neutral-800 pt-8 text-neutral-500 text-sm">
                <p>© {new Date().getFullYear()} Roshan. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Contact;
