import Image from 'next/image';
import Link from 'next/link';
import pix from "../../../public/rounded-text.png" 
import {HiArrowRight} from "react-icons/hi2"

const projectsBtn = () => {
  return (
		<div className="mx-auto xl:mx-0">
			<Link href='/work'
				className="relative w-[150px] h-[150px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
				<Image
					src={pix}
					width={121}
					height={128}
					alt=""
					className="animate-spin-slow w-full h-full max-w-[121px] max-h-[128px]"
				/>
				<HiArrowRight className='absolute text-3xl group-hover:translate-x-2 transition-all duration-300'/>
			</Link>
		</div>
	);
}

export default projectsBtn