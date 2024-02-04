import { ApresentationIcons } from "@/components/socialicons/apresentationicons"
import { GithubIcon, LinkedinIcon,MailCheck ,Instagram, CopyrightIcon } from "lucide-react";


export const Footer = () =>{
 return(
<footer className="bg-blue-900 flex flex-col items-center justify-center gap-12">

 <ul className="list-none flex gap-12 h-20 items-end">
    <GithubIcon className="cursor-pointer " color={"#fff"} />
    <LinkedinIcon className="cursor-pointer " color={"#fff"} />
    <MailCheck className="cursor-pointer " color={"#fff"} />
    <Instagram className="cursor-pointer " color={"#fff"} />
   </ul>
   <ul className="flex flex-col gap-8 text-center text-white">

    <li className="cursor-pointer text-2xl text-center sm:hover:border-b sm:hover:border-b-blue-600 p-2 md:text-[18px] ">Home</li>
       <a href="#aboutme"> <li className="cursor-pointer text-2xl text-center sm:hover:border-b sm:hover:border-b-blue-600 p-2 md:text-[18px] ">Sobre-min</li></a>
      <a href="#skill"><li className="cursor-pointer text-2xl text-center sm:hover:border-b sm:hover:border-b-blue-600 p-2 md:text-[18px] ">Habilidades</li></a>
      <a href="#myprojects"><li className="cursor-pointer text-2xl text-center sm:hover:border-b sm:hover:border-b-blue-600 p-2 md:text-[18px] ">Projetos</li></a>
       
   </ul>
   <span className="py-6 flex items-center justify-center text-white text-[11px] gap-2">Copyright <CopyrightIcon color={"#fff"} /> 2024 Cláudio silva | All Rights Reserved</span>
</footer>
 );
}