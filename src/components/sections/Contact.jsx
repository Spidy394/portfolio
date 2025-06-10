import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((response) => {
            alert("Message sent!");
            console.log('SUCCESS!', response.status, response.text);
            setFormData({ name: "", email: "", message: "" })
        })
        .catch((error) =>{ 
            alert("Something went wrong. Please try again.");
            console.log('FAILED...', error);
        });
    };

    return (
        <section 
            id='contact' 
            className='min-h-screen flex items-center justify-center py-16 md:py-20'
        >
            <RevealOnScroll>
                <div className="container mx-auto max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
                        Get In Touch
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="flex flex-col justify-center p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-white/10">
                            <h3 className="text-xl font-bold mb-6 text-white">Let's Connect</h3>
                            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                                Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
                            </p>
                            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <span className="text-blue-400 text-sm">📧</span>
                                    </div>
                                    <span className="text-gray-300">Quick response guaranteed</span>
                                </div>
                                <div className="flex items-center gap-4 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                        <span className="text-cyan-400 text-sm">🤝</span>
                                    </div>
                                    <span className="text-gray-300">Open to collaboration</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-white/10">
                            <form className='space-y-6' onSubmit={handleSubmit}>
                                <div className="relative">
                                    <input 
                                        type='text' 
                                        id='name' 
                                        name='name' 
                                        required
                                        value={formData.name} 
                                        className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-sm sm:text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 focus:shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:border-white/30'
                                        placeholder='Your Name...'
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="relative">
                                    <input 
                                        type='email' 
                                        id='email' 
                                        name='email' 
                                        required 
                                        value={formData.email}
                                        className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-sm sm:text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 focus:shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:border-white/30'
                                        placeholder='youremail@gmail.com'
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="relative">
                                    <textarea 
                                        id='message' 
                                        name='message' 
                                        required 
                                        value={formData.message}
                                        rows={5}
                                        className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-sm sm:text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 focus:shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:border-white/30 resize-none'
                                        placeholder='Your Message...'
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <button 
                                    type='submit' 
                                    className='w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.4)] backdrop-blur-sm'
                                >
                                    <span className="relative z-10">Send Message</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default Contact