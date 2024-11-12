import RealTimeClock from "./components/RealTimeClock"
import Navbar from "./pageComponent/Navbar"

const App = () => {
  return (
    <div className="w-full h-screen text-white bg-neutral-900">
      <div className="home w-full h-screen">
        <Navbar/>
        <RealTimeClock/>
      </div>
    </div>
  )
}

export default App