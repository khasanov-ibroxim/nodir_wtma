"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import testimonial_bg from "@/assets/testimonial/testimonial_bg.jpg"
import p1 from "@/assets/testimonial/p1.png"
import p2 from "@/assets/testimonial/p2.png"
import p3 from "@/assets/testimonial/p3.png"

const testimonials = [
    {
        id: 1,
        name: "Сертифицированный специалист",
        position: " Продажи • Таргетированная реклама • Контент",
        text: "Формирование системного подхода к продажам, digital-продвижению и созданию визуального контента через профессиональное обучение и практику.",
    }
];

const partners = [
    { name: "Artchive", src: p1.src },
    { name: "Neuton", src: p2.src },
    { name: "Christopher Willis", src: p3.src },
    { name: "Creative Space", src: p1.src  },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <div className="relative w-full h-full overflow-hidden bg-[#0A0513]">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${testimonial_bg.src}')` }}
            />
            {/* Left-to-right fade so text on the right stays readable, dark base on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0513]/10 via-[#0A0513]/40 to-[#0A0513]/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0513] via-transparent to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full w-full flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-24 pt-24 pb-8">

                {/* Quote mark */}
                <div className="text-[#D8FA08] text-6xl sm:text-7xl md:text-8xl leading-none font-serif select-none">
                    &#8220;
                </div>

                {/* Middle: heading (left) + testimonial card (right) */}
                <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-6 -mt-8">

                    {/* Heading */}
                    <h2 className="max-w-xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.15]">
                        Практический опыт, подкреплённый профессиональным обучением и международным подходом к развитию бизнеса.
                    </h2>

                    {/* Testimonial block */}
                    <div className="w-full lg:max-w-md xl:max-w-lg">
                        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10">
                            "{current.text}"
                        </p>

                        <div className="flex items-center justify-between gap-6">
                            {/* Name with decorative arc */}
                            <div className="relative flex flex-col items-start">

                                <span className="relative font-serif italic text-2xl sm:text-3xl text-white">
                                   {current.name}
                                </span>
                                <span className="relative text-white/60 text-sm mt-1">
                                    {current.position}
                                </span>
                            </div>

                            {/* Arrows */}
                            <div className="flex gap-3 shrink-0">
                                <button
                                    onClick={prevTestimonial}
                                    aria-label="Previous testimonial"
                                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#D8FA08] hover:text-black hover:border-[#D8FA08] transition-all cursor-pointer"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    aria-label="Next testimonial"
                                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#D8FA08] hover:text-black hover:border-[#D8FA08] transition-all cursor-pointer"
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer row: partner logos only */}
                {/*<div className="flex flex-wrap items-center justify-between sm:justify-start gap-x-8 gap-y-4 md:gap-x-14">*/}
                {/*    {partners.map((p) => (*/}
                {/*        <img*/}
                {/*            key={p.name}*/}
                {/*            src={p.src}*/}
                {/*            alt={p.name}*/}
                {/*            className="h-5 sm:h-6 md:h-7 w-auto object-contain opacity-90"*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Testimonials;