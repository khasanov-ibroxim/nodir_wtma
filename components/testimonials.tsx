"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "CEO at TechCorp",
        image: "https://i.pravatar.cc/150?img=1",
        text: "Working with Roger was an absolute pleasure. His attention to detail and creative vision transformed our brand identity completely. The results exceeded our expectations.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "Product Manager at StartupXYZ",
        image: "https://i.pravatar.cc/150?img=33",
        text: "Roger's UX expertise helped us increase user engagement by 150%. He has a unique ability to understand user needs and translate them into beautiful, functional designs.",
        rating: 5
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        position: "Marketing Director at CreativeHub",
        image: "https://i.pravatar.cc/150?img=5",
        text: "Exceptional designer with great communication skills. Roger delivered our project on time and the quality was outstanding. Highly recommend!",
        rating: 5
    },
    {
        id: 4,
        name: "David Park",
        position: "Founder at DesignStudio",
        image: "https://i.pravatar.cc/150?img=12",
        text: "Roger's creative approach and technical skills are top-notch. He brought fresh ideas to our project and executed them flawlessly.",
        rating: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="w-full h-full flex items-center justify-center px-8 md:px-20 py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0513] via-[#1a0a2e] to-[#0A0513]"></div>

            <div className="w-full max-w-5xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-white/60 text-sm mb-4 tracking-wider uppercase">Testimonials</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        What <span className="text-[#D8FA08]">Clients Say</span>
                    </h2>
                </div>

                {/* Testimonial Card */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                    <Quote className="text-[#D8FA08] mb-6" size={48} strokeWidth={1.5} />

                    <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                        "{currentTestimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D8FA08]">
                            <img
                                src={currentTestimonial.image}
                                alt={currentTestimonial.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">{currentTestimonial.name}</h4>
                            <p className="text-white/60 text-sm">{currentTestimonial.position}</p>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-8">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-[#D8FA08]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D8FA08] hover:text-black hover:border-[#D8FA08] transition-all"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D8FA08] hover:text-black hover:border-[#D8FA08] transition-all"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === currentIndex
                                            ? 'bg-[#D8FA08] w-8'
                                            : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;