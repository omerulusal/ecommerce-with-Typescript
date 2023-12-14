
import { getCurrentUser } from "@/app/actions/getCurrentUser"
import CardCount from "./CardCount"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import Search from "./Search"
import User from "./User"

const Navbar = async () => {
    const currentUser: any = await getCurrentUser();
    return (
        <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-[#ffcb7c] text-[#fcfcfc]">
            <Logo />
            <Search />
            <CardCount />
            <User currentUser={currentUser} />
            <Hamburger />
        </div>
    )
}

export default Navbar