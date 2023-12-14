import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";
export async function POST(request: Request) {
    const currentUser = await getCurrentUser()
    if (!currentUser || currentUser.role !== 'ADMIN') {
        return NextResponse.error()
    }
    // gelen kullanıının rolunun admin olup olmadıgını kontrol ediyoruz
    // eger kullanıcı admin degilse urun olusturamaz
    const body = await request.json();
    const { name, description, brand, category, price, inStock, image } = body;

    const product = await prisma.product.create({
        data: {
            name,
            description,
            brand,
            category,
            price:parseFloat(price),
            // gelen priceların number tipinde olması gerektiginden parse edildi
            inStock,
            image
        }
    })
    return NextResponse.json(product)
}