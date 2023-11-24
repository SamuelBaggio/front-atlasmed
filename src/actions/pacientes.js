'use server'

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

let url ="http://localhost:8080/api/paciente"

export async function create(formData) {
    const options = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json"
      }
    }
    const result = await fetch(url, options)

    if(result.status !== 201){
      return {message: "Erro ao criar a conta. Verifique os campos."}
    }
    revalidatePath("/")
    return {ok: "Conta criada com sucesso"}

}

export async function getPacientes(){
  const options = {
  }

  const result = await fetch(url, options)

  if(result.status != 200){
    throw new Error(`Falha ao obter dados das contas. (${result.status})`)
  }

  const json = await result.json()
  return json
}

export async function destroy(id){
  const options = {
    method: "DELETE"
  }

  const deleteURL = `${url}/${id}` 
  console.log(deleteURL);

  const response = await fetch(deleteURL, options)
  
  if (!response.ok){
    const json = await response.json()
    return {error: "Falha ao apagar conta. " + json.message }
  }

  revalidatePath("/")
}
