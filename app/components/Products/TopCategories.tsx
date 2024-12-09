import React from 'react'
import { Josefin_Sans } from 'next/font/google'

const Josefin = Josefin_Sans({subsets:['latin']});

const TopCategories = () => {
  return (
    <section className='flex justify-center items-center flex-col h-auto w-auto'>
        <div><h1 className={`${Josefin.className} font-bold text-4xl p-9 text-[#1A0B5B]`}>Top Categories</h1></div>
        <div className='flex items-center justify-center h-auto w-auto gap-[39px] flex-wrap'>
            <div className='w-[269px] h-[345px]  flex flex-col justify-between items-center'>
                <div className='h-[269px] w-[269px] rounded-full bg-[#F6F7FB] flex items-center justify-center'>
                    <img className='h-[178px] w-[178px]' src="/Products/mini.svg" alt="" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                <h1 className={`${Josefin.className} text-xl`}>Mini LCW Chair</h1>
                <h1 className={`${Josefin.className} text-lg`}>$56.00</h1>
                    
                </div>
            </div>
            <div className='w-[269px] h-[345px]  flex flex-col justify-between items-center'>
                <div className='h-[269px] w-[269px] rounded-full bg-[#F6F7FB] flex items-center justify-center'>
                    <img className='h-[158px] w-[157px]' src="/Products/chair.svg" alt="" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                <h1 className={`${Josefin.className} text-xl`}>Mini LCW Chair</h1>
                <h1 className={`${Josefin.className} text-lg`}>$56.00</h1>
                    
                </div>
            </div>
            <div className='w-[269px] h-[345px]  flex flex-col justify-between items-center'>
                <div className='h-[269px] w-[269px] rounded-full bg-[#F6F7FB] flex items-center justify-center'>
                    <img className='h-[149px] w-[149px]' src="/Products/cgray.svg" alt="" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                <h1 className={`${Josefin.className} text-xl`}>Mini LCW Chair</h1>
                <h1 className={`${Josefin.className} text-lg`}>$56.00</h1>
                    
                </div>
                
            </div>
            <div className='w-[269px] h-[345px]  flex flex-col justify-between items-center'>
                <div className='h-[269px] w-[269px] rounded-full bg-[#F6F7FB] flex items-center justify-center'>
                    <img className='h-[178px] w-[178px]' src="/Products/mini.svg" alt="" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                <h1 className={`${Josefin.className} text-xl`}>Mini LCW Chair</h1>
                <h1 className={`${Josefin.className} text-lg`}>$56.00</h1>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopCategories