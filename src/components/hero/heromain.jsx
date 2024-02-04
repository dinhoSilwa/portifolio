"use client";
import {Send} from 'lucide-react'
import { CallToactionBtn } from "../buttons/calltoactionnavsuper";
import Image from "next/image";
import perfil from '@/assets/imgs/perfil/perfil.png'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from "react";
import {ApresentationIcons} from '@/components/socialicons/apresentationicons'

export const Heromain = ({
  altImgDescript
}) =>{


  

 return (
   <header className="w-full px-12 mt-8 flex flex-col items-center gap-12 testeitem
    md:flex md:flex-col md:justify-center
    
   ">

    <figure className=" rounded-full overflow-clip w-[200px]
    md:w-[250px] 
    ">
    <Image src={perfil} priority alt={"oi"}/>

    </figure>

     <nav className="w-1/2 effectup hidden
       md:relative md:top-8 
      ">
        <ApresentationIcons />
      </nav>

     <p className="text-center text-[28px] text-slate-200 font-thin leading-[50px] sm:w-[75%]  ml-auto mr-auto md:hidden">
      
       Programador 
        <strong className=" m-1 text-[#00FFFF] font-bold teste">
         Front-end
         </strong> 
         <strong className=" m-1 text-[#00FFFF] font-bold">
           apaixonado
          </strong> 
          por transformar 
          <strong className=" m-1 text-[#00FFFF] font-bold">
           códigos
           </strong> 
           em experiências
       visuais 
       <strong className=" m-1 text-[#00FFFF] font-bold">
        envolventes e intuitivas.
        </strong>
     </p>

    <div className="effectelement">
    <button className="px-4 py-8 bg-gradient-to-l flex items-center justify-center gap-4
      from-blue-600 via-blue-900
       to-blue-900
       rounded-md
       text-white
       font-bold
       border-none
        h-12
       ml-auto mr-auto
       text-[20px]
       md:hidden
     ">
      <Send /> Iniciar uma conversa
     </button>

    </div>


   </header>
 );
}