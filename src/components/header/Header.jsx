import Image from 'next/image'
import Link from "next/link";  
import logo from "../../../public/logo.png";  
import Socials from "../../components/socials/Socials";  


const Header = () => {
  return (
		<header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[6.25rem] h-[6rem]">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row justify-between items-center gap-y-2">
					<Link href='/'>
						<Image
							src={logo}
							width={125}
							height={10}
							alt="logo"
							// priority={true}
						/>
					</Link>
          <Socials />
				</div>
			</div>
		</header>
	);
}

export default Header;