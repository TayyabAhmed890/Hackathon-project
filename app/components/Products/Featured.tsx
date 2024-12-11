import Image from 'next/image'
import React from 'react'
import {Lato} from "next/font/google"
import { Josefin_Sans } from 'next/font/google'

const Josefin = Josefin_Sans({subsets:['latin']});

const lato = Lato({subsets:['latin'],
    weight: ['400', '700','100']
});

const Featured = () => {
  return (
   <>
   <section className='mt-8 h-auto w-auto flex flex-col items-center justify-center'>
    <h1 className={`${Josefin.className} font-bold text-3xl sm:text-4xl p-9 text-[#1A0B5B]`}>Featured Products</h1>
    <div className='flex items-center gap-[29px] flex-wrap justify-center'>
    <div className=' h-[361px] w-[270px] flex justify-between items-center flex-col'><div className='h-[236px] w-[270px] flex items-center justify-center bg-gray-50'>
        <Image className='h-[178px] w-[178px]' src="/Products/chair.svg" alt='' height={178} width={178}></Image>
    </div>
    <h1 className={`${lato.className} font-bold text-[18px]`}>Cantilever chair</h1>
    <div className='flex w-[52px] h-[4px] justify-between '>
      <div className=' w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]'></div>
      <div className=' w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]'></div>
      <div className=' w-[14px] h-[4px] bg-[#00009D] rounded-[10px]'></div>
    </div>
    <h1 className={`${Josefin.className} font-semibold text-[14px] text-[#151875]`}>Code - Y523201</h1>
    <h1 className={`mb-3 ${lato.className} font-semibold text-[14px] text-[#151875]`}>$42.00</h1>
    </div>
    <div className=' h-[361px] w-[270px] flex justify-between items-center flex-col'><div className='h-[236px] w-[270px] flex items-center justify-center bg-gray-50'>
        <Image className='h-[150px] w-[130px]' src="/Products/chair2.svg" alt='' height={178} width={178}></Image>
    </div>
    <h1 className={`${lato.className} font-bold text-[18px]`}>Cantilever chair</h1>
    <div className='flex w-[52px] h-[4px] justify-between '>
      <div className=' w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]'></div>
      <div className=' w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]'></div>
      <div className=' w-[14px] h-[4px] bg-[#00009D] rounded-[10px]'></div>
    </div>
    <h1 className={`${Josefin.className} font-semibold text-[14px] text-[#151875]`}>Code - Y523201</h1>
    <h1 className={`mb-3 ${lato.className} font-semibold text-[14px] text-[#151875]`}>$42.00</h1>
    </div>
    <div className=' h-[361px] w-[270px] flex justify-between items-center flex-col'><div className='h-[236px] w-[270px] flex items-center justify-center bg-gray-50'>
        <Image className='h-[175px] w-[175px]' src="/Products/chair4.svg" alt='' height={178} width={178}></Image>
    </div>
    <h1 className={`${lato.className} font-bold text-[18px]`}>Cantilever chair</h1>
    <div className='flex w-[52px] h-[4px] justify-between '>
      <div className=' w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]'></div>
      <div className=' w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]'></div>
      <div className=' w-[14px] h-[4px] bg-[#00009D] rounded-[10px]'></div>
    </div>
    <h1 className={`${Josefin.className} font-semibold text-[14px] text-[#151875]`}>Code - Y523201</h1>
    <h1 className={`mb-3 ${lato.className} font-semibold text-[14px] text-[#151875]`}>$42.00</h1>
    </div>
    <div className=' h-[361px] w-[270px] flex justify-between items-center flex-col'><div className='h-[236px] w-[270px] flex items-center justify-center bg-gray-50'>
        <Image className='h-[151px] w-[216px]' src="/Products/chair5.svg" alt='' height={178} width={178}></Image>
    </div>
    <h1 className={`${lato.className} font-bold text-[18px]`}>Cantilever chair</h1>
    <div className='flex w-[52px] h-[4px] justify-between '>
      <div className=' w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]'></div>
      <div className=' w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]'></div>
      <div className=' w-[14px] h-[4px] bg-[#00009D] rounded-[10px]'></div>
    </div>
    <h1 className={`${Josefin.className} font-semibold text-[14px] text-[#151875]`}>Code - Y523201</h1>
    <h1 className={`mb-3 ${lato.className} font-semibold text-[14px] text-[#151875]`}>$42.00</h1>
    </div>
    </div>
   </section>
   </>
  )
}

export default Featured