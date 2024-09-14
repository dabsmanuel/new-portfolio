import Link from "next/link";
import { SocialIcons } from "./data";

const Socials = () => {
  return(
    <div className="flex gap-x-6 items-center text-lg">
      {
        SocialIcons.map((SocialIcon) =>{
          return (
            <Link key={SocialIcon.id} href={SocialIcon.link} className="hover:text-accent transition-all duration-300">
              {SocialIcon.icon}
            </Link>
          );
        })
      }
    </div>
    )
};

export default Socials;
