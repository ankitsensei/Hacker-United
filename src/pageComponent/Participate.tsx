import ParticipateComp from "../components/ParticipateComp"

const Participate = () => {
    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 underline underline-offset-4">
                Why Participate?
            </h1>
            <div>
                <ParticipateComp heading="Learn more than just Coding" para = "Alongside acquiring mechanical skills, anticipate opportunities for collaboration, networking, and engaging in workshops focused on entrepreneurship and critical thinking at our hackathon. Diverse guest speakers will further enrich the event, offering valuable insights and perspectives. Our hackathon provides an experience that extends beyond basic technological skills, offering a full approach to learning and growth."/>
            </div>
        </div>
    )
}

export default Participate
