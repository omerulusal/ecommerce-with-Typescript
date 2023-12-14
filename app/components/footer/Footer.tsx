const Footer = () => {
    return (
        <div className="w-full h-24 bg-gradient-to-r from-[#ffa72498] to-[#188bff88] md:mt-2 text-slate-100 flex items-center justify-center">
            <footer className="p-4 md:p-6 text-center">
                <ul className="flex flex-wrap items-center mt-3 sm:mt-0 justify-center">
                    <li>
                        <a href="#" className="mr-4 text-sm text-white hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 text-sm text-white hover:underline md:mr-6 ">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 text-sm text-white hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-white hover:underline ">Contact</a>
                    </li>
                </ul>
                <span className="text-sm text-white">© 2024 <a href="https://github.com/omerulusal" className="hover:underline" target="_blank">OmerUlusal</a>. All Rights Reserved.
                </span>
            </footer>
        </div>
    )
}

export default Footer