import React from 'react';
import { Download } from 'lucide-react';

const experiences = [
    {
        id: 1,
        years: "2019-2021",
        role: "Senior Designer",
        description: "Proven ability to lead and manage a wide variety of design and development projects in team and independent situations.",
        logo: (
            <svg viewBox="0 0 100 60" width="70" height="42" fill="none">
                <text x="0" y="48" fontSize="52" fontWeight="700" fill="#0057ff" fontFamily="Arial">Bē</text>
            </svg>
        ),
    },
    {
        id: 2,
        years: "2016-2019",
        role: "Junior UX/UI Designer",
        description: "Which firmament dominion first rule and tree. The seas he i were cattle Under living. It may beast every forth place.",
        logo: (
            <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: '#0A66C2', display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            </div>
        ),
    },
    {
        id: 3,
        years: "2013-2016",
        role: "UI Designer",
        description: "Created visually compelling interfaces and maintained design systems for multiple client projects across various industries.",
        logo: (
            <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: '#FF7262', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', fontWeight: 700, color: 'white', flexShrink: 0,
            }}>
                Fig
            </div>
        ),
    },
];

const Experience = () => {
    return (
        <div
            className="w-full h-full flex items-center justify-center px-5 sm:px-10 md:px-16 lg:px-20 pt-28"
            style={{ background: '#0d0d0d' }}
        >
            <div className="w-full max-w-7xl">

                {/* Header */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8 md:mb-14">
                    <h1 className="text-white font-bold m-0" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                        Experience
                    </h1>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-white text-xl hover:text-[#D8FA08] transition-colors"
                        style={{ letterSpacing: '0.05em' }}
                    >
                        <Download size={30} color="#D8FA08" strokeWidth={1.5} />
                        Download resume
                    </a>
                </div>

                {/* Rows */}
                <div>
                    {experiences.map((exp, index) => (
                        <div key={exp.id}>
                            {/* Desktop: 3 col grid | Mobile: stacked */}
                            <div className="py-5 md:py-7 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6"
                                 style={{
                                     display: undefined, // let className handle it
                                 }}
                            >
                                {/* Logo + years+role on mobile: row */}
                                <div className="flex items-center gap-4 sm:gap-0 sm:w-36 md:w-44 shrink-0">
                                    {exp.logo}
                                    {/* Years + role shown inline on mobile */}
                                    <div className="sm:hidden">
                                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', margin: '0 0 0.25rem 0' }}>
                                            {exp.years}
                                        </p>
                                        <h3 style={{ color: 'white', fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>
                                            {exp.role}
                                        </h3>
                                    </div>
                                </div>

                                {/* Years + role — hidden on mobile, shown sm+ */}
                                <div className="hidden sm:block flex-1 min-w-0">
                                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', margin: '0 0 0.4rem 0' }}>
                                        {exp.years}
                                    </p>
                                    <h3 style={{
                                        color: 'white',
                                        fontSize: 'clamp(1rem, 1.6vw, 1.45rem)',
                                        fontWeight: 700,
                                        margin: 0,
                                    }}>
                                        {exp.role}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div
                                    className="flex-1 min-w-0 sm:border-l sm:border-white/10 sm:pl-6 md:pl-8"
                                    style={{ paddingLeft: undefined }}
                                >
                                    <p style={{
                                        color: 'rgba(255,255,255,0.5)',
                                        fontSize: '0.85rem',
                                        lineHeight: 1.7,
                                        margin: 0,
                                    }}>
                                        {exp.description}
                                    </p>
                                </div>
                            </div>

                            {index < experiences.length - 1 && (
                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;