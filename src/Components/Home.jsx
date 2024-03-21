import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from './utils'; // You may need to implement this hook to get window size


import 'swiper/css';
import Footer from './Footer';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import slide1 from './images/slide1.avif';
import slide2 from './images/slide2.avif';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import svg1 from './images/365.svg';
import svg2 from './images/device.svg';
import svg3 from './images/microsoft.svg';
import svg4 from './images/xbox.svg';
import Card from './Card';
import card1 from './images/card1.webp'
import card2 from './images/card2.webp'
import card3 from './images/card3.webp'
import card4 from './images/card4.avif'
import banner from './images/banner.webp'
import b1 from './images/b1.avif';
import b2 from './images/b2.webp';
import b3 from './images/b3.jpg';
import b4 from './images/b4.jpg';
import facebook from './images/Facebook 2x.avif'
import twiiter from './images/twitter.webp'
import youtube from './images/YouTube 2x.webp'
import BackToTopButton from './Topbtn';

function Home() {
    const [swiperIndex, setSwiperIndex] = useState(0);
    let swiperRef;

    const goNext = () => {
        if (swiperRef && swiperRef.swiper) {
            swiperRef.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef && swiperRef.swiper) {
            swiperRef.swiper.slidePrev();
        }
    };

    const goToSlide = (index) => {
        if (swiperRef && swiperRef.swiper) {
            swiperRef.swiper.slideTo(index);
            setSwiperIndex(index);
        }
    };
    const [shouldShowPagination, setShouldShowPagination] = useState(false);

    const { width } = useWindowSize();
    
    useEffect(() => {
        // Adjust the screen width breakpoint as needed
        if (width >= 1024) { // Adjust the breakpoint as needed
            setShouldShowPagination(true);
        } else {
            setShouldShowPagination(false);
        }
    }, [width]);
    

    return (
        <div>
            <div className="hidden lg:block">
            <BackToTopButton/>
            </div>
            <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    pagination={shouldShowPagination && { clickable: true }}
    onSwiper={(swiper) => (swiperRef = swiper)}
    onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
>
                <SwiperSlide className="relative">
                    <div className='h-full'>
                        <img src={slide1} alt="" className='w-full lg:h-full h-48 object-cover object-right' />
                        <div className='relative lg:absolute top-1/3 lg:w-1/3 lg:left-36 text-start sm:text-center px-6'>
                            <p className='text-4xl py-4 font-bold'>Unlock Your Potential with Microsoft Copilot</p>
                            <p className='pb-4'>Get things done faster and unleash your creativity with the power of AI anywhere you go.</p>
                            <button className="bg-blue-800 p-2 rounded-sm text-white hover:bg-blue-700">Download The copilot App</button>
                        </div>
                        {/* <div className="sm:absolute relative sm:bottom-5 sm:left-0 w-full flex justify-center">
                            <div className="swiper-pagination">
                                {[...Array(swiperRef ? swiperRef.swiper.slides.length : 0)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`swiper-pagination-bullet ${index === swiperIndex ? 'swiper-pagination-bullet-active' : ''}`}
                                        onClick={() => goToSlide(index)}
                                    />
                                ))}
                            </div>
                        </div> */}

                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="relative hidden lg:block">
                        <img src={slide2} alt="" className='w-full' />
                        <div className='sm:absolute relative top-1/3 w-1/3 right-36'>
                            <p className='text-4xl py-4 font-bold'>Surface 9 Pro</p>
                            <p className='pb-4'>Tablet versatility and laptop power — all in one ultra-portable device</p>
                            <button className="bg-blue-800 p-2 hover:bg-blue-700 rounded-sm text-white">Learn More</button>
                        </div>
                        <div className="lg:absolute relative bottom-5 left-0 w-full flex justify-center">
                            <div className="swiper-pagination">
                                {[...Array(swiperRef ? swiperRef.swiper.slides.length : 0)].map((_, index) => (
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


            <div className="w-full cards flex flex-col lg:flex-row lg:space-x-16  justify-center lg:justify-center my-20">
    <div className="svg1 justify-center lg:justify-start items-center mb-4 lg:mb-0">
        <img src={svg1} alt="" className="w-10 mx-auto" />
        <a href="" className="block text-center font-semibold text-base text-blue-700"><span className="border-b-2 border-blue-700">Choose Your Microsoft 365</span></a>
    </div>
    <div className="svg1 justify-center items-center mb-4 lg:mb-0 ">
        <img src={svg4} alt="" className="w-10 mx-auto" />
        <a href="" className="block text-center font-semibold text-base text-blue-700"><span className="border-b-2 border-blue-700">Shop XBox Games and Consoles</span></a>
    </div>
    <div className="svg1 justify-center items-center mb-4 lg:mb-0 ">
        <img src={svg3} alt="" className="w-10 mx-auto" />
        <a href="" className="block text-center font-semibold text-base text-blue-700"><span className="border-b-2 border-blue-700">Get Windows 11</span></a>
    </div>
    <div className="svg1 justify-center items-center ">
        <img src={svg2} alt="" className="w-10 mx-auto" />
        <a href="" className="block text-center font-semibold text-base text-blue-700"><span className="border-b-2 border-blue-700">Explore Surface Devices</span></a>
    </div>
</div>


          <div className="cards px-2  sm:px-20 flex lg:flex-row flex-wrap lg:flex-nowrap py-8 lg:space-x-7 lg:space-y-0 justify-evenly items-center w-full" >
            <Card className='my-2' title="Surface Laptop 5"height='h-96'  description="Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11" button="Learn More" image={card1}/>
            <Card className='' height='h-96' title="Surface Laptop Studio" description="Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11." button="Learn More" image={card2}/>
            <Card className='s' height='h-96' title="XBOX Series X" description="The fastest most powerful XBox ever" button="Learn More" image={card3 } />
            <Card className='my-2' height='h-96' title="Maximise the everday with Microsoft 365" description="Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan." button="Learn More" image={card4}/>
          </div>
                                     
                                    <div className="banner px-2 lg:px-20 lg:py-16">
                                    <div className="relative">
                        <img src={banner} alt="" className='w-full h-full' />
                        <div className='lg:absolute relative  lg:top-1/3 lg:w-1/3 lg:left-36 justify-center items-center w-full'>
                            <p className='text-4xl py-4 sm:text-start font-semibold'>XBox Series X</p>
                            <p className='pb-4 sm:text-start'>Next gen performance in the smallest XBox Ever</p>
                            <button className="bg-blue-500 font-semibold p-2 rounded-sm text-white sm:block ">Shop XBox Series X</button>
                        </div>
                        </div>
                                    </div>



                                    <div className="cards  px-2 my-8 sm:px-20 flex flex-row flex-wrap  sm:py-8  lg:space-y-0 w-full justify-evenly items-center" >
            <Card title="Surface for Business"height='h-60'  description="No matter what you do, there’s a Surface to help you do it." button="Shop Now" image={b1}/>
            <Card height='h-60' title="Get Microsoft teams for free" description="Online meetings, chat and shared cloud storage – all in one place." button="Sign up" image={b2}/>
            <Card height='h-60' title="Window 11 for business " description="Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all." button="Learn More" image={b3}/>
            <Card height='h-60' title="Join the era of AI" description="Create, communicate, and code with the latest Microsoft AI solutions." button="AI Solutions" image={b4}/>
          </div>    

          <div className="sm:px-20 sm:py-20 justify-center lg:justify-start flex space-x-5">
            <div className="para">
           <p className='pt-1 w-full'>  Follow Microsoft</p>
           </div>
           <div className="facebook">
           <img src={facebook} className='w-8 ' alt=""  />
           </div>
           <div className="facebook">
           <img src={twiiter} className='w-8 ' alt=""  />
           </div>
           <div className="facebook">
           <img src={youtube} className='w-8 ' alt=""  />
           </div>
           
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
