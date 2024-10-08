"use client"

import React from 'react';
import ServiceSlider from '@/components/serviceSlider/ServiceSlider';
import Bulb from '@/components/bulb/Bulb';
import Circles from '@/components/circles/Circles';
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";


const page = () => {
  return (
		<div className="h-full bg-primary/30 mt-4 xl:mt-0 py-36 flex items-center">
			<Circles />
			<div className="container mx-auto">
				<div className="flex items-center flex-col xl:flex-row gap-x-8">
					<div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 items-center">
						<motion.h2
							className="h2 xl:mt-8"
							variants={fadeIn("up", 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden">
							My Services
							<span className="text-accent">.</span>
						</motion.h2>
						<motion.p
							className="mb-4 max-w-[25rem] mx-auto lg:mx-0"
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden">
							Expert solutions for your online presence, crafted with precision
							and care to drive business growth and digital success stories.
						</motion.p>
					</div>
					<div
						className="w-full xl:max-w-[55%]"
						variants={fadeIn("down", 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden">
						<ServiceSlider />
					</div>
				</div>
			</div>
			<Bulb />
		</div>
	);
}

export default page