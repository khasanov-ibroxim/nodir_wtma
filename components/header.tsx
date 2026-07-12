"use client"
import React, {useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import {Play, X} from 'lucide-react';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    const modal = (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex justify-center items-center">
            {/* Close button */}
            <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-[#D8FA08] z-[10000] cursor-pointer"
            >
                <X size={35}/>
            </button>

            {/* Video */}
            <div className="w-[90%] md:w-[70%] lg:w-[60%] aspect-video">
                <iframe
                    className="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );

    return (
        <>
            <div className="w-full flex gap-10 justify-center md:items-center md:justify-between h-full md:px-20 px-10 flex-col md:flex-row">
                <div className="md:h-full flex md:items-start md:justify-center flex-col">
                    <p className="text-base text-white mb-5">UX Design Studio</p>
                    <h1 className="text-6xl md:text-5xl lg:text-8xl text-white font-bold">
                        <span className="text-[#D8FA08]">Нодирхон </span>
                        <br/> Мубаров
                    </h1>
                    <div className="bg-[#D8FA08] w-[30%] md:w-[50%] h-1.5 mt-10 md:mt-20"></div>
                </div>

                <div
                    onClick={() => setOpen(true)}
                    className="border group cursor-pointer border-white hover:border-[#D8FA08] md:w-[130px] md:h-[130px] h-[100px] w-[100px] rounded-full flex justify-center items-center"
                >
                    <Play className="text-white group-hover:text-[#D8FA08]" size={35}/>
                </div>
            </div>

            {/* Modal — document.body ga portal orqali render qilinadi */}
            {open && mounted && createPortal(modal, document.body)}
        </>
    );
};

export default Header;