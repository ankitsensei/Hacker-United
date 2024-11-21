import Navbar from "./pageComponent/Navbar"
import Hero from "./pageComponent/Hero"
import Participate from "./pageComponent/Participate"
import ScrollingText from "./components/ScrollingText"
import Explore from "./pageComponent/Explore"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import Sponsors from "./pageComponent/Sponsors"
import Faq from "./pageComponent/Faq"
// import HeroBg from "./assets/hero.png"
const App = () => {
  return (
    <div className="w-full h-full text-white bg-black">
      <div className="home w-full h-screen flex flex-col justify-around bg-[url('./src/assets/hero.png')] bg-cover lg:justify-evenly ">
        <Navbar/>
        <Hero/>
        <FontAwesomeIcon icon={faAnglesDown} className="absolute z-10 bottom-5 right-1/2 animate-bounce text-md text-purple-400"/>
      </div>
      <div className="whyParticipate px-5 mt-32">
        <Participate/>
      </div>
      <div className="scrollingText my-20">
        <ScrollingText/>
      </div>
      <div className="w-full h-screen">
        <Explore />
      </div>
      <div className="w-full h-full">
        <Sponsors/>
      </div>
      <div className="w-full h-screen mt-40">
        <Faq/>
      </div>
    </div>  
  )
}

export default App