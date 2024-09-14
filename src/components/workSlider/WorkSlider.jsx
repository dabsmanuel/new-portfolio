"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { workSlides } from "../../db/data";
import { Pagination } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="h-[280] sm:h-[480px]">
			{
				workSlides.slides.map((slide, index) => {
					return (
						<SwiperSlide key={index}>
							<div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
								{
									slide.images.map((image, index) => {
										return (
											<div
												key={index}
												className='relative rounded-lg overflow-hidden flex items-center justify-center group'
											>
												<div>
													<Image
														src={image.path} 
														alt=""
														width={500}
														height={300} 
													/>
													<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-500'></div>
												</div>
											</div>
										);
									})
								}
							</div>
						</SwiperSlide>
					);
				})
			}
		</Swiper>
	);
};

export default WorkSlider;