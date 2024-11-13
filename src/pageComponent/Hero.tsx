import RealTimeClock from "../components/RealTimeClock"
import Btn from "../components/Btn"
import Logo from "../assets/Logos/Hackunited3.png"

const Hero = () => {
    return (
        <div className="lg:flex lg:justify-center lg:items-center">
            <div className="w-full flex flex-col items-center justify-center">
                <img src={Logo} alt="logo" className="w-[400px]" />
                <h1 className="text-4xl font-bold font-glitchGoblin text-purple-500">HACK UNITED</h1>
            </div>
            <RealTimeClock/>
            <div>
                <Btn name="hehe" link="#"/>
            </div>
        </div>
    )
}

export default Hero