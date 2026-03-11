import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, CheckCircle, XCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitMessage, setSubmitMessage] = useState('');


    // useEffect(() => {
    //     console.log('EmailJS Config:', {
    //         serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ? '✓ Loaded' : '✗ Missing (using fallback)',
    //         templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? '✓ Loaded' : '✗ Missing (using fallback)',
    //         userId: import.meta.env.VITE_EMAILJS_USER_ID ? '✓ Loaded' : '✗ Missing (using fallback)'
    //     });
    // }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateEmail(formData.user_email)) {
            setSubmitStatus('error');
            setSubmitMessage('Please enter a valid email address');
            setTimeout(() => setSubmitStatus(null), 5000);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);
        setSubmitMessage('');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_gfr03b3';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_ks0eip9';
        const userId = import.meta.env.VITE_EMAILJS_USER_ID || 'XLZrMZu9z-FcNsbFV';

        emailjs.sendForm(
            serviceId,
            templateId,
            e.target,
            userId
        ).then((result) => {
            // console.log('Email sent successfully:', result.text);
            setIsSubmitting(false);
            setSubmitStatus('success');
            setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
            setFormData({ user_name: '', user_email: '', message: '' });
            setTimeout(() => {
                setSubmitStatus(null);
                setSubmitMessage('');
            }, 5000);
        }).catch((error) => {
            // console.error('EmailJS Error:', error);
            setIsSubmitting(false);
            setSubmitStatus('error');
            setSubmitMessage('Failed to send message. Please try again or email me directly.');
            setTimeout(() => {
                setSubmitStatus(null);
                setSubmitMessage('');
            }, 5000);
        });
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-neutral-100 dark:bg-neutral-950 transition-colors duration-500">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-neutral-900 dark:text-white">
                    Get In <span className="text-brand">Touch</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left side contact info */}
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
                                <a
                                    href="mailto:ghimireroshan00@gmail.com?subject=Hello%20from%20your%20portfolio&body=I%20would%20like%20to%20connect%20with%20you..."
                                    className="hover:text-brand transition-colors duration-300"
                                >
                                    ghimireroshan00@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                                <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center mr-4 text-brand shadow-sm">
                                    <Phone size={20} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="tel:+9779842676002"
                                        className="hover:text-brand transition-colors duration-300"
                                        title="Click to call"
                                    >
                                        +977 9842676002
                                    </a>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText('+9779842676002');
                                            // Optional: Show a toast notification
                                            alert('Phone number copied!');
                                        }}
                                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                        title="Copy number"
                                    >
                                        Copy
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                                <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center mr-4 text-brand shadow-sm">
                                    <MapPin size={20} />
                                </div>
                                <span>New-Baneshwor, Kathmandu, Nepal</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side contact form */}
                    <form className="space-y-6" onSubmit={sendEmail}>
                        <div>
                            <input
                                type="text"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 shadow-sm"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 shadow-sm"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 resize-none shadow-sm"
                                required
                            ></textarea>
                        </div>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="flex items-center gap-2 p-4 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg animate-fadeIn">
                                <CheckCircle size={20} />
                                <span>{submitMessage}</span>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="flex items-center gap-2 p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg animate-fadeIn">
                                <XCircle size={20} />
                                <span>{submitMessage}</span>
                            </div>
                        )}

                        {/* Submit Button with Loading State */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-brand text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-[0_4px_14px_0_rgba(100,108,255,0.39)] ${isSubmitting
                                ? 'opacity-70 cursor-not-allowed transform scale-95'
                                : 'hover:bg-brand/90 hover:shadow-[0_6px_20px_0_rgba(100,108,255,0.5)] hover:transform hover:scale-[1.02]'
                                }`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : 'Send Message'}
                        </button>

                        {/* Accessibility live region */}
                        <div aria-live="polite" className="sr-only">
                            {submitStatus === 'success' && 'Message sent successfully'}
                            {submitStatus === 'error' && 'Failed to send message'}
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-24 text-center border-t border-neutral-200 dark:border-neutral-800 pt-8 text-neutral-500 text-sm">
                <p>© {new Date().getFullYear()} Roshan. All rights reserved.</p>
            </div>

            {/* Animation styles */}
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(-10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    .animate-fadeIn {
                        animation: fadeIn 0.3s ease-in-out;
                    }
                `}
            </style>
        </section>
    );
};

export default Contact;
