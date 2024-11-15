
interface ParticipateProps{
    heading: string;
    para:string;
}

const ParticipateComp: React.FC<ParticipateProps> = ({heading, para}) => {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-lg font-semibold text-purple-400 lg:text-xl lg:">{heading}</h1>
            <p className="text-sm text-wrap lg:text-base">{para}</p>
        </div>
    )
}

export default ParticipateComp