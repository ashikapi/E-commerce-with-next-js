import React from 'react'
import Home from './home/page'
import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <>
    <Navbar />
    <div className='mt-40'><Home /></div>
    
    </>
  )
}
