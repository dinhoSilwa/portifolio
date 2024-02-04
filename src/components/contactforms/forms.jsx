import { Send } from 'lucide-react'
export const Form = () => {
  return (
    <section id="contactforms" className="flex items-center flex-col py-12 mb-8
     md:w-[60%] md:ml-auto md:mr-auto
    " >
      <header className=" text-white p-8">
        <h2 className=" font-bold text-3xl">Me contate</h2>
      </header>
      <form className="w-[80%] flex flex-col gap-4">
        <label className=" font-bold text-xl text-zinc-300" htmlFor="inputname">
          Nome Completo
        </label>
        <input
          type="text"
          className="inputwhitfocus focus:ring focus:ring-blue-600 p-4 bg-[#D1E5FF] rounded-xl"
          placeholder="Digite o seu nome"
          id="inputname"
        />
        <label className=" font-bold text-xl text-zinc-300" htmlFor="">
          Melhor Email
        </label>
        <input
          type="email"
          className="inputwhitfocus focus:ring focus:ring-blue-600 p-4 bg-[#D1E5FF] rounded-xl"
          placeholder="Digite o seu Email"
          id="inputemail"
        />

        <label
          className=" font-bold text-xl text-zinc-300"
          htmlFor="inputmessage"
        >
          Mensagem
        </label>
        <textarea
          type="textarea"
          className="inputwhitfocus focus:ring focus:ring-blue-600 p-4 bg-[#D1E5FF] rounded-xl h-32"
          placeholder="Digite os detalhes"
          id="inputmessage"
        />

<button className="px-8 py-8 bg-gradient-to-l flex items-center justify-center gap-4
      from-blue-600 via-blue-900
       to-blue-900
       rounded-md
       text-white
       font-bold
       border-none
        h-12
       ml-auto mr-auto
     ">
       Enviar Mensagem
     </button>

      </form>
    </section>
  );
};
