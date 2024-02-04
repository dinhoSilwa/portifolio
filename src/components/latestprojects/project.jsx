import { MoveRight } from 'lucide-react'

import {ImgsProjects , LogoProjects} from "@/components/latestprojects/projectsImgs";
export const Project = ({
 img,
 title,
 description,
 destiny,
 idImg,
 id,
 altImgDescript
 
}) => {
  return (
    <article className=" w-[95%] flex flex-col gap-4 bg-[#000F2E]
     md:w-[42%] md:gap-0
    " id={id}>
      <figure>
      <ImgsProjects idImg={idImg} altImgDescript={altImgDescript} />
      </figure>

      <header className=' px-4 py-3 flex gap-4
      md:pt-6
      '>
      <LogoProjects /> <h3 className="w-[90%] font-bold text-xl">{title}</h3>
      </header>
     <div className=' px-4'>
     <p className='first-letter:uppercase w-[100%] text-[16px] font-extralight  md:h-[140px] md:overflow-hidden md:overflow-ellipsis md:whitespace-wrap'>
       {description}
      </p>
      <div>
       
      </div>

     </div>
     <span>
    
      <a href={destiny} className='flex gap-2 items-center cursor-poiter px-4 py-6 hover:text-[#0DF0FF]'>Ver Projeto <MoveRight /></a>

      </span>
    </article>
  );
};
