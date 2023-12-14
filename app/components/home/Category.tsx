"use client"
const Category = () => {
    const categoryList = [
        {
            name: "Telefon"
        },
        {
            name: "Bilgisayar"
        },
        {
            name: "Saat"
        },
        {
            name: "Tablet"
        },
    ]
    return (
        <div className="flex items-center justify-center gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto px-3 md:px-10 ">
            {categoryList.map((category, i) => (
                <div className="border text-slate-500 rounded-full min-w-[120px] px-4 py-2 text-center flex flex-1 items-center justify-center cursor-pointer " key={i}>
                    {category.name}
                </div>
            ))}
        </div>
    )
}

export default Category