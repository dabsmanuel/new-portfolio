"use client";

import React from "react";
import WorkSlider from "@/components/workSlider/WorkSlider";
import Bulb from "@/components/bulb/Bulb";
import Circles from "@/components/circles/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const page = () => {
	return (
		<div className="h-full bg-primary/30 flex items-center" >
			<Circles />
			<div className="container mx-auto">
				<div className="flex items-center flex-col xl:flex-row gap-x-8 ">
					<div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 items-center">
						<motion.h2
							className="h2 xl:mt-8"
							variants={fadeIn("up", 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden">
							My work
							<span className="text-accent">.</span>
						</motion.h2>
						<motion.p
							className="max-w-[25rem] mb-4 xl:mb-0 mx-auto lg:mx-0"
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden">
							Expert solutions for your online presence, crafted with precision
							and care to drive business growth and digital success stories.
						</motion.p>
					</div>
					<div
						className="w-full xl:max-w-[55%] "
						variants={fadeIn("down", 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden">
						<WorkSlider />
					</div>
				</div>
			</div>
			<Bulb />
		</div>
	);
};

export default page;
