import Image from 'next/image'
import avatar from '../../../public/dabs.png'



const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:ma-w-none'>
      <Image
        src={avatar}
        width={637}
        height={578}
        alt='avatar'
        className='translate-z-0 w-full h-full'
      />
    </div>
  )
}

export default Avatar