import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import FoldersComp from './FoldersComp';
import V1 from "../assets/YTExplore/V1.png"
import V2 from "../assets/YTExplore/V2.png"
import V3 from "../assets/YTExplore/V3.png"

// Define the type for a folder item
interface Folder {
    year: number;
    context: string;
    image: string;
    achievements: string[];
}

// Define the folder data with the Folder type
const folderData: Folder[] = [
    {
        year: 2022,
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta architecto necessitatibus.',
        image: V1,
        achievements: [
            "400+ participants",
            "50+ projects submitted",
            "$5,000+ prize pool",
            "10+ sponsors, 100+ workshop attendees",
            "10 Workshops",
            "Industry professional judges",
        ],
    },
    {
        year: 2023,
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta architecto necessitatibus.',
        image: V2,
        achievements: [
            "400+ participants",
            "50+ projects submitted",
            "$5,000+ prize pool",
            "10+ sponsors, 100+ workshop attendees",
            "10 Workshops",
            "Industry professional judges",
        ],
    },
    {
        year: 2024,
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta architecto necessitatibus.',
        image: V3,
        achievements: [
            "400+ participants",
            "50+ projects submitted",
            "$5,000+ prize pool",
            "10+ sponsors, 100+ workshop attendees",
            "10 Workshops",
            "Industry professional judges",
        ],
    },
];

const Folders: React.FC = () => {
    const [openYear, setOpenYear] = useState<number>(2024); 

    return (
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:gap-40 lg:mx-20">
            {/* Folder Selector */}
            <div className="mt-4">
                <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10 lg:justify-start">
                    {folderData.map((folder) => (
                        <div
                            key={folder.year}
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => setOpenYear(folder.year)}
                        >
                            <FontAwesomeIcon
                                icon={openYear === folder.year ? faFolderOpen : faFolder}
                                className="text-4xl lg:text-5xl text-purple-500 transition-transform transform hover:scale-110"
                            />
                            <p className="text-sm lg:text-base">{folder.year}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Folder Content */}
            <div className="mt-6 w-full max-w-4xl lg:h-40">
                {folderData.map(
                    (folder) =>
                        openYear === folder.year && (
                            <FoldersComp
                                key={folder.year}
                                year={folder.year}
                                context={folder.context}
                                image={folder.image}
                                achievements={folder.achievements}
                            />
                        )
                )}
            </div>
        </div>
    );
};

export default Folders;
