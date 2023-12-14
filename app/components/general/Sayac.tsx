import { CardProductProps } from "../detail/DetailClient"

type SayacProps = {
    cardProduct: CardProductProps,
    arttirFonk: () => void,
    azaltFonk: () => void,
}
const Sayac: React.FC<SayacProps> = ({ cardProduct, arttirFonk, azaltFonk }) => {
    const buttonTipi = "w-8 h-8 border flex items-center justify-center text-lg rounded-md cursor-pointer"
    return (
        <div className="flex items-center gap-2">
            <div className={buttonTipi} onClick={azaltFonk} >-</div>
            <div>{cardProduct.quantitiy}</div>
            <div className={buttonTipi} onClick={arttirFonk} >+</div>
        </div>
    )
}

export default Sayac