"use client"
import textClip from "@/utils/textClip"
import { Rating } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"

const ProductCard = ({ veri }: { veri: any }) => {
    const router = useRouter()//! next/navigation olanı aldım

    return (
        <div onClick={() => router.push(`product/${veri.id}`)} className="w-[240px] shadow-lg p-2 rounded-xl cursor-pointer flex flex-col flex-1 ">
            <div className="relative h-[200px] ">
                <Image src={veri.image} fill alt="product" className="object-contain" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="text-center mt-2 space-y-1 ">
                <div>{textClip(veri.name)}</div>
                {/* textClip sayesinde veri 20 karakterden uzunsa ... eklenir */}
                <Rating readOnly value={4}></Rating>
                <div className="text-[#ffa724] font-bold text-lg md:text-xl">{veri.price}</div>
            </div>
        </div>
    )
}
// Bu urun cartları anasayfada gorunecek
// carta tıklayınca urlde o kartın idsine yonlendiriyor ve product klasorundeki page.tsxe gidiyor
export default ProductCard