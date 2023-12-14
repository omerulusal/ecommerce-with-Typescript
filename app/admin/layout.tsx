import AdminSidebar from "../components/admin/AdminSidebar"

const Adminlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex gap-3 ">
            <AdminSidebar />
            {children}
        </div>
    )
}

export default Adminlayout