import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <div className="items-center text-white">
            <footer className="mt-5 md:mx-auto md:flex p-8 md:justify-between w-full md:w-[80%]">
                <div className="w-full md:p-4 py-6 lg:py-2">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 justify-center md:mb-0">
                            <div className="relative">
                                <Image
                                    alt="Hack United"
                                    width={110}
                                    height={110}
                                    src="./assets/Logos/HackUnited3.png"
                                    className="absolute mt-[-5px]"
                                />
                                <h1 className="text-3xl ml-[95px] md:ml-[80px] md:text-center text-[#DF6A50] hackunited text-savapro">
                                    HACK
                                </h1>
                                <h1 className="text-xl ml-[100px] md:ml-[80px] md:text-center text-[#DF6A50] hackunited text-savapro">
                                    UNITED
                                </h1>
                            </div>
                            <h3 className="text-gray-600 text-[0.9rem] mt-5 dark:text-gray-400 font-medium">
                                EIN: 81-2908499
                            </h3>
                            <div className="pt-[1vh]">
                                <div className="flex flex-row space-x-4">
                                    <Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.linkedin.com/company/hack-united"
                                    >
                                        <FontAwesomeIcon
                                            width={30}
                                            color="white"
                                            icon={faLinkedin}
                                        />
                                    </Link>
                                    <Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://instagram.com/hack_united"
                                    >
                                        <FontAwesomeIcon
                                            width={30}
                                            color="white"
                                            icon={faInstagram}
                                        />
                                    </Link>
                                    <Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://twitter.com/hackunited_"
                                    >
                                        <FontAwesomeIcon
                                            width={35}
                                            color="white"
                                            icon={faTwitter}
                                        />
                                    </Link>
                                    <Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://discord.gg/hackunited"
                                    >
                                        <FontAwesomeIcon
                                            width={45}
                                            color="white"
                                            icon={faDiscord}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
