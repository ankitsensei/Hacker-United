import ParticipateComp from "../components/ParticipateComp";
import CodingSvg from "../assets/Illustrations/undraw_programmer_re_owql.svg";
import PrizeSvg from "../assets/Illustrations/undraw_gift_re_qr17.svg"

const Participate = () => {
    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <div className="sticky top-20 z-10">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 underline underline-offset-4 lg:text-4xl">
                    Why Participate?
                </h1>
            </div>
            
            <div className="h-screen flex flex-col items-center justify-center lg:flex-row lg:gap-20 lg:mx-80">
                <img src={CodingSvg} alt="coding" className="w-1/2 lg:w-1/4" />
                <div className="mt-2">
                    <ParticipateComp 
                        heading="Learn more than just Coding" 
                        para="Alongside acquiring mechanical skills, anticipate opportunities for collaboration, networking, and engaging in workshops focused on entrepreneurship and critical thinking at our hackathon. Diverse guest speakers will further enrich the event, offering valuable insights and perspectives. Our hackathon provides an experience that extends beyond basic technological skills, offering a full approach to learning and growth."
                    />
                </div>
            </div>
            <div className="h-screen flex flex-col items-center justify-center mt-10 lg:flex-row lg:gap-20 lg:mx-80">
                <img src={PrizeSvg} alt="prize" className="w-1/2 lg:w-1/4" />
                <div className="mt-2">
                    <ParticipateComp 
                        heading="Innovate to Win Prizes" 
                        para="Get ready to showcase your creativity and problem-solving skills at our hackathon, where you can win exciting prizes by coming up with groundbreaking ideas. It's an opportunity to think outside the box and push the boundaries of innovation. This is a great place to submit a project you were going to build anyway, except you get the oppurtunity to win prizes and get recognized for it.
"
                    />
                </div>
            </div>
        </div>
    );
};

export default Participate;
