import React from 'react'

import styles from '../style'
import {discount, robot, game_dev_banner, soldier} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
    <section 
      id="home" 
      className={`flex md:flex-row flex-col`}
    >
      <div 
        className={`flex-1 ${styles.flexStart} 
        flex-col xl:px-0 sm:px-16 px-6`}>

          {/* The Title */}
          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[50px] text-[40px] text-white ss:leading-[100px] leading-[75px] sm:text-[70px]'>
              Learn <br className='sm:block hidden'/> {" "}
              <span className='text-gradient'>Game</span> {" "}
            </h1>
            {/* The Get Started bubble */}
            <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted/>
            </div>
          </div>

          <h1 
            className='font-poppins font-semibold 
            ss:text-[50px] text-[40px] text-white 
            ss:leading-[100px] leading-[75px] w-full sm:text-[70px]'> Development.</h1>

          <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
          Enroll to my course to learn secret mechanics behind amazing video games and by the end of this class you will be able to build and deploy your own video game!
          </p>
      </div>

      {/* The robotic arm image */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img 
          src={game_dev_banner} alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'/>
          
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>

      </div>

    </section>
)


export default Hero