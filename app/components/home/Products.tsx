import Heading from "../general/Heading"
import ProductCard from "./ProductCard"
import { GetStaticProps } from 'next';
import { getAllProducts } from '@/app/models/Product';
interface Product {
    id: number;
    name: string;
    // Diğer ürün özelliklerini ekleyebilirsiniz.
}

interface HomeProps {
    products: Product[] | null;
}

const Products: GetStaticProps<HomeProps> = async () => {
    const products = await getAllProducts();
    return (
        <div>
            <Heading text="Tum Urunler" />
            <div className="flex items-center flex-wrap gap-3 md:gap-10 px-3 md:px-10">
                {products.map(product => (
                    <ProductCard veri={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}

export default Products

