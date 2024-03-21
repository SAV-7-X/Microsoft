import React, { useState, useEffect, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MySwiper = () => {
    const [swiperIndex, setSwiperIndex] = useState(0);
    const swiperRef = useRef(null);

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    const handleTransitionEnd = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            setSwiperIndex(swiperRef.current.swiper.realIndex);
        }
    };

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
            onBeforeTransitionEnd={handleTransitionEnd}
        >
            <SwiperSlide>
                <div className="relative">
                    <img src={slide1} alt="" className='w-full' />
                    <div className='absolute top-1/3 w-1/3 left-36'>
                        <p className='text-3xl py-4 '>Unlock Your Potential with Microsoft Copilot</p>
                        <p className='pb-4'>Get things done faster and unleash your creativity with the power of AI anywhere you go.</p>
                        <button className="bg-blue-800 p-2 rounded-sm text-white">Download The copilot App</button>
                    </div>
                    <div className="absolute bottom-5 left-0 w-full flex justify-center">
                        <div className="swiper-pagination">
                            {[...Array(swiperRef.current ? swiperRef.current.swiper.slides.length : 0)].map((_, index) => (
                                <span
                                    key={index}
                                    className={`swiper-pagination-bullet ${index === swiperIndex ? 'swiper-pagination-bullet-active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img src={slide2} alt="" className='w-full' />
                    <div className='sm:absolute relative top-1/3 w-1/3 right-36'>
                        <p className='text-3xl py-4 '>Surface 9 Pro</p>
                        <p className='pb-4'>Tablet versatility and laptop power — all in one ultra-portable device</p>
                        <button className="bg-blue-800 p-2 rounded-sm text-white">Learn More</button>
</div>
                    <div className="absolute bottom-5 left-0 w-full flex justify-center">
                        <div className="swiper-pagination">
                            {[...Array(swiperRef.current ? swiperRef.current.swiper.slides.length : 0)].map((_, index) => (
                                <span
                                    key={index}
                                    className={`swiper-pagination-bullet ${index === swiperIndex ? 'swiper-pagination-bullet-active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            {/* Add more slides as needed */}
        </Swiper>
    );
};

export default MySwiper;