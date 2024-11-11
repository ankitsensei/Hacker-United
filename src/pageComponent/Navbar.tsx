import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Logo from "../assets/Logos/Hackunited3.png"
import Btn from "../components/Btn"

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="py-2 px-2 flex items-center justify-between bg-gray-900 relative">
            <div className="left flex items-center">
                <img src={Logo} alt="Logo" className="w-10" />
                <p className="text-white ml-2">Hack United</p>
            </div>

            {/* Hamburger Icon */}
            <button 
                onClick={() => setOpen(!open)} 
                className="text-white text-xl focus:outline-none"
                aria-label="Toggle Menu"
            >
                <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </button>

            {/* Dropdown Menu */}
            {open && (
                <ul className="flex flex-col gap-2 absolute top-16 right-2 bg-slate-950 p-3 rounded-lg border-[0.2px] border-purple-600 z-10">
                    <li className="hover:bg-purple-800 px-2 py-1 rounded text-white cursor-pointer">Home</li>
                    <li className="hover:bg-purple-800 px-2 py-1 rounded text-white cursor-pointer">Explore</li>
                    <li className="hover:bg-purple-800 px-2 py-1 rounded text-white cursor-pointer">Information</li>
                    <li className="hover:bg-purple-800 px-2 py-1 rounded text-white cursor-pointer">Sponsors</li>
                    <li>
                        <Btn name="Register" link="#" />
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Navbar
