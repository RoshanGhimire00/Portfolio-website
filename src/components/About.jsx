import React from 'react';
import aboutPhoto from '../assets/photos/MyPhotos.jpg';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-white dark:bg-neutral-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-neutral-900 dark:text-white">About <span className="text-brand">Me</span></h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                        <p>
                            I am an aspiring web developer passionate about building engaging and performant web applications.
                            Currently learning the MERN stack and modern front-end technologies like React and Tailwind CSS, I’m focused on turning ideas into interactive projects while growing my skills step by step

                        </p>
                        <p>
                            My approach blends clean, structured code with thoughtful design, aiming to create projects that not only work seamlessly but also deliver an enjoyable user experience.


                        </p>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Three.js'].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium text-brand shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full bg-neutral-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-lg dark:shadow-none">
                        {/* Use the imported photo */}
                        <img
                            src={aboutPhoto}
                            alt="About me"
                            className="object-cover h-full w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
