import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import FoldersComp from './FoldersComp';

const folderData = [
    {
        year: 2022,
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta architecto necessitatibus.',
        image: 'https://www.webtekno.com/images/editor/default/0003/45/aeb949ba1c92aa0a55bd438657bb2de0d9708db6.jpeg',
    },
    {
        year: 2023,
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta architecto necessitatibus.',
        image: 'https://i0.wp.com/tecknoworks.com/wp-content/uploads/2020/01/hackathon-1.png',
    },
    {
        year: 2024,
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta architecto necessitatibus.',
        image: 'https://ohze.co/content/images/size/w2000/2018/11/Hackathon-Coolblue-2017-def.jpg',
    },
];

const Folders = () => {
    const [openYear, setOpenYear] = useState(2024); 
    return (
    <div className="flex flex-col justify-center items-center">
        {/* Folder Selector */}
        <div className="mt-4">
        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">
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
        <div className="mt-6 w-full max-w-4xl">
        {folderData.map(
            (folder) =>
            openYear === folder.year && (
                <FoldersComp
                key={folder.year}
                year={folder.year}
                context={folder.context}
                image={folder.image}
                />
            )
        )}
        </div>
    </div>
);
};

export default Folders;
