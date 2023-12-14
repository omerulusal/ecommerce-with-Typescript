"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
    id: string
    placeholder: string
    disabled?: boolean
    type: string
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}
const Input: React.FC<InputProps> = ({
    id, placeholder, disabled, type, required, register, errors
}) => {
    return (
        <div className="flex items-center justify-center">
            <input className={`h-12 py-3 px-5  w-full  rounded-md outline-none my-2 ${errors[id] ? "border border-red-500" : "border border-slate-300"}`} type={type} id={id} placeholder={placeholder} disabled={disabled} {...register(id, { required })} />
        </div>
    )
}

export default Input