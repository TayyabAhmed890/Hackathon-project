"use client"
// pages/cart.tsx

import { useCart } from "@/app/context/cart"; // Import useCart hook
import Link from "next/link";

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Access cart items and functions

  // Calculate the subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  return (
    <>
     <section className='bg-[#F6F5FF]'>
    <div className='h-[286px] max-w-[1180px] px-9 mx-auto bg-[#F6F5FF] flex flex-col justify-center'>
      <h1 className='text-2xl font-bold'>Shopping Cart</h1>
      <div className='flex items-center gap-3'>
        <h1>Home</h1>
        <h1>Pages</h1>
        <h1>Shopping Cart</h1>
      </div>
    </div>
  </section>
    <div className="container mx-auto px-5 py-10">
     
      {cartItems.length === 0 ? (
        <h1>Your cart is empty. <Link href="/">Go back to shop</Link></h1>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg flex-wrap md:flex-nowrap">
              <div className="flex items-center w-full md:w-auto">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="ml-4">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <span className="text-gray-900 text-lg">{item.price}</span>
                </div>
              </div>

              <div className="flex items-center mt-4 md:mt-0">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="hover:text-red-500 mr-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </button>
                <span className="text-xl">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="hover:text-green-500 ml-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </button>
              </div>

              <div className="flex items-center mt-4 md:mt-0">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="hover:bg-red-600 text-red-600 shadow-md shadow-red-200 hover:text-white py-2 px-4 rounded-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>

                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <div className="text-xl font-semibold">
              Subtotal: ${subtotal.toFixed(2)}
            </div>
            <div className="flex">
              <Link href="/">
                <button className="bg-[#7E33E0] text-white py-2  text-[7px] md:text-sm px-2 rounded-lg mr-2 ">
                  Continue Shopping
                </button>
              </Link>
              <Link href="/Pages/Checkout">
                <button className="bg-green-600 text-white py-2  text-[7px] md:text-sm px-2 rounded-lg">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default CartPage;
