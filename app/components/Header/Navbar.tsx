import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
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
    {/* Mobile Menu Button */}
    <div className="md:hidden flex items-center">

            <Sheet>
              <SheetTrigger>
              <IoMdMenu className='block md:hidden h-[60px] w-[60px]'/>
                
                
              </SheetTrigger>
            
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <span className=" font-bold text-xl my-4">
                    <Link href="/"><Image src="/Header/Hekto.svg" alt='' height={34} width={98}></Image></Link>
                  </span>
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-6">
                      <Link href="/" className=" hover:text-gray-600 mx-1">
                        Home
                      </Link>
                      <Link href="/" className=" hover:text-gray-600 mx-1">
                        Pages
                      </Link>
                      <Link href="/" className=" hover:text-gray-600 mx-1">
                        Products
                      </Link>
                      <Link href="/" className=" hover:text-gray-600 mx-1">
                       Blogs
                      </Link>
                      <Link href="/Pages/Contact" className=" hover:text-gray-600 mx-1">
                       Contact
                      </Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
   </nav>
   </>
  )
}

export default Navbar