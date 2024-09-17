"use client";

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { workSlides } from "../../db/data";
import { FreeMode, Pagination } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

const WorkSlider = () => {
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
			
		}}
			pagination={{
				clickable: true,
			}}
			modules={[FreeMode, Pagination]}
			className='h-[280px] sm:h-[480px]'>
			{
				workSlides.map((slide, index) => {
					return (
						<SwiperSlide key={index}>
							<div className='rounded-lg px-4 xl:pt-36 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer xl:h-[20rem] h-max' key={index}>
								<div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
									<Link href={slide.link} target='_blank'>
										<Image
											src={slide.path} 
											alt=""
											width={500}
											height={300} 
										/>
										<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-500'></div>
									</Link>
								</div>
							</div>
						</SwiperSlide>
					);
				})
			}
		</Swiper>
	);
};

export default WorkSlider;