import React from 'react';

const About = () => {
    return (
        <div className="w-full h-auto flex items-center justify-center px-8 md:px-20 py-24 md:py-32">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative pb-32">
                {/* Left Section */}
                <div className="flex flex-col justify-center">
                    <p className="text-white/60 text-sm mb-6 tracking-wider">Специализация </p>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                        Стратегия. Продажи.


                        <span className="text-[#D8FA08]">Визуал,</span> который продаёт.
                    </h2>

                    <p className="text-white/60 text-base leading-relaxed">
                        Развиваю бизнес через международные проекты и эффективный digital-маркетинг.
                        Организация бизнес-туров, участие в зарубежных выставках, привлечение байеров.
                        Опыт в продажах, таргетированной рекламе и создании профессионального визуального контента с производственными съёмками.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default About;