export default function InputText({label, id, register=()=>{}, name, ...props}){
    return(
        <div className="flex flex-col gap-1 my-2">
            <label htmlFor={id} className="text-slate-800">{label}</label>
            <input 
                className="bg-slate-100 border border-sky-950 rounded p-2 mb-4" 
                type="text" 
                id={id} 
                {...register(name)}
                {...props}
            />
        </div>
    )
}