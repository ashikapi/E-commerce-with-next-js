import React from 'react'
import Image from 'next/image'
import discount from '@/public/images/discount.png';
import { Images } from 'lucide-react';
import '@/style/style.css'

export default function Home() {
  return (
    <>
    <div className='w-full min-h-screen mt-20 bg-cover bg-center flex justify-center items-center text-center'
    style={{backgroundImage: `url('https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/revslider/grocery/banner1_img-min-1.jpg')`}}>
        <div>
            <div className='space-y-6 -mt-40'>
                <h1 className='text-2xl font-medium font-pacifico text-[rgb(81,170,27)]'>Grocery at home</h1>
                <h1 className='text-black text-6xl font-bold font-montserrat'>Your daily needs</h1>
                <button className='font-medium text-xl text-white px-10 py-3 bg-[#7bba49] font-montserrat rounded-full'>Go to Shop</button>
            </div>
            <div>
                <Image src={discount} alt='discount'
                className='flex justify-end items-center absolute right-1/5 top-2/3 discount hover:-translate-x-10 transition-all duration-1000' />
            </div>
        </div>
    </div>
    </>
  )
}
