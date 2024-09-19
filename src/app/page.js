'use client'

import ParticlesContainer from '@/components/particlesContainer/ParticlesContainer';
import ProjectsBtn from '../components/projectsBtn/ProjectsBtn';
import Avatar from '@/components/avatar/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';



const page = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='flex text-center flex-col justify-center xl:pt-24 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1 
          variants={fadeIn('down', 0.2)}
          className='h1'
          initials='hidden'
          animate='show'
          exit='hidden'
          >
            Conceptual Ideas <br /> Realized <span className='text-accent'>Digitally Precise</span> </motion.h1>

          <motion.p 
            initials='hidden'
            animate='show'
            exit='hidden'
            variants={fadeIn('down', 0.3 )}
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-10'
          >
            I bridge the gap between concept and code, transforming ideas into seamless, user-centric digital experiences that drive engagement and inspire interaction.</motion.p>

          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn/>
          </div>
          <motion.div 
            initials='hidden'
            animate='show'
            exit='hidden'
            variants={fadeIn('down', 0.4)}
            className='hidden xl:flex'
          >
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        
        <ParticlesContainer/>

        <motion.div 
          initials='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          variants={fadeIn('down', 0.4)}
          className='w-full h-full max-w-[537px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
          <Avatar/>
        </motion.div>
      </div>
    </div>
  )
}

export default page