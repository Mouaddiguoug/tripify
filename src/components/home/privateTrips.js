import React, { memo } from 'react'
import InterestingPlansComponent from './interestingPlansComponent'
import config from '@/contsants/config'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import PrivateTripsComponent from './PrivateTripsComponent';
import { Autoplay } from 'swiper/modules';

import "swiper/react";
import "swiper/css";

function privateTrips({ events }) {
    return (

        <div className='z-40 relative w-full mb-20 flex flex-col gap-20 px-5 md:pl-20 h-fit'>
            <h2 className='text-4xl font-extrabold'>Private trips</h2>
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
                    className="mySwiper w-[95%] md:w-full"
                >
                    {
                        events?.length > 0 ? events?.map(trip => {
                            return <SwiperSlide className=''>
                                <PrivateTripsComponent price={trip.albumData.price} title={trip.albumData.title} image1={`${config.baseUrl}${trip.pictres[0].value}`} image2={`${config.baseUrl}${trip.pictres[1].value}`} image3={`${config.baseUrl}${trip.pictres[2].value}`} description={trip.albumData.description} endingTime={trip.albumData.endingTime} startingTime={trip.albumData.startingTime} />
                            </SwiperSlide>

                        }) : <div></div>
                    }
                </Swiper>
            </div>


        </div>

    )
}

export default memo(privateTrips);
