"use client";
import { MoveRight, ArrowBigDown, ArrowBigRightDash } from "lucide-react";
import { useEffect, useState } from "react";

export const Flowrticle = ({
  id,
  seta,
  title,
  subtitle,
  link,
  setaProject,
  psize,
  bg,
  className,
}) => {
 

  return (
    <article
      id={id}
      className={` ${bg} w-[90%] p-8 rounded-xl flex flex-col justify-between shadow-xl
 md:w-[22%] md:p-2 md:py-2 md:justify-center md:h-[220px] cursor-default
border-2 border-[#043c8ff9] text-zinc-200 hover:bg-gradient-to-t hover:from-[#212867] hover:to-[#212867]`}
    >
      <span
        className="flex justify-between 
   md:mb-6
 "
      >
        {" "}
        <h3
          className="text-white font-bold text-[24px]
  md:w-[100%]  md:text-[18px]
 "
        >
          {title}
        </h3>
        <span className="hidden md:flex"><ArrowBigRightDash className={`${seta}`} /></span>
        <span className=" md:hidden"><ArrowBigDown className={`${seta}`} /></span>
      </span>

      <p
        className="first-letter:uppercase text-[15px]
    md:h-[220px] md:leading-4
  "
      >
        {subtitle}
      </p>

      <span className={`${setaProject}  md:mt-4`}>
        <a 
          href={`link}`}
          className={`flex gap-2 items-center cursor-poiter hover:text-[#0c59ccf9]`}
        >
          Ver Projeto <MoveRight />
        </a>
      </span>
    </article>
  );
};
