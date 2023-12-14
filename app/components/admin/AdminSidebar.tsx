"use client"
import { usePathname } from "next/navigation"
import AdminSidebarItem from "./AdminSidebarItem"
import { MdBorderOuter, MdDashboard, MdOutlineManageAccounts } from "react-icons/md"
import { GoListUnordered } from "react-icons/go";

const AdminSidebar = () => {
    const pathname = usePathname()
    const adminPanel = [
        {
            name: "Ozetler",
            icon: MdDashboard,
            url: "/admin"
        },
        {
            name: "Urun Oluştur",
            icon: MdBorderOuter,
            url: "/admin/create"
        },
        {
            name: "Urunleri Yönet",
            icon: MdOutlineManageAccounts,
            url: "/admin/manage"
        },
        {
            name: "Siparişlerim",
            icon: GoListUnordered,
            url: "/admin/order"
        },
    ]
    return (
        <div className="w-1/4 flex p-10 min-h-screen rounded-b-lg border-r bg-[#ffa72498]  ">
            <div className="flex flex-col gap-2">
                {adminPanel.map((panel, i) => (
                    <AdminSidebarItem key={i} selected={pathname === panel.url} name={panel.name} icon={panel.icon} url={panel.url} />
                ))}
            </div>
        </div>
    )
}

export default AdminSidebar