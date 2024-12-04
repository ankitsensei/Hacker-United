import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import HackUnitedLogo from '../assets/Logos/Hackunited3.png';


const Footer = () => {
    return (
        <div className="text-white bg-black">
            <footer className="mt-5 md:mx-auto flex flex-wrap p-8 md:justify-between w-full md:w-[80%]">
                {/* Logo and Social Section */}
                <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                        <img
                            alt="Hack United"
                            width={110}
                            height={110}
                            src= {HackUnitedLogo}
                            className="mr-4"
                        />
                        <div>
                            <h1 className="text-3xl text-[#DF6A50] font-bold">HACK</h1>
                            <h2 className="text-xl text-[#DF6A50] font-medium">UNITED</h2>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm dark:text-gray-400">
                        EIN: 81-2908499
                    </p>
                    <div className="flex justify-center md:justify-start mt-4 space-x-4">
                        <a href="https://www.linkedin.com/company/hack-united" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon width={30} color={"white"} icon={faLinkedin} />
                        </a>
                        <a href="https://instagram.com/hack_united" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon width={30} color={"white"} icon={faInstagram} />
                        </a>
                        <a href="https://twitter.com/hackunited_" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon width={35} color={"white"} icon={faTwitter} />
                        </a>
                        <a href="https://discord.gg/hackunited" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon width={45} color={"white"} icon={faDiscord} />
                        </a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="w-full md:w-2/3 grid grid-cols-2 gap-8 font-poppins text-sm">
                    {/* Company Links */}
                    <div>
                        <h2 className="mb-4 font-bold text-white">Company</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            {/* <li className="mb-2">
                                <a href="/#about" className="hover:underline">
                                    About Us
                                </a>
                            </li> */}
                            <li className="mb-2">
                                <a href="https://unitedhacksv2.devpost.com/rules" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Event Rules
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://hackunited.org/#donate" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Donate
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://drive.google.com/file/d/13kB7zt1rcQ0lXdWlEDRP1qGt7mZ0sRyK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Sponsor Prospectus
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us Links */}
                    <div>
                        <h2 className="mb-4 font-bold text-white">Contact Us</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-2">
                                <a href="https://hackunited.org/#socialmedia" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Join our community
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="mailto:humans@hackunited.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Email Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://blog.hackunited.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Blog
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://hackunited.org/#apply" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Volunteer
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
