"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import {
  allskills,
  Html,
  Css,
  Sass,
  Bootstrat,
  Javascript,
  Tailwind,
  Git,
  Github,
  Nextjs,
  Mongodb,
  Figma,
  Ux,
} from "@/components/myskills/allskills";
export const Myskills = () => {

  const skiilsEffect = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    skiilsEffect.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".skiilContainer",
        scrub: true,
        // markers: true,
        start: "top 500px",
        end: "bottom 600px"
      }
    }).fromTo(
      ".skiilTitle",
      { y: 100, opacity: 0, color: "blue" },
      { y: 0, opacity: 1 , color : "white"}
    ).fromTo(
      ".skiilBlockone",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1 }
    ).fromTo(
      ".skiilBlockTwo",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, rotateX:"0deg" }
    ).fromTo(
      ".skiilBlockThree",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  }, []);



  return (
    <section id="skill" className="p-8 text-white m-auto flex flex-col gap-12 mb-10 skiilContainer
    md:mt-80 md:items-center md:text-center  md:mb-8 
    ">
      <header className="mb-8 
       md:mb-10
      ">
        <h2 className="w-[90%] font-bold text-[32px] skiilTitle">Habilidades</h2>
        <h3 className="text-[18px] skiilTitle">
          Seu Projeto criado com tecnologias de ponta.
        </h3>
      </header>

      <section className="flex flex-col space-y-8 
      md:px-8 md:w-[80%] md:ml-auto md:mr-auto 
      " >
        <div className="flex md:gap-6 items-center justify-center skiilBlockone">
          {" "}

         <div className="flex-1 flex-col items-center gap-3 text-center flex">
         <Html className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">HTML: Linguagem para criar e estruturar páginas da web.</p>
          </div>

          <div className="flex-1  flex flex-col items-center gap-3 text-center">
         <Css className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">CSS: Linguagem para estilizar e projetar páginas da web.</p>
          </div>

          <div className="flex-1  flex flex-col items-center gap-3 text-center">
         <Javascript className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">JavaScript: Linguagem para tornar páginas web interativas e dinâmicas.</p>
          </div>

          <div className="flex-1  flex flex-col items-center gap-3 text-center">
         <Sass className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">Sass: Extensão de CSS com recursos adicionais como variáveis e mixins.</p>
          </div>

          
          
           
        </div>

        <div className="flex md:gap-6 items-center justify-center skiilBlockTwo">
         <div className="flex-1  flex flex-col items-center gap-3 text-center">
         <Bootstrat className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">Bootstrap:  Framework front-end para desenvolver sites responsivos.</p>
          </div>

           <div className="flex-1  flex flex-col items-center gap-3 text-center">
         <Sass className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">Tailwind : Framework front-end com classes utilitárias para estilização.</p>
          </div>

           <div className="flex-1  flex flex-col items-center gap-3 text-center">
         <Git className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">Git : Sistema de controle de versão para rastrear alterações em projetos.</p>
          </div>

           <div className="flex-1  flex flex-col items-center gap-3 text-center">
         <Github className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">Github : Plataforma de hospedagem de código-fonte e colaboração.</p>
          </div>


        </div>

        <div className="flex md:gap-6 items-center justify-center skiilBlockThree">
           <div className="flex-1  flex flex-col items-center gap-3 text-center">
         <Nextjs className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">Next.js: Framework de JavaScript para construir aplicativos web com React.</p>
          </div>

           <div className="flex-1  flex flex-col items-center gap-3 text-center">
         <Mongodb className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">MongoDB: Banco de dados NoSQL para armazenamento de dados em formato de documento JSON.</p>
          </div>

           <div className="flex-1  flex flex-col items-center gap-3 text-center">
         <Ux className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">UX,  é como os usuários se sentem e interagem com um produto ou serviço digital.</p>
          </div>

           <div className="flex-1  flex flex-col items-center gap-3 text-center">
         <Figma className={"skill"}  /> <p className=" hidden md:block w-[70%] text-[12px]">Figma: Ferramenta de design de interface de usuário .</p>
          </div>


        </div>
      </section>
    </section>
  );
};



// 
// 
// Bootstrap: 
// Tailwind: 
// 
// Git: 
// GitHub: 
// Next.js: Framework de JavaScript para construir aplicativos web com React.
// Node.js: Ambiente de tempo de execução JavaScript para criar aplicativos de servidor.
// MongoDB: Banco de dados NoSQL para armazenamento de dados em formato de documento JSON.
// Express: Framework de aplicativo web para Node.js para simplificar o desenvolvimento de aplicativos e APIs.
// 