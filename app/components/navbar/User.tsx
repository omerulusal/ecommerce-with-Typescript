"use client"
import { User } from "@prisma/client"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AiOutlineUser } from 'react-icons/ai'
interface UserProps {
    currentUser: User | null | undefined
}
const User: React.FC<UserProps> = ({ currentUser }) => {
    console.log(currentUser, "Kullanıcı Şuan Mevcut")
    const [openMenu, setOpenMenu] = useState(false)
    const router = useRouter()
    const menuFunc = (type: any) => {
        setOpenMenu(false)
        if (type === "logout") {
            signOut()
            //next auth ile çıkış işlemi gerçekleştirilir
            router.push("/")
        } else if (type === "register") {
            router.push("/register")
        } else {
            router.push("/login")
        }
    }
    return (
        <div className="hidden md:flex relative">
            <div onClick={() => setOpenMenu(!openMenu)} className="flex items-center gap-1 cursor-pointer">
                <AiOutlineUser size="25" />
                <p className="text-sm text-[#fff]" >{currentUser?.name}</p>
                {/* Mevcut kullanıcının adını yazar */}
            </div>

            <div>
                {openMenu && (
                    <div className="absolute right-0 top-10 bg-[#fcfcfc] text-black shadow-lg p-7 rounded-md flex flex-col gap-3 ">
                        {
                            currentUser ? (
                                // mevcut bir kullanıcı varsa bu alan görunecek
                                <div className="text-sm leading-6">
                                    <div onClick={() => router.push("/admin")} className="hover:text-[#ffa724] cursor-pointer text-center border-[#ffa724] transition-all border-b mb-2">Admin</div>
                                    <div onClick={() => menuFunc("logout")} className="hover:text-[#ffa724] cursor-pointer text-center border-[#ffa724] transition-all border-b">LogOut</div>
                                </div>
                            ) : (
                                // mevcut bir kullanıcı yoksa bu alan görunecek
                                <div className="text-sm leading-6">
                                    <div onClick={() => menuFunc("register")} className="hover:text-[#ffa724] cursor-pointer text-center border-[#ffa724] transition-all border-b mb-2" >Register</div>
                                    <div onClick={() => menuFunc("login")} className="hover:text-[#ffa724] cursor-pointer text-center border-[#ffa724] transition-all border-b" >LogIn</div>
                                </div>
                            )
                        }
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default User