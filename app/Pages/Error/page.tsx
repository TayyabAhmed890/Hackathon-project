"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
  return (
    <section className='bg-[#F6F5FF]'>
    <div className='h-[286px] w-[1180px] mx-auto bg-[#F6F5FF] flex flex-col justify-center'>
      <h1 className='text-2xl font-bold'>404 Not Found</h1>
      <div className='flex items-center gap-3'>
        <h1>Home</h1>
        <h1>Pages</h1>
        <h1>Not Found</h1>
      </div>
    </div>
    <div className='h-screen w-auto flex justify-center flex-col items-center bg-white'>
    <img src="/Contact/error.svg" alt="" className='h-[400px] w-[400px] md:h-[800px] md:w-[800px]'/>
    </div>
    <div className='text-center bg-white py-3'>
    <button onClick={() => router.push('/')} className='h-[44px] w-[165px] bg-pink-600 text-white rounded-[4px] '>Back to Home</button>
    </div>
  </section>
  )
}

export default page