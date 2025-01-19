import Image from 'next/image'
import React from 'react'
import { Josefin_Sans } from 'next/font/google'
import { client } from '@/sanity/lib/client'

const getData = async () => {
  const response = await client.fetch(`
    [
      *[_type == "product" && category == "Chair"][17],
      *[_type == "product" && category == "Chair"][11],
      *[_type == "product" && category == "Chair"][7],
      *[_type == "product" && category == "Chair"][5],
      *[_type == "product" && category == "Chair"][15],
      *[_type == "product" && category == "Chair"][9],
    ]
  {
    id,
    name,
    description,
    quantity,
    price,
    "image_url":image.asset->url,
    rating
}
    `)

return response;

}

const Josefin = Josefin_Sans({subsets:['latin']});

const LatestProducts = async () => {
  const product = await getData();
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
   {product.map((items:any,index:number)=>(
    <div key={index} className=' h-[306px] w-[360px] flex flex-col justify-between'><div className='h-[270px] w-[360px] flex items-center justify-center bg-gray-50'>
      <Image className='' src={items.image_url} alt='hello' height={200} width={200}></Image>
    </div>
    <div className='flex justify-between mx-3 mb-1'>
      <h1 className={`${Josefin.className} text-[#151875] text-[16px]`}>{items.name}</h1>
      <div className='flex gap-3'>
      <h1 className={`${Josefin.className} text-[#151875]`}>{items.price}</h1>
      <h1 className={`${Josefin.className}  text-[#FB2448]`}><s>$65.00</s></h1>
      </div>
    </div>
    </div>
   ))}
    </div>
  
   </section>
   </>
  )
}

export default LatestProducts