"use client";
import { Send } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from "next/image";
import shakeshand from '@/assets/imgs/components/yellowHand.png'
import { ApresentationIcons } from "@/components/socialicons/apresentationicons";
import {Title} from "@/components/textFormatter/title";

export const Apresentation = () => {
  const containerEffect = useRef();
  const fadeinLetterEfect = useRef();
  

  useLayoutEffect(() => {
   if(window.innerWidth < 767){
    gsap.registerPlugin(ScrollTrigger);
    fadeinLetterEfect.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        scrub: true,
        // markers: true,
        start: "top 400px",      
        end: "bottom 600px"

      }
    }
    ).fromTo(".mybio", {
      y: 100,
      opacity: 0
    }, {
      opacity: 1,
      y:0
    }).fromTo(".effectleft",{
      y:100,
      opacity:0,
      delay: 6,
    },{
      y:0,
      opacity:1,
    }).fromTo(".effectRight",{
      y:100,
      opacity:0,
      delay: 6,
    },{
      y:0,
      opacity:1,
    }).fromTo(".effectup",{
      x:-100,
      opacity:0,
      delay: 0,
    },{
      x:0,
      opacity:1,
    });
  }
   }
    , []);

  return (
    <section className="text-white w-full h-[90%] flex flex-col px-8 mt-12 py-8 z-20 container
    md:flex-col md:py-0 md:h-[400px] md:gap-0  md:px-0 md:mb-20 
    ">
      <strong className="w-[90%]  text-[32px] flex items-center myname
     
      ">Olá , <Image src={shakeshand} className="relative top-[-20px] handsWave shadow-md" alt={"hands shake"} /></strong>
      <strong className="text-[40px] mb-6 myname
      
      ">Eu sou Cláudio silva</strong>
      <p className="text-lg leading-6 text-zinc-300 mybio
      md:w-[100%] md:mb-10
      ">Minha jornada nesse mundo fascinante da programação tem sido marcada por uma combinação de foco, dedicação e uma sede insaciável de conhecimento.</p>
      <span className="absolute lightApresentation -z-40 md:hidden">lux</span>

     
      <div className="flex mt-8 mb-10
      md:flex gap-8 md:mt-6 md:hidden
      ">
        <span className="flex-1 effectleft
        md:text-[22px]
        ">
          <p className="text-[28px] font-bold 
          md:text-[32px] md:font-bold
          ">+3</p>
          <p className="font-bold z-40 text-[22px]
          md:font-semibold
          ">Anos de Experiencia</p>
        </span>

        <span className="flex-1 effectRight
        md:text-[22px]
        ">
          <p className="text-[28px] font-bold 
          md:text-[32px] font-bold
          ">+20</p>
          <p className="font-bold z-40 text-[22px]
          md:font-semibold
          ">Clientes</p>
        </span>
      </div> 





      <button className="px-4 py-8 bg-gradient-to-l items-center justify-center gap-4
      from-blue-600 via-blue-900
       to-blue-900
       rounded-md
       text-white
       font-bold
       border-none
        h-12
       ml-auto mr-auto
       text-[20px]
       md:ml-0
       hidden
       md:flex
       
     ">
      <Send /> Iniciar uma conversa
     </button>

     <nav className="w-1/2 effectup
       md:relative md:top-8 md:hidden
      ">
        <ApresentationIcons />
      </nav>
    </section>
  );
};
