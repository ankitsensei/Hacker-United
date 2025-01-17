import CodeCrafter from "../assets/Sponsors/CodeCrafters.io_full_logo_Dark_text.webp"
import Aops from "../assets/Sponsors/aopsLogo.webp"
import Balsamidq from "../assets/Sponsors/balsamiqLogo.webp"
import Cocalc from "../assets/Sponsors/cocalcLogo.webp"
import Desmos from "../assets/Sponsors/desmosLogo.webp"
import Devitjobs from "../assets/Sponsors/devitjobsLogo.webp"
import Genxyz from "../assets/Sponsors/genxyzLogo.webp"
import InterviewCake from "../assets/Sponsors/interviewcakeLogo.webp"
import Tintype from "../assets/Sponsors/tintypeLogo.webp"
import TreeHouses from "../assets/Sponsors/Treehouse_logo.webp"
const Sponsors = () => {
    return (
        <div className="flex flex-col items-center mx-4">
            <div style={{ height: '100px' }}></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text underline underline-offset-4 lg:text-4xl ">Our Sponsors</h1>
            <p className="text-zinc-300 text-sm lg:mt-4 lg:mx-40 text-center">Join us in shaping the future of innovation at <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-200 text-transparent bg-clip-text">United Hack V4 !</span> By sponsoring our hackathon, you will gain valuable exposure to a diverse community of tech enthusiasts, developers, and aspiring entrepreneurs. Showcase your brand, engage with talented participants, and support the next generation of leaders in technology. To view our prospectus and potentially sponsor our event, please email <b>humans@hackunited.org</b>!
            </p>
            <div className="mt-10 flex flex-col gap-5 justify-center items-center">
                <div id="main" className="flex flex-col gap-2"> 
                    <a href="#" className="rounded-lg">
                        <img src={CodeCrafter} alt="Placeholder Image" className="rounded lg:h-64" />
                    </a>
                    <a href="#">
                        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="Cover Image" className="rounded lg:h-64"/>
                    </a>
                </div>
                <div id="main2" className="flex gap-2">
                    <a href="#">
                        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="Cover Image" className="rounded lg:h-52"/>
                    </a>
                    <a href="#">
                        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="Cover Image" className="rounded lg:h-52"/>
                    </a>
                </div>
                <div id="main2" className="flex gap-2">
                    <a href="#">
                        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="Cover Image" className="rounded lg:h-52"/>
                    </a>
                    <a href="#">
                        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="Cover Image" className="rounded lg:h-52"/>
                    </a>
                </div>
                <div id="main3" className="flex gap-2">
                    <a href="#">
                        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="Cover Image" className="rounded lg:h-40"/>
                    </a>
                    <a href="#">
                        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="Cover Image" className="rounded lg:h-40"/>
                    </a>
                    <a href="#">
                        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="Cover Image" className="rounded lg:h-40"/>
                    </a>
                </div>
                <div id="main3" className="flex gap-2">
                    <a href="#">
                        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="Cover Image" className="rounded lg:h-40"/>
                    </a>
                    <a href="#">
                        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="Cover Image" className="rounded lg:h-40"/>
                    </a>
                    <a href="#">
                        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="Cover Image" className="rounded lg:h-40"/>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Sponsors