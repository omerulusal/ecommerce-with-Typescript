"use client"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { FaGoogle } from "react-icons/fa"
import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/Button"
import Link from "next/link"
import axios from "axios"
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { User } from "@prisma/client"
import { useEffect } from "react"

interface RegisterClientProps {
    currentUser: User | null | undefined
}
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
});
const RegisterClient: React.FC<RegisterClientProps> = ({ currentUser }) => {
    // https://react-hook-form.com/get-started <---Kodları aldıgım site
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>()

    const router = useRouter()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        api.post('/api/register', data).then(() => {
            toast.success('Kullanıcı Olusturuldu...')
            signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            }).then((callback) => {
                if (callback?.ok) {
                    router.push('/cart')
                    router.refresh();
                    toast.success('Login İşlemi Basarılı...')
                }

                if (callback?.error) {
                    toast.error(callback.error)
                }
            })
        })
    }
    useEffect(() => {
        if (currentUser) {
            router.push('/cart')
            router.refresh()
        }
    }, [currentUser, router])
    // eger mevcut bir kullanıcı varsa urlde register'a bile gitse /cart a yönlendirilir
    return (
        <AuthContainer>
            <div className="w-full md:w-[500px] p-10 shadow-lg rounded-md">
                <Heading text="Register" center />
                <Input placeholder="Ad" id="name" type="text" register={register} required errors={errors} />
                <Input placeholder="E-Posta" id="email" type="email" register={register} required errors={errors} />
                <Input placeholder="Sifre" id="password" type="password" register={register} required errors={errors} />
                <Button text="Kayıt ol" onClick={handleSubmit(onSubmit)} />
                <div><Link className="hover:underline my-2 text-sm text-red-500" href={"/login"} >Giris Yap</Link> </div>
                <div className="text-center my-2 text-lg font-bold">OR</div>
                <Button text="Google ile uye ol" icon={FaGoogle} outline onClick={() => signIn("google")} />
            </div>
        </AuthContainer>
    )
}

export default RegisterClient