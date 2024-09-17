"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Circles from "../../components/circles/Circles";
import { aboutData } from "../../db/data";
import"./button.css";
import Counter from '@/components/counter/Counter'
import Link from 'next/link'

const About = () => {
	
  const [index, setIndex] = useState(0);
  return (
		<div className="h-full bg-primary/30 text-center py-32 xl:text-left">
			<Circles />

			<div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-12">
				<div className="flex-1 flex flex-col justify-center xl:mt-0 mt-4">
					<motion.h2
						variants={fadeIn("right", 0.2)}
						className="h2"
						initials="hidden"
						animate="show"
						exit="hidden">
						Crafting designs that tell a
						<span className="text-accent"> story</span>
					</motion.h2>

					<motion.p
						initials="hidden"
						animate="show"
						exit="hidden"
						variants={fadeIn("right", 0.4)}
						className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
						I dscovered coding during the pandemic and never looked back. Four
						years later, as a passionate frontend developer, i have collaborated
						with innovative startups and freelanced with diverse clients.
					</motion.p>

					<div className="hidden mb-8 md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0">
						<Counter />
					</div>
				</div>

				<motion.div
					variants={fadeIn("left", 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="w-full flex flex-col xl:max-w-[48%] h-[480px] mt-0 xl:mt-12">
					<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-2 ">
						<div>
							<h2 className="text-accent text-xl">Skills</h2>
						</div>
					</div>

					<div className="py-2 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
							<div className="text-white/60">
								<div className="font-light mb-2 md:mb-0"><h2>Web Development</h2>
								</div>
								<div className="flex gap-x-4">
									{aboutData.map(({id, icons}) => {
										return (
											<div key={id} className="text-xl text-white">
												{icons}
											</div>
										);
									})}
								</div>
							</div>
						<div className='mt-2'>
							<Link href='#' target='_blank' className="btn">
								<strong>Download CV</strong>
								<div id="container-stars">
									<div id="stars"></div>
								</div>

								<div id="glow">
									<div className="circle"></div>
									<div className="circle"></div>
								</div>
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;