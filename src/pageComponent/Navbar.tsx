import Logo from "../assets/Logos/Hackunited3.png"
import Btn from "../components/Btn"
const Navbar = () => {
    return (
        <div className="py-2 px-2 flex flex-col items-center justify-between">
            <div className="left flex items-center">
                <img src={Logo} alt="Logo" className="w-10" />
                <p className="text-white">Hack United</p>
            </div>
            <ul className="flex gap-2">
                <li>Home</li>
                <li>Explore</li>
                <li>Information</li>
                <li>Sponsors</li>
                <Btn name="Register" link="#"/>
            </ul>
        </div>
    )
}

export default Navbar