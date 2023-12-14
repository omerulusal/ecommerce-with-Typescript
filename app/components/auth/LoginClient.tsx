"use client"

import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { FaGoogle } from "react-icons/fa"
import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/Button"
import Link from "next/link"
import { signIn } from "next-auth/react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { User } from "@prisma/client"
import { useEffect } from "react"

interface LoginClientProps {
    currentUser: User | null | undefined
}

const LoginClient: React.FC<LoginClientProps> = ({ currentUser }) => {
    // https://react-hook-form.com/get-started <---Kodları aldıgım site
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>()

    const router = useRouter()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn("credentials", {
            ...data,
            redirect: false,
        }).then((callback) => {
            if (callback?.error) {
                toast.error(callback.error)
            }
            if (callback?.ok && !callback?.error) {
                toast.success("Giris Yapildi")
                router.refresh()
                router.push('/cart')
            }
        })
    }
    useEffect(() => {
        if (currentUser) {
            router.push('/cart')
            router.refresh()
        }
    }, [currentUser, router])

    return (
        <AuthContainer>
            <div className="w-full md:w-[500px] p-10 shadow-lg rounded-md">
                <Heading text="Login" center />
                <Input placeholder="E-Posta" id="email" type="email" register={register} required errors={errors} />
                <Input placeholder="Sifre" id="password" type="password" register={register} required errors={errors} />
                <Button text="Giris Yap" onClick={handleSubmit(onSubmit)} />
                <div><Link className="hover:underline my-2 text-sm text-red-500" href={"/register"} >Uye Ol</Link> </div>
                <div className="text-center my-2 text-lg font-bold">OR</div>
                <Button text="Google ile Girs Yap" icon={FaGoogle} outline onClick={() => signIn("google")} />
            </div>
        </AuthContainer>
    )
}

export default LoginClient