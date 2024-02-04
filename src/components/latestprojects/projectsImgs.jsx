import Image from "next/image";
import frontendfusion from '@/assets/imgs/projects/frontendfusion.png'
import fofuxosProject from '@/assets/imgs/projects/fofuxos.png';
import leveProjects from "@/assets/imgs/projects/leveRH.png"
import webappProjects from "@/assets/imgs/projects/webapp.png"

export const ImgsProjects = ({idImg, altImgDescript}) =>{



  const imgPath = {
    frontendfusion,
    fofuxosProject,
    leveProjects,
    webappProjects

  }
 return(
  <Image src={imgPath[idImg]} width={"50%"} alt={altImgDescript} priority />
 );
}

export const LogoProjects = () =>{
 return(
  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6.79821L1.34309 6.00269L18.0284 15.7039L18.1834 17.419L16.7163 18.0698L2.66552 9.88732V19.0927L14.8257 26.0457L11.9225 27.6988L0 21.0763V6.79821Z" fill="url(#paint0_linear_75_2)"/>
<path d="M23.9896 9.9802V6.92208L11.9121 0L3.97754 4.65949L21.3551 14.619V19.5368L17.6254 21.4688L5.2793 14.4124V18.0387L17.2225 24.9092L23.9999 21.0039V12.9867L9.41189 4.45286L11.9121 3.05811L23.9896 9.9802Z" fill="url(#paint1_linear_75_2)"/>
<defs>
<linearGradient id="paint0_linear_75_2" x1="9.09169" y1="6.00269" x2="-2.31531" y2="10.5812" gradientUnits="userSpaceOnUse">
<stop stop-color="#0DF0FF"/>
<stop offset="0.5625" stop-color="#49EFFA"/>
<stop offset="1" stop-color="#05CEDB"/>
</linearGradient>
<linearGradient id="paint1_linear_75_2" x1="13.9887" y1="0" x2="1.28685" y2="4.8897" gradientUnits="userSpaceOnUse">
<stop stop-color="#0DF0FF"/>
<stop offset="0.5625" stop-color="#49EFFA"/>
<stop offset="1" stop-color="#05CEDB"/>
</linearGradient>
</defs>
</svg>

 );
}