"use client"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Checkbox from "../general/Checkbox"
import Button from "../general/Button"
import toast from "react-hot-toast"
import firebaseApp from "@/libs/firebase"
import axios from "axios";
import { FaComputer } from "react-icons/fa6";
import { IoMdPhonePortrait, IoIosTabletLandscape } from "react-icons/io";
import { MdWatch } from "react-icons/md"
import ChoiceInput from "../general/ChoiceInput"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const CreateForm = () => {
    const [img, setImg] = useState<File | null>(null)
    const router = useRouter();

    const categoryList = [
        {
            name: "Telefon",
            icon: IoMdPhonePortrait
        },
        {
            name: "Bilgisayar",
            icon: FaComputer
        },
        {
            name: "Saat",
            icon: MdWatch
        },
        {
            name: "Tablet",
            icon: IoIosTabletLandscape
        },
    ]

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            description: "",
            brand: "",
            category: "",
            price: "",
            image: "",
            inStock: false
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log("data", data)
        let uploadedImg;
        const handleChange = async () => {
            toast.success('Yükleme işlemi basarılı !!!')
            try {
                const storage = getStorage(firebaseApp);
                const storageRef = ref(storage, 'images/');
                const file = new Blob([' images/mountains.jpg'], { type: 'text/plain' });
                const uploadTask = uploadBytesResumable(storageRef, file);
                await new Promise<void>((resolve, reject) => {
                    uploadTask.on('state_changed',
                        (snapshot) => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                            switch (snapshot.state) {
                                case 'paused':
                                    console.log('Upload is paused');
                                    break;
                                case 'running':
                                    console.log('Upload is running');
                                    break;
                            }
                        },
                        (error) => {
                            reject(error)
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                console.log('File available at', downloadURL);
                                uploadedImg = downloadURL;
                                resolve()
                            }).catch((error) => {
                                console.log(error)
                            });
                        }
                    );
                })
            } catch (error) {
                console.log(error)
            }
        }
        await handleChange()
        let newData = { ...data, image: uploadedImg }
        axios.post('/api/product', newData)
            .then(() => {
                toast.success('Ürün ekleme işlemi basarılı !!!')
                router.refresh();
            }).catch((error) => {
                console.log(error, "error")
            })
        console.log(newData, "Yeni VERIIIIIIII")
    }
    const category = watch('category')
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }

    const degistir = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImg(e.target.files[0])
        }
    }
    return (
        <div className="w-full md:w-[720px] p-10 mb-24 shadow-lg rounded-md">
            <Heading text="Urun Oluştur" center />
            <Input
                placeholder="Urun Adı"
                type="text"
                id="name"
                register={register}
                required
                errors={errors}
            />
            <Input
                placeholder="Acıklama"
                type="text"
                id="description"
                register={register}
                required
                errors={errors}
            />
            <Input
                placeholder="Marka"
                type="text"
                id="brand"
                register={register}
                required
                errors={errors}
            />
            <Input
                placeholder="Fiyat"
                type="number"
                id="price"
                register={register}
                required
                errors={errors}
            />
            <Checkbox
                id="inStock"
                label="Urun Stokta Mevcut Mu?"
                register={register}
            />
            <div className=" flex gap-2 mt-5 flex-wrap items-center justify-around ">
                {
                    categoryList.map((cat, i) => (
                        <ChoiceInput
                            key={i}
                            icon={cat.icon}
                            text={cat.name}
                            onClick={(category) => setCustomValue("category", category)}
                            selected={category == cat.name}
                        />
                    ))
                }
            </div>
            <input className="mt-5 w-full text-black h-10 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-[#ffa724] hover:file:text-black" type="file" onChange={degistir} />
            <Button text="Urun Olustur" onClick={handleSubmit(onSubmit)} />
        </div>
    )
}

export default CreateForm