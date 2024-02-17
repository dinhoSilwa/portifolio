"use client"
import {Send } from 'lucide-react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

export const CallToActionProjects = () =>{
const callEffect = useRef(null)


useLayoutEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
  callEffect.current = gsap.timeline({
    scrollTrigger : {
      trigger : ".callContainer",
      scrub: true ,
      // markers : true,
      start : "top 550px",
      end : "bottom 600px"
    }
  }).fromTo(".itemContainer",{x:100, opacity :0},{x:0, opacity: 1})
  .fromTo(".textContainer",{x:-100, opacity :0},{x:0, opacity: 1})
  .fromTo(".btnContainer",{x:100, opacity :0},{x:0, opacity: 1})
},[])



 return (
   <section className="p-8 py-16 text-white m-auto flex flex-col gap-12 bg-[#035AD5] mt-10 callContainer
   md:items-center md:mb-[70px]
   ">
     <header className="itemContainer md:flex md:justify-center">
       <h2 className=" text-center font-extrabold text-3xl md:text-[32px] ">
         vamos trasformar ideias em realidade juntos ?
       </h2>
     </header>
     <p className="text-center textContainer md:text-[22px] md:w-[70%] leading-10">
       Estou totalmente comprometido em ajudar a concretizar suas ideias. Com
       colaboração e determinação, vamos trabalhar em conjunto para <span className='md:font-bold'>alcançar
       nossos objetivos.</span> Estou animado para começarmos essa jornada juntos!
     </p>

     <a href="#contactforms"
       className="px-4 btnContainer
     py-4 
     bg-yellow-500 
     text-white 
     font-extrabold 
     text-xl
     
     rounded-xl 
     shadow-2xl 
     ml-auto 
     mr-auto
      border-b-8 border-yellow-600 flex items-center justify-center gap-4
     "
     >
       <Send /> Iniciar uma conversa
     </a>
   </section>
 );
}