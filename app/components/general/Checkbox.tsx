import { FieldValues, UseFormRegister } from "react-hook-form"

interface CheckboxProps {
    id: string
    register: UseFormRegister<FieldValues>
    label: string
}

const Checkbox: React.FC<CheckboxProps> = ({ id, register, label, }) => {
    return (
        <div className="flex items-center gap-2">
            <input type="checkbox" {...register(id)} id={id} className="w-4 h-4" />
            <label htmlFor={id} className={` text-sm hover:font-bold transition-all`}>{label}</label>
        </div>
    )
}

export default Checkbox