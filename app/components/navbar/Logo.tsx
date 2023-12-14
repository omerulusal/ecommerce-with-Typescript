"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo: React.FC = () => {
    const urlegit = useRouter()
    return (
        <div onClick={() => urlegit.push("/")}>
            <a className="px-2 cursor-pointer">
                <Image
                    src="/HeyBuy.png"
                    alt="logo"
                    width={120}
                    height={120}
                    fetchPriority="high"
                    style={{ width: "auto", height: "auto" }}
                />
            </a>
        </div>
    );
};

export default Logo;
