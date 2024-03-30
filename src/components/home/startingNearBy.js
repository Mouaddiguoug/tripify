import React, { useEffect } from 'react'
import StartingNearByComponent from './startingNearByComponent';
import config from '@/contsants/config';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import "swiper/react";
import "swiper/css";


function startingNearBy({ events }) {
    return (
        <>
            <img src='assets/color-sharp 2.png' className='absolute left-0 top-[80%]' />
            <div className='z-40 relative w-full mb-20 flex flex-col gap-20 px-5 md:pl-20 h-fit'>
                <h2 className='text-4xl font-extrabold'>What’s new</h2>
                <div className='flex gap-5 md:flex-row flex-col'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2000
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        breakpoints={{
                            50: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                        }}
                        className="mySwiper w-[95%] md:full"
                    >
                        {
                            events?.length > 0 ? events?.map(trip => {
                                console.log(trip.pictres[0].value);
                                return <SwiperSlide key={trip.albumData.id} className=''>
                                    <StartingNearByComponent title={trip.albumData.title} image1={`${config.baseUrl}${trip.pictres[0].value}`} image2={`${config.baseUrl}${trip.pictres[1].value}`} image3={`${config.baseUrl}${trip.pictres[2].value}`} description={trip.albumData.description} price={trip.albumData.price} endingTime={trip.albumData.endingTime} startingTime={trip.albumData.startingTime} />

                                </SwiperSlide>
                            }) : <div></div>
                        }
                    </Swiper>
                </div>


            </div>
        </>
    )
}

export default startingNearBy
