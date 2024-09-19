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
		}}
			pagination={{
				clickable: true,
			}}
			loop={true}
			modules={[FreeMode, Pagination]}
			className='h-[280px] sm:h-[480px]'>
			{
				workSlides.map((slide, index) => {
					return (
						<SwiperSlide key={index}>
							<div className='rounded-lg px-4 xl:pt-36 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer xl:h-[26rem] h-max' key={index}>
								<div className='relative rounded-lg overflow-hidden flex flex-col items-center justify-center group'>
									<Link href={slide.link} target='_blank' className='flex items-center justify-center relative overflow-hidden group'>
										<Image
											src={slide.path} 
											alt=""
											width={500}
											height={300} 
										/>
										<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-500'></div>
									</Link>
									<p>{slide.title}</p>

									<div className='absolute bottom-0 translate-y-full group-hover:-translate-y-20 group-hover:xl:-translate-y-20 transition-all duration-300'>
										<div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
											<div className='delay-100'>LIVE</div>
											<div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
											<div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
										</div>
									</div>
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