import NavBar from "@/components/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import CardPaciente from '@/components/CardPaciente';
import { getPacientes } from "@/actions/pacientes";
import axios from "axios"   

export default async function Pacientes() {
    const data = await getPacientes()
    return (
      <>
      <NavBar/>
      <main className='m-10'>
        <div className=" mb-8">
          <h2 className='text-xl font-bold tracking-wide ml-20'> Pacientes </h2>
            {data.map((paciente) => {
              return <div className="">  
                <CardPaciente paciente={paciente}/>
                </div>
            })}
        </div>
        <a href="/pacientes/new" className="bg-sky-600 text-white py-3 ml-20 px-5 rounded hover:bg-sky-700">
            Cadastrar Paciente
        </a>
      </main>

      </>
    )
  }