
interface BtnProps {
    name: string;
    link: string;
}

const Btn: React.FC<BtnProps> = ({name, link}) => {
    return (
        <div className="relative px-2 py-1 border-[1px] border-purple-500 rounded overflow-hidden group">
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