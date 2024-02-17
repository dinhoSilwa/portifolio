"use client"
import { Send } from 'lucide-react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as yup from "yup";

//import database

import {db} from '@/app/database/firebaseConfig'
import { collection, addDoc } from "firebase/firestore";



export const Form = () => {

  const userContactSchema = yup.object().shape({
    fullname: yup.string().required("Este campo não pode estar vazio").min(3, "O nome precisa ter 3 ou mais caracteres").max(50, "Seu nome Excedeu o Limite de 40 caracteres ,por Gentileza Abrevie"),
    email: yup.string().required("O email é obrigatório"),
    number: yup.number("Por gentileza insira Apenas Caracteres numéricos").required("O telefone é obrigatório"),
    msg: yup.string().required("Preciso saber mais sobre o tipo de projeto, digite a sua mensagem").min(8,"descreva melhor o projeto que iremos iniciar")
  });

  const [output , setOutput] = useState("")

  const { register, handleSubmit, formState :{errors} } = useForm({
    resolver: yupResolver(userContactSchema),
  });


  const databaseConnect = async (dataForm) => {
    try {
        const docRef = await addDoc(
            collection(db, "clienteContactForm"),
            {
                fullname: dataForm.fullname,
                email: dataForm.email,
                number: dataForm.number,
                msg: dataForm.msg
            }
        );
        return true;
    } catch (error) {
        console.error("Não foi possível conectar", error);
        return false;
    }
}

const onSubmit = async (dataForm) => {
  try {
    const success = await databaseConnect(dataForm); // Chama a função assíncrona databaseconnect
    if (success) {
      setOutput("Dados enviados com sucesso!");
      alert("Sucesso! Em breve Entraremos em contato")
    } else {
      setOutput("Erro ao enviar os dados. Por favor, tente novamente.");
    }
  } catch (error) {
    console.error("erro add doc", error);
    setOutput("Erro ao enviar os dados. Por favor, tente novamente.");
  }
};

  
  return (
    <section id="contactforms" className="flex items-center flex-col py-12 mb-8
     md:w-[60%] md:ml-auto md:mr-auto
    " >
      <header className=" text-white p-8">
        <h2 className=" font-bold text-3xl">Me contate</h2>
      </header>
      <form className="w-[80%] flex flex-col gap-4" 
      onSubmit={handleSubmit(onSubmit)}
      >


        <label className=" font-bold text-xl text-zinc-300" htmlFor="inputname">
          Nome Completo
        </label>
        <input
          type="text"
          className={`inputwhitfocus p-4 bg-[#D1E5FF] rounded-xl ${errors.fullname ? 'focus:ring-2 focus:ring-red-700 ' : 'focus:ring-2 focus:ring-blue-600'}`}

          placeholder="Digite o seu nome"
          id="inputname"
          {...register("fullname")}
        />
        {errors.fullname && <p className='bg-red-100 bg-opacity-75 text-red-700 p-2 font-bold'>{errors.fullname.message}</p>}


<label className=" font-bold text-xl text-zinc-300" htmlFor="inputNumber">
         Telefone para contato (com DDD)
        </label>
        <input
          type="tel"
          className={` p-4 bg-[#D1E5FF] rounded-xl ${errors.number ? 'focus:ring-2 focus:ring-red-700 ' : 'focus:ring-2 focus:ring-blue-600'}`}
          placeholder="(xx) xxxx-xxxx"
          id="inputNumber"
          {...register("number")}
        />
    {errors.number && <p className='bg-red-100 bg-opacity-75 text-red-700 p-2 font-bold'>{errors.number.message}</p>}



        <label className=" font-bold text-xl text-zinc-300" htmlFor="inputemail">
          Seu Melhor Email
        </label>
        <input
          type="email"
          className={` p-4 bg-[#D1E5FF] rounded-xl ${errors.email ? 'focus:ring-2 focus:ring-red-700 ' : 'focus:ring-2 focus:ring-blue-600'}`}
          placeholder="Digite o seu Email"
          id="inputemail"
          {...register("email")}
        />
    {errors.email && <p className='bg-red-100 bg-opacity-75 text-red-700 p-2 font-bold'>{errors.email.message}</p>}


        <label
          className=" font-bold text-xl text-zinc-300"
          htmlFor="inputMsg"
        >
          Descreva o projeto que iniciaremos juntos!
        </label>
        <textarea
          type="textarea"
          className={` p-4 bg-[#D1E5FF] rounded-xl ${errors.msg ? 'focus:ring-2 focus:ring-red-700 ' : 'focus:ring-2 focus:ring-blue-600'}`}

          placeholder="Digite os detalhes"
          id="inputMsg"
          {...register("msg")}
        />

{errors.msg && <p className='bg-red-100 bg-opacity-75 text-red-700 p-2 font-bold'>{errors.msg.message}</p>}


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
      
       {output.length > 0 ? 'Mensagem Enviada' :  'Enviar Mensagem'}
     </button>

      </form>
    </section>
  );
};
