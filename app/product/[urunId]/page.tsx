import DetailClient from "@/app/components/detail/DetailClient";
import { getAllProducts } from '@/app/models/Product';


type DetailProps = {
    urunId?: string
}
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    inStock: boolean;
    reviews?: { id: string; rating: number; }[] | undefined;
}

const Detail: React.FC<{ params: Product & { urunId: string } }> = async ({ params }) => {
    const products = await getAllProducts();
    const { urunId } = params;
    const urun = products.find((urn: Product) => urn.id === urunId )
    // `urunId` ile eşleşen ürünü bulmak için `products` dizisini `find` metodu ile filtreler.

    return (
        <div>
            <DetailClient key={urun?.id} product={urun} />
        </div>
    )
}

export default Detail