"use client"
import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Header from "@/components/header";
import Portfolio from "@/components/portfolio";
import About from "@/components/about";
import Experience from "@/components/experience";
import Testimonials from "@/components/testimonials";
import Blog from "@/components/blog";
import Contact from "@/components/contact";

const VerticalScrollPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const swiperRef = useRef(null);

    const menuItems = [
        {id: 0, label: 'Home', color: 'text-lime-400'},
        {id: 1, label: 'About', color: 'text-white'},
        {id: 2, label: 'Portfolio', color: 'text-white'},
        {id: 3, label: 'Experience', color: 'text-white'},
        {id: 4, label: 'Testimonials', color: 'text-white'},
        {id: 5, label: 'Blog', color: 'text-white'},
        {id: 6, label: 'Contact', color: 'text-white'},
    ];

    const sections = [
        {
            id: 0,
            content: <Header/>,
            bg: "/images/header/header.jpg"
        },
        {
            id: 0,
            content: <About/>
        },
        {
            id: 0,
            content: <Portfolio/>
        },
        {
            id: 0,
            content: <Experience/>
        },
        {
            id: 0,
            content: <Testimonials/>
        },
        {
            id: 0,
            content: <Blog/>
        },
        {
            id: 0,
            content: <Contact/>
        },

    ];

    const navigateToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setMenuOpen(false);
        }
    };

    return (
        <div className="h-screen w-full overflow-hidden  relative">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-20 px-8 py-6 flex justify-between items-center border-amber-50/50 border-b">
                <div className="text-white text-2xl font-serif italic">
                    <span className="font-light">_</span>Roger
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="w-12 h-12 flex flex-col justify-center items-center gap-1.5 group cursor-pointer"
                >
                    <span
                        className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span
                        className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span
                        className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </nav>

            {/* Full Screen Menu */}
            <div className={`fixed inset-0 z-20 pointer-events-none ${menuOpen ? '' : ''}`}>
                {/* Menu Panel - Desktop: 30% width from right, Mobile: 100% width */}
                <div
                    className={`absolute top-0 right-0 bottom-0 w-full md:w-[30%] bg-slate-950 transition-transform duration-500 pointer-events-auto ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="overflow-y-auto h-full px-8 md:px-12 pt-10">
                        <div className="relative w-full min-h-full">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="w-12 h-12 absolute top-0 right-0 flex flex-col justify-center items-center gap-1.5 group cursor-pointer"
                            >
                    <span
                        className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span
                                    className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                                <span
                                    className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </button>
                            <nav className="pl-1 pt-15 lg:pl-0 lg:pr-12 pb-8">
                                {/* Language selector */}
                                <div className="flex gap-6 mb-12 text-sm">
                                    <button className="text-lime-400 font-semibold">EN</button>
                                    <button className="text-white/60 hover:text-white transition-colors">FR</button>
                                    <button className="text-white/60 hover:text-white transition-colors">DE</button>
                                </div>

                                {/* Menu items */}
                                <ul className="space-y-4 lg:space-y-6">
                                    {menuItems.map((item, index) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => navigateToSlide(item.id)}
                                                className={`cursor-pointer text-xl md:text-2xl lg:text-3xl font-bold ${item.color} hover:translate-x-2 transition-all duration-300 text-left block`}
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                {/* Social icons */}
                                <div className="flex gap-6 mt-12 md:mt-16">
                                    <a href="#" className="text-white hover:text-lime-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white hover:text-lime-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white hover:text-lime-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.5c-4.142 0-7.5-3.358-7.5-7.5S7.858 4.5 12 4.5s7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white hover:text-lime-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                </div>

                                {/* Copyright */}
                                <div className="mt-12 md:mt-16 text-white/60 text-sm">
                                    <p>© 2021 Copyright.</p>
                                    <p>All rights reserved.</p>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>


            </div>

            {/* Swiper */}
            <Swiper
                ref={swiperRef}
                direction="vertical"
                slidesPerView={1}
                speed={800}
                mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                    releaseOnEdges: true,
                }}

                modules={[Mousewheel, Pagination]}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full h-full"
            >
                {sections.map((section, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`w-full h-full  relative overflow-hidden bg-cover`}
                            style={section.bg ? {backgroundImage: `url(${section.bg})`} : {background: "#0A0513"}}>
                            {section.content}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default VerticalScrollPage;