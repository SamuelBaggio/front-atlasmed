import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function NavBar(){
    return(
        <nav className='flex justify-between bg-sky-900 p-10'>
            <ul className='flex gap-12 text-lg text-slate-300 items-center'> 
                <li>
                    <Link href="/">
                        <h1 className='text-xl tracking-wider text-slate-50 font-bold '> atlasMED. </h1>
                    </Link>
                </li>
                <li>
                    <Link href="/pacientes">
                        Pacientes
                    </Link>
                </li>        
                <li>
                    <Link href="/consultas">
                        Consultas
                    </Link>
                </li>        
            </ul>
            <div className='text-2xl text-slate-50 items-center flex mr-2'>
                    <Link href="/perfilMedico">
                        <i className="bi bi-person-circle ml-5"></i>
                    </Link>
            </div>
        </nav>
    )
}