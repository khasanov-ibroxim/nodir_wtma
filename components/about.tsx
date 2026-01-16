import React from 'react';

const About = () => {
    return (
        <div className="w-full h-auto flex items-center justify-center px-8 md:px-20 py-20 md:py-32">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative pb-32">
                {/* Left Section */}
                <div className="flex flex-col justify-center">
                    <p className="text-white/60 text-sm mb-6 tracking-wider">Specialization</p>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                        Bright design will{' '}
                        <span className="text-[#D8FA08]">help attract</span> more clients 🔥
                    </h2>

                    <p className="text-white/60 text-base leading-relaxed">
                        "There are three answers to the result of a design – yes, no, and NOTHING! "Wow" is something to strive for. "
                    </p>
                </div>

                {/* Right Section - Skills */}
                <div className="flex flex-col justify-center space-y-10">
                    {/* Development */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-white text-lg">Development</span>
                            <span className="text-white text-lg font-semibold">80%</span>
                        </div>
                        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-[#D8FA08] w-[80%] rounded-full"></div>
                        </div>
                    </div>

                    {/* Design */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-white text-lg">Design</span>
                            <span className="text-white text-lg font-semibold">90%</span>
                        </div>
                        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-[#D8FA08] w-[90%] rounded-full"></div>
                        </div>
                    </div>

                    {/* Graphic */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-white text-lg">Graphic</span>
                            <span className="text-white text-lg font-semibold">70%</span>
                        </div>
                        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-[#D8FA08] w-[70%] rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Signature - Below content */}
                <div className="col-span-1 lg:col-span-2 flex justify-center mt-16">
                    <div className="relative">
                        <p className="text-white text-4xl md:text-5xl font-serif italic">Roger Day</p>
                        <svg
                            className="absolute -bottom-4 left-0 w-full"
                            viewBox="0 0 300 60"
                            fill="none"
                        >
                            <path
                                d="M10 30 Q 150 10, 290 30"
                                stroke="#D8FA08"
                                strokeWidth="1.5"
                                fill="none"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;