"use client"
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';


const LayoutHome = () => {
    return (
        <div>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                className={"w-full h-screen"}
            >
                <SwiperSlide className={"w-full h-screen justify-center items-center flex"}>Slide 1</SwiperSlide>
                <SwiperSlide className={"w-full h-screen justify-center items-center flex"}>Slide 2</SwiperSlide>
                <SwiperSlide className={"w-full h-screen justify-center items-center flex"}>Slide 3</SwiperSlide>
                <SwiperSlide className={"w-full h-screen justify-center items-center flex"}>Slide 4</SwiperSlide>
                <SwiperSlide className={"w-full h-screen justify-center items-center flex"}> Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default LayoutHome;