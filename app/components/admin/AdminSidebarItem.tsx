import Link from "next/link"
import { IconType } from "react-icons"

interface AdminSidebarItemProps {
    selected?: boolean,
    name: string,
    icon: IconType,
    url: string
}
const AdminSidebarItem: React.FC<AdminSidebarItemProps> = ({ selected, name, url, icon: Icon }) => {
    return (
        <div>
            <div className="flex panels-center gap-3 cursor-pointer">
                <Link href={url}
                    className={`hover:font-semibold cursor-pointer text-center flex items-center gap-2 my-5 justify-center transition-all mb-2 
                    ${selected ? "text-black font-bold border-b border-black" : "text-slate-700"}`}>
                    <Icon size={24} />
                    {name}
                </Link>
            </div>
        </div>
    )
}

export default AdminSidebarItem