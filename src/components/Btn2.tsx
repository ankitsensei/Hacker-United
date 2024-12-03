interface BtnProps {
    name: string;
    link: string;
    onClick: () => void;
}

const Btn: React.FC<BtnProps> = ({ name, link, onClick }) => {
    return (
        <div onClick={onClick} className="group relative inline-block outline-none">
            <button className="relative overflow-hidden text-white bg-gradient-to-r from-pink-600 via-purple-600 to-zinc-900 border-2 border-pink-600 text-sm px-5 lg:px-6 py-2 mt-5 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                {/* Background hover animation */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
                
                {/* Button text link */}
                <a 
                    href={link}
                    target="_blank" 
                    className="relative z-10 block text-white transition-colors duration-300 ease-out"
                >
                    {name}
                </a>
            </button>
        </div>
    );
};

export default Btn;
