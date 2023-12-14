"use client"

import UseCart from "@/hooks/useCart"
import PageContainer from "../containers/PageContainer"
import Image from "next/image"
import Button from "../general/Button"
import { CardProductProps } from "../detail/DetailClient"
import Sayac from "../general/Sayac"

const CartClient = () => {
    const { cartPrdcts, removeFromCart, removeCart, basketIncrease, basketDecrease } = UseCart()
    if (!cartPrdcts || cartPrdcts.length == 0) {
        return <div>Sepetinizde Urun Bulunmamaktadır.</div>
    }
    let cartTotal = cartPrdcts.reduce((acc: any, item: CardProductProps) => acc + item.quantitiy * item.price, 0)
    //Urunlerin toplam fiyat miktarını aldım 
    return (
        <div className="my-3 md:my-10">
            <PageContainer>
                <div className="flex items-center border-b py-3 mb-5 text-center">
                    <div className="w-1/5">Urun Resmi</div>
                    <div className="w-1/5" >Urun Adı</div>
                    <div className="w-1/5" >Urun Miktarı</div>
                    <div className="w-1/5" >Urun Fiyatı</div>
                    <div className="w-1/5" >Duzenle</div>
                </div>
                <div>
                    {cartPrdcts.map(cart => (
                        <div key={cart.id} className="flex items-center text-center ">
                            <div className="w-1/5 flex items-center justify-center my-2">
                                <Image src={cart.image} width={50} height={50} alt="image" />
                            </div>
                            <div className="w-1/5" >{cart.name}</div>
                            <div className="w-1/5 flex items-center justify-center" >
                                <Sayac arttirFonk={() => basketIncrease(cart)} azaltFonk={() => basketDecrease(cart)} cardProduct={cart} />
                            </div>
                            <div className="w-1/5 text-lg text-[#ffa724] font-bold" >{cart.price}</div>
                            <div className="w-1/5">
                                <Button text="Urunu Sil" onClick={() => removeFromCart(cart)} hover />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between my-5 py-5 border-t">
                    <button onClick={() => removeCart()} className="w-1/5 underline text-sm">Sepeti Sil</button>
                    <div className="text-lg md:text-2xl font-bold text-[#ffa724]">{cartTotal}TL</div>
                </div>
            </PageContainer>
        </div>
    )
}

export default CartClient