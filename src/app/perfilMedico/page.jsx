import { getMedico } from "@/actions/medicos";
import NavBar from "@/components/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

export default async function Login(){
    const data = await getMedico(1)
    return (
        <div>
            <NavBar> </NavBar>
            <div className="mt-10">
            <div className="flex mx-32">
                <div className="w-1/12"></div>
                <div className="w-3/12">
                    <i className="bi bi-person-circle items-center" style={{fontSize: 200}}></i>
                </div>
                {/* <img className="rounded-xl w-5/12 object-contain align-middle " src={data.linkImagem}/> */}
                <div className="w-8/12 ml-10 mt-10"> 
                    <h3 className="font-semibold text-2xl mb-4"> {data.nome} </h3>
                    <p className="mb-2"><b>Email: </b> {data.email}</p>
                    <p className="mb-2"><b>CRM: </b> {data.crm}</p>
                    <p className="mb-2"><b>CPF: </b> {data.cpf}</p>
                    <div className=" flex mt-6">
                        <Link href={'/login'}>
                            <button className="py-2 px-6 border-none bg-rose-600 text-teal-50 font-bold rounded-lg"> <i className="bi bi-box-arrow-right"></i> Sair da Conta</button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}