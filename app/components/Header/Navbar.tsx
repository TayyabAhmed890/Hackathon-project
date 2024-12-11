"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { IoMdMenu,IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
   <>
   <nav className='flex items-center my-[20px] px-8 '>
    <div className='h-[40px] w-[1170px] flex items-center justify-between mx-auto'>
      
    <div className='flex gap-x-24 justify-between'>
      <Image src="/Header/Hekto.svg" alt='' height={34} width={98}></Image>
      <div className='hidden md:block'>
    <ul className='flex items-center gap-[30px] mt-1'>
      
      <li className='flex items-center gap-1'><Link href="/">Home</Link>
      <IoIosArrowDown className='h-[12px] w-[12px]'/></li>
      
      
      <li><Link href="/Pages/Error">Pages</Link></li>
      <li><Link href="/Pages/Error">Products</Link></li>
      <li><Link href="/Pages/Error">Blog</Link></li>
      <li><Link href="/Pages/Error">Shop</Link></li>
      <li><Link href="/Pages/Contact">Contact</Link></li>
    </ul>
    </div>
    </div>
    <div className='hidden lg:block'>
    <div className='flex items-center h-[40px] w-[317px] bg-pink-600 justify-end '>
      <input type="text" className='h-[40px] w-[317px] outline-none px-2 border-2 border-gray-200'/>
      <FiSearch className='mx-4 h-[20px] w-[20px] text-white'/>
    </div>
    </div>
    </div>
    <div className=' md:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <IoMdClose size={30}/>:
        <IoMdMenu size={30} />
        }
      </div>
      {
        isMenuOpen && (
          <ul className='flex flex-col gap-3 h-auto left-0 top-32 w-full bg-white text-cyan-700 md:hidden absolute z-10 '>
        <Link className='hover:bg-cyan-700 hover:text-white py-4 px-4' href="/">Home</Link>
        <Link className='hover:bg-cyan-700 hover:text-white py-4 px-4' href="/Services">Pages</Link>
        <Link className='hover:bg-cyan-700 hover:text-white py-4 px-4' href="/Projects">Blog</Link>
        <Link className='hover:bg-cyan-700 hover:text-white py-4 px-4' href="/Skills">Shop</Link>
        <Link className='hover:bg-cyan-700 hover:text-white py-4 px-4' href="/Contact">Contact</Link>
          </ul>
        )
      }
   
   </nav>
   </>
  )
}

export default Navbar