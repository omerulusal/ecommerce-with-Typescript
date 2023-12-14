import { GiHamburgerMenu } from 'react-icons/gi';
const Hamburger = () => {

    return (
        <div className="relative flex md:hidden">
            <button>
                <GiHamburgerMenu />
            </button>
        </div>
    )
}

export default Hamburger