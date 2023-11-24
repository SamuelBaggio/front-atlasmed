'use server'

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

let url ="http://localhost:8080/api/medicos"

export async function getMedico(id){
    const options = {
    }

    const idUrl = `${url}/${id}`
  
    const result = await fetch(idUrl, options)
  
    if(result.status != 200){
      throw new Error(`Falha ao obter dados das contas. (${result.status})`)
    }
  
    const json = await result.json()
    return json
  }