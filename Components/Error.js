import React from 'react'
import Logo from './Logo'
import Image from 'next/image'
import loader from './loader.png'
import { FaceIcon } from '@radix-ui/react-icons'
import { AlertCircleIcon } from 'lucide-react'

const Error = ({error}) => {
  return (
    <div><div className="text-center bg-gradient-to-b from-[#E0FFF7] to-white h-screen">
    <div className="mx-auto w-40 pt-72 md:pt-32 text-black"><Logo/></div>
    <AlertCircleIcon className='mx-auto mt-24 md:mt-36 text-red-500' size={50} />
    <div><p className="p-6 mx-auto text-center text-red-500 ">{error}</p></div>
  </div></div>
  )
}

export default Error