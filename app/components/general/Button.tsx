import { IconType } from "react-icons"

interface ButtonProps {
    text: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    small?: boolean
    outline?: boolean
    icon?: IconType
    disabled?: boolean
    hover?: boolean
}
const Button: React.FC<ButtonProps> = ({ text, onClick, small, outline, disabled, hover, icon: Icon }) => {
    return (
        <button disabled={disabled} className={`flex items-center justify-center gap-2 rounded-lg my-2 p-3 ${hover ? "hover:bg-[#ffa724] hover:text-black transition-all" : ""} ${small ? "w-[250px]" : "w-full"} ${outline ? "border text-black" : "bg-black text-white"}`} onClick={onClick}>
            {Icon && <Icon />}
            {text}
        </button>
    )
}

export default Button