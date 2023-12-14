import { RxAvatar } from "react-icons/rx"
interface AvatarProps {
    image?: string
}
const Avatar: React.FC<AvatarProps> = ({ image }) => {
    if (image) {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={image} className="w-10 object-cover h-10 rounded-full" alt="Avatar" />
    }
    return <div><RxAvatar size="25" /></div>

}

export default Avatar