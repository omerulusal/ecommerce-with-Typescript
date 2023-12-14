"use client"
import UseCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { IoBasketSharp } from "react-icons/io5";
const CardCount = () => {
    const { cartPrdcts } = UseCart()
    const urlegit = useRouter()
    return (
        <div className="hidden md:flex relative " onClick={()=>urlegit.push("/cart")} >
            <IoBasketSharp size={30} />
            <div className="absolute -top-1 right-0 text-red-500 bg-black rounded-full w-4 flex items-start text-xs justify-center">
                {cartPrdcts?.length}
            </div>
        </div>
    )
}
// sepet uzerindeki dinamik sayıyı temsil ediyor
export default CardCount