import Image from 'next/image'
import avatar from '../../../public/bulb.png'



const Bulb = () => {
  return (
		<div className="absolute -left-36 bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[12.5rem] xl:w-[16.25rem]">
			<Image
				src={avatar}
				width={260}
				height={200}
				alt="avatar"
				className="w-full h-full"
			/>
		</div>
	);
}

export default Bulb