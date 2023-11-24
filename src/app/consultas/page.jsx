"use client"


import NavBar from "@/components/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios"
import { useEffect, useState } from "react"

export default function Consultas() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/consulta')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
      <>
      <NavBar/>
      <main className='m-10'>
        <div className=" mb-8">
          <h2 className='text-xl font-bold tracking-wide ml-20'> Consultas </h2>
          {data.map((prod) =>{
                    return <div key={prod.id}>
                            <div className="bg-slate-100 p-5 rounded-xl mx-20 my-4 justify-between">
                                <div className="flex justify-between">
                                    <div className="infos">
                                        <h5 className="my-1"> <b>Motivo: </b> {prod.motivo}</h5>
                                        <h5 className="my-1"> <b>Diagnóstico: </b> {prod.diagnostico}</h5>
                                    </div>
                                    <div className="">
                                        <h5 className="my-1"> <b>{prod.data}</b></h5>
                                    </div>
                                </div>
                                <h5 className="my-1"> <b>Paciente: </b></h5>
                                <div className="flex">
                                    <div className="self-center text-4xl mt-2 mx-6">
                                        <p><i className="bi bi-person-circle"></i></p>
                                    </div>
                                    <div className="">
                                        <h5> <b>Nome: </b> {prod['paciente']['nome'] }</h5>
                                        <h5> <b>CPF: </b> {prod['paciente']['cpf'] }</h5>
                                        <h5> <b>Email: </b> {prod['paciente']['email']  }</h5>   
                                    </div>
                                </div>
                                <h5 className="my-1"> <b>Médico: </b></h5>
                                <div className="flex">
                                    <div className="self-center text-4xl mt-2 mx-6">
                                        <p><i className="bi bi-person-circle"></i></p>
                                    </div>
                                    <div className="">
                                        <h5> <b>Nome: </b> {prod['medico']['nome'] }</h5>
                                        <h5> <b>CPF: </b> {prod['medico']['cpf'] }</h5>
                                        <h5> <b>Email: </b> {prod['medico']['crm']  }</h5>   
                                    </div>
                                </div>
                            </div>
                        </div>
                })}
        </div>
        <a href="/consultas/new" className="bg-sky-600 text-white py-3 ml-20 px-5 rounded hover:bg-sky-700">
            Cadastrar Consulta
        </a>
      </main>

      </>
    )
  }