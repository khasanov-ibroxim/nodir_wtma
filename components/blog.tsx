import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "The Future of UX Design in 2026",
        excerpt: "Exploring emerging trends and technologies that are shaping the future of user experience design.",
        date: "July 5, 2026",
        category: "Design",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Creating Meaningful Brand Identities",
        excerpt: "A deep dive into the process of crafting brand identities that resonate with audiences.",
        date: "June 28, 2026",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        readTime: "7 min read"
    },
    {
        id: 3,
        title: "Minimalism in Modern Web Design",
        excerpt: "Why less is more: exploring the power of minimalist design principles in today's digital landscape.",
        date: "June 15, 2026",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
        readTime: "4 min read"
    }
];

const Blog = () => {
    return (
        <div className="w-full h-full flex items-center justify-center px-8 md:px-20 py-24">
            <div className="w-full max-w-7xl">
                {/* Header */}
                <div className="mb-16">
                    <p className="text-white/60 text-sm mb-4 tracking-wider uppercase">Blog & Insights</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Latest <span className="text-[#D8FA08]">Articles</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl">
                        Thoughts, insights, and stories about design, creativity, and the digital world.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#D8FA08]/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#D8FA08] text-black text-xs font-bold px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-white/50 text-sm mb-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>{post.date}</span>
                                    </div>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#D8FA08] transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-white/60 text-sm leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-[#D8FA08] font-semibold text-sm group-hover:gap-4 transition-all">
                                    Read More
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-12">
                    <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-full hover:bg-[#D8FA08] hover:text-black hover:border-[#D8FA08] transition-all duration-300 font-semibold">
                        View All Articles
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;