import React from 'react'
import { Josefin_Sans } from 'next/font/google'

const Josefin = Josefin_Sans({subsets:['latin']});

const Trending = () => {
  return (
    <>
    <section className='container mx-auto flex flex-col justify-center items-center gap-9 '>
        <div>
        <h1 className={`${Josefin.className} font-bold text-4xl mt-7 text-[#1A0B5B]`}>Featured Products</h1>
        </div>
        <div className=' h-auto w-auto flex justify-center items-center gap-[29px] flex-wrap'>
            <div className='w-[270px] h-[350px]  flex flex-col items-center pt-3 justify-start'>
                <div className='h-[244px] w-[247px] bg-[#F5F6F8] flex items-center justify-center'>
                    <img src="Products/cgray.svg" alt="" className='h-[171px] w-[171px]'/>
                </div>
                <div className='mt-5'>
                    <h1 className={`${Josefin.className} text-xl`}>Cantilever chair</h1>
                    <div className='flex justify-center gap-3'>
                        <h1>$26.00 </h1>
                        <h1><s>$42.00</s></h1>
                    </div>
                </div>
            </div>
            <div className='w-[270px] h-[350px] flex flex-col items-center pt-3 justify-start'>
                <div className='h-[244px] w-[247px] bg-[#F5F6F8] flex items-center justify-center'>
                    <img src="Products/cred.svg" alt="" className='h-[187px] w-[187px]'/>
                </div>
                <div className='mt-5'>
                    <h1 className={`${Josefin.className} text-xl`}>Cantilever chair</h1>
                    <div className='flex justify-center gap-3'>
                        <h1>$26.00 </h1>
                        <h1><s>$42.00</s></h1>
                    </div>
                </div>
            </div>
            <div className='w-[270px] h-[350px]  flex flex-col items-center pt-3 justify-start'>
                <div className='h-[244px] w-[247px] bg-[#F5F6F8] flex items-center justify-center'>
                    <img src="Products/cwhite.svg" alt="" className='h-[189px] w-[197px]'/>
                </div>
                <div className='mt-5'>
                    <h1 className={`${Josefin.className} text-xl`}>Cantilever chair</h1>
                    <div className='flex justify-center gap-3'>
                        <h1>$26.00 </h1>
                        <h1><s>$42.00</s></h1>
                    </div>
                </div>
            </div>
            <div className='w-[270px] h-[350px]  flex flex-col items-center pt-3 justify-start'>
                <div className='h-[244px] w-[247px] bg-[#F5F6F8] flex items-center justify-center'>
                    <img src="Products/p5.svg" alt="" className='h-[253px] w-[211px]'/>
                </div>
                <div className='mt-5'>
                    <h1 className={`${Josefin.className} text-xl`}>Cantilever chair</h1>
                    <div className='flex justify-center gap-3'>
                        <h1>$26.00 </h1>
                        <h1><s>$42.00</s></h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='container px-5 flex items-center justify-center gap-[22px] flex-wrap mb-10 '>
            <div className='h-[270px] w-[420px] bg-[#FFF6FB] flex flex-col '>
                <div className='w-[269px] h-[56px]  flex flex-col px-2 py-2'>
            <h1 className={`${Josefin.className} text-[25px]`}>23% off in all products</h1>
            <h1>Shop Now</h1>
            </div>
            <div className='flex justify-end'>

                <img src="/Products/time.svg" alt="" className='w-[213px] h-[207px] mt-3'/>
            </div>
            </div>
            <div className='h-[270px] w-[420px] bg-[#EEEFFB]'>
                <div className='w-[269px] h-[56px]  flex flex-col  px-2 py-2'>
                <h1 className={`${Josefin.className} text-[25px]`}>23% off in all products</h1>
                <h1>View Collection</h1>
                </div>
            <div className='flex justify-end'>

                <img src="/Products/table.svg" alt="" className='w-[312px] h-[173px] mt-4'/>
            </div>
            </div>
            <div className='h-[262px] w-[267px]  flex flex-col justify-between '>
                <div className='h-[74px] w-[267px]  flex items-center justify-between '>
                    <div className='h-[74px] w-[107px] bg-[#F5F6F8] flex items-center justify-center'>
                        <img className='h-[71px] w-[64px]' src="/Products/c1.svg" alt="" />
                    </div>
                    <div className={`${Josefin.className}`}>
                    <h1>Executive Seat chair</h1>
                    <h1><s>$32.00</s></h1>
                    </div>
                </div>
                <div className='h-[74px] w-[267px]  flex items-center justify-between '>
                <div className='h-[74px] w-[107px] bg-[#F5F6F8] flex items-center justify-center'>
                    <img className='h-[64px] w-[64px]' src="/Products/c2.svg" alt="" />
                </div>
                    <div className={`${Josefin.className}`}>
                    <h1>Executive Seat chair</h1>
                    <h1><s>$32.00</s></h1>
                    </div>
                </div>
                <div className='h-[74px] w-[267px]  flex items-center justify-between '>
                <div className='h-[74px] w-[107px] bg-[#F5F6F8] flex items-center justify-center'>
                    <img className='h-[64px] w-[64px]' src="/Products/c3.svg" alt="" />
                </div>
                <div className={`${Josefin.className}`}>
                <h1>Executive Seat chair</h1>
                <h1><s>$32.00</s></h1>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Trending