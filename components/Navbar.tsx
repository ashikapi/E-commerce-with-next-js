import React from 'react';
import { IoMdSearch,IoIosArrowUp } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaList } from "react-icons/fa";
import '@/style/style.css'

export default function Navbar() {
    return (
        <div className="w-full h-auto fixed z-20 top-0 bg-white">
            <header className="flex justify-evenly items-center mt-5 mb-5 px-5">
                <h1 className="font-extrabold text-4xl text-black flex items-center gap-2">
                    Marketo
                    <div className="w-1.5 h-1.5 mt-4 bg-[#52aa1c] " />
                </h1>

                <div className="flex items-center">
                    <input 
                        type="text" 
                        placeholder="Find your product" 
                        className="w-60 h-10 border-t border-l border-b border-gray-300 focus:outline-none p-2 rounded-l-sm"
                    />
                    <select 
                        name="categories" 
                        id="categories" 
                        className="w-60 h-10 border border-gray-300 px-2 focus:outline-none">
                        <option value="All Categories">All Categories</option>
                    </select>
                    <button className="px-5 py-2.5 bg-[#51aa1b] hover:bg-[#ff6251] transition-all duration-500 rounded-r-sm text-white">
                        <IoMdSearch size={20} />
                    </button>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <button className=''><MdFavoriteBorder size={30} /></button>
                    <button><LiaShoppingBagSolid size={30}/></button>
                </div>
            </header>

            <div className="border-t border-gray-300 pt-5 pb-5">
                <div className='flex justify-evenly items-center'>
                    <div>
                        <button className='px-10 py-3 bg-[#51aa1b] text-white font-bold flex justify-center items-center gap-4'>
                            <FaList size={20} /> All Categories <IoIosArrowUp size={30}/>
                        </button>
                    </div>
                <ul className="flex justify-center items-center gap-10 py-3">
                    <li className="hover:text-blue-500 cursor-pointer">Home</li>
                    <li className="hover:text-blue-500 cursor-pointer">Page</li>
                    <li className="hover:text-blue-500 cursor-pointer">Shop</li>
                    <li className="hover:text-blue-500 cursor-pointer">Blog</li>
                    <li className="hover:text-blue-500 cursor-pointer">Gallery</li>
                </ul>
                <div>
                    <button className='px-16 py-2 bg-[#ff6251] text-center font-bold 
                    text-white hover:bg-black transition-all transform duration-700'>
                        <h1 className='uppercase'>Black Friday</h1>
                        <h2 className='text-[12px] -mt-1.5'>Get 45% off!</h2>
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}
