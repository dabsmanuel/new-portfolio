"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { serviceData } from "../../db/data";

import { FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';

const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[17rem] sm:h-[23.25rem]'
    >
      {serviceData.map((data) => (
        <SwiperSlide key={data.id}>
          <div className='bg-[rgba(65,47,123,0.15)] xl:h-[20rem] h-max rounded-lg px-4 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            <div className='text-accent text-4xl mb-4'>{data.icon}</div>
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{data.title}</div>
              <p className='leading-normal max-w-[360px]'>{data.description}</p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ServiceSlider