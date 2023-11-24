'use client'

export default function CardConsulta({consulta}){
    const {id } = consulta

    return(
        <div className="flex bg-slate-100 p-5 rounded-xl mx-20 my-4 justify-between     " key={id}>
            <div className="flex">
                <div className="self-center text-4xl mr-6">
                    <p><i className="bi bi-person-circle"></i></p>
                </div>
                <div className="">
                    <h5> <b>Nome: </b> {id }</h5>
                </div>
            </div>
        </div>
    )
}