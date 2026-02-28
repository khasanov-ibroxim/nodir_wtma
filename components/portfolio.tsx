"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import bg from "@/assets/portfolio/portfolio_bg.jpg"
import Image from "next/image";
const Portfolio = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const portfolioItems = [
        {
            id: 1,
            category: "Inspiration",
            title: "Playstation 5 Dualshock",
            image: "/images/portfolio/ps5.jpg"
        },
        {
            id: 2,
            category: "Photography",
            title: "Good Vibes Only",
            image: "/images/portfolio/vibes.jpg"
        },
        {
            id: 3,
            category: "Design",
            title: "Creative Artwork",
            image: "/images/portfolio/artwork.jpg"
        },
        {
            id: 4,
            category: "Design",
            title: "Minimal Concept",
            image: "/images/portfolio/minimal.jpg"
        }
    ];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (hoveredIndex !== null && containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        if (hoveredIndex !== null) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [hoveredIndex]);

    return (
        <div className="w-full relative h-auto flex items-center justify-center px-4 md:px-8 ">
            <div className="absolute z-10 w-full h-full"><Image src={bg} alt={"asd"}/></div>

        </div>
    );
};

export default Portfolio;