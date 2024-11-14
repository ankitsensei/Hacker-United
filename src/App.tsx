import Navbar from "./pageComponent/Navbar"
import Hero from "./pageComponent/Hero"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
// import HeroBg from "./assets/hero.png"
const App = () => {
  return (
    <div className="w-full h-full text-white bg-[url('./src/assets/hero.png')] bg-cover">
      <div className="home w-full h-screen flex flex-col lg:justify-evenly ">
        <Navbar/>
        <Hero/>
        <FontAwesomeIcon icon={faAnglesDown} className="absolute bottom-5 right-1/2 animate-bounce text-md text-purple-400"/>
      </div>
    </div>
  )
}

export default App