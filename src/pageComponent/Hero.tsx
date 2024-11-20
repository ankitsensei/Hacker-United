import RealTimeClock from "../components/RealTimeClock";
import Logo from "../assets/Logos/Hackunited3Extended.png";

const Hero = () => {
    
    return (
        <div className="px-2 flex flex-col justify-center items-center gap-10 lg:flex-row lg:w-full lg:px-40">
            <div className="w-full flex flex-col items-center justify-around  lg:mt-0 lg:gap-2">
                <img src={Logo} alt="logo" className="w-[200px] lg:w-[300px]" />
                <h1 className="text-4xl font-bold font-glitchGoblin text-purple-500 lg:text-6xl text-center">UNITED HACKS V4</h1>
            </div>
            <div className='flex flex-col w-full items-center'>
                <RealTimeClock />
            </div>
        </div>
    );
};

export default Hero;
