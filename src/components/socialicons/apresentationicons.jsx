import { GithubIcon, LinkedinIcon,MailCheck ,Instagram } from "lucide-react";
export const ApresentationIcons = () =>{
   
 return(

   <ul className="list-none flex gap-8 h-20 items-end mb-10">
    <GithubIcon className="cursor-pointer " size={"96px"} color={"#0c59ccf9"} />
    <LinkedinIcon className="cursor-pointer " size={"96px"} color={"#0c59ccf9"} />
    <MailCheck className="cursor-pointer " size={"96px"} color={"#0c59ccf9"} />
    <Instagram className="cursor-pointer " size={"96px"} color={"#0c59ccf9"} />
   </ul>
   
 );
}