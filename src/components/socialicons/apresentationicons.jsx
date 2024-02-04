import { GithubIcon, LinkedinIcon, MailCheck, Instagram } from "lucide-react";
import { IconBrandBehance } from '@tabler/icons-react';
import Link from "next/link";
export const ApresentationIcons = () => {
  return (
    <ul className="list-none flex gap-8 h-20 items-end mb-10">
     <a href="https://github.com/dinhoSilwa"> <GithubIcon className="cursor-pointer icon-size" color={"#0c59ccf9"} /></a>
     <a href="https://www.linkedin.com/in/cl%C3%A1udio-silva-46a3602a6/"> <LinkedinIcon className="cursor-pointer icon-size" color={"#0c59ccf9"} /></a>
      <a href="https://www.behance.net/claudiosil50ea"><IconBrandBehance className="cursor-pointer icon-size" color={"#0c59ccf9"} /></a>
     <a href="https://www.instagram.com/claudiosilwa_?igsh=a3FhYmFoNW1jZTZl"> <Instagram className="cursor-pointer icon-size" color={"#0c59ccf9"} /></a>
    </ul>
  );
}
