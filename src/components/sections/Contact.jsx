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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center">
                            <p className="text-gray-300 text-base sm:text-lg mb-4">
                                Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
                            </p>
                            <p className="text-gray-300 text-base sm:text-lg mb-4">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                        </div>
                        <form className='space-y-4 sm:space-y-6' onSubmit={handleSubmit}>
                            <div className="relative">
                                <input 
                                    type='text' 
                                    id='name' 
                                    name='name' 
                                    required
                                    value={formData.name} 
                                    className='w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
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
                                    className='w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
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
                                    rows={4}
                                    className='w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none'
                                    placeholder='Your Message...'
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button 
                                type='submit' 
                                className='w-full bg-blue-500 text-white py-2.5 sm:py-3 px-6 rounded font-medium text-sm sm:text-base transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default Contact