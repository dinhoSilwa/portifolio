"use client"
import {Send, CheckSquare, Globe, MessageSquareMore, BarChart4, ShieldCheck } from 'lucide-react'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

export const CallToActionThird = () =>{
const callEffect = useRef(null)


useLayoutEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
  callEffect.current = gsap.timeline({
    scrollTrigger : {
      trigger : ".callContainer",
      // markers: true,
      scrub: false ,
      start : "top 550px",
      end : "bottom 600px"
    }
  }).fromTo(".itemContainer",{x:100, opacity :0},{x:0, opacity: 1})
  .fromTo(".itemContainer1",{x:100, opacity :0},{x:0, opacity: 1})
  .fromTo(".itemContainer2",{x:-100, opacity :0},{x:0, opacity: 1})
  .fromTo(".itemContainer3",{x:100, opacity :0},{x:0, opacity: 1})
  .fromTo(".itemContainer4",{x:-100, opacity :0},{x:0, opacity: 1})
  

},[])



 return (
   <section className=" py-16 text-white m-auto flex flex-col gap-12 mt-6 callContainer overflow-x-hidden mb-10">
     <header className='itemContainer w-[60%] ml-auto mr-auto'>
       <h2 className=" text-center font-extrabold text-3xl text-[#00FFFF] 
       md:text-[32px]
       ">
       Por que preciso de um site?
       </h2>
     </header>
 
 <div className='h-[150px] w-full px-8 space-y-8 flex flex-col items-center mb-20  md:h-[290px] md:space-y-8 md:mb-2'>
    <p className="md:items-center md:text-[24px] text-center itemContainer1 flex gap-2 "><Globe color={"#00FFFF"} />Presença Online 24/7</p>
     <p className="md:items-center md:text-[24px] text-center itemContainer2 flex gap-2 "><ShieldCheck color={"#00FFFF"} />Credibilidade e Profissionalismo</p>
     
     <p className="md:items-center md:text-[24px] text-center itemContainer3 flex gap-2 "><BarChart4 color={"#00FFFF"} />Acesso a um Mercado Mais Amplo</p>
     <p className="md:items-center md:text-[24px] text-center itemContainer4 flex gap-2 "><MessageSquareMore color={"#00FFFF"} />Facilidade de Comunicação </p>
    
 </div>
     <a href="#contactforms" className="px-4 btnContainer
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
     ">
      <Send /> Iniciar uma conversa
     </a>
   </section>
 );
}