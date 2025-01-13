import Image from 'next/image'
import React from 'react'
import { Josefin_Sans } from 'next/font/google'

const Josefin = Josefin_Sans({subsets:['latin']});

const LatestProducts = () => {
  return (
   <>
   <section className='container mx-auto flex flex-col items-center justify-center px-6'>
   <h1 className={`${Josefin.className} font-bold text-4xl pt-9 pb-3 text-[#1A0B5B]`}>Latest Products</h1>
   <div className='w-[auto] h-[auto] items-center flex justify-evenly mb-8 flex-wrap gap-6'>
    <h1>New Arrival</h1>
    <h1>Best Seller</h1>
    <h1>Featured</h1>
    <h1>Special Offer</h1>
   </div>
    <div className='flex items-center gap-[29px] flex-wrap justify-center'>
    <div className=' h-[306px] w-[360px] flex flex-col justify-between'><div className='h-[270px] w-[360px] flex items-center justify-center bg-gray-50'>
      <Image className='h-[229px] w-[223px]' src="/Products/p1.svg" alt='' height={178} width={178}></Image>
    </div>
    <div className='flex justify-between mx-3 mb-1'>
      <h1 className={`${Josefin.className} text-[#151875] text-[16px]`}>Comfort Handy Craft</h1>
      <div className='flex gap-3'>
      <h1 className={`${Josefin.className} text-[#151875]`}>$42.00</h1>
      <h1 className={`${Josefin.className}  text-[#FB2448]`}><s>$65.00</s></h1>
      </div>
    </div>
    </div>
    <div className=' h-[306px] w-[360px] flex flex-col justify-between'><div className='h-[270px] w-[360px] flex items-center justify-center bg-gray-50'>
      <Image className='h-[245px] w-[245px]' src="/Products/p2.svg" alt='' height={178} width={178}></Image>
    </div>
    <div className='flex justify-between mx-3 mb-1'>
      <h1 className={`${Josefin.className} text-[#151875] text-[16px]`}>Comfort Handy Craft</h1>
      <div className='flex gap-3'>
      <h1 className={`${Josefin.className} text-[#151875]`}>$42.00</h1>
      <h1 className={`${Josefin.className}  text-[#FB2448]`}><s>$65.00</s></h1>
      </div>
    </div>
    </div>
    <div className=' h-[306px] w-[360px] flex flex-col justify-between'><div className='h-[270px] w-[360px] flex items-center justify-center bg-gray-50'>
      <Image className='h-[222px] w-[222px]' src="/Products/p3.svg" alt='' height={178} width={178}></Image>
    </div>
    <div className='flex justify-between mx-3 mb-1'>
      <h1 className={`${Josefin.className} text-[#151875] text-[16px]`}>Comfort Handy Craft</h1>
      <div className='flex gap-3'>
      <h1 className={`${Josefin.className} text-[#151875]`}>$42.00</h1>
      <h1 className={`${Josefin.className}  text-[#FB2448]`}><s>$65.00</s></h1>
      </div>
    </div>
    </div>
    </div>
    <div className='flex items-center gap-[29px] flex-wrap justify-center my-28'>
    <div className=' h-[306px] w-[360px] flex flex-col justify-between'><div className='h-[270px] w-[360px] flex items-center justify-center bg-gray-50'>
      <Image className='h-[277px] w-[267px]' src="/Products/p4.svg" alt='' height={178} width={178}></Image>
    </div>
    <div className='flex justify-between mx-3 mb-1'>
      <h1 className={`${Josefin.className} text-[#151875] text-[16px]`}>Comfort Handy Craft</h1>
      <div className='flex gap-3'>
      <h1 className={`${Josefin.className} text-[#151875]`}>$42.00</h1>
      <h1 className={`${Josefin.className}  text-[#FB2448]`}><s>$65.00</s></h1>
      </div>
    </div>
    </div>
    <div className='h-[306px] w-[360px] flex flex-col justify-between'><div className='h-[270px] w-[360px] flex items-center justify-center bg-gray-50'>
      <Image className='h-[264px] w-[303px]' src="/Products/p5.svg" alt='' height={178} width={178}></Image>
    </div>
    <div className='flex justify-between mx-3 mb-1'>
      <h1 className={`${Josefin.className} text-[#151875] text-[16px]`}>Comfort Handy Craft</h1>
      <div className='flex gap-3'>
      <h1 className={`${Josefin.className} text-[#151875]`}>$42.00</h1>
      <h1 className={`${Josefin.className}  text-[#FB2448]`}><s>$65.00</s></h1>
      </div>
    </div>
    </div>
    <div className=' h-[306px] w-[360px] flex flex-col justify-between'><div className='h-[270px] w-[360px] flex items-center justify-center bg-gray-50'>
      <Image className='h-[261px] w-[360px]' src="/Products/p6.svg" alt='' height={178} width={178}></Image>
    </div>
    <div className='flex justify-between mx-3 mb-1'>
      <h1 className={`${Josefin.className} text-[#151875] text-[16px]`}>Comfort Handy Craft</h1>
      <div className='flex gap-3'>
      <h1 className={`${Josefin.className} text-[#151875]`}>$42.00</h1>
      <h1 className={`${Josefin.className}  text-[#FB2448]`}><s>$65.00</s></h1>
      </div>
    </div>
    </div>
    </div>
   </section>
   </>
  )
}

export default LatestProducts