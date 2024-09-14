import CountUp from "react-countup";

const Counter = () => {
  return (
		<div className="flex flex-1 xl:gap-x-6 ">
			<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
				<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
					<CountUp start={0} end={4} duration={5} />+
				</div>
				<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
					Years of experience
				</div>
			</div>

			<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
				<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
					<CountUp start={0} end={15} duration={5} />+
				</div>
				<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
					Clients
				</div>
			</div>

			<div className="relative flex-1">
				<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
					<CountUp start={0} end={20} duration={5} />+
				</div>
				<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
					Finished projects
				</div>
			</div>
		</div>
	);
}

export default Counter