"use client"
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
//reduxin yerine Context olusturdum 
interface CartContextProps {
    productCartQty: number // ekli olan tum urunlerin miktarını temsil ediyor
    cartPrdcts: CardProductProps[] | null
    // cartPrdcts: Sepette bulunan ürünlerin listesini tutar.
    addToBasket: (product: CardProductProps) => void
    removeFromCart: (product: CardProductProps) => void
    removeCart: () => void
    basketIncrease: (product: CardProductProps) => void
    basketDecrease: (product: CardProductProps) => void
}
// interface ile tip belirledim

const CartContext = createContext<CartContextProps | null>(null)

interface Props {
    [propName: string]: any
}

export const CartContextProvider = (props: Props) => {
    const [productCartQty, setProductCartQty] = useState(0)
    const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null)

    useEffect(() => {
        let getItem: any = localStorage.getItem('cart')
        const getItemParse: CardProductProps[] | null = JSON.parse(getItem)
        //JSON.parse: JSON formatındaki veriyi JavaScript nesnesine çevirir.
        setCartPrdcts(getItemParse)
        //sayfa ilk yuklendiginde 'cart' keyine kayıtlı veriler okunur ve cartPrdcts state'ine atanır.
    }, [])

    const removeCart = useCallback(() => {
        setCartPrdcts(null)
        toast.success("Sepet Temizlendi")
        localStorage.setItem('cart', JSON.stringify(null))
    }, [])

    const basketIncrease = useCallback((product: CardProductProps) => {
        let updatedCart;
        if (product.quantitiy == 10) {
            return toast.error("Sepete Daha Fazla Urun Ekleyemezsin!")
        }
        if (cartPrdcts) {
            updatedCart = [...cartPrdcts];
            const existingItem = cartPrdcts.findIndex(item => item.id === product.id)
            if (existingItem > -1) {
                updatedCart[existingItem].quantitiy = ++updatedCart[existingItem].quantitiy
            }
            setCartPrdcts(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
        return updatedCart
    }, [cartPrdcts])

    const basketDecrease = useCallback((product: CardProductProps) => {
        let updatedCart;
        if (product.quantitiy <= 1) {
            return toast.error("Sepete Daha az Ekleyemezsin!")
        }
        if (cartPrdcts) {
            updatedCart = [...cartPrdcts];
            const existingItem = cartPrdcts.findIndex(item => item.id === product.id)
            if (existingItem > -1) {
                updatedCart[existingItem].quantitiy = --updatedCart[existingItem].quantitiy
            }
            setCartPrdcts(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
        return updatedCart
    }, [cartPrdcts])


    const addToBasket = useCallback((product: CardProductProps) => {
        setCartPrdcts(prev => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            toast.success("Urun Sepete Eklendi!")
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            //güncellenen ürün listesi localStorage'a 'cart' key adıyla kaydedilir.
            return updatedCart
        })
    }, [])

    const removeFromCart = useCallback((product: CardProductProps) => {
        if (cartPrdcts) {
            const filtrelenmisUruns = cartPrdcts.filter(filt => filt.id !== product.id)
            // dısarıdan gelen urunu cartPrdcts icinden silicek
            setCartPrdcts(filtrelenmisUruns)
            toast.success("Urun Sepetten Silindi!")
            localStorage.setItem('cart', JSON.stringify(filtrelenmisUruns))
        }
    }, [cartPrdcts])
    let value = {
        productCartQty,
        addToBasket,
        cartPrdcts,
        removeFromCart,
        removeCart,
        basketIncrease,
        basketDecrease
    }

    return <CartContext.Provider value={value} {...props} />
}



const UseCart = () => {
    const context = useContext(CartContext)
    if (context == null) {
        throw new Error("Bir Hata Var!")
    }
    return context
}

export default UseCart