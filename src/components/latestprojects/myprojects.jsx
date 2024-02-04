"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import {Project} from "@/components/latestprojects/project";


export const MyProjects = () =>{

const projectEffect = useRef(null);

useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  projectEffect.current = gsap.timeline({
    scrollTrigger: {
      trigger: ".projectcontainer",
      scrub: true,
      // markers: true,
      start: "top 700px",
      end: "bottom 800px"
    }
  }).fromTo(
    "#projectOne", 
    { y: 70, opacity: 0 },
    { y: 0, opacity: 1 }
  ).fromTo(
    "#projectTwo", 
    { y: 200, opacity: 0 },
    { y: 0, opacity: 1 }
  ).fromTo(
    "#projectThree", 
    { y: 250, opacity: 0 },
    { y: 0, opacity: 1 }
  ).fromTo(
    "#projectfour", 
    { y: 300, opacity: 0 },
    { y: 0, opacity: 1 }
  );
}, []);



 return (
   <section id="myprojects" className="p-8 text-white m-auto flex flex-col gap-8 projectcontainer 
    md:mb-[160px]
   ">
     <header className="
      md:flex md:items-center md:justify-center md:mb-20
     ">
       <h2 className="w-[90%] font-bold text-[32px] mb-8 projectTitle
       md:text-center
       ">Últimos Projetos</h2>
     </header>

     <section className=" border-yellow-300 flex flex-col items-center space-y-12
     md:flex md:flex-row md:flex-wrap md:space-y-0 md:justify-center  md:gap-8 md:h-auto
     ">

       <Project 
       id={"projectOne"}
       idImg={"frontendfusion"}
         title={"Front-end Fusion"}
         description={
           "é um projeto colaborativo que visa fornecer uma oportunidade para programadores contribuírem em um projeto real de desenvolvimento de frontend. Este projeto foi concebido para permitir que cada colaborador assuma responsabilidades específicas, trabalhando em conjunto para criar um produto de alta qualidade."
         }
       />

      <Project
      id={"projectTwo"}
      idImg={"fofuxosProject"}
         title={"Ong de adoção Pet - Fofuxos"}
         description={
           "Este site foi desenvolvido como parte de um projeto para a ONG Fofuxos, com o objetivo de proporcionar uma experiência online para a adoção de animais de estimação."
         }
       />


       
<Project
  id={"projectThree"}
idImg={"webappProjects"}
         title={"FastDelivery - webapp"}
         description={
           "é um projeto colaborativo que visa fornecer uma oportunidade para programadores contribuírem em um projeto real de desenvolvimento de frontend. Este projeto foi concebido para permitir que cada colaborador assuma responsabilidades específicas, trabalhando em conjunto para criar um produto de alta qualidade."
         }
       />

<Project 
  id={"projectfour"}
idImg={"leveProjects"}
         title={"Leve - A sua Empresa de RH"}
         description={
           "Este site foi meticulosamente concebido e desenvolvido com o propósito primordial de servir como uma página de apresentação representativa e abrangente da empresa LEVE, buscando transmitir sua identidade, valores, produtos e serviços de forma eficaz e envolvente aos seus potenciais clientes e parceiros."
         }
       />

<Project 
  id={"webappProjects"}
idImg={"leveProjects"}
         title={"DeliveryFast - webapp"}
         description={
           "Sistema online para efetuar pedidos, adicionar a carinho , favoritos e sistema de recebimento de pagamentos."
         }
       />




     </section>
   </section>
 );
}