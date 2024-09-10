import Logo from '@/Components/Logo'
import Image from 'next/image'
import React from 'react'
import google from './google.png'
import Link from 'next/link'

const Joinpage = () => {
  return (
    <div className='bg-white h-screen'>
        <div className='mx-[41rem] flex pt-28'>
            <Logo />
        </div>
        <div className='mx-[27rem] text-center'>
            <h2 className='text-[2.6rem] text-black font-normal p-6'>Save the right way, <br /> Use <span className='text-[#06D6A0] font-medium'>SavePal</span></h2>
        </div>
        <div className='mx-auto'>
            <button className='bg-[#D5DCF9] mx-[30.6rem] flex p-2 rounded-full w-96 border border-gray-400'>
                <Image alt='google-img' className='h-7 w-7 mx-3' src={google} />
                <h4 className='text-black text-[19px] font-medium px-1'>Continue with google.</h4>
            </button>
            <p className='text-black mx-auto w-96 py-3'>By clicking continue you agree to the <Link href="t&c" className='text-blue-700'>terms and conditions</Link> and <Link href="privacy-policy" className='text-blue-700'>privacy policy</Link> of SavePal.</p>
        </div>
    </div>
  )
}

export default Joinpage