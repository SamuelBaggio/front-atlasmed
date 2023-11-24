"use server"

import { cookies } from "next/headers"

let url = "http://localhost:8080/api/login"

export default async function apiLogin(credenciais){
    const options = {
        method: "POST",
        body: JSON.stringify(credenciais),
        headers: {
          "Content-Type": "application/json"
        }
    }
    const resp = await fetch(url, options)
    console.log(resp)

    if (resp.status === 403) return {error: "email e/ou senha inválidos"}

    const user = await resp.json()
    const token = user.token
    
    cookies().set("atlasmed_token", token, {
        maxAge: 60 * 60 * 24 * 2 // 2 dias
    })

    return user
}

export async function apiLogout(){
    cookies().set("atlasmed_token", "", {
        maxAge: 1 
    })
}