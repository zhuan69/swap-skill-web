import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import cardsData from '../datadummy/cardsDataRecomen';

const CardRecomenHome = () => {
    return (
        <>
            <div className='relative top-[180px]'>
                <span>
                    <h1 className='text-4xl text-black'>Recomendation</h1>
                </span>
            </div>
            <div className="pt-[50px] w-[100%] mt-[200px] rounded-2xl shadow-2xl bg-white">
                <div className='pt-10'>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={0}
                        slidesPerView={6}
                        className="mySwiper"
                    >
                        {cardsData.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className="flex flex-col items-center rounded-xl mx-2 shadow-md pb-10">
                                    <img
                                        className="w-[150px] h-[150px] mb-3"
                                        src={card.imageUrl}
                                        alt={`Card ${card.id} `}
                                    />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900">
                                        {card.title}
                                    </h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {card.subtitle}
                                    </span>
                                    <button className='bg-[#6558f5] text-white my-2 mx-2 py-2 px-2 rounded-md'>
                                        <a href="/details/bahasainggris">{card.button}</a>
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <p className='text-center text-3xl mt-5 font-bold'>OR</p>
        </>
    );
};

export default CardRecomenHome;
