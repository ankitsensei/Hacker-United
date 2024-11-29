import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logos/Hackunited3.png";
import gsap from "gsap";
import Btn from "../components/Btn";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const crossIconRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (open && menuRef.current) {
            gsap.fromTo(
                menuRef.current,
                { x: "100%" },
                { x: "0%", duration: 0.5, ease: "power3.out" }
            );
        } else if (menuRef.current) {
            gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
        }
    }, [open]);

    useEffect(() => {
        if (crossIconRef.current) {
            gsap.to(crossIconRef.current, {
                rotation: open ? 0 : 45,
                scale: open ? 1 : 1.2,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    }, [open]);

    return (
        <nav className="w-full px-4 py-3 text-white fixed top-0 z-20 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img src={Logo} alt="Logo" className="w-8 h-8" />
                <p className="text-lg font-semibold tracking-wide">United Hacks V4</p>
            </div>

            {/* Hamburger Icon (only visible on mobile) */}
            <button
                onClick={() => setOpen(!open)}
                className="text-xl focus:outline-none transition-transform duration-300 transform hover:scale-110 md:hidden"
                aria-label="Toggle Menu"
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            {/* Full-Screen Overlay Menu (for mobile) */}
            <div
                ref={menuRef}
                className={`${
                    open ? "flex" : "hidden"
                } fixed top-0 right-0 w-full h-full bg-zinc-900 text-white flex-col items-center justify-center space-y-8 text-2xl font-medium z-30 md:hidden`}
            >
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-6 text-2xl focus:outline-none transition-transform duration-300 transform hover:scale-110"
                    aria-label="Close Menu"
                >
                    <FontAwesomeIcon
                        icon={faXmark}
                        ref={crossIconRef}
                        className="transition-transform"
                    />
                </button>

                <ul className="text-center space-y-4">
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            onClick={() => setOpen(false)}
                            className="hover:text-purple-300 cursor-pointer transition duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="explore"
                            smooth={true}
                            duration={500}
                            onClick={() => setOpen(false)}
                            className="hover:text-purple-300 cursor-pointer transition duration-300"
                        >
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="sponsors"
                            smooth={true}
                            duration={500}
                            onClick={() => setOpen(false)}
                            className="hover:text-purple-300 cursor-pointer transition duration-300"
                        >
                            Sponsors
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="faq"
                            smooth={true}
                            duration={500}
                            onClick={() => setOpen(false)}
                            className="hover:text-purple-300 cursor-pointer transition duration-300"
                        >
                            Information
                        </Link>
                    </li>
                </ul>

                <button className="mt-8 px-6 py-2 bg-purple-700 rounded-md hover:bg-purple-600 transition-colors duration-300">
                    Register
                </button>
            </div>

            {/* Menu (always visible on desktop) */}
            <div className="hidden md:flex justify-center items-center space-x-6 text-md font-medium">
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="hover:text-purple-300 cursor-pointer"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="explore"
                            smooth={true}
                            duration={500}
                            className="hover:text-purple-300 cursor-pointer"
                        >
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="sponsors"
                            smooth={true}
                            duration={500}
                            className="hover:text-purple-300 cursor-pointer"
                        >
                            Sponsors
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="faq"
                            smooth={true}
                            duration={500}
                            className="hover:text-purple-300 cursor-pointer"
                        >
                            Information
                        </Link>
                    </li>
                </ul>
                <Btn name="Register" link="https://forms.gle/4A4dM2tujo8F7Ggm6" onClick={() => {}} />
            </div>
        </nav>
    );
};

export default Navbar;
