"use client"
import React, {useRef, useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel} from 'swiper/modules';
import 'swiper/css';
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
    const slideRefs = useRef([]);
    const [canSwipe, setCanSwipe] = useState(true);

    const menuItems = [
        {id: 0, label: 'Home'},
        {id: 1, label: 'About'},
        {id: 2, label: 'Portfolio'},
        {id: 3, label: 'Experience'},
        {id: 4, label: 'Testimonials'},
        {id: 5, label: 'Blog'},
        {id: 6, label: 'Contact'},
    ];

    const sections = [
        {
            id: 0,
            content: <Header/>,
            bg: "/images/header/header.jpg"
        },
        {
            id: 1,
            content: <About/>
        },
        {
            id: 2,
            content: <Portfolio/>
        },
        {
            id: 3,
            content: <Experience/>
        },
        {
            id: 4,
            content: <Testimonials/>
        },
        {
            id: 5,
            content: <Blog/>
        },
        {
            id: 6,
            content: <Contact/>
        },
    ];

    const navigateToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        const checkScroll = () => {
            const currentSlide = slideRefs.current[activeIndex];
            if (!currentSlide) return;

            const hasScroll = currentSlide.scrollHeight > currentSlide.clientHeight;

            if (!hasScroll) {
                setCanSwipe(true);
                return;
            }

            const scrollTop = currentSlide.scrollTop;
            const scrollHeight = currentSlide.scrollHeight;
            const clientHeight = currentSlide.clientHeight;
            const isAtTop = scrollTop === 0;
            const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

            // Faqat tepada yoki pastda bo'lganda swipe qilish mumkin
            setCanSwipe(isAtTop || isAtBottom);
        };

        const currentSlide = slideRefs.current[activeIndex];
        if (currentSlide) {
            currentSlide.addEventListener('scroll', checkScroll);
            checkScroll();
        }

        return () => {
            if (currentSlide) {
                currentSlide.removeEventListener('scroll', checkScroll);
            }
        };
    }, [activeIndex]);

    return (
        <div className="h-screen w-full overflow-hidden relative">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center border-amber-50/50 border-b bg-black/20 backdrop-blur-sm">
                <div className="text-white text-2xl font-serif italic">
                    <span className="font-light">_</span>Roger
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="w-12 h-12 flex flex-col justify-center items-center gap-1.5 group cursor-pointer z-50"
                >
                    <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </nav>

            {/* Full Screen Menu */}
            <div className={`fixed inset-0 z-[60] pointer-events-none`}>
                <div className={`absolute top-0 right-0 bottom-0 w-full md:w-[30%] bg-slate-950 transition-transform duration-500 pointer-events-auto ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="overflow-y-auto h-full px-8 md:px-12 pt-10">
                        <div className="relative w-full min-h-full">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="w-12 h-12 absolute top-0 right-0 flex flex-col justify-center items-center gap-1.5 group cursor-pointer"
                            >
                                <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </button>
                            <nav className="pl-1 pt-15 lg:pl-0 lg:pr-12 pb-8">
                                <div className="flex gap-6 mb-12 text-sm">
                                    <button className="text-lime-400 font-semibold">EN</button>
                                    <button className="text-white/60 hover:text-white transition-colors">FR</button>
                                    <button className="text-white/60 hover:text-white transition-colors">DE</button>
                                </div>

                                <ul className="space-y-4 lg:space-y-6">
                                    {menuItems.map((item, index) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => navigateToSlide(item.id)}
                                                className={`cursor-pointer text-xl md:text-2xl lg:text-3xl font-bold ${activeIndex === item.id ? 'text-lime-400' : 'text-white'} hover:translate-x-2 transition-all duration-300 text-left block`}
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex gap-6 mt-12 md:mt-16">
                                    <a href="#" className="text-white hover:text-lime-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white hover:text-lime-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white hover:text-lime-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.5c-4.142 0-7.5-3.358-7.5-7.5S7.858 4.5 12 4.5s7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white hover:text-lime-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                </div>

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
                speed={600}
                mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                    releaseOnEdges: true,
                }}
                allowTouchMove={canSwipe}
                touchRatio={1.5}
                threshold={5}
                modules={[Mousewheel]}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                    // Yangi slide ga o'tganda scroll ni tepaga qaytarish
                    const newSlide = slideRefs.current[swiper.activeIndex];
                    if (newSlide) {
                        newSlide.scrollTop = 0;
                    }
                }}
                className="w-full h-full"
            >
                {sections.map((section, index) => (
                    <SwiperSlide key={index}>
                        <div
                            ref={(el) => (slideRefs.current[index] = el)}
                            className="w-full h-full relative bg-cover overflow-y-auto"
                            style={section.bg ? {backgroundImage: `url(${section.bg})`} : {background: "#0A0513"}}
                        >
                            <div className="min-h-full flex items-center justify-center py-24 px-4">
                                {section.content}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default VerticalScrollPage;