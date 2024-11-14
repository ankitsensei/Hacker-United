
interface BtnProps {
    name: string;
    link: string;
    onClick: () => void;
}


const Btn: React.FC<BtnProps> = ({name, link, onClick}) => {
    return (
        <div onClick={onClick} className="relative px-5 py-1 border-2 border-purple-500 rounded overflow-hidden group bg-purple-600">
            <button className="relative ">
                <a 
                    href={link}
                    target="_blank" 
                    className="relative z-10 text-white transition-colors duration-300 ease-out group-hover:text-white"
                >
                    {name}
                </a>
            </button>
            
            {/* Background hover animation */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
        </div>
    )
}

export default Btn