import Image from 'next/image'
import React from 'react'
import {Lato} from "next/font/google"
import { Josefin_Sans } from 'next/font/google'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import Link from 'next/link';
import { ProductsData } from './data/page';

const Josefin = Josefin_Sans({subsets:['latin']});

const lato = Lato({subsets:['latin'],
    weight: ['400', '700','100']
});

const Featured = () => {
  return (
   <>
   <section className='mt-8 h-auto w-auto flex flex-col items-center justify-center'>
    <h1 className={`${Josefin.className} font-bold text-3xl sm:text-4xl p-9 text-[#1A0B5B]`}>Featured Products</h1>
    <div className='flex items-center gap-[29px] flex-wrap justify-center '>
      {ProductsData.map((product)=>(
        <Link href={`Pages/Featured/${product.id}`}>
      
      <div key={product.id} className='hover:bg-[#2F1AC4] group h-[361px] w-[270px] flex justify-between items-center flex-col relative'>
        <div className='h-[236px] w-[270px] flex items-center justify-center bg-gray-50'>
          <div className='  hidden absolute top-2 left-2 w-auto group-hover:block'>
            <div className='flex gap-3 '>
            <div className='rounded-full bg-[#EEEFFB] h-[30px] w-[30px] flex items-center justify-center'><FiShoppingCart height={14} width={14} className='text-[#2F1AC4]'/></div>
            <div className='rounded-full h-[30px] w-[30px] flex items-center justify-center'><FaRegHeart height={17} width={17} className='text-[#1DB4E7]'/></div>
            <div className='rounded-full h-[30px] w-[30px] flex items-center justify-center'><FaSearchPlus height={15} width={15} className='text-[#1DB4E7]'/></div>
            </div>
          </div>
          <Image className='h-[178px] w-[178px]' src={product.image} alt='' height={178} width={178}></Image>
      </div>
      <h1 className={`${lato.className} font-bold text-[18px] group-hover:text-white`}>{product.name}</h1>
      <div className='flex w-[52px] h-[4px] justify-between '>
        <div className=' w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]'></div>
        <div className=' w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]'></div>
        <div className=' w-[14px] h-[4px] group-hover:bg-[#FFEAC1] bg-[#00009D] rounded-[10px]'></div>
      </div>
      <h1 className={`${Josefin.className} font-semibold text-[14px] group-hover:text-white text-[#151875]`}>{product.code}</h1>
      <h1 className={`mb-3 ${lato.className} font-semibold text-[14px] group-hover:text-white text-[#151875]`}>{product.price}</h1>
      </div>
      </Link>
      ))}
      
    </div>
   </section>
   </>
  )
}

export default Featured