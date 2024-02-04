"use client";

import { Flowrticle } from "@/components/flowjob/flowarticles";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useEffect, useState } from "react";

export const MyFlow = () => {
  const flowEffect = useRef(null);

  const [windowSizeFlow, setwindowSizeFlow] = useState(window.innerWidth);

  window.addEventListener("resize", handleSizeFlow);

  function handleSizeFlow() {
    setwindowSizeFlow(window.innerWidth);
  }


    
    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      flowEffect.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".flowHeader",
            scrub: true,
            // markers : true,
            start: "top 600px",
            end: "bottom 700px",
          },
        })
        .fromTo(".flowTitle", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
    });


     if(Window.innerWidth < 767){
      useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        flowEffect.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".flowHeader",
              scrub: true,
              // markers : true,
              start: "top 600px",
              end: "bottom 700px",
            },
          })
          .fromTo(".flowTitle", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
          return () => {
            window.removeEventListener("resize", handleSizeFlow);
          };
      });
  
    }


    if(window.innerWidth < 767){
      
    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      flowEffect.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".flowContainer",
            scrub: true,
            // markers : true,
            start: "top 400px",
            end: "bottom 1500px",
          },
        })
        .fromTo("#flow1", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo("#flow2", { y: 60, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo("#flow3", { y: 70, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo("#flow4", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

        return () => {
          window.removeEventListener("resize", handleSizeFlow);
        };
    });

    }


     if(window.innerWidth < 767){

      useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        flowEffect.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".flowcontainertwo",
              scrub: true,
              // markers : true,
              start: "top -100px",
              end: "bottom 400px",
            },
          })
          .fromTo("#flow5", { x: 100, opacity: 0 }, { x: 0, opacity: 1 })
          .fromTo("#flow6", { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo("#flow7", { y: 90, opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo("#flow8", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
  
        return () => {
          window.removeEventListener("resize", handleSizeFlow);
        };
      });
  
    }

// animaçoes para telas maiores do que 767px


useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  flowEffect.current = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".flowHeader",
        scrub: true,
        // markers : true,
        start: "top 400px",
        end: "bottom 200px",
      },
    })
    .fromTo(".flowTitle", { y: 80, opacity: 0 }, { y: 0, opacity: 1 }).fromTo(".flowSubTitle", { y: 80, opacity: 0 }, { y: 0, opacity: 1 });
});

useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  flowEffect.current = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".flowContainer",
        scrub: true,
        // markers : true,
        start: "top 700px",
        end: "bottom 800px",
      },
    })
    .fromTo("#flow1", { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo("#flow2", { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo("#flow3", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo("#flow4", { y: 40, opacity: 0 }, { y: 0, opacity: 1 });
});

useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  flowEffect.current = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".flowcontainertwo",
        scrub: true,
        // markers : true,
        start: "top 800px",
        end: "bottom 800px",
      },
    })
    .fromTo("#flow5", { x: 80, opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo("#flow6", { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo("#flow7", { y: 90, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo("#flow8", { y: 90, opacity: 0 }, { y: 0, opacity: 1 });


});




   

  return (
    <section
      className="gb-white flex flex-col mb-20 z-90 flowContainer flowcontainertwo
     md:items-center
    " id="flowjob"
    >
      <header
        className=" text-white p-8 flowHeader
      md:justify-center md:flex md:flex-col md:items-center md:mb-10
      "
      >
        <h2 className=" font-bold text-[32px] flowTitle ">
          Processo de Trabalho
        </h2>
        <h3 className="flowSubTitle">
          abaixo está a minha metodologia de trabalho desde o primeiro contato
          com o cliente até a entrega do seu website
        </h3>
      </header>
      <span className="border w-[100px] lingtWorks absolute">foco de luz</span>

      <section
        className="flex flex-col items-center gap-8  
      md:flex md:flex-row  md:flex-wrap md:gap-4 md:justify-center
      
      "
      >
        <Flowrticle
          className={"bg-red-600"}
          id={"flow1"}
          setaProject={"hidden"}
          seta={"flex"}
          title={"1. Briefing"}
          subtitle={
            "essa etapa envolve uma reunião com o cliente para compreender qual é o propósito do site, quem é o público-alvo, quais são suas preferências de design, funcionalidades específicas desejadas, entre outros aspectos relevantes.."
          }
        />

        <Flowrticle
          id={"flow2"}
          setaProject={"hidden"}
          seta={"flex"}
          title={"2. Pesquisa e doc"}
          subtitle={
            "após compreender as necessidades do cliente, é hora de começar fazendo as pesquisas e documentação de concorrentes, público-alvo para assim tomar decições acertivas para realmente deixar o projeto incrível."
          }
        />

        <Flowrticle
          id={"flow3"}
          setaProject={"hidden"}
          seta={"flex"}
          title={"3. Wireframe"}
          subtitle={
            "depois de ter todas os dados da pesquisa na mente eu vou começar criando um esboço simples do site para criar uma estrutura do site e validar as ideias e no wireframes não contam com detalhes como cores, fontes, ícones e imagens"
          }
        />

        <Flowrticle
          id={"flow4"}
          setaProject={"hidden"}
          seta={"flex"}
          title={"4. Design"}
          subtitle={
            "A etapa de design é uma das fases mais importantes em um projeto web, pois é nela que são criados os elementos visuais que irão compor a aparência e a identidade do site ou aplicação web."
          }
        />

        <Flowrticle
          id={"flow5"}
          setaProject={"hidden"}
          seta={"flex"}
          title={"5. Produção"}
          subtitle={
            "Nesta etapa, a ideia ganha vida. Um planejamento completo, com todas as funcionalidades e um design atrativo e intuitivo, é essencial."
          }
        />

        <Flowrticle
          id={"flow6"}
          setaProject={"hidden"}
          seta={"flex"}
          title={"6. Testes e ajustes"}
          subtitle={
            " Nesta fase, os testes são cruciais para identificar e corrigir problemas no site ou aplicativo. Eles devem ser abrangentes, cobrindo todas as funcionalidades, inclusive aquelas voltadas para o usuário específico."
          }
        />

        <Flowrticle
          id={"flow7"}
          setaProject={"hidden"}
          seta={"flex"}
          title={"7. Lançamento"}
          subtitle={
            "A fase de lançamento em um projeto web é crucial e deve ser planejada com antecedência. Ela é o momento em que o site ou aplicativo finalmente se torna público e começa a ser utilizado pelos usuários. "
          }
        />

        <Flowrticle
          id={"flow8"}
          setaProject={"hidden"}
          seta={"flex"}
          title={"8. Entrega do site"}
          subtitle={
            "A entrega do site é quando todo o trabalho concluído é finalmente entregue ao cliente ou ao usuário final. Essa é uma das etapas mais importantes e críticas do projeto, pois é nesse momento que o cliente finalmente poderá ver o produto final em ação. "
          }
        />
      </section>
    </section>
  );
};
