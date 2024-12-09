import Image from 'next/image'
import React from 'react'
import { Josefin_Sans } from 'next/font/google'

const Josefin = Josefin_Sans({subsets:['latin']});
const Hero = () => {

  return (
    <>
    <section className='h-auto w-auto bg-[#F2F0FF] flex justify-around items-center flex-wrap'>
      <div className='h-[500px] sm:h-[764px] w-auto '>
        <div className='flex h-[400px] '>
        <Image src="/Header/lamp.svg" alt='' height={387} width={387}></Image>
        </div>
        </div>
        <div className='h-[368px] w-[644px] flex flex-col justify-center gap-7 '>
            <h1 className='text-xl text-pink-600'>Best Furniture For Your Castle....</h1>
            <h1 className={`${Josefin.className} text-5xl font-bold`}>New Furniture Collection
            Trends in 2020</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</p>
            <button className='w-[163px] h-[50px] bg-pink-600 text-white'>Shop Now</button>
        </div>
        <div className=''>
        <Image className='' src="/Header/sofa.svg" alt='' height={689} width={706}></Image>
        </div>
    </section>
    </>
  )
}

export default Hero