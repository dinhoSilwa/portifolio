import Image from "next/image";
import Head from "next/head";
import { MainMenuSuper } from '@/components/menusuper/mainmenusuper';
import { Heromain } from "@/components/hero/heromain";
import { Apresentation } from '@/components/apresentation/apresentation'
import { Myworks } from "@/components/myworks/myworks"
import { Abouteme } from "@/components/aboutmesection/aboutme"
import { Myskills } from "@/components/myskills/skills"
import { MyProjects } from "@/components/latestprojects/myprojects"
import {CallToActionProjects} from '@/components/calltoactionprojects/callprojects'
import { Flow } from "@/components/flowjob/myflow";
import { MyFlow } from "@/components/flowjob/myflow";
import { CallToActionSecondary } from '@/components/calltoactionflow/calltoaction2'
import { Form } from "@/components/contactforms/forms";
import { Footer } from "@/components/footer/footer"
import {CallToActionThird} from "@/components/calltoactionskills/CallToActionThird"



export default function Home() {
  return (

    <>
<Head>
  <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#ffffff" />
</Head>

    
    <div className="bg-[#000D1E]  h-full  overflow-x-hidden">
      <MainMenuSuper />
    <div className=" md:flex md:flex-row-reverse lg:w-[80%] lg:ml-auto lg:mr-auto md:mt-20  md:mb-20">

    <Heromain />
      <Apresentation />

    </div>
    
    <div className="md:flex md:px-8 ">
    <Myworks />
     
     <Abouteme />
    </div>
      <Myskills />
      <CallToActionThird />
      <MyProjects />
      <CallToActionProjects />
      <MyFlow />
      <CallToActionSecondary />
      <Form />
      <Footer />
    </div>
    

    
    </>

  );
}
