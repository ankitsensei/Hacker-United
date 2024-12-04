import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 text-white py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Tagline */}
                <div className="mb-6 md:mb-0">
                    <h1 className="text-2xl font-bold">HACK UNITED</h1>
                    <p className="text-sm text-gray-300 mt-2">Innovating Together for a Better Tomorrow</p>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6 text-sm">
                    <Link href="#home" className="hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="#about" className="hover:text-gray-300">
                        About
                    </Link>
                    <Link href="#sponsors" className="hover:text-gray-300">
                        Sponsors
                    </Link>
                    <Link href="#faq" className="hover:text-gray-300">
                        FAQ
                    </Link>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mt-6 md:mt-0">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/company/hack-united"
                        className="hover:text-gray-300"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </Link>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://instagram.com/hack_united"
                        className="hover:text-gray-300"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </Link>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/hackunited_"
                        className="hover:text-gray-300"
                    >
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </Link>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://discord.gg/hackunited"
                        className="hover:text-gray-300"
                    >
                        <FontAwesomeIcon icon={faDiscord} size="lg" />
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center text-gray-400 text-sm mt-6">
                © {new Date().getFullYear()} Hack United. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
