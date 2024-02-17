
export const CallToactionBtn = ({ btnText , id }) => {
  return (
    <a href="#contactforms" id={id} className="grid place-content-center buttoneffect 
     px-6 py-2 bg-gradient-to-l
      from-blue-600 via-blue-900
       to-blue-900
       rounded-md
       text-white
       font-bold
       border-none
       w-[60%] h-12
       text-[18px]
       p-6
      
       ">
      {btnText}
    </a>
  );
};
