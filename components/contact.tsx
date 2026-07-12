"use client"
import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Facebook, Twitter, Linkedin } from 'lucide-react';
import contactBG from "@/assets/contact/contactBg.jpg"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        budget: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="relative w-full h-full overflow-hidden ">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${contactBG.src})` }}
            />
            <div className="absolute inset-0 bg-[#0A0513]/20" />

            {/* Content */}
            <div className="relative z-10 h-full w-full overflow-y-auto">
                <div className="min-h-full flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-24 pt-20 sm:pt-24 pb-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 flex-1">

                        {/* Left Section */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none mb-6 sm:mb-8">
                                Контакт
                            </h2>

                            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-xs">
                                Открыт к сотрудничеству, консалтингу и новым бизнес-проектам.
                                Буду рад обсудить идеи, которые помогут вашему бизнесу расти.

                            </p>

                            {/* Social icons */}
                            <div className="flex gap-4 sm:gap-5 mb-10 sm:mb-14">
                                <a href="#" aria-label="Facebook" className="text-white hover:text-[#D8FA08] transition-colors">
                                    <Facebook size={20} fill="currentColor" />
                                </a>
                                <a href="#" aria-label="Twitter" className="text-white hover:text-[#D8FA08] transition-colors">
                                    <Twitter size={20} fill="currentColor" />
                                </a>
                                <a href="#" aria-label="Pinterest" className="text-white hover:text-[#D8FA08] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.222-.174.269-.402.163-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378 0 0-.602 2.291-.748 2.852-.271 1.043-1.002 2.351-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#D8FA08] transition-colors">
                                    <Linkedin size={20} fill="currentColor" />
                                </a>
                            </div>

                            {/* Phone / Email */}
                            <div className="space-y-2 sm:space-y-3">
                                <a href="tel:+998946066553" className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-white hover:text-[#D8FA08] transition-colors">
                                    +998 94 606 65 53
                                </a>
                                <a href="mailto:textile_promotion@mail.ru" className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-white hover:text-[#D8FA08] transition-colors">
                                    textile_promotion@mail.ru
                                </a>
                            </div>
                        </div>

                        {/* Right Section - Form */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug mb-8 sm:mb-10 max-w-lg">
                                Каждый сильный проект начинается с открытого диалога.
                                Если у вас есть идея, задача или предложение —

                                <span className="text-[#D8FA08]">буду рад обсудить их.</span>
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-10">
                                    <div>
                                        <label htmlFor="name" className="block text-white/70 text-sm mb-3">Имя</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-0 border-b border-white/30 text-white pb-2 focus:outline-none focus:border-[#D8FA08] transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-white/70 text-sm mb-3">Телефон</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-0 border-b border-white/30 text-white pb-2 focus:outline-none focus:border-[#D8FA08] transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-white/70 text-sm mb-3">Электронная почта </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-0 border-b border-white/30 text-white pb-2 focus:outline-none focus:border-[#D8FA08] transition-colors"
                                        />
                                    </div>

                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white/70 text-sm mb-3">Сообщение</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={2}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-0 border-b border-white/30 text-white pb-2 focus:outline-none focus:border-[#D8FA08] transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 sm:gap-3 bg-[#D8FA08] text-black text-xs sm:text-sm font-bold tracking-wider uppercase px-8 sm:px-10 py-4 sm:py-5 hover:bg-[#c5e607] transition-colors cursor-pointer"
                                >
                                    Send Request
                                    <ArrowUpRight size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer */}
                </div>
            </div>
        </div>
    );
};

export default Contact;