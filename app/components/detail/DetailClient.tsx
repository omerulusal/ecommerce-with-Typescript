"use client"
import Image from "next/image"
import PageContainer from "../containers/PageContainer"
import Sayac from "../general/Sayac"
import { useEffect, useState } from "react"
import { Rating } from "@mui/material"
import Button from "../general/Button"
import Comment from "./Comment"
import Heading from "../general/Heading"
import UseCart from "@/hooks/useCart"

// Urunun Detaylarının Bulundugu Sayfa
export type CardProductProps = {
    id: string,
    name: string,
    description: string,
    price: number,
    quantitiy: number,
    image: string,
    inStock: boolean
}
interface DetailClientProps {
    product: {
        id: string;
        name: string;
        description: string;
        price: number;
        quantity: number;
        image: string;
        inStock: boolean;
        reviews?: { id: string; rating: number; }[];
    };
}
// page.tsx te mapledigim verileri param olarak aldım

const DetailClient: React.FC<DetailClientProps> = ({ product }: { product: any }) => {
    
    //page.tsx ten tıklandıgında gelecek urunu buraya product adıyla getirdim 
    const [diplayButton, setDiplayButton] = useState(false)
    const { addToBasket, cartPrdcts } = UseCart()
    const [cardProduct, setCardProduct] = useState<CardProductProps>({
        id: product?.id ?? '',
        name: product?.name ?? '',
        description: product?.description ?? '',
        price: product?.price ?? 0,
        quantitiy: 1,
        image: product?.image ?? '',
        inStock: product?.inStock ?? 0,
    });
    const arttirFonk = () => {
        if (cardProduct.quantitiy == 10) return
        setCardProduct(prev => ({ ...prev, quantitiy: prev.quantitiy + 1 }))
    }
    const azaltFonk = () => {
        if (cardProduct.quantitiy <= 1) return
        setCardProduct(prev => ({ ...prev, quantitiy: prev.quantitiy - 1 }))
    }

    let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length
    productRating = productRating ? productRating : 4

    useEffect(() => {
        setDiplayButton(false)
        // Urun Sepete Ekli adlı button
        const controlDisplay = cartPrdcts?.findIndex(cart => cart.id === product?.id);

        if (controlDisplay !== undefined && controlDisplay > -1) {
            setDiplayButton(true);
        }

    }, [cartPrdcts, product?.id])
    console.log(product)
    return (
        <div className="my-10">
            <PageContainer>
                <div className="block md:flex gap-10 justify-center">
                    <div className="h-[400px] w-[400px] relative ">
                        <Image src={product?.image} className="object-contain" fill alt="product" />
                    </div>
                    <div className="md:w-1/2 space-y-3 w-full">
                        <div className="text-xl md:text-2xl">{product?.name}</div>
                        <Rating readOnly value={productRating}></Rating>
                        <div className="text-slate-500">{product?.description}</div>
                        <div className="flex items-center gap-2">
                            <div>STOK DURUMU:</div>
                            {product?.inStock ? <div className="text-green-500">Urun Stokta Mevcut</div> : <div className="text-red-600">Urun Stokta Bulunmamakta</div>}
                        </div>
                        <div className="text-lg md:text-2xl text-[#ffa724] font-bold ">{product?.price} TL</div>

                        {diplayButton ? <>
                            <Button hover={false} onClick={() => { }} outline text="Urun Sepete Ekli" small />
                        </>
                            : <>
                                <Sayac cardProduct={cardProduct} arttirFonk={arttirFonk} azaltFonk={azaltFonk} />
                                <Button onClick={() => addToBasket(cardProduct)} text="Sepete Ekle" hover small />
                            </>}
                    </div>
                </div>
                <Heading text="Yorumlar" />
                <div>
                    {
                        product?.reviews?.map((prd: any) => (
                            <Comment prd={prd} key={prd.id} />
                        ))
                    }
                </div>
            </PageContainer>
        </div>
    )
}

export default DetailClient