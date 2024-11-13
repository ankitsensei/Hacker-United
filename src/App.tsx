import Navbar from "./pageComponent/Navbar"
import Hero from "./pageComponent/Hero"

const App = () => {
  return (
    <div className="w-full h-full text-white bg-neutral-900">
      <div className="home w-full h-screen">
        <Navbar/>
        <Hero/>
      </div>
    </div>
  )
}

export default App