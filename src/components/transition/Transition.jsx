"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; 

const variants = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"]
    },
};

const AnimationWrapper = ({ children }) => {
  const pathname = usePathname();

	return (
		<>
			<div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]">
				<AnimatePresence>
					<motion.div
						className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[#2e2257]"
						key={`${pathname}-1`}
						variants={variants}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={{
								delay: 0.2,
								duration: 0.6,
								ease: "easeInOut",
						}}
					/>
					<motion.div
						className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#3b2d71]"
						key={`${pathname}-2`}
						variants={variants}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={{
								delay: 0.4,
								duration: 0.6,
								ease: "easeInOut",
						}}
					/>
					<motion.div
						className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#4b3a8f]"
					key={`${pathname}-3`}
					variants={variants}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{
							delay: 0.6,
							duration: 0.6,
							ease: "easeInOut",
						}}
					/>
				</AnimatePresence>
			</div>
			{children}
		</>
	);
};

export default AnimationWrapper;