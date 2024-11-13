import Navbar from "./pageComponent/Navbar"
import Hero from "./pageComponent/Hero"
// import HeroBg from "./assets/hero.png"
const App = () => {
  return (
    <div className="w-full h-full text-white bg-[url('./src/assets/hero.png')] bg-cover">
      <div className="home w-full h-screen ">
        <Navbar/>
        <Hero/>
      </div>
    </div>
  )
}

export default App