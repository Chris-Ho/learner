import React, { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';


/**Component for the carousel */
const Carousel = ({data}) => {
    
    return(
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={ true } 
                pagination = {{clickable:true, dynamicBullets:true}}
                speed={500}
                >
                    {data.map((slide, index) => (
                        <SwiperSlide key = {index} className="back">
                            <div className="carousel">
                                <div className="slider-img-container">
                                    <img src = {slide.ImageUrl} className="slider-img"/>
                                    <div className="shading"/>
                                </div>
                                <div className="aligned-overlay">
                                </div>
                            </div>
                    
                        </SwiperSlide>
                    ))}              
                </Swiper>
            
    )
}

export default Carousel