import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

interface FolderCompProps {
    year: number;
    context: string;
    image: string;
    achievements: string[];
}

const FoldersComp: React.FC<FolderCompProps> = ({ year, context, image, achievements }) => {
    return (
        <div className="flex flex-col justify-between items-start p-2 lg:flex-row lg:mt-10">
            {/* Achievements Section */}
            

            {/* Year and Context Section */}
            <div className="flex flex-wrap justify-center gap-1 border-2 border-pink-900 lg:w-2/3  rounded-lg">
                <h1 className="text-2xl font-bold text-pink-500 lg:text-2xl">{year}</h1>
                <div className="border-2 border-pink-900 p-2 rounded-lg">
                    <img src={image} alt="img" className="rounded h-44" />
                </div>
                <div className="p-2 rounded-lg">
                    <p className="text-sm">{context}</p>
                    <div className="mt-4 lg:w-1/3 lg:mt-0 lg:ml-4">
                <h1 className="text-lg font-bold text-pink-500">Achievements</h1>
                <ul className="pl-5 text-sm text-gray-300">
                    
                    {achievements.map((achievement, index) => (
                        <li key={index}><FontAwesomeIcon
                        icon={faCircleCheck}
                        className="mr-2 text-purple-500 transition-transform transform hover:scale-110"
                    />
                    {achievement}</li>
                    ))}
                </ul>
            </div>
                </div>
            </div>
            
        </div>
    );
};

export default FoldersComp;
