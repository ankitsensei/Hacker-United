
interface BtnProps {
    name: string;
    link: string;
}

const Btn: React.FC<BtnProps> = ({name, link}) => {
    return (
        <div>
            <button>
                <a href={link} target="_blank">{name}</a>
            </button>
        </div>
    )
}

export default Btn