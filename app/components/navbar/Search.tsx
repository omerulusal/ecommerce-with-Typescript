import { IoSearch } from "react-icons/io5"

const Search = () => {
    return (
        <div className="flex flex-1">

            <div className="w-full">
                <input className="border border-stone-900 shadow-md shadow-stone-600/50 focus-within:bg-transparent focus-within:outline-none placeholder:text-black/50 transition-all focus-within:pl-10 bg-transparent text-black rounded-md py-1 ml-32 w-[620px] hidden md:flex" type="text" placeholder="Search Here!" />
            </div>
            <div className="flex justify-center items-center ml-1 bg-[#ffb46e] px-3 rounded-md cursor-pointer hover:bg-[#f1a258]">
                <IoSearch size={20} />
            </div>
        </div>
    )
}

export default Search