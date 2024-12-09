import React from 'react'
import { Josefin_Sans } from 'next/font/google'

const Josefin = Josefin_Sans({subsets:['latin']});

const OfferSection = () => {
  return (
    <>
    <section className=' flex  justify-center items-center lg:pl-48 flex-col '>
    <h1 className={`${Josefin.className} font-bold text-4xl pt-9 pr-24 pb-3 text-[#1A0B5B]`}>Latest Products</h1>
   <div className='pr-24 w-[auto] h-[auto] items-center flex justify-evenly mb-8 flex-wrap gap-16'>
    <h1>Wood Chair</h1>
    <h1>Plastic Chair</h1>
    <h1>Sofa Collection</h1>
   </div>
        <div className='flex items-center justify-center  flex-wrap'>
        <div className='h-[659px] w-[auto] mx-auto flex flex-col justify-center gap-10 '>
            <h1 className={`${Josefin.className}text-2xl sm:text-4xl`}>20% Discount Of All Products</h1>
            <h1 className={`${Josefin.className} text-2xl`}>Eams Sofa Compact</h1>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br /> feugiat habitasse nec, bibendum condimentum.</h1>
            <div className='flex items-center gap-4'>
              <div className='flex flex-col gap-2'>
              <div className='flex'>
              <img src="/Blog/tick.svg" alt="" />
                <h1>Material expose like metals</h1>
                </div>
                <div className='flex'>
              <img src="/Blog/tick.svg" alt="" />
                <h1>Material expose like metals</h1>
                </div>
                </div>
                <div className='flex flex-col gap-2'>
              <div className='flex'>
              <img src="/Blog/tick.svg" alt="" />
                <h1>Material expose like metals</h1>
                </div>
                <div className='flex'>
              <img src="/Blog/tick.svg" alt="" />
                <h1>Material expose like metals</h1>
                </div>
                </div>
            </div>
            <button className='h-[57px] w-[200px] bg-pink-500'>Shop Now</button>
        </div>
        <div className='h-auto w-[550px]  mx-auto relative z-40 flex items-center justify-center '>
            <div className='bg-pink-300 rounded-full h-[400px] inset-0 w-[400px] -z-10 absolute top-28 left-20 '></div>
            <img className='h-[597px] w-[699px]' src="/Blog/s1.svg" alt="" />
        </div>
        </div>
    </section>
    </>
  )
}

export default OfferSection