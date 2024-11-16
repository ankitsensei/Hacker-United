import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
const Folders = () => {
    return (
        <div className='flex flex-wrap items-center justify-center gap-16'>
            <div>
                <div className='flex flex-col items-center'>
                    <FontAwesomeIcon icon={faFolder} className="text-6xl text-purple-400"/>
                    <p className='text-purple-300'>2022</p>
                </div>
                <div className='flex flex-col items-center gap-4 mt-5'>
                </div>
            </div>
        {/* Window 1 */}
        <div className=" w-80 h-96 border-2 border-gray-600 p-2 pt-5 flex flex-col justify-between bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-xl rounded-lg">
        <div className="flex justify-start items-center gap-2 p-2">
            <div className="w-4 h-4 bg-red-600 hover:bg-red-500 rounded-full transition-all"></div>
            <div className="w-4 h-4 bg-yellow-500 hover:bg-yellow-400 rounded-full transition-all"></div>
            <div className="w-4 h-4 bg-green-500 hover:bg-green-400 rounded-full transition-all"></div>
        </div>
            <div className="w-full h-full border-2 border-gray-700 bg-gradient-to-tr from-gray-700 via-gray-800 to-black flex items-center justify-center rounded-md">
                <p className="text-gray-300 text-lg">Dark Mode Content</p>
            </div>
        </div>
        {/* Window 2 */}
        <div className="w-80 h-80 border-2 border-gray-600 p-2 pt-5 flex flex-col justify-between bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-xl rounded-lg">
        <div className="flex justify-start items-center gap-2 p-2">
            <div className="w-4 h-4 bg-red-600 hover:bg-red-500 rounded-full transition-all"></div>
            <div className="w-4 h-4 bg-yellow-500 hover:bg-yellow-400 rounded-full transition-all"></div>
            <div className="w-4 h-4 bg-green-500 hover:bg-green-400 rounded-full transition-all"></div>
        </div>
            <div className="w-full h-full border-2 border-gray-700 bg-gradient-to-tr from-gray-700 via-gray-800 to-black flex items-center justify-center rounded-md">
                <p className="text-gray-300 text-lg">Dark Mode Content</p>
            </div>
        </div>
        {/* Window 3 */}
        <div className="w-80 h-80 border-2 border-gray-600 p-2 pt-5 flex flex-col justify-between bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-xl rounded-lg">
        <div className="flex justify-start items-center gap-2 p-2">
            <div className="w-4 h-4 bg-red-600 hover:bg-red-500 rounded-full transition-all"></div>
            <div className="w-4 h-4 bg-yellow-500 hover:bg-yellow-400 rounded-full transition-all"></div>
            <div className="w-4 h-4 bg-green-500 hover:bg-green-400 rounded-full transition-all"></div>
        </div>
            <div className="w-full h-full border-2 border-gray-700 bg-gradient-to-tr from-gray-700 via-gray-800 to-black flex items-center justify-center rounded-md">
                <p className="text-gray-300 text-lg">Dark Mode Content</p>
            </div>
        </div>
        </div>
    )
}

export default Folders