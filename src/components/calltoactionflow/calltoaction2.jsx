import {Send } from 'lucide-react'
import { CallToactionBtn } from '@/components/buttons/calltoactionnavsuper'

export const CallToActionSecondary = () =>{
 return (
   <section className="w-[85%] p-8 py-16 text-white m-auto flex flex-col gap-8 bg-[#D1E5FF] mt-10 rounded-2xl 
   md:border md:w-[90%] md:gap-8 md:items-center md:justify-center md:flex-row
   ">
     <header>
       <h2 className="w-[90%] text-center font-bold text-3xl text-[#000D1E]
       md:w-[95%]
       ">
         Vamos iniciar um Projeto Juntos ?
       </h2>
     </header>
     <p className="text-center text-[#000D1E]
     md:text-[22px] md:w-[80%] md:border md:grid md:place-content-center
     ">
       Se você deseja levar seu projeto para o mundo online e impressionar seus
       clientes, vamos conversar. Eu posso cuidar de todos os detalhes para
       você!
     </p>

     <a href="#contactforms" className="px-4 py-8 bg-gradient-to-l flex items-center justify-center gap-4
      from-blue-600 via-blue-900
       to-blue-900
       rounded-md
       text-white
       font-bold
       border-none
        h-12
       ml-auto mr-auto
       shadow-lg
     ">
      <Send /> Iniciar uma conversa
     </a>


   </section>
 );
}