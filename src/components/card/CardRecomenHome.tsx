import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button, Typography } from '@mui/material';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { swapApiListsThunk } from './SwapListsProgressSlice';

const CardRecomenHome = () => {
    const dispatch = useAppDispatch()
    let detailDataApproval = useAppSelector((state) => state.swapListsProgress)
    useEffect(() => {
        dispatch(swapApiListsThunk())
    }, [dispatch])
    return (
        <>
            <div className='relative top-[180px]'>
                <span>
                    <h1 className='text-4xl text-black'>Swap Lists</h1>
                </span>
            </div>
            <div className="pt-[50px] w-[100%] mt-[200px] rounded-2xl shadow-2xl bg-white">
                <div className='pt-10'>
                    {detailDataApproval.data ?
                        <>
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
                                {detailDataApproval.data.map((card) => (
                                    <SwiperSlide key={card.id}>
                                        <div className="flex flex-col items-center rounded-xl mx-2 shadow-md pb-10">
                                            <img
                                                className="w-[150px] h-[150px] mb-3"
                                                src='/avatar.png'
                                                alt={`Card ${card.id} `}
                                            />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900">
                                                {card.name}
                                            </h5>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {card.subs}
                                            </span>
                                            <Link to={`/progresswap/${card.id}`}>
                                                <Button>{card.status}</Button>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                        :
                        <>
                            <Typography className='mx-5 w-auto py-5 px-5'>No Data History or Swap Matches</Typography>
                        </>
                    }
                </div>
            </div>
            <p className='text-center text-3xl mt-5 font-bold'>OR</p>
        </>
    );
};

export default CardRecomenHome;
