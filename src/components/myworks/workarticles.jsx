"use client"
import { MoveRight, ArrowBigDown } from 'lucide-react'


export const Workarticle = ({ 
 id,
 seta,
 title,
 subtitle,
 link,
 setaProject,
 psize,
 bg,
 className
 
}) =>{




 return(
  
<article id={id} className={` ${bg} w-[90%] p-8 rounded-xl flex flex-col justify-between shadow-md
 md:w-[85%] md:p-6 md:py-10 md:justify-end
border border-[#0c59ccf9] text-white hover:bg-gradient-to-t hover:from-[#212867] hover:to-[#212867]`}>

 <span className='flex justify-between 
   md:mb-6
 '> <h3 className='text-white font-bold text-[24px]'>{title}</h3> <ArrowBigDown className={`${seta}`}/></span>
  <p className='first-letter:uppercase text-[15px]'>{subtitle}</p>
  <span className={`${setaProject}  md:mt-4`}><a href={`link}`} className={`flex gap-2 items-center cursor-poiter hover:text-[#0c59ccf9]`}>Ver Projeto <MoveRight /></a></span>

  </article>
 );
}