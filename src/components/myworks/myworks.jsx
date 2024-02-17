"use client"

import { Workarticle } from "@/components/myworks/workarticles";
import { ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap/gsap-core';
import { useRef } from 'react';
import { useLayoutEffect } from 'react'; 

export const Myworks = () => {


 
  const triggerEffect = useRef(null);

  useLayoutEffect(() => {
    
    triggerEffect.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        scrub: true,
        // markers: true,
        start: "top 500px",
        end: "bottom 900px",
      }
    }
    
    ).fromTo(
      "#triggerone",
      { y: 180, opacity:0, delay:2 },
      { y: 0, opacity:1 }
    ).fromTo("#triggertwo",
       { y:180, opacity:0, delay: 2 },
       {y:0 , opacity: 1}
    ).fromTo(
      "#triggerthree", 
      {y:200, opacity: 0},
      {y :0, opacity:1}
    )
  }, []);
 
  return (
    <section className="gb-white flex flex-col mb-20 z-90
     md:ml-auto md:mr-auto md:mt-10 md:flex-1 
    " id="container">
      <header className=" text-white p-8">
        <h2 className="w-1/2 font-bold text-[32px]
        md:hidden
        ">O que eu sei Fazer ?</h2>
      </header>
      <span className="border  w-[100px] lingtWorks absolute">
        foco de luz
      </span>

      <section className="flex flex-col items-center space-y-8  md:flex 
       md:gap-6 md:h-[300px] md:space-y-0 md:flex-col  md:items-center md:relative md:top-[-160px]
      ">
   
       <Workarticle
        
          id={"triggerone"}
          seta={"hidden"}
          title={"Front-end"}
          subtitle={
            "Como programador front-end, eu me especializo na criação e desenvolvimento da interface do usuário de um website (criação de sites)."
          }
          href={"#contactforms"}
        />

        <Workarticle
        id={"triggertwo"}
          seta={"hidden"}
          title={"Ui/Ux Design"}
          subtitle={
            "Investir em UI/UX Design melhora a percepção do produto, aumenta a satisfação do cliente e impulsiona o crescimento do negócio com uma experiência positiva do usuário"
          }
        />

        <Workarticle
        id={"triggerthree"}
          seta={"hidden"}
          title={"Manutenção de sites"}
          subtitle={
            "Melhore o layout do seu site tornando ele + atrativos para os clientes, aumente vendas e esmague seus concorrentes. Deixa comigo a manutenção do seu website. "
          }
        />
      </section>
    </section>
  );
};
