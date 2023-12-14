import getProducts from "@/app/actions/getCurrentProduct"
import { getCurrentUser } from "@/app/actions/getCurrentUser"
import WarningText from "@/app/components/WarningText"
import ManageClient from "@/app/components/admin/ManageClient"
import AuthContainer from "@/app/components/containers/AuthContainer"

export const Manage = async () => {
    const currentUser = await getCurrentUser()
    const products = await getProducts({ category: null })
    if (!currentUser || currentUser.role !== "ADMIN") {
        return (
            <WarningText text="Bu sayfaya erişim izniniz yok" />
        )
    }
    return (
        <AuthContainer>
            <ManageClient products={products} />
        </AuthContainer>
    )
}
export default Manage