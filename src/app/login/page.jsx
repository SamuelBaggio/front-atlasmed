"use client"

import InputText from "@/components/InputText";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

export default function Login(){
    const {register, handleSubmit} = useForm()
    const {login} = useContext(AuthContext)

    const onSubmit = async data => {
        console.log(data)
        const resp = await login(data)
        if (resp?.error) toast.error(resp.error)
    }

    return (
        <div className="h-screen flex">
            <main className="flex flex-col justify-center items-center h-screen w-full gap-2">
                <div className="bg-slate-100 px-80 py-28 rounded-xl">
                    <h2 className='text-5xl tracking-wider text-sky-800 font-bold text-center mb-8'> atlasMED. </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                        <InputText register={register} label="Email" name="email" />
                        <InputText register={register} label="Senha " name="senha" type="password" />
                        <Button>Entrar </Button>
                        <Toaster />
                    </form>
                </div>
            </main>
        </div>
    )
}