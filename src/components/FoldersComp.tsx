import React from 'react';

interface FolderCompProps{
    year:number;
    context: string;
    image: string;
}
const FoldersComp: React.FC<FolderCompProps> = ({year, context, image}) => {
    return (
        <div className='flex flex-col justify-between items-center p-2'>
            <div className='flex flex-wrap gap-1 border-2 p-2 border-pink-900 rounded-lg'>
                <div className='p-2 rounded-lg'>
                    <h1 className='text-lg font-bold text-pink-500 lg:text-2xl'>{year}</h1>
                    <p className='text-sm'>{context}</p>
                </div>
                <div className='border-2 border-pink-900 p-2 rounded-lg'>
                    <img src={image} alt="img" className='rounded' />
                </div>
            </div>
        </div>
    )
}

export default FoldersComp