import RealTimeClock from "../components/RealTimeClock"
import Logo from "../assets/Logos/Hackunited3.png"
const Hero = () => {
    return (
        <div className="bg-neutral-900">
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <img src={Logo} alt="logo" className="w-[400px]" />
                <h1 className="text-5xl font-bold">HACK UNITED</h1>
            </div>
            <RealTimeClock/>
        </div>
    )
}

export default Hero