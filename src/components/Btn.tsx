
interface BtnProps {
    name: string;
    link: string;
    onClick: () => void;
}


const Btn: React.FC<BtnProps> = ({name, link, onClick}) => {
    return (
        <div onClick={onClick} className="relative w-40 px-2 py-2 border-2 border-purple-500 rounded overflow-hidden group">
            <button className="relative">
                <a 
                    href={link} 
                    target="_blank" 
                    className="relative z-10 text-purple-500 transition-colors duration-300 ease-out group-hover:text-white"
                >
                    {name}
                </a>
            </button>
            
            {/* Background hover animation */}
            <span className="absolute inset-0 w-full h-full bg-purple-600 transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
        </div>
    )
}

export default Btn