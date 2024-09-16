import React from 'react'
import Logo from './Logo'
import Image from 'next/image'
import loader from './loader.png'

const Loader = () => {
  return (
    <div><div className="text-center bg-gradient-to-b from-[#E0FFF7] to-white h-screen">
    <div className="mx-auto w-44 py-72 md:py-32"><Logo /><Image alt="loader" src={loader} className="p-6 mx-[39px] mt-40 md:mt-[13.4rem] animate-spin" /></div>
    
  </div></div>
  )
}

export default Loader