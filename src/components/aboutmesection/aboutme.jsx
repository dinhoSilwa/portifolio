"use client"
import { CallToactionBtn } from "@/components/buttons/calltoactionnavsuper";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect , useRef} from "react";
import { Send } from "lucide-react";





export const Abouteme = () =>{

const elementEffect = useRef(null);

useLayoutEffect(() => {
  elementEffect.current = gsap.timeline({
    scrollTrigger: {
      trigger: ".triggerContainer",
      scrub: true,
      // markers: true,
      start: "top 600px",
      end: "bottom 800px",
    }
  }).fromTo(
    ".triggetextone",
    { y: 90 , opacity: 0 },
    { y: 0 , opacity : 1}
  ).fromTo(
    ".triggetexttwo",
    { y: 90 , opacity: 0 },
    { y: 0 , opacity : 1}
  ).fromTo(
    ".triggetextfour",
    { y: 90 , opacity: 0 },
    { y: 0 , opacity : 1}
  ).fromTo(
    ".triggetextfive",
    { y: 90 , opacity: 0 },
    { y: 0 , opacity : 1}
  ).fromTo(
    ".btncall",
    { y: 90 , opacity: 0 },
    { y: 0 , opacity : 1}
  );
}, []);

 return (
   <section id="aboutme" className="p-8 text-white m-auto flex flex-col gap-8 mb-10 triggerContainer
 md:w-[45%]
   " >
     <header>
     <h3 className="w-[90%] font-bold text-[24px] triggetextone">Sobre-min</h3>
     <h2 className="w-[90%] font-bold text-[32px] triggetextone1">Quem Eu sou ?</h2>
     </header>
     <article className="flex flex-col gap-8 text-regular text-sm font-regular text-zinc-300">
       <p className="text-[18px] triggetexttwo">
       Eu sou de Fortaleza - CE, curso Análise e Desenvolvimento de Sistemas na Faculdade Unitese. Com mais de três anos como Programador Front-End, busco constantemente aprimorar interfaces dinâmicas para melhorar a experiência dos usuários.
       </p>

       <p className="text-[18px] triggetextfour">
         Possuo habilidades destacadas na codificação de produtos, sou criativo,
         orientado a resultados e sempre busco aprimorar a experiência dos
         usuários e clientes.
       </p>

       <p className="text-[18px] triggetextfive 
       md:hidden
       mb:">
         Minha vasta experiência abrange diversas linguagens e ferramentas, tais
         como <strong className="text-bold">HTML, CSS, Sass, Bootstrap,Tailwind, JavaScript, Git, GitHub, NextJs Node.js,
         MongoDB, Express e Figma.</strong> Mantenho-me em constante aprendizado, sempre
         buscando assimilar novas tecnologias.
       </p>
     </article>

     <button className="btncall px-4 py-8 bg-gradient-to-l flex items-center justify-center gap-4
      from-blue-600 via-blue-900
       to-blue-900
       rounded-md
       text-white
       font-bold
       border-none
        h-12
        md:w-[60%]
       
       text-[20px]
     ">
      <Send /> Iniciar uma conversa
     </button>
   </section>
 );
}