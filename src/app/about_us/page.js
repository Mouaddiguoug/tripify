"use client"
import NavBar from "@/components/home/navBar"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";
import Footer from "@/components/home/footer";

import "swiper/react";
import "swiper/css";

function page() {
    return (
        <>
            <NavBar />
            <div className='w-full h-screen relative'>
                <div className="w-full flex justify-center items-center relative h-[400px] md:h-[600px]">
                    <img className="w-full absolute" src='assets/about_us.jpg' />
                    <div className="z-20">
                        <h1 className="text-3xl md:text-7xl mb-5 text-center font-bold">About us</h1>
                        <p className="text-center">Get to know more about tripify.</p>

                    </div>

                </div>
                <div className='w-full h-screen gap-10 justify-center md:justify-between flex flex-col-reverse md:flex-row items-center'>
                    <div className='md:w-3/6 w-full flex justify-center items-center'>
                        <img className="w-[85%]" src='assets/about_us_2.jpg' />
                    </div>
                    <div className='md:w-3/6 w-[90%] text-center gap-5 md:text-start flex flex-col items-center justify-start md:items-start'>
                        <p className="">About us</p>
                        <h1 className="md:pr-44 text-3xl font-bold">We will always be there for your trips</h1>
                        <p>Welcome to Tripify, where your journey begins with boundless possibilities! As a premier travel agency, we specialize in curating unforgettable experiences tailored to your unique preferences and desires. Whether you dream of lounging on sun-kissed beaches, exploring exotic destinations, or embarking on cultural odysseys, we are here to transform your travel aspirations into reality.</p>
                        <a href="/discover" className='bg-white flex justify-center w-28 py-3 text-black rounded-2xl'>Explore</a>
                    </div>
                </div>
                <div className="w-full h-4/6 text-center  py-20 md:py-0 justify-between items-center md:flex-row flex-col  flex">
                    <div className="w-2/6 flex flex-col justify-center items-center">
                        <p className="text-4xl text-white font-bold">20+</p>
                        <p className="text-xl text-white font-extralight">Already done trips</p>
                    </div>
                    <div className="w-2/6 flex flex-col justify-center items-center">
                        <p className="text-4xl text-white font-bold">100+</p>
                        <p className="text-xl text-white font-extralight">Satisfied client</p>
                    </div>
                    <div className="w-2/6 flex flex-col justify-center items-center">
                        <p className="text-4xl text-white font-bold">5+</p>
                        <p className=" text-xl text-white font-extralight">Years of experience</p>
                    </div>
                </div>
                <h1 className="text-3xl pl-10 font-bold text-white ">What our clients say about us</h1>
                <div className="md:pl-10 px-9 md:px-0 mt-10">
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
                        className="mySwiper"
                    >
                        <SwiperSlide className='flex justify-center items-center'>
                            <div className="flex h-96 rounded-3xl py-6 gap-3 bg-gradient-to-br from-slate-500 to-white flex-col justify-center items-center">
                                <RiDoubleQuotesL size={40} color="white" />
                                <p className="text-xl text-white mb-5 font-normal text-center">I have had a so much fun travelling with tripify, they offer a great experience.</p>
                                <img src="assets/cus_1.png" className="rounded-full w-1/6" />
                                <p>Sanae Motawakil</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center'>
                            <div className="flex h-96 rounded-3xl py-6 gap-3 bg-gradient-to-br from-slate-500 to-white flex-col justify-center items-center">
                                <RiDoubleQuotesL size={40} color="white" />
                                <p className="text-xl text-white mb-5 px-2 font-normal text-center">me and my family, we had the most comfortable trip going to ouzoud for a day.</p>
                                <img src="assets/cus_2.png" className="rounded-full w-1/6" />
                                <p>Hanane Said</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center'>
                            <div className="flex h-96 rounded-3xl py-6 gap-3 bg-gradient-to-br from-slate-500 to-white flex-col justify-center items-center">
                                <RiDoubleQuotesL size={40} color="white" />
                                <p className="text-xl text-white mb-5 px-2 font-normal text-center">travelling with tripify has been a really great experience, the packs they offer are so interesting, so much fun.</p>
                                <img src="assets/cus_3.png" className="rounded-full w-1/6" />
                                <p>Houssni Elarbi</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center'>
                            <div className="flex h-96 rounded-3xl py-6 gap-3 bg-gradient-to-br from-slate-500 to-white flex-col justify-center items-center">
                                <RiDoubleQuotesL size={40} color="white" />
                                <p className="text-xl text-white mb-5 px-10 font-normal text-center">so much fun dealing with tripify, they provide a good trip experience.</p>
                                <img src="assets/cus_5.png" className="rounded-full w-1/6" />
                                <p>Alex Williams</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center'>
                            <div className="flex h-96 rounded-3xl py-6 gap-3 bg-gradient-to-br from-slate-500 to-white flex-col justify-center items-center">
                                <RiDoubleQuotesL size={40} color="white" />
                                <p className="text-xl text-white mb-5 font-normal text-center">It was a very great experience travelling with tripify, i had so much fun and entertanment having them with me in my trip journey.</p>
                                <img src="assets/cus_6.png" className="rounded-full w-1/6" />
                                <p>Amine Errassi</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <Footer />
            </div>
            
        </>
    )
}

export default page
