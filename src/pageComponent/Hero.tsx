import RealTimeClock from "../components/RealTimeClock"
import Btn from "../components/Btn"
import Logo from "../assets/Logos/Hackunited3.png"

const Hero = () => {
    return (
        <div className="">
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <img src={Logo} alt="logo" className="w-[400px]" />
                <h1 className="text-7xl font-bold font-glitchGoblin text-purple-500">HACK UNITED</h1>
            </div>
            <div>
                <Btn name="hehe" link="#"/>
            </div>
            <RealTimeClock/>
        </div>
    )
}

export default Hero