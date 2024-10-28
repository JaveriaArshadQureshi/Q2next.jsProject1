import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="bg-[#F5F5F5] px-20 w-full h-auto text-[#191619] font-normal text-[14px] pt-4 pb-0 ">
      <div  className="flex  justify-center ">
          
          <div>
          <ul className="flex gap-7 pt-4  mr-[180px]">
            <li className=" hover:text-gray-500 cursor-pointer">Features</li>
            <li className=" hover:text-gray-500 cursor-pointer">Pricing</li>
            <li className=" hover:text-gray-500 cursor-pointer">Testimonials</li>
            <li className=" hover:text-gray-500 cursor-pointer">Resources</li>
            </ul>
            </div>

            <div className="mt-2 justify-center mr-[200px]">
            <Image src="/logo.png" alt="LOGO" width={95.65} height={25} />
            </div>

            <div>
              <ul className="flex gap-7 pt-4  ml-10">
            <li className=" hover:text-gray-500 cursor-pointer">Company</li>
          <li className=" hover:text-gray-500 cursor-pointer">Contact</li>
          <button className="border-[2px] border-[#0CBBC7] text-[#0CBBC7] px-6 pt-[2px] hover:bg-blue-100 font-bold text-[11px]">Login</button>
          </ul>
          </div>
      
      

    

      
      
       
    </div>
    </nav>
  );
};

export default NavBar;
