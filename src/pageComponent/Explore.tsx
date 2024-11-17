
import Folders from "../components/Folders"

const Explore = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text underline underline-offset-4 lg:text-4xl">Explore</h1>
            <p className="text-zinc-300">A look at our <span className='text-pink-400'>history</span></p>
            <div>
                <div className="mt-10">
                    <Folders/>
                </div>
            </div>
        </div>
    )
}

export default Explore