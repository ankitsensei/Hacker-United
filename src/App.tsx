import Navbar from "./pageComponent/Navbar";
import Hero from "./pageComponent/Hero";
import Participate from "./pageComponent/Participate";
import ScrollingText from "./components/ScrollingText";
import Explore from "./pageComponent/Explore";
import Sponsors from "./pageComponent/Sponsors";
import Faq from "./pageComponent/Faq";
import Footer from "./pageComponent/Footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="w-full h-full text-white bg-black">
      <div
        id="home"
        className="home w-full h-screen flex flex-col justify-around bg-[url('./src/assets/hero.png')] bg-cover lg:justify-evenly"
      >
        <Navbar />
        <Hero />
        <FontAwesomeIcon
          icon={faAnglesDown}
          className="absolute z-10 bottom-5 right-1/2 animate-bounce text-md text-purple-400"
        />
      </div>
      <div id="participate" className="whyParticipate px-5 mt-32">
        <Participate />
      </div>
      <div id="scrollingText" className="scrollingText my-20">
        <ScrollingText />
      </div>
      <div id="explore" className="w-full h-screen">
        <Explore />
      </div>
      <div id="sponsors" className="w-full h-screen">
        <Sponsors />
      </div>
      <div id="faq" className="w-full h-full mt-40">
        <Faq />
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>
  );
};

export default App;
