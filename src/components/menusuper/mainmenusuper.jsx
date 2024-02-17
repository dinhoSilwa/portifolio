
"use client"

import {useState } from "react"; 
import Image from "next/image";
import imgLogo from "@/assets/imgs/logo/logomobilenav.png";
import { Menu , X , Send } from "lucide-react";
import { Logomobile } from "@/assets/imgs/logo/logomobile";
import { CallToactionBtn } from "@/components/buttons/calltoactionnavsuper";
import Link from "next/link";


export const MainMenuSuper = () => {

  const [showmenu , setshowmenu] =useState(false);
  function handleMenuToggle(){
    setshowmenu(!showmenu)
  }

  return (
    <nav
      className=" h-28 w-full flex justify-between items-center px-8 py-4 bg-[#040910] shadow-xl overflow-hidden 
      md:px-6
      "
     
     
    >
      <Image src={imgLogo} priority alt="this alt" />

      {showmenu ? <X onClick={handleMenuToggle} color={"#fff"} className="cursor-pointer close sm:hidden" size={"40px"}  /> : <Menu onClick={handleMenuToggle} color={"#fff"} className="cursor-pointer z-50 close sm:hidden" size={"40px"} />}
   
      <span className="absolute light">light</span>
      <ul onClick={handleMenuToggle}

        className={showmenu ? 'menusuper rounded-lg bg-opacity-65 p-4 backdrop-blur-xl z-30 fixed overflow-hidden w-full h-full bg-[#040910] top-[0] left-0 flex flex-col items-center justify-center space-y-12 text-white sm:h-20 sm:static sm:flex md:flex ' : 'hidden md:flex md:w-[52%] md:justify-between md:items-center md:text-white 2xl:w-[50%] ' }
      > 
      <span className="artificial">artificial</span>
        
      <li className="cursor-pointer text-2xl text-center sm:hover:border-b sm:hover:border-b-blue-600 p-2 md:text-[18px] ">Home</li>
       <a href="#aboutme"> <li className="cursor-pointer text-2xl text-center sm:hover:border-b sm:hover:border-b-blue-600 p-2 md:text-[18px] ">Sobre-min</li></a>
      <a href="#skill"><li className="cursor-pointer text-2xl text-center sm:hover:border-b sm:hover:border-b-blue-600 p-2 md:text-[18px] ">Habilidades</li></a>
      <a href="#myprojects"><li className="cursor-pointer text-2xl text-center sm:hover:border-b sm:hover:border-b-blue-600 p-2 md:text-[18px] ">Projetos</li></a>
       
       
        <a href="#contactforms" className="px-4 py-8 bg-gradient-to-l flex items-center justify-center gap-4
      from-blue-600 via-blue-900
       to-blue-900
       rounded-md
       text-white
       font-bold
       border-none
        h-12
       ml-auto mr-auto
       text-[20px]
       cursor-pointer

       md:px-6 md:text-[10px] md:ml-0 md:mr-0 md:h-[10px]
     ">
      <Send /> Iniciar uma conversa
     </a>
      </ul>
    </nav>
  );
};
