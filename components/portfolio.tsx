"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image, {StaticImageData} from "next/image";

import bg from "@/assets/portfolio/portfolio_bg.jpg"
import i1 from "@/assets/portfolio/chust.png"
import i2 from "@/assets/portfolio/osborn.png"
import i3 from "@/assets/portfolio/zelal.png"
import i4 from "@/assets/portfolio/kh.png"
import i5 from "@/assets/portfolio/bakan.png"


interface PortfolioItem {
    id: number;
    category: string;
    title: string;
    image: string | StaticImageData;
}

const portfolioItems: PortfolioItem[] = [
    { id: 1, category: "Textile", title: "CHUST TEXTILE", image: i1 },
    { id: 2, category: "Textile", title: "OSBORN TEXTILE", image: i2 },
    { id: 3, category: "Textile", title: "ZELAL TEKSTIL", image: i3 },
    { id: 4, category: "Textile", title: "KHIVACODE", image: i4 },
    { id: 5, category: "Textile", title: "BAKAN TEX", image: i5 },
];

// Duplicate for seamless loop
const doubled = [...portfolioItems, ...portfolioItems];

const Portfolio = () => {
    const [paused, setPaused] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [circlePos, setCirclePos] = useState({ x: -300, y: -300 });
    const containerRef = useRef<HTMLDivElement>(null);
    const animFrameRef = useRef<number>(0);
    const mousePosRef = useRef({ x: -300, y: -300 });

    // Smooth lerp for circle
    useEffect(() => {
        const animate = () => {
            setCirclePos(prev => ({
                x: prev.x + (mousePosRef.current.x - prev.x) * 0.1,
                y: prev.y + (mousePosRef.current.y - prev.y) * 0.1,
            }));
            animFrameRef.current = requestAnimationFrame(animate);
        };
        animFrameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animFrameRef.current);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mousePosRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    const isHovered = hoveredIndex !== null;

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',

                cursor: isHovered ? 'none' : 'default',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* BG */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Image
                    src={bg}
                    alt="bg"
                    fill
                    style={{ objectFit: 'cover', opacity: 0.55 }}
                    priority
                />

            </div>

            {/* Horizontal scrolling track */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    overflow: 'hidden',
                }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div
                    style={{
                        display: 'flex',
                        animation: 'carouselScroll 20s linear infinite',
                        animationPlayState: paused ? 'paused' : 'running',
                        width: 'max-content',
                    }}
                >
                    {doubled.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index % portfolioItems.length)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                width: 'clamp(280px, 25vw, 420px)',
                                padding: '2rem 2.5rem',
                                borderRight: '1px solid rgba(255,255,255,0.08)',
                                cursor: 'none',
                                flexShrink: 0,
                                transition: 'background 0.3s',
                                background: hoveredIndex === index % portfolioItems.length ? 'rgba(255,255,255,0.04)' : 'transparent',
                            }}
                        >
                            <p style={{
                                color: hoveredIndex === index % portfolioItems.length ? '#D8FA08' : 'rgba(255,255,255,0.45)',
                                fontSize: '0.75rem',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                marginBottom: '1rem',
                                transition: 'color 0.3s',
                            }}>
                                {item.category}
                            </p>
                            <h2 style={{
                                color: 'white',
                                fontSize: 'clamp(1.6rem, 2.5vw, 2.8rem)',
                                fontWeight: 700,
                                lineHeight: 1.15,
                                margin: 0,
                            }}>
                                {item.title}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover circle */}
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    zIndex: 50,
                    left: circlePos.x,
                    top: circlePos.y,
                    transform: 'translate(-50%, -50%)',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    width: 400,
                    height: 400,

                }}
            >
                <div style={{
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 0 50px rgba(216,250,8,0.1)',
                    position: 'relative',
                    backgroundColor: 'rgba(255,255,255)',
                }}>
                    {isHovered && (
                        <Image
                            src={portfolioItems[hoveredIndex! % portfolioItems.length].image}
                            alt={portfolioItems[hoveredIndex! % portfolioItems.length].title}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    )}
                </div>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.7)',
                        background: 'rgba(0,0,0,0.4)',
                        backdropFilter: 'blur(6px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
                            <path d="M4 14L14 4M14 4H6M14 4V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes carouselScroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

export default Portfolio;