"use client"
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "Директор по продажам — разработка стратегии продаж и управление коммерческой деятельностью",
        category: "Professional Education City Business School ",
        date: "2024–2025",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    },
    {
        id: 2,
        title: "Курс по таргетированной рекламе и цифровому маркетингу",
        category: "Space Academy ",
        date: "2024",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    },
    {
        id: 3,
        title: "Мобильная фотография и визуальное производство",
        category: "Content Creation Course ",
        date: "2023",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    },
];

const Blog = () => {
    return (
        <div className="w-full h-full bg-[#0A0513] flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-24 pt-20 sm:pt-24 pb-8">

            {/* Header */}
            <div className="flex flex-row items-center justify-between gap-4 mb-10 sm:mb-14 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    Квалификация и сертификаты
                </h2>
                <button className="flex items-center gap-1.5 sm:gap-2 text-white text-sm sm:text-base font-medium shrink-0 hover:text-[#D8FA08] transition-colors cursor-pointer">
                    <span className="hidden sm:inline">View More Posts</span>
                    <span className="sm:hidden">More</span>
                    <ArrowUpRight className="text-[#D8FA08]" size={20} />
                </button>
            </div>

            {/* Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 content-start">
                {blogPosts.map((post) => (
                    <article key={post.id} className="group cursor-pointer">
                        <div className="w-full aspect-[2/5] sm:aspect-[3/2] overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="mt-4 sm:mt-5 flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                            <span>{post.category}</span>
                            <span>/</span>
                            <span>{post.date}</span>
                        </div>

                        <h3 className="mt-2 text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#D8FA08] transition-colors">
                            {post.title}
                        </h3>
                    </article>
                ))}
            </div>

        </div>
    );
};

export default Blog;