import React from 'react'
import Image from 'next/image'
import { Container } from 'postcss'

const HeroSection = () => {
  return (
    <div >

       
      
      
      <div className="bg-[url('/hero-img.jpg')] bg-no-repeat w-full h-[700] flex flex-col items-center ">   

      <div className='font-bold text-[44px] text-center tracking-tighter mt-11 text-black'>A powerful online engagement tool<br/>   that{`'`}s intuitive and simple to use.</div>

      <div className='text-[14px] text-gray-600 text-center mt-4'>With stellar one-click reports and unmatched support, see how <br /> Circle will make a difference in your business.</div>
      
      <div> 
        <button className='font-semibold mt-4  bg-[#0CBBC7] px-4 py-2  hover:bg-blue-300'>Get started free  {`>`} </button>
      </div>
<div className='mt-10  mb-6'>
      <Image src="/mask-group.png" alt="hero-image" width={964} height={361}/>
      
</div>
      
      </div>
      
      
{/*       
      <Image src="/mask-group.png" alt="hero-image" className="pt-30"width={964} height={361}/> */}
      </div>
      
    
  )
}

export default HeroSection